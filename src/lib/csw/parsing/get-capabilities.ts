import { parseServiceProvider } from "@/lib/ows/parsing/service-provider";
import { parseServiceIdentification } from "../../ows/parsing/service-identification";
import { ElementWrapper } from "./utils";

export function parseCapabilities(el: ElementWrapper) {
    return {
        serviceIdentification: parseServiceIdentification(
            el.getOne("ServiceIdentification")!
        ),
        serviceProvider: parseServiceProvider(el.getOne("ServiceProvider")),
    };
}
