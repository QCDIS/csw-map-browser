import { parseServiceIdentification } from "./service-identification";
import { parseServiceProvider } from "./service-provider";
import { ElementWrapper } from "./utils";

export function parseCapabilities(el: ElementWrapper) {
    return {
        serviceIdentification: parseServiceIdentification(
            el.getOne("ServiceIdentification")!
        ),
        serviceProvider: parseServiceProvider(el.getOne("ServiceProvider")),
    };
}
