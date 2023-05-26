import { WmsParser } from "./parsing/parser";

export class WmsClient {
    static async getCapabilities(wmsUrl: string) {
        const url = new URL(wmsUrl);
        url.search = "";
        url.searchParams.set("service", "WMS");
        url.searchParams.set("request", "GetCapabilities");

        const response = await fetch(url.toString());
        if (!response.ok)
            throw new Error(
                `Failed to get WMS capabilities: ${await response.text()}`
            );

        const text = await response.text();

        return WmsParser.parseGetCapabilities(text);
    }
}
