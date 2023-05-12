import { parseMdMetadata } from "./md-metadata";
import { ElementWrapper } from "./utils";

export function parseGetRecordById(el: ElementWrapper) {
    const mdMetadata = el.getOne("MD_Metadata");
    if (!mdMetadata) {
        return undefined;
    }

    return parseMdMetadata(mdMetadata);
}
