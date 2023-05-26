import { GeoMap } from "@/components/geomap/geomap";
import { Layer } from "@/components/geomap/layer";
import { useServicePageData } from "./loader";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { useEffect, useMemo } from "react";
import { bbox as bboxStrategy } from "ol/loadingstrategy";
import { DEFAULT_STYLE } from "@/lib/constants";
import { useServiceActions, useServiceSelectedFeatureType } from "./store";
import { ServicePanel } from "./components/service-panel";
import { CswCapabilities } from "@/lib/wfs/parsing/get-capabilities";

function getOutputFormat(capabilities: CswCapabilities) {
    console.log(capabilities);
    const getCapabilitiesMeta =
        capabilities.operationsMetadata?.operations.find(
            (op) => op.name === "GetFeature"
        );

    const outputFormat = getCapabilitiesMeta?.parameters.find(
        (param) => param.name === "outputFormat"
    );

    return outputFormat?.allowedValues.find((v) => {
        v = v.toLowerCase();
        return v.startsWith("application/json") || v.startsWith("geojson");
    });
}

export function ServicePage() {
    const pageData = useServicePageData()!;

    const selectedFeatureType = useServiceSelectedFeatureType();
    const { setSelectedFeatureType } = useServiceActions();

    useEffect(() => {
        const serviceFeature =
            pageData.wfs.capabilities.featureTypeList.find(
                (feature) => feature.name === pageData.service.name
            ) ?? pageData.wfs.capabilities.featureTypeList.at(0);

        setSelectedFeatureType(serviceFeature?.name);
    }, [
        pageData.service.name,
        pageData.wfs.capabilities.featureTypeList,
        setSelectedFeatureType,
    ]);

    const layer = useMemo(() => {
        if (!selectedFeatureType) {
            return undefined;
        }

        const url = new URL(pageData.service.linkage);
        url.search = "";
        url.searchParams.set("service", "WFS");
        url.searchParams.set("version", "2.0.0");
        url.searchParams.set("request", "GetFeature");
        url.searchParams.set("typeNames", selectedFeatureType);
        url.searchParams.set(
            "outputFormat",
            getOutputFormat(pageData.wfs.capabilities) ?? "application/json"
        );
        url.searchParams.set("srsName", "epsg:3857");

        return new VectorLayer({
            source: new VectorSource({
                format: new GeoJSON(),
                url: (extents) => {
                    url.searchParams.set(
                        "bbox",
                        extents.join(",") + ",EPSG:3857"
                    );
                    return url.toString();
                },
                strategy: bboxStrategy,
            }),
            zIndex: 100,
            style: DEFAULT_STYLE,
        });
    }, [
        pageData.service.linkage,
        pageData.wfs.capabilities,
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
            <GeoMap>
                <Layer layer={layer} />
            </GeoMap>
            <div className="border-x h-full min-h-0">
                <ServicePanel />
            </div>
        </div>
    );
}
