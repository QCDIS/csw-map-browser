import { parseCapabilities } from "./get-capabilities";
import { parseGetRecordById } from "./get-record-by-id";
import { parseGetRecords } from "./get-records";
import { ElementWrapper } from "./utils";

export class CswParser {
    static parseGetCapabilities(text: string) {
        const xmlParser = new DOMParser();
        const doc = xmlParser.parseFromString(text, "text/xml");
        const el = new ElementWrapper(doc.children[0]);

        return parseCapabilities(el);
    }

    static parseGetRecords(text: string) {
        const xmlParser = new DOMParser();
        const doc = xmlParser.parseFromString(text, "text/xml");
        const el = new ElementWrapper(doc.children[0]);

        return parseGetRecords(el);
    }

    static parseGetRecordById(text: string) {
        const xmlParser = new DOMParser();
        const doc = xmlParser.parseFromString(text, "text/xml");
        const el = new ElementWrapper(doc.children[0]);

        return parseGetRecordById(el);
    }
}

export type CswCapabilities = ReturnType<typeof CswParser.parseGetCapabilities>;
