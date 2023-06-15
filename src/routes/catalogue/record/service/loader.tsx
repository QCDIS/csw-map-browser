import { CswClient } from "@/lib/csw/api";
import { WfsClient } from "@/lib/wfs/api";
import { WmsClient } from "@/lib/wms/api";
import { LoaderFunctionArgs, useRouteLoaderData } from "react-router-dom";

export async function loader({ params }: LoaderFunctionArgs) {
    const record = await CswClient.getRecordById(
        params.endpoint!,
        params.recordId!
    );
    console.log(params, record.distributionInfo?.transferOptions);
    const service = record.distributionInfo?.transferOptions
        .map((o) => o.online)
        .flat()
        .find(
            (o) =>
                o.linkage === params.serviceLinkage! &&
                o.name === params.serviceName! &&
                o.protocol === params.serviceProtocol!
        );
    if (!service) throw new Error("Service not found");

    const isWfs = service.protocol.startsWith("OGC:WFS");

    const wfsCapabilities = isWfs
        ? await WfsClient.getCapabilities(service.linkage)
        : undefined;
    const wmsCapabilities = !isWfs
        ? await WmsClient.getCapabilities(service.linkage)
        : undefined;

    return {
        recordId: params.recordId!,
        record,
        service,
        wfs: {
            capabilities: wfsCapabilities,
        },
        wms: {
            capabilities: wmsCapabilities,
        },
        type: isWfs ? "wfs" : "wms",
    };
}

export function useServicePageData() {
    return useRouteLoaderData("service-page") as
        | Awaited<ReturnType<typeof loader>>
        | undefined;
}
