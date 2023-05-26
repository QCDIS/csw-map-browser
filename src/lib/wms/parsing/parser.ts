import { ElementWrapper } from "@/lib/csw/parsing/utils";
import { parseCapabilities } from "./get-capabilities";

export class WmsParser {
    static parseGetCapabilities(text: string) {
        const xmlParser = new DOMParser();
        const doc = xmlParser.parseFromString(text, "text/xml");
        const el = new ElementWrapper(doc.children[0]);

        return parseCapabilities(el);
    }
}
