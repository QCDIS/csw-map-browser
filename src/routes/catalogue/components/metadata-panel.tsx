import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { useRecords } from "../query";
import { useCatalogueSelectedRecordId } from "../store";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

const formatter = new Intl.DateTimeFormat();
const extensiveFormatter = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    minute: "numeric",
    hour: "numeric",
    second: "numeric",
});

export function MetadataPanel() {
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
        <>
            <h2 className="text-2xl font-bold tracking-tight">
                {selectedRecord.identificationInfo.citation.title}
            </h2>
            <Tooltip>
                <TooltipTrigger>
                    <p className="text-sm text-primary">
                        {selectedRecord.identificationInfo.citation.date
                            ? formatter.format(
                                  selectedRecord.identificationInfo.citation
                                      .date
                              )
                            : "No date"}
                    </p>
                </TooltipTrigger>
                <TooltipContent>
                    {selectedRecord.identificationInfo.citation.date
                        ? extensiveFormatter.format(
                              selectedRecord.identificationInfo.citation.date
                          )
                        : "No date"}
                </TooltipContent>
            </Tooltip>
            <p className="text-muted-foreground">
                {selectedRecord.identificationInfo.abstract}
            </p>
        </>
    );
}
