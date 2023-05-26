import { create } from "zustand";

type ServiceStore = {
    selectedFeatureType?: string;

    actions: {
        setSelectedFeatureType: (featureType: string | undefined) => void;
    };
};

const useServiceStore = create<ServiceStore>((set) => ({
    selectedFeatureType: undefined,
    actions: {
        setSelectedFeatureType: (selectedFeatureType) =>
            set({ selectedFeatureType }),
    },
}));

export const useServiceSelectedFeatureType = () =>
    useServiceStore((state) => state.selectedFeatureType);

export const useServiceActions = () =>
    useServiceStore((state) => state.actions);
