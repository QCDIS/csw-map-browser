import { useEffect, useRef, useState } from "react";
import { Map as OlMap, View } from "ol";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import MapEvent from "ol/MapEvent";

import "ol/ol.css";

type MapProps = {
    onMoveEnd?: (e: MapEvent) => void;
};

export function Map(props: MapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<OlMap | null>(null);

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

    return <div ref={mapRef} className="h-full w-full"></div>;
}
