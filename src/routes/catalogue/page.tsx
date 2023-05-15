import { useEffect } from "react";
import { FilterPanel } from "./components/filter-panel";
import { MapPanel } from "./components/map-panel";
import { MetadataPanel } from "./components/metadata-panel";
import { TablePanel } from "./components/table-panel";
import { useCatalogueActions } from "./store";
import { useCatalogueLayoutData } from "./layout";

export function CataloguePage() {
    const data = useCatalogueLayoutData();
    const { setRecords } = useCatalogueActions();

    useEffect(() => {
        setRecords(new Map());
    }, [data.csw.endpoint, setRecords]);

    return (
        <div
            className="grid h-full"
            style={{
                gridTemplateRows: "auto 33.333%",
                gridTemplateColumns: "20% auto 20%",
            }}
        >
            <div className="p-4 row-span-2">
                <FilterPanel />
            </div>
            <div>
                <MapPanel />
            </div>
            <div className="p-4 row-span-2">
                <MetadataPanel />
            </div>
            <div className="py-4 h-full">
                <TablePanel />
            </div>
        </div>
    );
}
