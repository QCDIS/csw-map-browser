export type CswFilter =
    | {
          type: "PropertyIsEqualTo";
          property: string;
          value: string;
      }
    | {
          type: "PropertyIsLike";
          property: string;
          value: string;
      }
    | {
          type: "And";
          filters: CswFilter[];
      }
    | {
          type: "Or";
          filters: CswFilter[];
      }
    | {
          type: "Within";
          property: string;
          lowerCorner: readonly [number, number];
          upperCorner: readonly [number, number];
      };

export function serializeFilter(filter: CswFilter): string {
    switch (filter.type) {
        case "PropertyIsEqualTo":
            return `<PropertyIsEqualTo>
                <PropertyName>${filter.property}</PropertyName>
                <Literal>${filter.value}</Literal>
            </PropertyIsEqualTo>`;
        case "PropertyIsLike":
            return `<PropertyIsLike wildCard="*" singleChar="_" escapeChar="!">
                <PropertyName>${filter.property}</PropertyName>
                <Literal>${filter.value}</Literal>
            </PropertyIsLike>`;
        case "And":
            if (filter.filters.length === 0) return "";
            if (filter.filters.length === 1)
                return serializeFilter(filter.filters[0]);
            return `<And>
                ${filter.filters.map(serializeFilter).join("\n")}
            </And>`;
        case "Or":
            if (filter.filters.length === 0) return "";
            if (filter.filters.length === 1)
                return serializeFilter(filter.filters[0]);
            return `<Or>
                ${filter.filters.map(serializeFilter).join("\n")}
            </Or>`;
        case "Within":
            return `<Within>
                <PropertyName>${filter.property}</PropertyName>
                <gml:Envelope>
                    <gml:lowerCorner>${filter.lowerCorner.join(
                        " "
                    )}</gml:lowerCorner>
                    <gml:upperCorner>${filter.upperCorner.join(
                        " "
                    )}</gml:upperCorner>
                </gml:Envelope>
            </Within>`;
    }
}
