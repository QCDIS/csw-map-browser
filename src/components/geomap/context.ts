import { Map } from "ol";
import { createContext, useContext } from "react";

const MapContext = createContext<{ map: Map | undefined }>({ map: undefined });

export const MapProvider = MapContext.Provider;

export const useMap = () => {
    const map = useContext(MapContext);
    if (!map) {
        throw new Error("No map context");
    }

    return map.map;
};
