import { PaginationState } from "@tanstack/react-table";
import { create } from "zustand";

type CatalogueStore = {
    selectedRecordId?: string;
    hoveredRecords: string[];
    pagination: PaginationState;
    mapBbox?: [readonly [number, number], readonly [number, number]];
    zoom: number;
    center: [number, number];

    filters: {
        search: string;
    };

    actions: {
        setHoveredRecords: (
            hoveredRecords: string[] | ((current: string[]) => string[])
        ) => void;
        selectRecord: (id: string | undefined) => void;
        setPagination: (pagination: PaginationState) => void;
        setMapBbox: (
            bbox:
                | [readonly [number, number], readonly [number, number]]
                | undefined
        ) => void;
        setZoom: (zoom: number) => void;
        setCenter: (center: [number, number]) => void;
        setSearchFilter: (search: string) => void;
    };
};

const useCatalogueStore = create<CatalogueStore>((set, get) => ({
    selectedRecordId: undefined,
    hoveredRecords: [],
    pagination: { pageIndex: 0, pageSize: 10 },
    mapBbox: undefined,
    zoom: 2,
    center: [0, 0],
    filters: {
        search: "",
    },
    actions: {
        setHoveredRecords: (hoveredRecords) =>
            set({
                hoveredRecords:
                    typeof hoveredRecords === "function"
                        ? hoveredRecords(get().hoveredRecords)
                        : hoveredRecords,
            }),
        selectRecord: (selectedRecordId) => set({ selectedRecordId }),
        setPagination: (pagination) => set({ pagination }),
        setMapBbox: (mapBbox) => set({ mapBbox }),
        setZoom: (zoom) => set({ zoom }),
        setCenter: (center) => set({ center }),
        setSearchFilter: (search) => set({ filters: { search } }),
    },
}));

export const useCatalogueSelectedRecordId = () =>
    useCatalogueStore((state) => state.selectedRecordId);
export const useCatalogueHoveredRecords = () =>
    useCatalogueStore((state) => state.hoveredRecords);
export const useCataloguePagination = () =>
    useCatalogueStore((state) => state.pagination);
export const useCatalogueMapBbox = () =>
    useCatalogueStore((state) => state.mapBbox);
export const useCatalogueSearchFilter = () =>
    useCatalogueStore((state) => state.filters.search);
export const useCatalogueZoom = () => useCatalogueStore((state) => state.zoom);
export const useCatalogueCenter = () =>
    useCatalogueStore((state) => state.center);

export const useCatalogueActions = () =>
    useCatalogueStore((state) => state.actions);
