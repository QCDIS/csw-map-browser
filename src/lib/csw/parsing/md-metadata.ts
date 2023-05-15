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
    };
}

export function parseCitation(el: ElementWrapper) {
    return {
        title: el.getOne("title")?.getOne("CharacterString")?.text() ?? "",
        date: el.getOne("date")?.date(),
    };
}

export function parseExtent(el?: ElementWrapper) {
    if (!el) {
        return undefined;
    }
    // TODO: parse other types of extent
    const bbox = el.getOne("EX_GeographicBoundingBox")!;
    if (!bbox) {
        return undefined;
        throw new Error(
            "EX_GeographicBoundingBox not found, extent type not supported http://www.datypic.com/sc/niem20/e-gmd_EX_Extent.html"
        );
    }

    return {
        type: "BoundingBox",
        westBoundLongitude: bbox.getOne("westBoundLongitude")!.number()!,
        eastBoundLongitude: bbox.getOne("eastBoundLongitude")!.number()!,
        southBoundLatitude: bbox.getOne("southBoundLatitude")!.number()!,
        northBoundLatitude: bbox.getOne("northBoundLatitude")!.number()!,
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
