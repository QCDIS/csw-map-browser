import { useEffect, useRef, useState } from "react";
import { Map as OlMap, View } from "ol";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";

import "ol/ol.css";

export function Map() {
    const mapRef = useRef<HTMLDivElement>(null);
    const [_map, setMap] = useState<OlMap | null>(null);

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

    return <div ref={mapRef} className="h-full w-full"></div>;
}
