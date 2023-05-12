import { MetadataRecord } from "@/lib/csw/parsing/md-metadata";
import { create } from "zustand";

interface CatalogueStore {
    records: Map<string, MetadataRecord>;
    actions: {
        setRecords: (records: Map<string, MetadataRecord>) => void;
    };
}

const useCatalogueStore = create<CatalogueStore>((set) => ({
    records: new Map(),
    actions: {
        setRecords: (records) => set({ records }),
    },
}));

export const useCatalogueRecords = () =>
    useCatalogueStore((state) => state.records);
export const useCatalogueActions = () =>
    useCatalogueStore((state) => state.actions);
