import { parseMdMetadata } from "./md-metadata";
import { ElementWrapper } from "./utils";

export function parseGetRecordById(el: ElementWrapper) {
    const mdMetadata = el.getOne("MD_Metadata");
    if (!mdMetadata) throw new Error("No MD_Metadata element found");

    return parseMdMetadata(mdMetadata);
}
