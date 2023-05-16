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
import { useRecords, useRecordsQuery } from "../query";

const columns: ColumnDef<MetadataRecord>[] = [
    {
        accessorFn: (row) => row.identificationInfo.citation.title,
        header: "Title",
    },
];

export function TablePanel() {
    const records = useRecords();
    const { data, status } = useRecordsQuery();
    const selectedRecordId = useCatalogueSelectedRecordId();
    const hoveredRecords = useCatalogueHoveredRecords();
    const pagination = useCataloguePagination();
    const { selectRecord, setHoveredRecords, setPagination } =
        useCatalogueActions();

    return (
        <>
            <DataTable
                columns={columns}
                data={[...records.values()]}
                pagination={pagination}
                totalDataLength={data?.totalRecords}
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
                noResults={
                    status === "loading"
                        ? "Loading..."
                        : status === "error"
                        ? "Error"
                        : undefined
                }
            />
        </>
    );
}
