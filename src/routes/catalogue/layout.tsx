import {
    LoaderFunctionArgs,
    Outlet,
    useLoaderData,
    useRouteLoaderData,
} from "react-router-dom";
import { Breadcrumb, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { CswClient } from "@/lib/csw/api";
import { useRecordPageData } from "./record/page";
import { useEffect } from "react";

export function CatalogueLayout() {
    const data = useLoaderData() as Awaited<ReturnType<typeof loader>>;
    const recordData = useRecordPageData();

    useEffect(() => {
        const recentCatalogues = JSON.parse(
            localStorage.getItem("recentCatalogues") || "[]"
        ) as { endpoint: string; name: string }[];

        const newRecentCatalogues = [
            {
                endpoint: data.csw.endpoint,
                name:
                    data.csw.capabilities.serviceIdentification.title ??
                    data.csw.endpoint,
            },
            ...recentCatalogues.filter((c) => c.endpoint !== data.csw.endpoint),
        ].slice(0, 5);

        localStorage.setItem(
            "recentCatalogues",
            JSON.stringify(newRecentCatalogues)
        );
    }, [data.csw.capabilities.serviceIdentification.title, data.csw.endpoint]);

    return (
        <div className="h-screen flex flex-col">
            <div className="w-full border-b shadow-sm">
                <div className="mr-[20%] ml-[20%] p-4">
                    <Breadcrumb>
                        <BreadcrumbPage
                            href={`/catalogue/${encodeURIComponent(
                                data.csw.endpoint
                            )}`}
                        >
                            {data.csw.capabilities.serviceIdentification.title}
                        </BreadcrumbPage>

                        {recordData && (
                            <BreadcrumbPage
                                href={`/catalogue/${encodeURIComponent(
                                    data.csw.endpoint
                                )}/record/${encodeURIComponent(
                                    recordData.recordId
                                )}`}
                            >
                                {recordData.recordId}
                            </BreadcrumbPage>
                        )}
                    </Breadcrumb>
                </div>
            </div>
            <Outlet />
        </div>
    );
}
CatalogueLayout.loader = loader;

async function loader({ params }: LoaderFunctionArgs) {
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
