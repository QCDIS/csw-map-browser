export class ElementWrapper {
    constructor(public element: Element) {}

    get(name: string) {
        return [...this.element.getElementsByTagNameNS("*", name)].map(
            (e) => new ElementWrapper(e)
        );
    }

    getOne(name: string) {
        const el = this.element.getElementsByTagNameNS("*", name)[0];
        return el ? new ElementWrapper(el) : undefined;
    }

    attribute(name: string) {
        return this.element.getAttribute(name) ?? undefined;
    }

    text() {
        return this.element.textContent?.trim() ?? undefined;
    }

    date() {
        const text = this.text();
        if (!text) {
            return undefined;
        }

        return new Date(text);
    }

    number() {
        const text = this.text();
        if (!text) {
            return undefined;
        }

        return Number(text);
    }
}

export function text(element: ElementWrapper) {
    return element.text() ?? "";
}
