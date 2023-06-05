import { CswClient } from "@/lib/csw/api";
import { useQuery } from "@tanstack/react-query";
import {
    useCatalogueMapBbox,
    useCataloguePagination,
    useCatalogueSearchFilter,
    useCatalogueTopicCodesFilter,
    useCatalogueTypesFilter,
} from "./store";
import { useMemo } from "react";
import { MetadataRecord } from "@/lib/csw/parsing/md-metadata";
import { useCatalogueLayoutData } from "./loader";
import { CswFilter } from "@/lib/csw/filters";

export function useRecordsQuery() {
    const data = useCatalogueLayoutData();
    const mapBbox = useCatalogueMapBbox();
    const pagination = useCataloguePagination();
    const search = useCatalogueSearchFilter();
    const topicCodes = useCatalogueTopicCodesFilter();
    const types = useCatalogueTypesFilter();

    return useQuery({
        queryKey: [
            "records",
            data.csw.endpoint,
            mapBbox,
            pagination.pageSize,
            pagination.pageIndex,
            search,
            [...topicCodes],
            [...types],
        ],
        enabled: !!mapBbox,
        queryFn: async ({ signal }) => {
            const filter: CswFilter = {
                type: "And",
                filters: [
                    {
                        type: "Or",
                        filters: [...topicCodes].map((topicCode) => ({
                            type: "PropertyIsEqualTo",
                            property: "csw:TopicCategory",
                            value: topicCode,
                        })),
                    },
                    {
                        type: "Or",
                        filters: [...types].map((type) => ({
                            type: "PropertyIsEqualTo",
                            property: "csw:Type",
                            value: type,
                        })),
                    },
                ],
            };

            if (mapBbox) {
                filter.filters.push({
                    type: "Within",
                    property: "ows:BoundingBox",
                    lowerCorner: mapBbox[0],
                    upperCorner: mapBbox[1],
                });
            }
            if (search) {
                filter.filters.push({
                    type: "PropertyIsLike",
                    property: "csw:AnyText",
                    value: `*${search}*`,
                });
            }

            const newRecords = await CswClient.getRecords(data.csw.endpoint, {
                signal,
                filter,
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
