import { ElementWrapper } from "@/lib/csw/parsing/utils";

export function parseCapabilities(el: ElementWrapper) {
    return {
        service: parseService(el.getOne("Service")!),
        capability: parseCapability(el.getOne("Capability")!),
    };
}

function parseService(el: ElementWrapper) {
    return {
        name: el.getOne("Name")?.text() ?? "",
        title: el.getOne("Title")?.text() ?? "",
        abstract: el.getOne("Abstract")?.text() ?? "",
        keywords:
            el
                .getOne("KeywordList")
                ?.get("Keyword")
                .map((el) => el.text() ?? "") ?? [],
    };
}

function parseCapability(el: ElementWrapper) {
    return {
        layers: el.get("Layer").map(parseLayer),
    };
}

function parseLayer(el: ElementWrapper) {
    return {
        name: el.getOne("Name")?.text() ?? "",
        title: el.getOne("Title")?.text() ?? "",
        crs: el.get("CRS").map((el) => el.text()),
        abstract: el.getOne("Abstract")?.text() ?? "",
        keywords:
            el
                .getOne("KeywordList")
                ?.get("Keyword")
                .map((el) => el.text() ?? "") ?? [],
    };
}
