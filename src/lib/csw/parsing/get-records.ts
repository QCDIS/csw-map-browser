import { parseMdMetadata } from "./md-metadata";
import { ElementWrapper } from "./utils";

export function parseGetRecords(el: ElementWrapper) {
    const searchResults = el.getOne("SearchResults")!;
    if (!searchResults) {
        const exception = el.getOne("Exception");
        if (exception) {
            throw new Error(
                `CswException: ${exception.getOne("ExceptionText")?.text()}`
            );
        }

        throw new Error("No SearchResults element found");
    }
    const numberOfRecordsMatched = searchResults.attribute(
        "numberOfRecordsMatched"
    );

    const numberOfRecordsReturned = searchResults.attribute(
        "numberOfRecordsReturned"
    );

    return {
        searchResults: searchResults.get("MD_Metadata").map(parseMdMetadata),
        numberOfRecordsMatched: numberOfRecordsMatched
            ? Number(numberOfRecordsMatched)
            : undefined,
        numberOfRecordsReturned: numberOfRecordsReturned
            ? Number(numberOfRecordsReturned)
            : undefined,
    };
}
