import { ElementWrapper, text } from "../../csw/parsing/utils";

export function parseServiceIdentification(el: ElementWrapper) {
    return {
        title: el.getOne("Title")?.text() ?? "",
        abstract: el.getOne("Abstract")?.text() ?? "",
        keywords: el.getOne("Keywords")!.get("Keyword").map(text),
        serviceType: el.getOne("ServiceType")!.text(),
        serviceTypeVersions: el.get("ServiceTypeVersion").map(text),
        fees: el.getOne("Fees")?.text(),
        accessConstraints: el.getOne("AccessConstraints")?.text(),
    };
}
