import { CswCapabilities } from "./types";
import { ElementCompact } from "xml-js";

export function parseCswGetCapabilitiesResponse(capabilities: ElementCompact) {
    return {
        serviceIdentification: {
            title: capabilities.capabilities.serviceIdentification.title._text,
        },
    } as any satisfies CswCapabilities;
}
