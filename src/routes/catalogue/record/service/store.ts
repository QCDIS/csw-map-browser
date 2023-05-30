import { Feature } from "ol";
import { create } from "zustand";

type ServiceStore = {
    selectedFeatureType?: string;
    selectedFeatures: Set<Feature>;
    hoveredFeatures: Feature[];

    actions: {
        setSelectedFeatureType: (featureType: string | undefined) => void;
        setSelectedFeatures: (
            features: Set<Feature> | ((current: Set<Feature>) => Set<Feature>)
        ) => void;
        setHoveredFeatures: (
            features: Feature[] | ((current: Feature[]) => Feature[])
        ) => void;
    };
};

const useServiceStore = create<ServiceStore>((set, get) => ({
    selectedFeatureType: undefined,
    selectedFeatures: new Set(),
    hoveredFeatures: [],
    actions: {
        setSelectedFeatureType: (selectedFeatureType) =>
            set({
                selectedFeatureType,
                selectedFeatures: new Set(),
                hoveredFeatures: [],
            }),
        setSelectedFeatures: (selectedFeatures) =>
            set({
                selectedFeatures:
                    typeof selectedFeatures === "function"
                        ? selectedFeatures(get().selectedFeatures)
                        : selectedFeatures,
            }),
        setHoveredFeatures: (hoveredFeatures) =>
            set({
                hoveredFeatures:
                    typeof hoveredFeatures === "function"
                        ? hoveredFeatures(get().hoveredFeatures)
                        : hoveredFeatures,
            }),
    },
}));

export const useServiceSelectedFeatureType = () =>
    useServiceStore((state) => state.selectedFeatureType);
export const useServiceSelectedFeatures = () =>
    useServiceStore((state) => state.selectedFeatures);
export const useServiceHoveredFeatures = () =>
    useServiceStore((state) => state.hoveredFeatures);

export const useServiceActions = () =>
    useServiceStore((state) => state.actions);
