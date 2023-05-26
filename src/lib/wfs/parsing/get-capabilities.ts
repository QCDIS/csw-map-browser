import { ElementWrapper, text } from "@/lib/csw/parsing/utils";
import { parseServiceIdentification } from "@/lib/ows/parsing/service-identification";
import { parseServiceProvider } from "@/lib/ows/parsing/service-provider";

export function parseCapabilities(el: ElementWrapper) {
    return {
        serviceIdentification: parseServiceIdentification(
            el.getOne("ServiceIdentification")!
        ),
        serviceProvider: parseServiceProvider(el.getOne("ServiceProvider")!),
        featureTypeList: parseFeatureTypeList(el.getOne("FeatureTypeList")!),
        operationsMetadata: parseOperationsMetadata(
            el.getOne("OperationsMetadata")
        ),
    };
}

export type WfsCapabilities = ReturnType<typeof parseCapabilities>;

function parseFeatureTypeList(el: ElementWrapper) {
    return el.get("FeatureType").map(parseFeatureType);
}

function parseFeatureType(el: ElementWrapper) {
    return {
        name: el.getOne("Name")?.text() ?? "",
        title: el.getOne("Title")?.text() ?? "",
        abstract: el.getOne("Abstract")?.text() ?? "",
        keywords: el.getOne("Keywords")?.get("Keyword").map(text) ?? [],
        defaultCRS: el.getOne("DefaultCRS")?.text(),
        otherCRS: el.get("OtherCRS").map(text),
        boundingBox: parseBoundingBox(el.getOne("WGS84BoundingBox")),
    };
}

export type FeatureType = ReturnType<typeof parseFeatureType>;

function parseBoundingBox(el: ElementWrapper | undefined) {
    if (!el) return undefined;
    return {
        lowerCorner: el
            .getOne("LowerCorner")!
            .text()!
            .split(" ")
            .map((n) => Number(n)),
        upperCorner: el
            .getOne("UpperCorner")!
            .text()!
            .split(" ")
            .map((n) => Number(n)),
    };
}

function parseOperationsMetadata(el: ElementWrapper | undefined) {
    if (!el) return undefined;

    return {
        operations: el.get("Operation").map(parseOperation),
    };
}

function parseOperation(el: ElementWrapper) {
    return {
        name: el.attribute("name") ?? "",
        parameters: el.get("Parameter").map(parseParameter),
    };
}

function parseParameter(el: ElementWrapper) {
    return {
        name: el.attribute("name") ?? "",
        allowedValues: el.get("AllowedValues").map(parseAllowedValues).flat(),
    };
}

function parseAllowedValues(el: ElementWrapper) {
    return el.get("Value").map((el) => el.text() ?? "");
}
