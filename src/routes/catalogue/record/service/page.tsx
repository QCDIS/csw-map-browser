import { GeoMap } from "@/components/geomap/geomap";
import { Layer } from "@/components/geomap/layer";
import { useServicePageData } from "./loader";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GML } from "ol/format";
import { useMemo } from "react";
import { bbox as bboxStrategy } from "ol/loadingstrategy";

export function ServicePage() {
    const pageData = useServicePageData()!;

    const layer = useMemo(() => {
        const url = new URL(pageData.service.linkage);
        url.searchParams.set("service", "WFS");
        url.searchParams.set("version", "2.0.0");
        url.searchParams.set("request", "GetFeature");
        url.searchParams.set("typeNames", "geonode:geonode_1");
        url.searchParams.set("outputFormat", "application/json");
        // url.searchParams.set("srsName", "epsg:3857");

        return new VectorLayer({
            source: new VectorSource({
                format: new GML(),
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
        });
    }, [pageData.service.linkage]);

    return (
        <div
            style={{
                gridRow: "1 / 3",
                gridColumn: "1 / 3",
            }}
        >
            <GeoMap>
                <Layer layer={layer} />
            </GeoMap>
        </div>
    );
}
