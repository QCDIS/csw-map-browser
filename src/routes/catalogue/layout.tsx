import {
    LoaderFunctionArgs,
    Outlet,
    useLoaderData,
    useRouteLoaderData,
} from "react-router-dom";
import { Breadcrumb, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { CswClient } from "@/lib/csw/api";
import RecordPage from "./record/page";

export function CatalogueLayout() {
    const data = useLoaderData() as Awaited<ReturnType<typeof loader>>;
    const recordData = useRouteLoaderData("record-page") as Awaited<
        ReturnType<typeof RecordPage.loader>
    >;
    console.log(recordData);
    return (
        <div className="h-screen flex flex-col">
            <div className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur">
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
