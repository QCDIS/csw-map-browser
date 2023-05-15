import { MetadataRecord } from "@/lib/csw/parsing/md-metadata";
import { create } from "zustand";

type Status =
    | { type: "idle" }
    | { type: "loading" }
    | { type: "error"; error: Error };

type CatalogueStore = {
    records: Map<string, MetadataRecord>;
    recordStatus: Status;
    selectedRecordId?: string;
    hoveredRecords: string[];
    actions: {
        setRecords: (records: Map<string, MetadataRecord>) => void;
        setRecordStatus: (status: Status) => void;
        setHoveredRecords: (hoveredRecords: string[]) => void;
        selectRecord: (id: string | undefined) => void;
    };
};

const useCatalogueStore = create<CatalogueStore>((set, get) => ({
    records: new Map(),
    recordStatus: { type: "idle" },
    selectedRecordId: undefined,
    hoveredRecords: [],
    actions: {
        setRecords: (records) => {
            const { hoveredRecords, selectedRecordId } = get();

            return set({
                records,
                hoveredRecords: hoveredRecords.filter((id) => records.has(id)),
                selectedRecordId:
                    selectedRecordId && records.has(selectedRecordId)
                        ? selectedRecordId
                        : undefined,
            });
        },
        setRecordStatus: (recordStatus) => set({ recordStatus }),
        setHoveredRecords: (hoveredRecords) => set({ hoveredRecords }),
        selectRecord: (selectedRecordId) => set({ selectedRecordId }),
    },
}));

export const useCatalogueRecords = () =>
    useCatalogueStore((state) => state.records);
export const useCatalogueRecordStatus = () =>
    useCatalogueStore((state) => state.recordStatus);
export const useCatalogueSelectedRecordId = () =>
    useCatalogueStore((state) => state.selectedRecordId);
export const useCatalogueHoveredRecords = () =>
    useCatalogueStore((state) => state.hoveredRecords);

export const useCatalogueActions = () =>
    useCatalogueStore((state) => state.actions);
