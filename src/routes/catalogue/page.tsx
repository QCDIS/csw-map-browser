import { GeoMap } from "@/components/geomap";
import { FilterPanel } from "./components/filter-panel";
import { MetadataPanel } from "./components/metadata-panel";
import { TablePanel } from "./components/table-panel";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import MapEvent from "ol/MapEvent";
import { useCatalogueLayoutData } from "./layout";
import { CswClient } from "@/lib/csw/api";
import { useCatalogueActions, useCatalogueRecords } from "./store";
import { cn, coordsTo3857 } from "@/lib/utils";
import { MapBrowserEvent } from "ol";

export function CataloguePage() {
    const data = useCatalogueLayoutData();

    const records = useCatalogueRecords();
    const { setRecords } = useCatalogueActions();

    const abortControllerRef = useRef<AbortController | null>(null);

    const onMapMoveEnd = useCallback(
        async (e: MapEvent) => {
            if (records.size) return;
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }

            const abortController = new AbortController();
            abortControllerRef.current = abortController;
            try {
                const newRecords = await CswClient.getRecords(
                    data.csw.endpoint,
                    {
                        signal: abortController.signal,
                    }
                );
                abortControllerRef.current = null;
                setRecords(
                    new Map(
                        newRecords.searchResults.map(
                            (r) => [r.fileIdentifier, r] as const
                        )
                    )
                );
            } catch (err: any) {
                if (err.name === "AbortError") return;
                throw err;
            }
        },
        [data.csw.endpoint, setRecords, records]
    );

    const [hoveredRecords, setHoveredRecords] = useState<string[]>([]);
    const onMapPointerMove = useCallback(async (e: MapBrowserEvent<any>) => {
        const features = await e.map.getAllLayers()[1].getFeatures(e.pixel!);

        setHoveredRecords(features.map((f) => f.getProperties().id as string));
    }, []);

    useEffect(() => {
        setRecords(new Map());
    }, [data.csw.endpoint, setRecords]);

    const boundaryBoxGeoJson = useMemo(() => {
        return {
            type: "FeatureCollection",
            crs: {
                type: "name",
                properties: {
                    name: "EPSG:3857",
                },
            },
            features: [...records.values()]
                .map((r) => {
                    const boundingBox = r.identificationInfo.extent;
                    if (!boundingBox) return null;

                    return {
                        type: "Feature",
                        geometry: {
                            type: "Polygon",
                            coordinates: [
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
                            ],
                        },
                        properties: {
                            id: r.fileIdentifier,
                        },
                    };
                })
                .filter((f) => f !== null),
        };
    }, [records]);

    return (
        <div
            className="grid h-full"
            style={{
                gridTemplateRows: "auto 30%",
                gridTemplateColumns: "20% auto 20%",
            }}
        >
            <div className="p-4 row-span-2">
                <FilterPanel />
            </div>
            <div className={cn({ "cursor-pointer": hoveredRecords.length })}>
                <GeoMap
                    onMoveEnd={onMapMoveEnd}
                    onPointerMove={onMapPointerMove}
                    geoJson={boundaryBoxGeoJson}
                />
            </div>
            <div className="p-4 row-span-2">
                <MetadataPanel />
            </div>
            <div className="p-4">
                <TablePanel />
            </div>
        </div>
    );
}
