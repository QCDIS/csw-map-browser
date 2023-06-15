import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { useRecords } from "../query";
import { useCatalogueSelectedRecordId } from "../store";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { cn, truncate } from "@/lib/utils";
import { useState } from "react";
import {
    CalendarIcon,
    ChevronRightIcon,
    DatabaseIcon,
    DownloadIcon,
    ExternalLinkIcon,
    InfoIcon,
} from "lucide-react";
import {
    descriptionByScopeCode,
    displayNameByScopeCode,
} from "@/lib/csw/parsing/scope-code";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { TopicCodeBadge } from "@/components/metadata/topiccode";
import { Link } from "react-router-dom";
import { useCatalogueLayoutData } from "../loader";
import { displayNameByRoleCode } from "@/lib/csw/parsing/role-code";
import {
    descriptionByProgressCode,
    displayNameByProgressCode,
} from "@/lib/csw/parsing/progresscode";
import { useServicePageData } from "../record/service/loader";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ExportDialog } from "../record/service/components/export-dialog";

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
    const catalogue = useCatalogueLayoutData();
    const serviceData = useServicePageData();

    const [expandAbstract, setExpandAbstract] = useState(false);
    const [expandKeywords, setExpandKeywords] = useState(false);

    const records = useRecords();
    const selectedRecordId = useCatalogueSelectedRecordId();
    if (!serviceData && !selectedRecordId) {
        return null;
    }

    const selectedRecord =
        serviceData?.record || records.get(selectedRecordId!);
    if (!selectedRecord) {
        return null;
    }

    const metadataUrl = new URL(catalogue.csw.endpoint);
    metadataUrl.searchParams.set("service", "CSW");
    metadataUrl.searchParams.set("request", "GetRecordById");
    metadataUrl.searchParams.set("version", "2.0.2");
    metadataUrl.searchParams.set("elementSetName", "full");
    metadataUrl.searchParams.set(
        "outputSchema",
        "http://www.isotc211.org/2005/gmd"
    );
    metadataUrl.searchParams.set("id", selectedRecord?.fileIdentifier);

    const links =
        selectedRecord.distributionInfo?.transferOptions
            .map((o) => o.online)
            .flat() ?? [];

    const services = links.filter((l) => l.protocol.startsWith("OGC:"));

    const downloads = links.filter((l) => isProtocolDownload(l.protocol));

    const other = links.filter(
        (l) => !services.includes(l) && !downloads.includes(l)
    );

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
                            <div className="text-sm flex items-center text-muted-foreground gap-1 w-full">
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
                            <div className="text-sm flex items-center text-muted-foreground gap-1 w-full">
                                <InfoIcon className="w-4 h-4" />
                                <span>
                                    {
                                        displayNameByProgressCode[
                                            selectedRecord.identificationInfo
                                                .status as keyof typeof displayNameByProgressCode
                                        ]
                                    }
                                </span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            {
                                descriptionByProgressCode[
                                    selectedRecord.identificationInfo
                                        .status as keyof typeof displayNameByProgressCode
                                ]
                            }
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <div className="text-sm flex items-center text-muted-foreground gap-1 w-full">
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
                                        expandKeywords ? Infinity : 40
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
                            {selectedRecord.distributionInfo?.formats.join(
                                ", "
                            )}
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
                            {selectedRecord.referenceSystemInfo?.code}
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
                        <span className="font-normal text-sm leading-none truncate">
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
                <p className="text-sm text-muted-foreground">
                    {
                        selectedRecord.identificationInfo.resourceConstraints.find(
                            (c) => c?.useLimitation
                        )?.useLimitation
                    }
                </p>

                {/* CONTACTS */}
                <h3 className="text-lg font-semibold mt-4 mb-2">Contact</h3>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <Label>Organisation</Label>
                        <span className="font-normal text-sm leading-none">
                            {selectedRecord.contact?.organisationName}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <Label>Role</Label>
                        <span className="font-normal text-sm leading-none">
                            {
                                displayNameByRoleCode[
                                    selectedRecord.contact
                                        ?.role as keyof typeof displayNameByRoleCode
                                ]
                            }
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <Label>Email</Label>
                        <a
                            className="font-normal text-sm leading-none underline"
                            href={`mailto:${selectedRecord.contact?.contactInfo?.address?.electronicMailAddress}`}
                            target="_blank"
                        >
                            {
                                selectedRecord.contact?.contactInfo?.address
                                    ?.electronicMailAddress
                            }
                        </a>
                    </div>
                </div>

                {/* Resources */}
                <h3 className="text-lg font-semibold mt-4 mb-2">Services</h3>
                <div className="space-y-2">
                    {services.map((o) => (
                        <Resource online={o} key={JSON.stringify(o)} />
                    ))}
                </div>
                <h3 className="text-lg font-semibold mt-4 mb-2">Files</h3>
                <div className="space-y-2">
                    {downloads.map((o) => (
                        <Resource online={o} key={JSON.stringify(o)} />
                    ))}
                </div>
                <h3 className="text-lg font-semibold mt-4 mb-2">Links</h3>
                <div className="space-y-2">
                    {other.map((o) => (
                        <Resource online={o} key={JSON.stringify(o)} />
                    ))}
                    <Resource
                        online={{
                            name: "Metadata permalink",
                            protocol: "metadata",
                            linkage: metadataUrl.toString(),
                            description: "",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

function Resource({
    online,
}: {
    online: {
        name: string;
        protocol: string;
        linkage: string;
        description: string;
    };
}) {
    const data = useCatalogueLayoutData();
    const serviceData = useServicePageData();
    const selectedRecordId = useCatalogueSelectedRecordId();
    const records = useRecords();
    const selectedRecord =
        serviceData?.record || records.get(selectedRecordId!)!;

    const isService = online.protocol.startsWith("OGC:");
    const isDownload = isProtocolDownload(online.protocol);
    const isSelected =
        serviceData?.service.linkage === online.linkage &&
        serviceData?.service.name === online.name &&
        serviceData?.service.protocol === online.protocol;

    if (!selectedRecord) {
        return null;
    }

    const inner = (
        <>
            <div className="flex flex-col p-2 gap-1 min-w-0">
                <span className={cn("truncate font-semibold", {})}>
                    {online.name || online.description || online.linkage}
                </span>
                <span className="text-sm text-muted-foreground">
                    {online.protocol}
                </span>
            </div>
            {!isSelected && (
                <div className="flex justify-center items-center p-4">
                    {isService ? (
                        <ChevronRightIcon className="text-muted-foreground w-6 h-6" />
                    ) : isDownload ? (
                        <DownloadIcon className="text-muted-foreground w-6 h-6" />
                    ) : (
                        <ExternalLinkIcon className="text-muted-foreground w-6 h-6" />
                    )}
                </div>
            )}
        </>
    );

    return isService ? (
        <Link
            to={`/catalogue/${encodeURIComponent(
                data.csw.endpoint
            )}/record/${encodeURIComponent(
                selectedRecord.fileIdentifier
            )}/service/${encodeURIComponent(online.name)}/${encodeURIComponent(
                online.protocol
            )}/${encodeURIComponent(online.linkage)}`}
            className={cn(
                "flex border rounded-md hover:bg-muted justify-between",
                {
                    "bg-muted": isSelected,
                }
            )}
        >
            {inner}
        </Link>
    ) : isDownload ? (
        <Dialog>
            <DialogTrigger
                className={cn(
                    "flex border rounded-md hover:bg-muted justify-between w-full text-left items-center",
                    {
                        "bg-muted": isSelected,
                    }
                )}
            >
                {inner}
            </DialogTrigger>
            <ExportDialog type="online" online={online} />
        </Dialog>
    ) : (
        <a
            className="flex border rounded-md hover:bg-muted justify-between"
            href={online.linkage}
            target="_blank"
        >
            {inner}
        </a>
    );
}

function isProtocolDownload(protocol: string) {
    protocol = protocol.toLowerCase();
    return (
        protocol.startsWith("www:download") ||
        ["download", "file", "json", "geojson", "csv", "shape-zip"].includes(
            protocol
        )
    );
}
