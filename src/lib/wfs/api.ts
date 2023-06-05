import { WfsParser } from "./parsing/parser";

export class WfsClient {
    static async getCapabilities(wfsUrl: string) {
        const url = new URL(wfsUrl);
        url.search = "";
        url.searchParams.set("service", "WFS");
        url.searchParams.set("request", "GetCapabilities");

        const response = await fetch(url.toString());
        if (!response.ok)
            throw new Error(
                `Failed to get WFS capabilities: ${await response.text()}`
            );

        const text = await response.text();

        return WfsParser.parseGetCapabilities(text);
    }

    static createGetFeatureUrl(
        wfsUrl: string,
        typeNames: string,
        outputformat: string
    ) {
        const url = new URL(wfsUrl);
        url.search = "";
        url.searchParams.set("service", "WFS");
        url.searchParams.set("request", "GetFeature");
        url.searchParams.set("version", "2.0.0");
        url.searchParams.set("typeNames", typeNames);
        url.searchParams.set("outputformat", outputformat);
        url.searchParams.set("srsName", "EPSG:3857");

        return url.toString();
    }

    static async getFeature(
        wfsUrl: string,
        typeNames: string,
        outputformat: string
    ) {
        const url = WfsClient.createGetFeatureUrl(
            wfsUrl,
            typeNames,
            outputformat
        );
        const response = await fetch(url);

        if (!response.ok)
            throw new Error(
                `Failed to get WFS feature: ${await response.text()}`
            );

        const json = await response.json();

        return json;
    }
}
