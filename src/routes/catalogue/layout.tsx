import { Outlet, useLoaderData } from "react-router-dom";
import { Breadcrumb, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { useEffect } from "react";
import { loader } from "./loader";
import { useRecordPageData } from "./record/loader";
import { MetadataPanel } from "./components/metadata-panel";

export function CatalogueLayout() {
    const data = useLoaderData() as Awaited<ReturnType<typeof loader>>;
    const recordData = useRecordPageData();
    const selectedRecordId = recordData?.recordId;

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
                <div className="mr-[20%] ml-[20%] p-3">
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
                                {
                                    recordData.record.identificationInfo
                                        .citation.title
                                }
                            </BreadcrumbPage>
                        )}
                    </Breadcrumb>
                </div>
            </div>

            <div
                className="grid h-full min-h-0"
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
