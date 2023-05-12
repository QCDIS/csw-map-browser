import { ElementWrapper } from "./utils";

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

export function parseReferenceSystemInfo(el: ElementWrapper) {
    return {
        code: el.getOne("code")?.text() ?? "",
        codeSpace: el.getOne("codeSpace")?.text() ?? "",
    };
}

export function parseIdentificationInfo(el: ElementWrapper) {
    return {
        citation: parseCitation(el.getOne("citation")!),
        abstract: el.getOne("abstract")?.text() ?? "",
        extent: parseExtent(el.getOne("extent")),
    };
}

export function parseCitation(el: ElementWrapper) {
    return {
        title: el.getOne("title")?.text() ?? "",
        date: el.getOne("date")?.date(),
    };
}

export function parseExtent(el?: ElementWrapper) {
    if (!el) {
        return undefined;
    }
    // TODO: parse other types of extent
    el = el.getOne("EX_GeographicBoundingBox")!;
    if (!el) {
        throw new Error(
            "EX_GeographicBoundingBox not found, extent type not supported http://www.datypic.com/sc/niem20/e-gmd_EX_Extent.html"
        );
    }

    return {
        type: "BoundingBox",
        westboundLongitude: el.getOne("westBoundLongitude")!.number(),
        eastboundLongitude: el.getOne("eastBoundLongitude")!.text(),
        southboundLatitude: el.getOne("southBoundLatitude")!.text(),
        northboundLatitude: el.getOne("northBoundLatitude")!.text(),
    };
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
