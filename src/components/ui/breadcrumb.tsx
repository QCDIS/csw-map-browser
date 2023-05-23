import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router-dom";

type BreadcrumbProps = React.HTMLAttributes<HTMLDivElement>;

export function Breadcrumb({ className, ...props }: BreadcrumbProps) {
    return (
        <div className={cn("flex truncate", className)} {...props}>
            <ol role="list" className="flex items-center space-x-4 truncate">
                <li>
                    <div>
                        <Link
                            to="/"
                            className="text-sm font-medium text-gray-500 hover:text-gray-700 truncate"
                        >
                            Home
                        </Link>
                    </div>
                </li>
                {props.children}
            </ol>
        </div>
    );
}

export function BreadcrumbPage({
    className,
    href,
    ...props
}: React.HTMLAttributes<HTMLLIElement> & { href: string }) {
    return (
        <li className={className} {...props}>
            <div className="flex items-center">
                <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <Link
                    to={href}
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 truncate"
                >
                    {props.children}
                </Link>
            </div>
        </li>
    );
}
