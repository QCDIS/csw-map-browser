import { HTMLAttributes, useState } from "react";
import { useServicePageData } from "../loader";
import { cn, truncate } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { DatabaseIcon } from "lucide-react";
import { FeatureType } from "@/lib/wfs/parsing/get-capabilities";
import { useServiceActions, useServiceSelectedFeatureType } from "../store";

const KEYWORD_LIMIT = 5;

export function ServicePanel() {
    const serviceData = useServicePageData()!;
    const { capabilities } = serviceData.wfs;

    const selectedFeatureType = useServiceSelectedFeatureType();
    const { setSelectedFeatureType } = useServiceActions();

    const [expandAbstract, setExpandAbstract] = useState(false);
    const [expandKeywords, setExpandKeywords] = useState(false);

    return (
        <div className="p-4 overflow-y-auto h-full">
            <h2 className="text-2xl font-bold tracking-tight">
                {capabilities.serviceIdentification.title}
            </h2>
            <div className="flex justify-between">
                <div className="text-sm flex items-center text-muted-foreground gap-1 w-full">
                    <DatabaseIcon className="w-4 h-4" />
                    <span>
                        {capabilities.serviceIdentification.serviceType}
                    </span>
                </div>
            </div>

            {/* ABSTRACT */}
            <p
                className={cn(
                    "text-muted-foreground cursor-pointer mt-4 text-sm",
                    {
                        "line-clamp-4": !expandAbstract,
                    }
                )}
                onClick={() => setExpandAbstract((v) => !v)}
            >
                {capabilities.serviceIdentification.abstract}
            </p>

            {/* KEYWORDS */}
            <div className="mt-2 space-y-1">
                <Label>Keywords</Label>
                <div className="flex flex-wrap gap-2">
                    {capabilities.serviceIdentification.keywords
                        .map((keyword) => (
                            <Badge key={keyword} variant="secondary">
                                {truncate(
                                    keyword,
                                    expandKeywords ? Infinity : 40
                                )}
                            </Badge>
                        ))
                        .slice(0, expandKeywords ? undefined : KEYWORD_LIMIT)}

                    {!expandKeywords &&
                        capabilities.serviceIdentification.keywords.length >
                            KEYWORD_LIMIT && (
                            <Badge
                                onClick={() => setExpandKeywords(true)}
                                variant="secondary"
                                className="cursor-pointer"
                            >
                                +
                                {capabilities.serviceIdentification.keywords
                                    .length - KEYWORD_LIMIT}
                            </Badge>
                        )}
                </div>
            </div>

            {/* FEATURE TYPES */}
            <h3 className="text-lg font-semibold mt-4 mb-2">Feature types</h3>
            <div className="space-y-2 w-full">
                {capabilities.featureTypeList
                    .sort((a, b) => {
                        const aTitle = a.title ?? "";
                        const bTitle = b.title ?? "";

                        if (a.name === selectedFeatureType) return -1;
                        if (b.name === selectedFeatureType) return 1;

                        return aTitle.localeCompare(bTitle);
                    })
                    .map((type) => (
                        <FeatureTypeCard
                            key={type.name}
                            featureType={type}
                            onClick={() => setSelectedFeatureType(type.name)}
                        />
                    ))}
            </div>
        </div>
    );
}

function FeatureTypeCard({
    featureType,
    ...props
}: {
    featureType: FeatureType;
} & HTMLAttributes<HTMLButtonElement>) {
    const selectedFeatureType = useServiceSelectedFeatureType();

    const isSelected = selectedFeatureType === featureType.name;

    return (
        <button
            className={cn(
                "flex flex-col p-2 gap-1 w-full min-w-0 border rounded-md hover:bg-muted text-left overflow-hidden",
                {
                    "bg-muted": isSelected,
                }
            )}
            {...props}
        >
            <span className={cn("truncate font-semibold w-full")}>
                {featureType.title}
            </span>
            <span className="text-sm text-muted-foreground truncate w-full">
                {featureType.name}
            </span>
            <span
                className={cn("text-sm text-muted-foreground", {
                    "line-clamp-3": !isSelected,
                })}
            >
                {featureType.abstract}
            </span>
            <div className="flex flex-wrap gap-2">
                {featureType.keywords
                    .slice(0, isSelected ? Infinity : 5)
                    .map((keyword) => (
                        <Badge
                            key={keyword}
                            variant={isSelected ? "outline" : "secondary"}
                        >
                            {keyword}
                        </Badge>
                    ))}
                {!isSelected && featureType.keywords.length > 5 && (
                    <Badge variant="secondary">
                        +{featureType.keywords.length - 5}
                    </Badge>
                )}
            </div>
        </button>
    );
}
