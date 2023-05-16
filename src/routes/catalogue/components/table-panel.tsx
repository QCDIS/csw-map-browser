import { MetadataRecord } from "@/lib/csw/parsing/md-metadata";
import { ColumnDef } from "@tanstack/react-table";
import {
    useCatalogueActions,
    useCatalogueHoveredRecords,
    useCataloguePagination,
    useCatalogueSelectedRecordId,
} from "../store";
import { DataTable } from "@/components/ui/datatable";
import { cn } from "@/lib/utils";
import { useRecords } from "../query";

const columns: ColumnDef<MetadataRecord>[] = [
    {
        accessorFn: (row) => row.identificationInfo.citation.title,
        header: "Title",
    },
];

export function TablePanel() {
    const records = useRecords();
    const selectedRecordId = useCatalogueSelectedRecordId();
    const hoveredRecords = useCatalogueHoveredRecords();
    const pagination = useCataloguePagination();
    const { selectRecord, setHoveredRecords, setPagination } =
        useCatalogueActions();

    const data = [...records.values()];

    return (
        <>
            <DataTable
                columns={columns}
                data={data}
                pagination={pagination}
                pageCount={10}
                setPagination={setPagination}
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
