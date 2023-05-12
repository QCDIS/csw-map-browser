import { parseMdMetadata } from "./md-metadata";
import { ElementWrapper } from "./utils";

export function parseGetRecords(el: ElementWrapper) {
    const searchResults = el.getOne("SearchResults")!;
    if (!searchResults) {
        throw new Error("No SearchResults element found");
    }

    return {
        searchResults: searchResults.get("MD_Metadata").map(parseMdMetadata),
        numberOfRecordsMatched: searchResults.attribute(
            "numberOfRecordsMatched"
        ),
        numberOfRecordsReturned: searchResults.attribute(
            "numberOfRecordsReturned"
        ),
    };
}
