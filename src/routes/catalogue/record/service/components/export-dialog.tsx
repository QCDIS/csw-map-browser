import {
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Feature } from "ol";
import { Code } from "./code";
import { Label } from "@/components/ui/label";
import { DownloadIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import db from "mime-db";
import { GeoJSON } from "ol/format";

function JupyterLogo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="currentColor"
            {...props}
        >
            <path d="M16.265 24.136c-5.068 0-9.599-1.871-12-4.537 0.932 2.401 2.537 4.537 4.667 6 2.136 1.469 4.667 2.265 7.333 2.265s5.204-0.796 7.333-2.265c2.136-1.463 3.735-3.599 4.667-6-2.401 2.667-6.932 4.537-12 4.537zM16.265 6.531c5.068 0 9.599 1.871 12 4.537-0.932-2.401-2.531-4.537-4.667-6-2.265-1.599-4.796-2.401-7.333-2.401-2.667 0-5.197 0.803-7.333 2.265-2.129 1.599-3.735 3.599-4.667 6.136 2.401-2.803 6.803-4.537 12-4.537zM25.599 0.136c-2.489 0-2.489 3.728 0 3.728s2.489-3.728 0-3.728zM6.803 27.068c-1.329 0-2.401 1.072-2.401 2.401 0 1.323 1.072 2.395 2.401 2.395 1.323 0 2.395-1.072 2.395-2.395 0-1.329-1.072-2.401-2.395-2.401zM4.803 3.068c-1.781 0-1.781 2.667 0 2.667 1.776 0 1.776-2.667 0-2.667z"></path>
        </svg>
    );
}

type Props =
    | {
          type: "features";
          features: Feature[];
      }
    | {
          type: "feature-type";
          url: string;
      }
    | {
          type: "online";
          online: {
              linkage: string;
          };
      };

export function ExportDialog(props: Props) {
    const linkage = props.type === "online" && props.online.linkage;
    const onlineQuery = useQuery({
        queryKey: ["online", props.type, linkage],
        queryFn: async () => {
            if (!linkage) return null;

            const res = await fetch(linkage, {
                method: "HEAD",
            });

            const contentType = res.headers
                .get("content-type")
                ?.split(";")
                ?.at(0);
            if (!contentType) return null;

            console.log(contentType);

            return db[contentType]?.extensions?.at(0) || null;
        },
        staleTime: Infinity,
    });

    let featureDownloadButton;
    if (props.type === "features") {
        const onClick = () => {
            const writer = new GeoJSON();
            const geoJson = writer.writeFeatures(props.features);
            const blob = new Blob([geoJson], {
                type: "application/json",
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "data.geojson";
            a.click();
        };

        featureDownloadButton = (
            <button
                className={cn(buttonVariants(), "self-start mb-3")}
                onClick={onClick}
            >
                <DownloadIcon className="mr-2 w-5 h-5" />
                <span>Download</span>
            </button>
        );
    }

    let jupyterContent;
    switch (props.type) {
        case "features":
            {
                const code = `import geopandas as gpd
filename = "data.geojson"
df = gpd.read_file(filename)`;

                jupyterContent = (
                    <>
                        <Label>1. Download file into Jupyter Notebook</Label>
                        {featureDownloadButton}
                        <Label>2. Insert code into Jupyter Notebook</Label>
                        <Code src={code}></Code>
                    </>
                );
            }
            break;
        case "feature-type":
            {
                const code = `import geopandas as gpd
url = "${props.url}"
df = gpd.read_file(url)`;

                jupyterContent = (
                    <>
                        <Label>Code</Label>
                        <Code src={code}></Code>
                    </>
                );
            }
            break;
        case "online":
            {
                const url = new URL(props.online.linkage);

                const fileExt =
                    onlineQuery.data ??
                    url.pathname.split("/").at(-1)?.split(".").at(1);
                const fileName = `data.${fileExt}`;

                const code = `import requests
import os

url = "${props.online.linkage}"
filename = "${fileName}"

if not os.path.exists(filename):
    with open(filename, "wb") as f:
        data = requests.get(url).content
        f.write(data)
else:
    with open(filename, "r") as f:
        data = f.read()`;
                jupyterContent = (
                    <>
                        <Label>Code</Label>
                        <Code src={code}></Code>
                    </>
                );
            }
            break;
    }

    return (
        <DialogContent className="overflow-hidden sm:max-w-3xl">
            <DialogHeader>
                <DialogTitle>Export data</DialogTitle>
            </DialogHeader>
            {/* <div className="max-h-48 overflow-auto">
                <FeaturesTable features={features} />
            </div> */}
            <Tabs defaultValue="jupyter" className="w-full min-w-0">
                <TabsList className="mb-4">
                    <TabsTrigger value="jupyter">
                        <JupyterLogo className="mr-2 w-5 h-5" /> Jupyter
                        Notebook
                    </TabsTrigger>
                    <TabsTrigger value="file">
                        <DownloadIcon className="mr-2 w-5 h-5" />
                        Download file
                    </TabsTrigger>
                </TabsList>

                <TabsContent
                    value="jupyter"
                    className="w-full flex flex-col gap-1.5"
                >
                    {jupyterContent}
                </TabsContent>
                <TabsContent
                    value="file"
                    className="w-full flex flex-col gap-1.5 items-start "
                >
                    <Label>File</Label>
                    {props.type === "online" ? (
                        <a
                            href={props.online.linkage ?? ""}
                            className={cn(buttonVariants())}
                        >
                            <DownloadIcon className="mr-2 w-5 h-5" />
                            <span>Download</span>
                        </a>
                    ) : props.type === "feature-type" ? (
                        <button
                            className={cn(buttonVariants())}
                            onClick={async () => {
                                const res = await fetch(props.url);
                                const blob = await res.blob();
                                const url = URL.createObjectURL(blob);

                                const a = document.createElement("a");
                                a.href = url;
                                a.download = "data.geojson";
                                a.click();
                            }}
                        >
                            <DownloadIcon className="mr-2 w-5 h-5" />
                            <span>Download</span>
                        </button>
                    ) : props.type === "features" ? (
                        featureDownloadButton
                    ) : null}
                </TabsContent>
            </Tabs>
        </DialogContent>
    );
}
