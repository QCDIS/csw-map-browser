import { useEffect, useRef, useState } from "react";
import { Feature, MapBrowserEvent, Map as OlMap, View } from "ol";
import GeoJson from "ol/format/GeoJSON";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import MapEvent from "ol/MapEvent";
import VectorSource from "ol/source/Vector";
import { asArray } from "ol/color";
import Layer from "ol/layer/Layer.js";
import WebGLVectorLayerRenderer from "ol/renderer/webgl/VectorLayer.js";
import { packColor } from "ol/renderer/webgl/shaders.js";
VectorLayer;

import "ol/ol.css";
import { FeatureLike } from "ol/Feature";
import { Pixel } from "ol/pixel";
import VectorLayer from "ol/layer/Vector";

type MapProps = {
    onMoveEnd?: (e: MapEvent) => void;
    onPointerMove?: (e: MapBrowserEvent<any>) => void;
    geoJson?: any;
};

class WebGLLayer extends Layer {
    createRenderer(): WebGLVectorLayerRenderer {
        return new WebGLVectorLayerRenderer(this, {
            fill: {
                attributes: {
                    color(feature: Feature) {
                        const color = asArray(
                            feature.get("COLOR") || "#FFFFFF"
                        );
                        color[3] = 0.85;
                        return packColor(color);
                    },
                    opacity() {
                        return 0.2;
                    },
                },
            },
            stroke: {
                attributes: {
                    color(feature: Feature) {
                        const color = [
                            ...asArray(feature.get("COLOR") || "#0F172A"),
                        ];
                        color.forEach(
                            (_, i) => (color[i] = Math.round(color[i] * 0.75))
                        ); // darken slightly
                        return packColor(color);
                    },
                    width() {
                        return 2;
                    },
                    opacity() {
                        return 1;
                    },
                },
            },
        });
    }

    getFeatures(pixel: Pixel): Promise<FeatureLike[]> {
        if (!this.getMapInternal()) return Promise.resolve([]);

        const features = (
            this.getSource() as VectorSource
        ).getFeaturesAtCoordinate(
            this.getMapInternal()!.getCoordinateFromPixel(pixel)
        );

        return Promise.resolve(features);
    }
}

export function GeoMap(props: MapProps) {
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

    useEffect(() => {
        if (!map) return;
        if (!props.onPointerMove) return;
        map.addEventListener("pointermove", props.onPointerMove as any);

        return () =>
            map.removeEventListener("pointermove", props.onPointerMove as any);
    }, [map, props.onPointerMove]);

    const vectorLayerRef = useRef<WebGLLayer>();
    useEffect(() => {
        if (!map) return;

        if (vectorLayerRef.current) {
            map.removeLayer(vectorLayerRef.current);
        }

        const layer = new WebGLLayer({
            source: new VectorSource({
                features: new GeoJson().readFeatures(props.geoJson),
            }),
            zIndex: 100,
        });
        map.addLayer(layer);
        console.log(props.geoJson);
        vectorLayerRef.current = layer;
    }, [map, props.geoJson]);

    return <div ref={mapRef} className="h-full w-full"></div>;
}
