"use client";

import {
    ColumnDef,
    PaginationState,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Pagination } from "./pagination";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "./select";

interface DataTableProps<TData, TValue>
    extends React.HTMLAttributes<HTMLTableElement> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    onRowClick?: (row: TData) => void;
    onRowMouseOver?: (row: TData) => void;
    onRowMouseLeave?: (row: TData) => void;
    rowClassName?: (row: TData) => string;
    pagination: PaginationState;
    setPagination: (pagination: PaginationState) => void;
    totalDataLength?: number;
    noResults?: React.ReactNode;
}

export function DataTable<TData, TValue>({
    columns,
    data,
    onRowClick,
    onRowMouseOver,
    onRowMouseLeave,
    rowClassName,
    pagination,
    setPagination,
    totalDataLength,
    noResults,
    ...props
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        state: {
            pagination,
        },
        pageCount: totalDataLength
            ? Math.ceil(totalDataLength / pagination.pageSize)
            : undefined,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: (updater) =>
            setPagination(
                typeof updater === "function" ? updater(pagination) : updater
            ),
        manualPagination: true,
    });

    return (
        <div className="rounded-md border max-h-full overflow-auto">
            <Table {...props}>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead
                                        key={header.id}
                                        className="sticky top-0 z-10"
                                        style={{
                                            boxShadow:
                                                "inset 0 -1px 0 hsl(var(--border))",
                                        }}
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext()
                                              )}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                                onClick={
                                    onRowClick
                                        ? () => onRowClick(row.original)
                                        : undefined
                                }
                                onMouseOver={
                                    onRowMouseOver
                                        ? () => onRowMouseOver(row.original)
                                        : undefined
                                }
                                onMouseLeave={
                                    onRowMouseLeave
                                        ? () => onRowMouseLeave(row.original)
                                        : undefined
                                }
                                className={rowClassName?.(row.original)}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center font-semibold"
                            >
                                {noResults ?? "No results."}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow className="border-b-0">
                        <TableCell
                            colSpan={columns.length}
                            className="sticky bottom-0 bg-white"
                            style={{
                                boxShadow: "inset 0 1px 0 hsl(var(--border))",
                            }}
                        >
                            <div className="flex justify-between items-center">
                                <span
                                    className={cn("grow-[1] w-full", {
                                        invisible: data.length === 0,
                                    })}
                                >
                                    Showing{" "}
                                    <span className="font-semibold">
                                        {table.getState().pagination.pageIndex *
                                            table.getState().pagination
                                                .pageSize +
                                            1}
                                    </span>{" "}
                                    to{" "}
                                    <span className="font-semibold">
                                        {Math.min(
                                            (table.getState().pagination
                                                .pageIndex +
                                                1) *
                                                table.getState().pagination
                                                    .pageSize,
                                            totalDataLength ?? data.length
                                        )}
                                    </span>{" "}
                                    of{" "}
                                    <span className="font-semibold">
                                        {totalDataLength ?? data.length}
                                    </span>{" "}
                                    results
                                </span>
                                <div className="grow-[1] w-full flex justify-center">
                                    <Pagination table={table} />
                                </div>
                                <div className="grow-[1] w-full flex justify-end">
                                    <Select
                                        value={table
                                            .getState()
                                            .pagination.pageSize.toString()}
                                        onValueChange={(v) =>
                                            table.setPageSize(Number(v))
                                        }
                                    >
                                        <SelectTrigger className="w-[80px]">
                                            <SelectValue
                                                placeholder={
                                                    table.getState().pagination
                                                        .pageSize
                                                }
                                            />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>
                                                    Rows per page
                                                </SelectLabel>
                                                {[10, 20, 50, 100].map(
                                                    (pageSize) => (
                                                        <SelectItem
                                                            key={pageSize}
                                                            value={pageSize.toString()}
                                                        >
                                                            {pageSize}
                                                        </SelectItem>
                                                    )
                                                )}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
}
