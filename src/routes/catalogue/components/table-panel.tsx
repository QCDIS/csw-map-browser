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
import { TopicCodeBadge } from "@/components/metadata/topiccode";
import { ProgressCodeBadge } from "@/components/metadata/progresscode-badge";
import { Badge } from "@/components/ui/badge";

const formatter = new Intl.DateTimeFormat();

const columns: ColumnDef<MetadataRecord>[] = [
    {
        id: "title",
        accessorFn: (row) => row.identificationInfo.citation.title,
        header: "Title",
    },
    {
        id: "status",
        accessorFn: (row) => row.identificationInfo.status,
        header: "Status",
        cell: (info) => (
            <>
                {info.getValue<string | undefined>() && (
                    <ProgressCodeBadge progressCode={info.getValue<string>()} />
                )}
            </>
        ),
    },
    {
        id: "citation-date",
        accessorFn: (row) => row.dateStamp,
        header: "Date",
        cell: (info) => {
            const value = info.getValue<Date | undefined>();
            return value && !isNaN(value.getTime())
                ? formatter.format(value)
                : undefined;
        },
    },
    {
        id: "topic",
        accessorFn: (row) => row.identificationInfo.topicCategory,
        header: "Categories",
        cell: (info) => (
            <div className="flex gap-1">
                {info.getValue<string[] | undefined>()?.map((t) => (
                    <TopicCodeBadge key={t} topicCode={t} variant="secondary" />
                ))}
            </div>
        ),
    },
    {
        id: "services",
        accessorFn: (row) =>
            [
                ...new Set(
                    row.distributionInfo?.transferOptions
                        .map((t) => t.online)
                        .flat()
                        .map((o) => o.protocol)
                        .filter((p) => p.toLowerCase().startsWith("ogc:"))
                        .map((p) => p.slice(4))
                ),
            ] ?? [],
        header: "Services",
        cell: (info) => (
            <div className="flex gap-1">
                {info.getValue<string[] | undefined>()?.map((t) => (
                    <Badge key={t}>{t}</Badge>
                ))}
            </div>
        ),
    },
];

export function TablePanel() {
    const records = useRecords();
    const { data, status, error } = useRecordsQuery();
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
                onRowMouseOver={(row) => {
                    if (records.size < 50) {
                        setHoveredRecords([row.fileIdentifier]);
                    }
                }}
                onRowMouseLeave={() =>
                    setHoveredRecords((current) =>
                        current.length === 0 ? current : []
                    )
                }
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
                        ? error?.toString()
                        : undefined
                }
            />
        </>
    );
}
