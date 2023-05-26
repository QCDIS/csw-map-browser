import { useEffect } from "react";
import { FilterPanel } from "./components/filter-panel";
import { MapPanel } from "./components/map-panel";
import { TablePanel } from "./components/table-panel";
import { useRecords } from "./query";
import { useCatalogueActions, useCatalogueSelectedRecordId } from "./store";

export function CataloguePage() {
    const records = useRecords();
    const selectedRecordId = useCatalogueSelectedRecordId();
    const { selectRecord } = useCatalogueActions();

    useEffect(() => {
        if (selectedRecordId && !records.has(selectedRecordId)) {
            selectRecord(undefined);
        }
    }, [records, selectRecord, selectedRecordId]);

    return (
        <>
            <div className="p-4 row-span-2">
                <FilterPanel />
            </div>
            <div>
                <MapPanel />
            </div>
            <div className="py-4 h-full">
                <TablePanel />
            </div>
        </>
    );
}
