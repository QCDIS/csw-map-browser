import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    value: string;
}

export function CopyButton({ value, className, ...props }: CopyButtonProps) {
    const [hasCopied, setHasCopied] = useState(false);

    useEffect(() => {
        if (!hasCopied) return;
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }, [hasCopied]);

    return (
        <button
            className={cn(
                "relative z-20 inline-flex h-6 w-6 items-center justify-center rounded-md border bg-background text-sm font-medium transition-all hover:bg-muted focus:outline-none",
                className
            )}
            onClick={() => {
                navigator.clipboard.writeText(value);
                setHasCopied(true);
            }}
            {...props}
        >
            <span className="sr-only">Copy</span>
            {hasCopied ? (
                <CheckIcon className="h-3 w-3" />
            ) : (
                <CopyIcon className="h-3 w-3" />
            )}
        </button>
    );
}
