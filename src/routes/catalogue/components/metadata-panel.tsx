import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { useRecords } from "../query";
import { useCatalogueSelectedRecordId } from "../store";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { cn, truncate } from "@/lib/utils";
import { useState } from "react";
import { CalendarIcon, DatabaseIcon } from "lucide-react";
import {
    descriptionByScopeCode,
    displayNameByScopeCode,
} from "@/lib/csw/parsing/scope-code";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { TopicCodeBadge } from "@/components/metadata/topiccode";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useCatalogueLayoutData } from "../loader";

const formatter = new Intl.DateTimeFormat();
const extensiveFormatter = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    minute: "numeric",
    hour: "numeric",
    second: "numeric",
});

const KEYWORD_LIMIT = 4;

export function MetadataPanel() {
    const navigate = useNavigate();
    const catalogue = useCatalogueLayoutData();

    const [expandAbstract, setExpandAbstract] = useState(false);
    const [expandKeywords, setExpandKeywords] = useState(false);

    const records = useRecords();
    const selectedRecordId = useCatalogueSelectedRecordId();
    if (!selectedRecordId) {
        return null;
    }

    const selectedRecord = records.get(selectedRecordId);
    if (!selectedRecord) {
        return null;
    }

    return (
        <div className="flex flex-col h-full">
            <div className="min-h-0 overflow-y-auto p-4 h-full">
                {/* HEADER */}
                <h2 className="text-2xl font-bold tracking-tight">
                    {selectedRecord.identificationInfo.citation.title}
                </h2>
                <div className="flex justify-between">
                    <Tooltip>
                        <TooltipTrigger>
                            <div className="text-sm flex items-center text-muted-foreground gap-1">
                                <DatabaseIcon className="w-4 h-4" />
                                <span>
                                    {
                                        displayNameByScopeCode[
                                            selectedRecord.hierarchyLevel as keyof typeof displayNameByScopeCode
                                        ]
                                    }
                                </span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            {
                                descriptionByScopeCode[
                                    selectedRecord.dataQualityInfo
                                        ?.scope as keyof typeof displayNameByScopeCode
                                ]
                            }
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <div className="text-sm flex items-center text-muted-foreground gap-1">
                                <CalendarIcon className="w-4 h-4" />
                                <span>
                                    {selectedRecord.dateStamp
                                        ? formatter.format(
                                              selectedRecord.dateStamp
                                          )
                                        : "No date"}
                                </span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            {selectedRecord.identificationInfo.citation
                                .publication
                                ? extensiveFormatter.format(
                                      selectedRecord.identificationInfo.citation
                                          .publication
                                  )
                                : "No date"}
                        </TooltipContent>
                    </Tooltip>
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
                    {selectedRecord.identificationInfo.abstract}
                </p>

                {/* TOPIC CATEGORY */}
                <div className="mt-2 space-y-1">
                    <Label>Categories</Label>
                    <div className="flex flex-wrap gap-2">
                        {selectedRecord.identificationInfo.topicCategory?.map(
                            (topic) => (
                                <TopicCodeBadge
                                    key={topic}
                                    topicCode={topic}
                                    variant="secondary"
                                />
                            )
                        )}
                    </div>
                </div>

                {/* KEYWORDS */}
                <div className="mt-2 space-y-1">
                    <Label>Keywords</Label>
                    <div className="flex flex-wrap gap-2">
                        {selectedRecord.identificationInfo.descriptiveKeywords
                            .map((keyword) => (
                                <Badge key={keyword} variant="secondary">
                                    {truncate(
                                        keyword,
                                        expandKeywords ? Infinity : 20
                                    )}
                                </Badge>
                            ))
                            .slice(
                                0,
                                expandKeywords ? undefined : KEYWORD_LIMIT
                            )}

                        {!expandKeywords &&
                            selectedRecord.identificationInfo
                                .descriptiveKeywords.length > KEYWORD_LIMIT && (
                                <Badge
                                    onClick={() => setExpandKeywords(true)}
                                    variant="secondary"
                                    className="cursor-pointer"
                                >
                                    +
                                    {selectedRecord.identificationInfo
                                        .descriptiveKeywords.length -
                                        KEYWORD_LIMIT}
                                </Badge>
                            )}
                    </div>
                </div>

                {/* TECHNICAL SPECIFICATIONS */}
                <h3 className="text-lg font-semibold mt-4 mb-2">
                    Technical specifications
                </h3>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <Label>Representation type</Label>
                        <span className="font-normal text-sm leading-none">
                            {selectedRecord.hierarchyLevel}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <Label>Format</Label>
                        <span className="font-normal text-sm leading-none">
                            {selectedRecord.distributionInfo?.format}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <Label>Scale</Label>
                        <span className="font-normal text-sm leading-none">
                            1 /{" "}
                            {
                                selectedRecord.identificationInfo
                                    .spatialResolution
                            }
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <Label>CRS</Label>
                        <span className="font-normal text-sm leading-none">
                            {selectedRecord.referenceSystemInfo.code}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <Label>Publication</Label>
                        <span className="font-normal text-sm leading-none">
                            {formatter.format(
                                selectedRecord.identificationInfo.citation
                                    .publication
                            )}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <Label>Creation</Label>
                        <span className="font-normal text-sm leading-none">
                            {formatter.format(
                                selectedRecord.identificationInfo.citation
                                    .creation
                            )}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <Label>Language</Label>
                        <span className="font-normal text-sm leading-none">
                            {selectedRecord.language}
                        </span>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <Label>Resource identifier</Label>
                        <span className="font-normal text-sm leading-none">
                            {
                                selectedRecord.identificationInfo.citation
                                    .identifier
                            }
                        </span>
                    </div>
                </div>
                {/* RESOURCE CONSTRAINTS */}
                <h3 className="text-lg font-semibold mt-4 mb-2">
                    Resource constraints
                </h3>

                {/* CONTACTS */}
                <h3 className="text-lg font-semibold mt-4 mb-2">Contact</h3>
            </div>

            <div className="p-4 border-t">
                <Button
                    className="w-full"
                    onClick={() =>
                        navigate(
                            `/catalogue/${encodeURIComponent(
                                catalogue.csw.endpoint
                            )}/record/${encodeURIComponent(
                                selectedRecord.fileIdentifier
                            )}`
                        )
                    }
                >
                    View record
                </Button>
            </div>
        </div>
    );
}
