import OlLayer from "ol/layer/Layer";
import { useMap } from "./context";
import { useEffect } from "react";

type LayerProps = {
    layer: OlLayer | undefined;
};

export function Layer(props: LayerProps) {
    const map = useMap();

    useEffect(() => {
        if (!props.layer) return;

        map?.addLayer(props.layer);

        return () => {
            map?.removeLayer(props.layer!);
        };
    }, [map, props.layer]);

    return null;
}
