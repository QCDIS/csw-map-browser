import { DataTable } from "@/components/ui/datatable";
import { ColumnDef } from "@tanstack/react-table";
import { Feature } from "ol";
import { ComponentProps, useMemo } from "react";

type Props = {
    features: Feature[];
} & Omit<ComponentProps<typeof DataTable>, "columns" | "data">;

export function FeaturesTable({ features, ...props }: Props) {
    const columns = useMemo(() => {
        const [keys] = [...features].reduce<[string[], Set<string>]>(
            ([sortedKeys, keySet], feature) => {
                for (const key of Object.keys(feature.getProperties())) {
                    if (keySet.has(key)) continue;
                    if (key === "geometry") continue;
                    keySet.add(key);
                    sortedKeys.push(key);
                }

                return [sortedKeys, keySet];
            },
            [[], new Set()]
        );

        return keys.map(
            (key) =>
                ({
                    header: key,
                    accessorFn: (feature: Feature) =>
                        feature.getProperties()[key],
                    cell: (info) => (
                        <span className="whitespace-nowrap">
                            {info.getValue<any>()}
                        </span>
                    ),
                } as ColumnDef<Feature>)
        );
    }, [features]);

    return <DataTable {...props} columns={columns} data={features}></DataTable>;
}
