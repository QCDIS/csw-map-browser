import * as React from "react";

import { cn } from "@/lib/utils";
import { Table } from "@tanstack/react-table";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type PaginationProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const PaginationButton = ({
    children,
    className,
    ...props
}: PaginationProps) => {
    return (
        <button
            className={cn(
                "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-border hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
    table: Table<any>;
}

export const Pagination = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, table, ...props }, ref) => {
        const pagination = table.getState().pagination;
        const pageCount = table.getPageCount();

        return (
            <div
                className={cn(
                    "isolate inline-flex -space-x-px rounded-md shadow-sm",
                    className
                )}
                ref={ref}
                {...props}
            >
                <PaginationButton
                    onClick={() => table.previousPage()}
                    className="rounded-l-md"
                >
                    <ChevronLeftIcon className="h-5 w-5" />
                </PaginationButton>

                {pagination.pageIndex > 0 && (
                    <PaginationButton onClick={() => table.setPageIndex(0)}>
                        1
                    </PaginationButton>
                )}

                {pagination.pageIndex > 4 && (
                    <PaginationButton disabled className="pointer-events-none">
                        ...
                    </PaginationButton>
                )}

                {Array.from({ length: 3 })
                    .map((_, i) => pagination.pageIndex - 1 - (2 - i))
                    .filter((i) => i > 0)
                    .map((i) => (
                        <PaginationButton
                            onClick={() => table.setPageIndex(i)}
                            key={i}
                        >
                            {i + 1}
                        </PaginationButton>
                    ))}

                <PaginationButton className="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground">
                    {pagination.pageIndex + 1}
                </PaginationButton>

                {Array.from({ length: 3 })
                    .map((_, i) => pagination.pageIndex + 1 + i)
                    .filter((i) => i > 0 && i < pageCount - 1)
                    .map((i) => (
                        <PaginationButton
                            onClick={() => table.setPageIndex(i)}
                            key={i}
                        >
                            {i + 1}
                        </PaginationButton>
                    ))}

                {pagination.pageIndex < pageCount - 5 && (
                    <PaginationButton disabled className="pointer-events-none">
                        ...
                    </PaginationButton>
                )}

                {pagination.pageIndex < pageCount - 1 && (
                    <PaginationButton
                        onClick={() => table.setPageIndex(pageCount - 1)}
                    >
                        {pageCount}
                    </PaginationButton>
                )}

                <PaginationButton
                    onClick={() => table.nextPage()}
                    className="rounded-r-md"
                >
                    <ChevronRightIcon className="h-5 w-5" />
                </PaginationButton>
            </div>
        );
    }
);
