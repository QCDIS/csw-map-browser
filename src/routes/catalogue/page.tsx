import { useRouteLoaderData } from "react-router-dom";
import { loader } from "./layout";
import { Map } from "@/components/map";
import { FilterPanel } from "./filter-panel";
import { MetadataPanel } from "./metadata-panel";
import { TablePanel } from "./table-panel";

export function CataloguePage() {
    const data = useRouteLoaderData("catalogue-layout") as Awaited<
        ReturnType<typeof loader>
    >;
    return (
        <div
            className="grid h-full"
            style={{
                gridTemplateRows: "auto 30%",
                gridTemplateColumns: "20% auto 20%",
            }}
        >
            <div className="p-4 row-span-2">
                <FilterPanel />
            </div>
            <div>
                <Map />
            </div>
            <div className="p-4 row-span-2">
                <MetadataPanel />
            </div>
            <div className="p-4">
                <TablePanel />
            </div>
        </div>
    );
}
