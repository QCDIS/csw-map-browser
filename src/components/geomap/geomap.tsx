import React, { useCallback, useEffect, useRef, useState } from "react";
import { MapBrowserEvent, Map as OlMap, View } from "ol";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import MapEvent from "ol/MapEvent";
import { MapProvider } from "./context";

import "ol/ol.css";

type Map = {
    onMoveEnd?: (e: MapEvent) => void;
    onPointerMove?: (e: MapBrowserEvent<any>) => void;
    onClick?: (e: MapBrowserEvent<any>) => void;
    children?: React.ReactNode;
    zoom: number;
    setZoom: (zoom: number) => void;
    center: [number, number];
    setCenter: (center: [number, number]) => void;
};

export function GeoMap({
    onMoveEnd,
    onPointerMove,
    onClick,
    children,
    zoom,
    setZoom,
    center,
    setCenter,
}: Map) {
    const mapRef = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<OlMap | undefined>(undefined);

    const initialZoom = useRef(zoom);
    const initialCenter = useRef(center);

    useEffect(() => {
        const m = new OlMap({
            view: new View({
                center: initialCenter.current,
                zoom: initialZoom.current,
            }),
            target: mapRef.current!,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            controls: [],
        });

        setMap(m);

        return () => m.dispose();
    }, []);

    useEffect(() => {
        if (!map) return;
        map.getView().setZoom(zoom);
    }, [map, zoom]);

    useEffect(() => {
        if (!map) return;
        map.getView().setCenter(center);
    }, [map, center]);

    const onMoveEndCallback = useCallback(
        (e: MapEvent) => {
            const zoom = e.map.getView().getZoom();
            if (zoom !== undefined) {
                setZoom(zoom);
            }
            const center = e.map.getView().getCenter();
            if (center !== undefined) {
                setCenter(center as [number, number]);
            }

            onMoveEnd?.(e);
        },
        [onMoveEnd, setCenter, setZoom]
    );

    useEffect(() => {
        if (!map) return;
        map.addEventListener("moveend", onMoveEndCallback as any);

        return () =>
            map.removeEventListener("moveend", onMoveEndCallback as any);
    }, [map, onMoveEndCallback]);

    useEffect(() => {
        if (!map) return;
        if (!onPointerMove) return;
        map.addEventListener("pointermove", onPointerMove as any);

        return () =>
            map.removeEventListener("pointermove", onPointerMove as any);
    }, [map, onPointerMove]);

    useEffect(() => {
        if (!map) return;
        if (!onClick) return;
        map.addEventListener("click", onClick as any);

        return () => map.removeEventListener("click", onClick as any);
    }, [map, onClick]);

    return (
        <MapProvider value={{ map }}>
            <div ref={mapRef} className="h-full w-full relative">
                {children}
            </div>
        </MapProvider>
    );
}
