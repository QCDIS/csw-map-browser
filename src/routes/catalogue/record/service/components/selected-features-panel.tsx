import { useServiceSelectedFeatures } from "../store";
import { Button, buttonVariants } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ExportDialog } from "./export-dialog";
import { cn } from "@/lib/utils";
import { FeaturesTable } from "./features-table";
import { useServicePageData } from "../loader";
import { WfsClient } from "@/lib/wfs/api";
import { getOutputFormat } from "../query";
import { useServiceSelectedFeatureType } from "../store";

export function SelectedFeaturesPanel() {
    const data = useServicePageData()!;
    const selectedFeatures = useServiceSelectedFeatures();
    const typeName = useServiceSelectedFeatureType();

    let featureTypeUrl: string | undefined;
    if (data.type === "wfs" && data.wfs.capabilities) {
        const outputFormat = getOutputFormat(data.wfs.capabilities);
        if (outputFormat) {
            featureTypeUrl = WfsClient.createGetFeatureUrl(
                data.service.linkage,
                typeName!,
                outputFormat
            );
        }
    }

    return (
        <div className="p-4 h-full overflow-hidden w-full flex flex-col gap-2">
            {selectedFeatures.size !== 0 ? (
                <>
                    <FeaturesTable features={[...selectedFeatures]} />
                    <Dialog>
                        <DialogTrigger
                            className={cn(buttonVariants(), "self-end")}
                        >
                            Export selected features
                        </DialogTrigger>
                        <ExportDialog
                            type="features"
                            features={[...selectedFeatures]}
                        />
                    </Dialog>
                </>
            ) : data.type === "wfs" ? (
                <div className="flex justify-center items-center h-full">
                    <Dialog>
                        <DialogTrigger>
                            <Button>Export all features of feature type</Button>
                            <p className="text-muted-foreground mt-2 text-sm">
                                Or select features in the map to export
                            </p>
                        </DialogTrigger>
                        <ExportDialog
                            type="feature-type"
                            url={featureTypeUrl!}
                        />
                    </Dialog>
                </div>
            ) : null}
        </div>
    );
}
