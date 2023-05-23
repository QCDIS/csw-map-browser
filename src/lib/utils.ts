import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Converts a coordinate pair from EPSG:4326 to EPSG:3857
export function coordsTo3857([lon, lat]: readonly [number, number]) {
    const x = (lon * 20037508.34) / 180;
    let y = Math.log(Math.tan(((90 + lat) * Math.PI) / 360)) / (Math.PI / 180);
    y = (y * 20037508.34) / 180;
    return [x, y] as const;
}

export function coordsFrom3857([x, y]: readonly [number, number]) {
    const lon = (x / 20037508.34) * 180;
    let lat = (y / 20037508.34) * 180;
    lat =
        (180 / Math.PI) *
        (2 * Math.atan(Math.exp((lat * Math.PI) / 180)) - Math.PI / 2);
    return [lon, lat] as const;
}

export function truncate(str: string, length: number) {
    if (str.length <= length) {
        return str;
    }

    return str.slice(0, length - 3) + "...";
}
