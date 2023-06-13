import { Outlet, useLoaderData } from "react-router-dom";
import { Breadcrumb, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { useEffect } from "react";
import { loader } from "./loader";
import { MetadataPanel } from "./components/metadata-panel";
import { useServicePageData } from "./record/service/loader";

export function CatalogueLayout() {
    const data = useLoaderData() as Awaited<ReturnType<typeof loader>>;
    const serviceData = useServicePageData();
    const selectedRecordId = serviceData?.recordId;

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
        <div className="h-screen flex flex-col overflow-hidden">
            <div className="w-full border-b shadow-sm">
                <div className="mr-[20%] ml-[20%] p-3">
                    <Breadcrumb>
                        <BreadcrumbPage
                            href={`/catalogue/${encodeURIComponent(
                                data.csw.endpoint
                            )}`}
                        >
                            {data.csw.capabilities.serviceIdentification.title}
                        </BreadcrumbPage>

                        {serviceData && (
                            <>
                                <BreadcrumbPage disabled>
                                    {
                                        serviceData.record.identificationInfo
                                            .citation.title
                                    }
                                </BreadcrumbPage>
                                <BreadcrumbPage
                                    href={`/catalogue/${encodeURIComponent(
                                        data.csw.endpoint
                                    )}/record/${encodeURIComponent(
                                        serviceData.recordId
                                    )}/service/${encodeURIComponent(
                                        serviceData.service.linkage
                                    )}`}
                                >
                                    {serviceData.service.name ||
                                        serviceData.service.description ||
                                        serviceData.service.linkage}
                                </BreadcrumbPage>
                            </>
                        )}
                    </Breadcrumb>
                </div>
            </div>

            <div
                className="grid h-full min-h-0 max-w-[100vw] w-full"
                style={{
                    gridTemplateRows: "auto 40%",
                    gridTemplateColumns: "20% auto 20%",
                }}
            >
                <Outlet />
                <div
                    className="min-h-0"
                    style={{
                        gridRow: "1 / span 2",
                        gridColumn: "3 / span 1",
                    }}
                >
                    <MetadataPanel key={selectedRecordId} />
                </div>
            </div>
        </div>
    );
}
