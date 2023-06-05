import { useQuery } from "@tanstack/react-query";
import { useServicePageData } from "./loader";
import { useServiceSelectedFeatureType } from "./store";
import { WfsClient } from "@/lib/wfs/api";
import { WfsCapabilities } from "@/lib/wfs/parsing/get-capabilities";

export function getOutputFormat(capabilities: WfsCapabilities) {
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

export function useServiceQuery() {
    const data = useServicePageData()!;
    const selectedFeatureType = useServiceSelectedFeatureType();

    return useQuery({
        queryKey: [
            "service",
            data.service.linkage,
            selectedFeatureType,
            data.wfs.capabilities,
        ],
        enabled: !!data,
        queryFn: async () => {
            if (!selectedFeatureType) return null;
            if (!data.wfs.capabilities) return null;

            const outputFormat = getOutputFormat(data.wfs.capabilities);
            if (!outputFormat)
                throw new Error("This service does not support geojson");

            return await WfsClient.getFeature(
                data.service.linkage,
                selectedFeatureType,
                outputFormat
            );
        },
        keepPreviousData: true,
        staleTime: Infinity,
        retry: false,
    });
}
