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
}
