import React, { useEffect, useRef, useState } from "react";
import { MapBrowserEvent, Map as OlMap, View } from "ol";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import MapEvent from "ol/MapEvent";
import { MapProvider } from "./context";

import "ol/ol.css";

type MapProps = {
    onMoveEnd?: (e: MapEvent) => void;
    onPointerMove?: (e: MapBrowserEvent<any>) => void;
    children?: React.ReactNode;
};

export function GeoMap(props: MapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<OlMap | undefined>(undefined);

    useEffect(() => {
        const map = new OlMap({
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
            target: mapRef.current!,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            controls: [],
        });

        setMap(map);

        return () => map.dispose();
    }, []);

    useEffect(() => {
        if (!map) return;
        if (!props.onMoveEnd) return;
        map.addEventListener("moveend", props.onMoveEnd as any);

        return () => map.removeEventListener("moveend", props.onMoveEnd as any);
    }, [map, props.onMoveEnd]);

    useEffect(() => {
        if (!map) return;
        if (!props.onPointerMove) return;
        map.addEventListener("pointermove", props.onPointerMove as any);

        return () =>
            map.removeEventListener("pointermove", props.onPointerMove as any);
    }, [map, props.onPointerMove]);

    return (
        <MapProvider value={{ map }}>
            <div ref={mapRef} className="h-full w-full relative">
                {props.children}
            </div>
        </MapProvider>
    );
}
