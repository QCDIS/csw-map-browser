import { CswClient } from "@/lib/csw/api";
import { LoaderFunctionArgs, useRouteLoaderData } from "react-router-dom";

export async function loader({ params }: LoaderFunctionArgs) {
    const endpoint = decodeURIComponent(params.endpoint!);

    const capabilities = await CswClient.getCapabilities(endpoint);

    return {
        csw: {
            endpoint,
            capabilities,
        },
    };
}

export function useCatalogueLayoutData() {
    return useRouteLoaderData("catalogue-layout") as Awaited<
        ReturnType<typeof loader>
    >;
}
