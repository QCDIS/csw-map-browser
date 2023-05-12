import { Map } from "@/components/map";
import { FilterPanel } from "./filter-panel";
import { MetadataPanel } from "./metadata-panel";
import { TablePanel } from "./table-panel";
import { useCallback, useRef, useState } from "react";
import MapEvent from "ol/MapEvent";
import { useCatalogueLayoutData } from "./layout";
import { CswClient } from "@/lib/csw/api";

export function CataloguePage() {
    const data = useCatalogueLayoutData();

    const [records, setRecords] = useState<any>([]);
    const abortControllerRef = useRef<AbortController | null>(null);

    const onMapMoveEnd = useCallback(
        async (e: MapEvent) => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }

            const abortController = new AbortController();
            abortControllerRef.current = abortController;
            try {
                const records = await CswClient.getRecords(data.csw.endpoint, {
                    signal: abortController.signal,
                });
                abortControllerRef.current = null;
                setRecords(records);
                console.log(records);
            } catch (err: any) {
                if (err.name === "AbortError") return;
                throw err;
            }
        },
        [data.csw.endpoint]
    );

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
                <Map onMoveEnd={onMapMoveEnd} />
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
