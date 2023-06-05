import { useServicePageData } from "./loader";
import { useEffect } from "react";
import { useServiceActions } from "./store";
import { ServicePanel } from "./components/service-panel";
import { SelectedFeaturesPanel } from "./components/selected-features-panel";
import { MapPanel } from "./components/map-panel";

export function ServicePage() {
    const pageData = useServicePageData()!;

    const { setSelectedFeatureType } = useServiceActions();

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

    return (
        <div
            className="grid h-full overflow-hidden"
            style={{
                gridRow: "1 / 3",
                gridColumn: "1 / 3",
                gridTemplateColumns: "auto 25%",
                gridTemplateRows: "auto 35%",
            }}
        >
            <div>
                <MapPanel />
            </div>
            <div
                className="border-x h-full min-h-0"
                style={{
                    gridRow: "1 / 3",
                    gridColumn: "2 / 3",
                }}
            >
                <ServicePanel key={pageData.service.linkage} />
            </div>
            <div className="overflow-hidden w-full h-full">
                <SelectedFeaturesPanel />
            </div>
        </div>
    );
}
