import { CswClient } from "@/lib/csw/api";
import { useQuery } from "@tanstack/react-query";
import { useCatalogueLayoutData } from "./layout";
import { useCatalogueMapBbox, useCataloguePagination } from "./store";
import { useMemo } from "react";
import { MetadataRecord } from "@/lib/csw/parsing/md-metadata";

export function useRecordsQuery() {
    const data = useCatalogueLayoutData();
    const mapBbox = useCatalogueMapBbox();
    const pagination = useCataloguePagination();

    return useQuery({
        queryKey: [
            "records",
            data.csw.endpoint,
            mapBbox,
            pagination.pageSize,
            pagination.pageIndex,
        ],
        queryFn: async ({ signal }) => {
            const newRecords = await CswClient.getRecords(data.csw.endpoint, {
                signal,
                boundingBox: mapBbox,
                maxRecords: pagination.pageSize,
                startPosition: pagination.pageIndex * pagination.pageSize + 1,
            });

            return {
                records: new Map(
                    newRecords.searchResults.map(
                        (record) => [record.fileIdentifier, record] as const
                    )
                ),
                totalRecords: newRecords.numberOfRecordsMatched,
            };
        },
        retry: false,
        keepPreviousData: true,
    });
}

export function useRecords() {
    const { data } = useRecordsQuery();

    return useMemo(() => {
        if (!data) {
            return new Map<string, MetadataRecord>();
        }
        return data.records;
    }, [data]);
}
