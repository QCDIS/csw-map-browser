import { PaginationState } from "@tanstack/react-table";
import { create } from "zustand";

type CatalogueStore = {
    selectedRecordId?: string;
    hoveredRecords: string[];
    pagination: PaginationState;
    mapBbox?: [readonly [number, number], readonly [number, number]];
    actions: {
        setHoveredRecords: (hoveredRecords: string[]) => void;
        selectRecord: (id: string | undefined) => void;
        setPagination: (pagination: PaginationState) => void;
        setMapBbox: (
            bbox:
                | [readonly [number, number], readonly [number, number]]
                | undefined
        ) => void;
    };
};

const useCatalogueStore = create<CatalogueStore>((set) => ({
    selectedRecordId: undefined,
    hoveredRecords: [],
    pagination: { pageIndex: 0, pageSize: 10 },
    mapBbox: undefined,
    actions: {
        setHoveredRecords: (hoveredRecords) => set({ hoveredRecords }),
        selectRecord: (selectedRecordId) => set({ selectedRecordId }),
        setPagination: (pagination) => set({ pagination }),
        setMapBbox: (mapBbox) => set({ mapBbox }),
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

export const useCatalogueActions = () =>
    useCatalogueStore((state) => state.actions);
