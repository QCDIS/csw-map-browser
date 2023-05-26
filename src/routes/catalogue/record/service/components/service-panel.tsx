import { HTMLAttributes, useState } from "react";
import { useServicePageData } from "../loader";
import { cn, truncate } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { DatabaseIcon } from "lucide-react";
import { useServiceActions, useServiceSelectedFeatureType } from "../store";

const KEYWORD_LIMIT = 5;

export function ServicePanel() {
    const serviceData = useServicePageData()!;
    const wfsCapabilities = serviceData.wfs?.capabilities;
    const wmsCapabilities = serviceData.wms?.capabilities;

    const selectedFeatureType = useServiceSelectedFeatureType();
    const { setSelectedFeatureType } = useServiceActions();

    const [expandAbstract, setExpandAbstract] = useState(false);
    const [expandKeywords, setExpandKeywords] = useState(false);

    const title = {
        wfs: wfsCapabilities?.serviceIdentification.title,
        wms: wmsCapabilities?.service.title,
    }[serviceData.type];

    const serviceType = {
        wfs: "WFS",
        wms: "WMS",
    }[serviceData.type];

    const abstract = {
        wfs: wfsCapabilities?.serviceIdentification.abstract,
        wms: wmsCapabilities?.service.abstract,
    }[serviceData.type];

    const keywords = {
        wfs: wfsCapabilities?.serviceIdentification.keywords,
        wms: wmsCapabilities?.service.keywords,
    }[serviceData.type]!;

    return (
        <div className="p-4 overflow-y-auto h-full">
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            <div className="flex justify-between">
                <div className="text-sm flex items-center text-muted-foreground gap-1 w-full">
                    <DatabaseIcon className="w-4 h-4" />
                    <span>{serviceType}</span>
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
                {abstract}
            </p>

            {/* KEYWORDS */}
            <div className="mt-2 space-y-1">
                <Label>Keywords</Label>
                <div className="flex flex-wrap gap-2">
                    {keywords
                        .map((keyword) => (
                            <Badge key={keyword} variant="secondary">
                                {truncate(
                                    keyword,
                                    expandKeywords ? Infinity : 40
                                )}
                            </Badge>
                        ))
                        .slice(0, expandKeywords ? undefined : KEYWORD_LIMIT)}

                    {!expandKeywords && keywords.length > KEYWORD_LIMIT && (
                        <Badge
                            onClick={() => setExpandKeywords(true)}
                            variant="secondary"
                            className="cursor-pointer"
                        >
                            +{keywords.length - KEYWORD_LIMIT}
                        </Badge>
                    )}
                </div>
            </div>

            {serviceData.type === "wfs" && (
                <>
                    {/* FEATURE TYPES */}
                    <h3 className="text-lg font-semibold mt-4 mb-2">
                        Feature types
                    </h3>
                    <div className="space-y-2 w-full">
                        {wfsCapabilities!.featureTypeList
                            .sort((a, b) => {
                                if (a.name === selectedFeatureType) return -1;
                                if (b.name === selectedFeatureType) return 1;

                                return a.title.localeCompare(b.title);
                            })
                            .map((type, i) => (
                                <FeatureTypeCard
                                    key={type.name + i}
                                    featureType={type}
                                    onClick={() =>
                                        setSelectedFeatureType(type.name)
                                    }
                                />
                            ))}
                    </div>
                </>
            )}

            {serviceData.type === "wms" && (
                <>
                    {/* LAYERS */}
                    <h3 className="text-lg font-semibold mt-4 mb-2">Layers</h3>
                    <div className="space-y-2 w-full">
                        {wmsCapabilities!.capability.layers
                            .sort((a, b) => {
                                if (a.name === selectedFeatureType) return -1;
                                if (b.name === selectedFeatureType) return 1;

                                return a.title.localeCompare(b.title);
                            })
                            .map((layer, i) => (
                                <FeatureTypeCard
                                    key={layer.name + i}
                                    featureType={{
                                        title: layer.title,
                                        name: layer.name,
                                        abstract: layer.abstract,
                                        keywords: layer.keywords,
                                    }}
                                    onClick={() =>
                                        setSelectedFeatureType(layer.name)
                                    }
                                />
                            ))}
                    </div>
                </>
            )}
        </div>
    );
}

function FeatureTypeCard({
    featureType,
    ...props
}: {
    featureType: {
        title: string;
        name: string;
        abstract: string;
        keywords: string[];
    };
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
                    .map((keyword, i) => (
                        <Badge
                            key={keyword + i}
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
