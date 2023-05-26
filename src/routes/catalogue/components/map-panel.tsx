import { GeoMap } from "@/components/geomap/geomap";
import { cn, coordsFrom3857, coordsTo3857 } from "@/lib/utils";
import { Loader2Icon, AlertTriangle } from "lucide-react";
import { MapBrowserEvent, MapEvent } from "ol";
import { GeoJSON } from "ol/format";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { useCallback, useEffect, useMemo } from "react";
import {
    useCatalogueActions,
    useCatalogueCenter,
    useCatalogueHoveredRecords,
    useCataloguePagination,
    useCatalogueSelectedRecordId,
    useCatalogueZoom,
} from "../store";
import { Layer } from "@/components/geomap/layer";
import { MetadataRecord } from "@/lib/csw/parsing/md-metadata";
import { useRecords, useRecordsQuery } from "../query";
import { Geometry } from "ol/geom";
import { getArea } from "ol/sphere";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { DEFAULT_STYLE, SELECTED_STYLE, HOVERED_STYLE } from "@/lib/constants";

function getGeoJsonFromRecords(records: MetadataRecord[]) {
    return {
        type: "FeatureCollection",
        crs: {
            type: "name",
            properties: {
                name: "EPSG:3857",
            },
        },
        features: records
            .map((r) => {
                const boundingBox = r.identificationInfo.extent;
                if (!boundingBox) return null;

                let geometry: any = {
                    type: "MultiPolygon",
                    coordinates: boundingBox.map((boundingBox) => [
                        (
                            [
                                [
                                    boundingBox.westBoundLongitude,
                                    boundingBox.southBoundLatitude,
                                ],
                                [
                                    boundingBox.eastBoundLongitude,
                                    boundingBox.southBoundLatitude,
                                ],
                                [
                                    boundingBox.eastBoundLongitude,
                                    boundingBox.northBoundLatitude,
                                ],
                                [
                                    boundingBox.westBoundLongitude,
                                    boundingBox.northBoundLatitude,
                                ],
                                [
                                    boundingBox.westBoundLongitude,
                                    boundingBox.southBoundLatitude,
                                ],
                            ] as const
                        ).map((coords) => coordsTo3857(coords)),
                    ]),
                };

                if (
                    boundingBox.length === 1 &&
                    boundingBox[0].eastBoundLongitude ===
                        boundingBox[0].westBoundLongitude &&
                    boundingBox[0].northBoundLatitude ===
                        boundingBox[0].southBoundLatitude
                ) {
                    geometry = {
                        type: "Point",
                        coordinates: coordsTo3857([
                            boundingBox[0].westBoundLongitude,
                            boundingBox[0].southBoundLatitude,
                        ]),
                    };
                }

                return {
                    type: "Feature",
                    geometry,
                    properties: {
                        id: r.fileIdentifier,
                    },
                };
            })
            .filter((f) => f !== null),
    };
}

export function MapPanel() {
    const { status, error, isPreviousData } = useRecordsQuery();
    const records = useRecords();

    const hoveredRecords = useCatalogueHoveredRecords();
    const selectedRecordId = useCatalogueSelectedRecordId();
    const pagination = useCataloguePagination();
    const zoom = useCatalogueZoom();
    const center = useCatalogueCenter();
    const {
        setHoveredRecords,
        selectRecord,
        setMapBbox,
        setPagination,
        setZoom,
        setCenter,
    } = useCatalogueActions();

    const onMapMoveEnd = useCallback(
        async (e: MapEvent) => {
            const bbox = e.map.getView().calculateExtent();
            const minCoords = coordsFrom3857([bbox[0], bbox[1]]);
            const maxCoords = coordsFrom3857([bbox[2], bbox[3]]);

            setMapBbox([minCoords, maxCoords]);
            setPagination({ ...pagination, pageIndex: 0 });
        },
        [pagination, setMapBbox, setPagination]
    );

    const onMapPointerMove = useCallback(
        (e: MapBrowserEvent<any>) => {
            const features = e.map.getFeaturesAtPixel(e.pixel!);
            features.sort((a, b) => {
                const aArea = getArea(a.getGeometry() as Geometry);
                const bArea = getArea(b.getGeometry() as Geometry);
                if (aArea > bArea) return -1;
                if (aArea < bArea) return 1;
                return 0;
            });
            features.reverse();

            setHoveredRecords((current: string[]) =>
                current.length === 0 && features.length == 0
                    ? current
                    : features
                          .map((f) => f.getProperties().id as string)
                          .slice(0, 1)
            );
        },
        [setHoveredRecords]
    );

    const boundaryBoxGeoJson = useMemo(
        () => getGeoJsonFromRecords([...records.values()]),
        [records]
    );

    const boundaryBoxLayer = useMemo(() => {
        return new VectorLayer({
            source: new VectorSource({
                features: new GeoJSON().readFeatures(boundaryBoxGeoJson),
            }),
            style: DEFAULT_STYLE,
        });
    }, [boundaryBoxGeoJson]);

    useEffect(() => {
        if (!selectedRecordId) return;

        const feature = boundaryBoxLayer
            .getSource()!
            .getFeatures()
            .find((f) => f.getProperties().id === selectedRecordId);
        if (!feature) return;

        feature.setStyle(SELECTED_STYLE);

        return () => {
            feature.setStyle(DEFAULT_STYLE);
        };
    }, [boundaryBoxLayer, selectedRecordId]);

    useEffect(() => {
        const featureById = new Map(
            boundaryBoxLayer
                .getSource()!
                .getFeatures()
                .map((f) => [f.getProperties().id, f] as const)
        );
        for (const record of hoveredRecords) {
            const feature = featureById.get(record);
            if (!feature) continue;

            if (feature.getStyle() === SELECTED_STYLE) continue;
            feature.setStyle(HOVERED_STYLE);
        }

        return () => {
            for (const record of hoveredRecords) {
                const feature = featureById.get(record);
                if (!feature) continue;

                if (feature.getStyle() === SELECTED_STYLE) continue;
                feature.setStyle(DEFAULT_STYLE);
            }
        };
    }, [boundaryBoxLayer, hoveredRecords]);

    return (
        <div
            className={cn(
                "h-full w-full relative overflow-hidden rounded-b-md",
                hoveredRecords.length > 0 && "cursor-pointer"
            )}
        >
            <GeoMap
                onMoveEnd={onMapMoveEnd}
                onPointerMove={onMapPointerMove}
                onClick={() => selectRecord(hoveredRecords.at(0))}
                zoom={zoom}
                setZoom={setZoom}
                center={center}
                setCenter={setCenter}
            >
                <Layer layer={boundaryBoxLayer} />
                <div className="absolute right-2 top-2 z-10">
                    {status === "loading" || isPreviousData ? (
                        <Loader2Icon className="h-7 w-7 animate-spin text-primary" />
                    ) : status === "error" ? (
                        <Tooltip>
                            <TooltipTrigger>
                                <AlertTriangle className="h-7 w-7 text-destructive" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <span className="text-destructive">
                                    {(error as Error).message}
                                </span>
                            </TooltipContent>
                        </Tooltip>
                    ) : null}
                </div>
            </GeoMap>
        </div>
    );
}
