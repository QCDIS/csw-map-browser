import { CswClient } from "@/lib/csw/api";
import { WfsClient } from "@/lib/wfs/api";
import { LoaderFunctionArgs, useRouteLoaderData } from "react-router-dom";

export async function loader({ params }: LoaderFunctionArgs) {
    const record = await CswClient.getRecordById(
        params.endpoint!,
        params.recordId!
    );
    const service = record.distributionInfo?.transferOptions
        .map((o) => o.online)
        .flat()
        .find((o) => o.linkage === params.serviceId!)!;

    const capabilities = await WfsClient.getCapabilities(service.linkage);

    return {
        recordId: params.recordId!,
        record,
        service,
        wfs: {
            capabilities,
        },
    };
}

export function useServicePageData() {
    return useRouteLoaderData("service-page") as
        | Awaited<ReturnType<typeof loader>>
        | undefined;
}
