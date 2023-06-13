import { Stroke, Fill, Style } from "ol/style";
import CircleStyle from "ol/style/Circle";

const DEFAULT_STROKE = new Stroke({
    color: "#0f172a",
    width: 2,
});

const DEFAULT_FILL = new Fill({
    color: "rgba(255,255,255,0.2)",
});

export const DEFAULT_STYLE = new Style({
    fill: DEFAULT_FILL,
    stroke: DEFAULT_STROKE,
    image: new CircleStyle({
        radius: 5,
        fill: DEFAULT_FILL,
        stroke: DEFAULT_STROKE,
    }),
});

const HOVERED_STROKE = new Stroke({
    color: "#0f172a",
    width: 4,
});

const HOVERED_FILL = new Fill({
    color: "rgba(0,0,0,0.05)",
});

export const HOVERED_STYLE = new Style({
    fill: HOVERED_FILL,
    stroke: HOVERED_STROKE,
    image: new CircleStyle({
        radius: 5,
        fill: HOVERED_FILL,
        stroke: HOVERED_STROKE,
    }),
});

const SELECTED_STROKE = new Stroke({
    color: "#1d4ed8",
    width: 4,
});

const SELECTED_FILL = new Fill({
    color: "rgba(255,255,255,0.2)",
});

export const SELECTED_STYLE = new Style({
    fill: SELECTED_FILL,
    stroke: SELECTED_STROKE,
    image: new CircleStyle({
        radius: 5,
        fill: SELECTED_FILL,
        stroke: SELECTED_STROKE,
    }),
    zIndex: 1000,
});
