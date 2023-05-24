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
        dataQualityInfo: parseDataQualityInfo(el.getOne("dataQualityInfo")),
        distributionInfo: parseDistributionInfo(el.getOne("distributionInfo")),
        language: el
            .getOne("language")
            ?.getOne("LanguageCode")
            ?.attribute("codeListValue"),
        hierarchyLevel: el
            .getOne("hierarchyLevel")
            ?.getOne("MD_ScopeCode")
            ?.attribute("codeListValue"),
        contact: parseContact(el.getOne("contact")),
    };
}

export type MetadataRecord = ReturnType<typeof parseMdMetadata>;

export function parseReferenceSystemInfo(el?: ElementWrapper | undefined) {
    if (!el) {
        return;
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
        descriptiveKeywords: [
            ...new Set(
                el
                    .get("descriptiveKeywords")
                    .map(parseDescriptiveKeywords)
                    .filter(
                        (
                            e
                        ): e is NonNullable<
                            ReturnType<typeof parseDescriptiveKeywords>
                        > => !!e
                    )
                    .flat()
            ),
        ],
        topicCategory: el.get("topicCategory").map(text),
        spatialResolutionType: el
            .getOne("spatialRepresentationType")
            ?.getOne("MD_SpatialRepresentationTypeCode")
            ?.attribute("codeListValue"),
        spatialResolution: el
            .get("spatialResolution")
            .map((el) =>
                el?.getOne("MD_Resolution")?.getOne("Integer")?.number()
            )
            .filter((e): e is number => !!e)
            .at(0),
        status:
            el
                .getOne("status")
                ?.getOne("MD_ProgressCode")
                ?.attribute("codeListValue") ?? "completed",
        resourceConstraints: el
            .get("resourceConstraints")
            .map(parseResourceConstraints),
    };
}

export function parseCitation(el: ElementWrapper) {
    const datesByDateType = new Map(
        el
            .get("date")
            .map((el) => el.getOne("CI_Date"))
            .filter((el) => el)
            .map(
                (el) =>
                    [
                        el
                            ?.getOne("dateType")
                            ?.getOne("CI_DateTypeCode")
                            ?.attribute("codeListValue"),
                        el?.getOne("date")?.date(),
                    ] as const
            )
    );

    return {
        title: el.getOne("title")?.getOne("CharacterString")?.text() ?? "",
        creation: datesByDateType.get("creation"),
        publication: datesByDateType.get("publication"),
        identifier: el
            .getOne("identifier")
            ?.getOne("code")
            ?.getOne("CharacterString")
            ?.text(),
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

export function parseDistributionInfo(el: ElementWrapper | undefined) {
    if (!el) {
        return undefined;
    }
    return {
        transferOptions: el.get("transferOptions").map(parseTransferOptions),
        formats: el
            .get("MD_Format")
            .map(
                (e) => e.getOne("name")?.getOne("CharacterString")?.text() ?? ""
            ),
    };
}

export function parseTransferOptions(el: ElementWrapper) {
    return {
        online: el
            .get("onLine")
            .map(parseOnline)
            .filter((o) => o.name || o.protocol || o.linkage),
    };
}

export function parseOnline(el: ElementWrapper) {
    return {
        linkage: el.getOne("linkage")?.text() ?? "",
        protocol: el.getOne("protocol")?.text() ?? "",
        name: el.getOne("name")?.text() ?? "",
        description: el.getOne("description")?.text() ?? "",
    };
}

export function parseDescriptiveKeywords(el: ElementWrapper | undefined) {
    if (!el) {
        return undefined;
    }
    return el
        .get("keyword")
        .map((el) => el.getOne("CharacterString"))
        .filter((el): el is ElementWrapper => !!el)
        .map(text);
}

export function parseDataQualityInfo(el: ElementWrapper | undefined) {
    if (!el) {
        return undefined;
    }
    return {
        scope: el.getOne("MD_ScopeCode")?.attribute("codeListValue"),
        lineage: el.getOne("lineage")?.text() ?? "",
    };
}

export function parseResourceConstraints(el: ElementWrapper | undefined) {
    if (!el) {
        return undefined;
    }

    return {
        useLimitation: el.getOne("useLimitation")?.text(),
    };
}

export function parseContact(el: ElementWrapper | undefined) {
    if (!el) {
        return undefined;
    }

    return {
        organisationName: el
            .getOne("organisationName")
            ?.getOne("CharacterString")
            ?.text(),
        contactInfo: parseContactInfo(el.getOne("contactInfo")),
        role: el
            .getOne("role")
            ?.getOne("CI_RoleCode")
            ?.attribute("codeListValue"),
    };
}

export function parseContactInfo(el: ElementWrapper | undefined) {
    if (!el) {
        return undefined;
    }

    return {
        address: parseAddress(el.getOne("address")),
    };
}

export function parseAddress(el: ElementWrapper | undefined) {
    if (!el) {
        return undefined;
    }

    return {
        electronicMailAddress: el
            .getOne("electronicMailAddress")
            ?.getOne("CharacterString")
            ?.text(),
    };
}
