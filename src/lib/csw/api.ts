import { CswParser } from "./parsing/parser";

export class CswClient {
    static async getCapabilities(
        endpoint: string,
        options: {
            signal?: AbortSignal;
        } = {}
    ) {
        const url = new URL(endpoint);
        url.searchParams.set("service", "CSW");
        url.searchParams.set("request", "GetCapabilities");

        const res = await fetch(url, {
            signal: options.signal,
        });

        const text = await res.text();

        return CswParser.parseGetCapabilities(text);
    }

    static async getRecords(
        endpoint: string,
        options: {
            signal?: AbortSignal;
            boundingBox?: readonly [
                readonly [number, number],
                readonly [number, number]
            ];
        } = {}
    ) {
        const url = new URL(endpoint);
        url.searchParams.set("service", "CSW");
        url.searchParams.set("request", "GetRecords");
        url.searchParams.set("version", "2.0.2");
        url.searchParams.set("typeNames", "csw:Record");
        url.searchParams.set("resultType", "results");
        url.searchParams.set("maxRecords", "10");
        url.searchParams.set("elementSetName", "full");
        url.searchParams.set(
            "outputSchema",
            "http://www.isotc211.org/2005/gmd"
        );
        url.searchParams.set("constraintLanguage", "FILTER");
        url.searchParams.set(
            "outputSchema",
            "http://www.isotc211.org/2005/gmd"
        );
        url.searchParams.set("constraint_language_version", "1.1.0");
        url.searchParams.set(
            "constraint",
            `<Filter xmlns="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml">
            ${
                !options.boundingBox
                    ? ""
                    : `<Within>
                <PropertyName>ows:BoundingBox</PropertyName>
                <gml:Envelope>
                    <gml:lowerCorner>${options.boundingBox[0].join(
                        " "
                    )}</gml:lowerCorner>
                    <gml:upperCorner>${options.boundingBox[1].join(
                        " "
                    )}</gml:upperCorner>
                </gml:Envelope>
            </Within>`
            }
          </Filter>`
        );

        const res = await fetch(url, {
            signal: options.signal,
        });
        const text = await res.text();

        return CswParser.parseGetRecords(text);
    }

    static async getRecordById(endpoint: string, id: string) {
        const url = new URL(endpoint);
        url.searchParams.set("service", "CSW");
        url.searchParams.set("request", "GetRecordById");
        url.searchParams.set("version", "2.0.2");
        url.searchParams.set("elementSetName", "full");
        url.searchParams.set(
            "outputSchema",
            "http://www.isotc211.org/2005/gmd"
        );
        url.searchParams.set("id", id);

        const res = await fetch(url);
        const text = await res.text();

        return CswParser.parseGetRecordById(text);
    }
}
