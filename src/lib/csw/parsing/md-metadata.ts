import { ElementWrapper, text } from "./utils";

export function parseMdMetadata(el: ElementWrapper) {
    return {
        fileIdentifier: el.getOne("fileIdentifier")?.text() ?? "",
        dateStamp: el.getOne("dateStamp")?.date(),
        referenceSystemInfo: parseReferenceSystemInfo(
            el.getOne("referenceSystemInfo")!
        ),
        spatialRepresentationType:
            el.getOne("spatialRepresentationType")?.text() ?? "",
        identificationInfo: parseIdentificationInfo(
            el.getOne("identificationInfo")!
        ),
    };
}

export type MetadataRecord = ReturnType<typeof parseMdMetadata>;

export function parseReferenceSystemInfo(el: ElementWrapper) {
    if (!el) {
        return undefined;
    }
    return {
        code: el.getOne("code")?.text() ?? "",
        codeSpace: el.getOne("codeSpace")?.text() ?? "",
    };
}

export function parseIdentificationInfo(el: ElementWrapper) {
    return {
        citation: parseCitation(el.getOne("citation")!),
        abstract: el.getOne("abstract")?.text() ?? "",
        extent: el
            .get("extent")
            .map(parseExtent)
            .filter((e) => e)
            .at(0),
        descriptiveKeywords: parseDescriptiveKeywords(
            el.getOne("descriptiveKeywords")
        ),
        topicCategory: el.get("topicCategory").map(text),
    };
}

export function parseCitation(el: ElementWrapper) {
    return {
        title: el.getOne("title")?.getOne("CharacterString")?.text() ?? "",
        date: el.getOne("date")?.getOne("Date")?.date(),
    };
}

export function parseExtent(el?: ElementWrapper) {
    if (!el) {
        return undefined;
    }
    // TODO: parse other types of extent
    const bboxes = el
        .get("geographicElement")
        .map((el) => el.get("EX_GeographicBoundingBox"))
        .flat();

    return bboxes.map((bbox) => {
        return {
            type: "BoundingBox",
            westBoundLongitude: bbox.getOne("westBoundLongitude")!.number()!,
            eastBoundLongitude: bbox.getOne("eastBoundLongitude")!.number()!,
            southBoundLatitude: bbox.getOne("southBoundLatitude")!.number()!,
            northBoundLatitude: bbox.getOne("northBoundLatitude")!.number()!,
        };
    });
}

export function parseDistributionInfo(el: ElementWrapper) {
    return {
        transferOptions: el.get("transferOptions").map(parseTransferOptions),
    };
}

export function parseTransferOptions(el: ElementWrapper) {
    return {
        online: el.get("online").map(parseOnline),
    };
}

export function parseOnline(el: ElementWrapper) {
    return {
        linkage: el.getOne("linkage")?.text() ?? "",
        protocol: el.getOne("protocol")?.text() ?? "",
        name: el.getOne("name")?.text() ?? "",
    };
}

export function parseDescriptiveKeywords(el: ElementWrapper | undefined) {
    if (!el) {
        return undefined;
    }
    return {
        keywords: el.get("keyword").map(text),
    };
}
