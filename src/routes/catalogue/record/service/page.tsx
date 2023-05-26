import { GeoMap } from "@/components/geomap/geomap";
import { Layer } from "@/components/geomap/layer";
import { useServicePageData } from "./loader";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { useEffect, useMemo } from "react";
import { DEFAULT_STYLE } from "@/lib/constants";
import { useServiceActions, useServiceSelectedFeatureType } from "./store";
import { ServicePanel } from "./components/service-panel";
import {
    useCatalogueActions,
    useCatalogueCenter,
    useCatalogueZoom,
} from "../../store";
import { useServiceQuery } from "./query";
import TileWMS from "ol/source/TileWMS";
import TileLayer from "ol/layer/Tile";

export function ServicePage() {
    const pageData = useServicePageData()!;

    const zoom = useCatalogueZoom();
    const center = useCatalogueCenter();
    const { setZoom, setCenter } = useCatalogueActions();

    const selectedFeatureType = useServiceSelectedFeatureType();
    const { setSelectedFeatureType } = useServiceActions();

    const query = useServiceQuery();

    useEffect(() => {
        if (pageData.wfs.capabilities) {
            const serviceFeature =
                pageData.wfs.capabilities.featureTypeList.find(
                    (feature) => feature.name === pageData.service.name
                ) ?? pageData.wfs.capabilities.featureTypeList.at(0);

            setSelectedFeatureType(serviceFeature?.name);
        } else if (pageData.wms.capabilities) {
            const serviceLayer =
                pageData.wms.capabilities.capability.layers.find(
                    (feature) => feature.name === pageData.service.name
                ) ?? pageData.wms.capabilities.capability.layers.at(0);

            setSelectedFeatureType(serviceLayer?.name);
        }
    }, [
        pageData.service.name,
        pageData.wfs.capabilities,
        pageData.wms.capabilities,
        setSelectedFeatureType,
    ]);

    const layer = useMemo(() => {
        if (pageData.type === "wfs") {
            if (!query.data) return undefined;
            const features = new GeoJSON().readFeatures(query.data);

            return new VectorLayer({
                source: new VectorSource({
                    features,
                }),
                zIndex: 100,
                style: DEFAULT_STYLE,
            });
        } else if (pageData.type === "wms") {
            const url = new URL(pageData.service.linkage);
            url.search = "";
            return new TileLayer({
                source: new TileWMS({
                    url: url.toString(),
                    params: {
                        LAYERS: selectedFeatureType,
                        TILED: true,
                    },
                }),
            });
        }
    }, [
        pageData.service.linkage,
        pageData.type,
        query.data,
        selectedFeatureType,
    ]);

    return (
        <div
            className="grid h-full overflow-hidden"
            style={{
                gridRow: "1 / 3",
                gridColumn: "1 / 3",
                gridTemplateColumns: "auto 25%",
            }}
        >
            <GeoMap
                zoom={zoom}
                setZoom={setZoom}
                center={center}
                setCenter={setCenter}
            >
                <Layer layer={layer} />
            </GeoMap>
            <div className="border-x h-full min-h-0">
                <ServicePanel key={pageData.service.linkage} />
            </div>
        </div>
    );
}
