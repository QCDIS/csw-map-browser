import { useMap } from "./context";
import { useEffect } from "react";
import { Interaction as OlInteraction } from "ol/interaction";

type InteractionProps = {
    interaction: OlInteraction | undefined;
};

export function Interaction(props: InteractionProps) {
    const map = useMap();

    useEffect(() => {
        if (!props.interaction) return;

        map?.addInteraction(props.interaction);

        return () => {
            map?.removeInteraction(props.interaction!);
        };
    }, [map, props.interaction]);

    return null;
}
