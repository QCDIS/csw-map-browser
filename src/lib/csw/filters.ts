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
        case "And": {
            const serializedFilters = filter.filters
                .map(serializeFilter)
                .filter(Boolean);
            if (serializedFilters.length === 0) return "";
            if (serializedFilters.length === 1) return serializedFilters[0];

            return `<And>
                ${serializedFilters.join("\n")}
            </And>`;
        }
        case "Or": {
            const serializedFilters = filter.filters
                .map(serializeFilter)
                .filter(Boolean);
            if (serializedFilters.length === 0) return "";
            if (serializedFilters.length === 1) return serializedFilters[0];

            return `<Or>
                ${serializedFilters.join("\n")}
            </Or>`;
        }
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
