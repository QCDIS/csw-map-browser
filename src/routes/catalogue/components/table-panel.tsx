import { MetadataRecord } from "@/lib/csw/parsing/md-metadata";
import { ColumnDef } from "@tanstack/react-table";
import {
    useCatalogueActions,
    useCatalogueHoveredRecords,
    useCatalogueRecords,
    useCatalogueSelectedRecordId,
} from "../store";
import { DataTable } from "@/components/ui/datatable";
import { cn } from "@/lib/utils";

const columns: ColumnDef<MetadataRecord>[] = [
    {
        accessorFn: (row) => row.identificationInfo.citation.title,
        header: "Title",
    },
];

export function TablePanel() {
    const records = useCatalogueRecords();
    const selectedRecordId = useCatalogueSelectedRecordId();
    const hoveredRecords = useCatalogueHoveredRecords();
    const { selectRecord, setHoveredRecords } = useCatalogueActions();

    const data = [...records.values()];

    return (
        <>
            <DataTable
                columns={columns}
                data={data}
                onRowClick={(row) => selectRecord(row.fileIdentifier)}
                onRowMouseOver={(row) =>
                    setHoveredRecords([row.fileIdentifier])
                }
                onRowMouseLeave={() => setHoveredRecords([])}
                rowClassName={(row) =>
                    cn({
                        "font-bold !bg-muted":
                            row.fileIdentifier === selectedRecordId,
                        "bg-muted": hoveredRecords.includes(row.fileIdentifier),
                    })
                }
            />
        </>
    );
}
