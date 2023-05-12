export class ElementWrapper {
    constructor(private element: Element) {}

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
        return this.element.textContent ?? undefined;
    }

    date() {
        if (!this.element.textContent) {
            return undefined;
        }

        return new Date(this.element.textContent);
    }

    number() {
        if (!this.element.textContent) {
            return undefined;
        }

        return Number(this.element.textContent);
    }
}

export function text(element: ElementWrapper) {
    return element.text() ?? "";
}
