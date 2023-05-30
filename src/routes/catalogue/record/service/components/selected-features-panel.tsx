import { DataTable } from "@/components/ui/datatable";
import { ColumnDef } from "@tanstack/react-table";
import { useServiceSelectedFeatures } from "../store";
import { useMemo } from "react";
import { Feature } from "ol";

export function SelectedFeaturesPanel() {
    const selectedFeatures = useServiceSelectedFeatures();

    const columns = useMemo(() => {
        const [keys] = [...selectedFeatures].reduce<[string[], Set<string>]>(
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
    }, [selectedFeatures]);

    return (
        <div className="p-4 h-full overflow-hidden w-full">
            {selectedFeatures.size !== 0 && (
                <DataTable
                    columns={columns}
                    data={[...selectedFeatures]}
                ></DataTable>
            )}
        </div>
    );
}
