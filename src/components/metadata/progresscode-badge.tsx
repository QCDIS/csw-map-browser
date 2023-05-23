import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent } from "../ui/tooltip";
import { Badge } from "../ui/badge";
import {
    descriptionByProgressCode,
    displayNameByProgressCode,
} from "@/lib/csw/parsing/progresscode";

type ProgressCodeBadgeProps = {
    progressCode: string;
} & React.ComponentProps<typeof Badge>;

export const ProgressCodeBadge = ({
    progressCode,
    ...props
}: ProgressCodeBadgeProps) => {
    return (
        <Tooltip>
            <TooltipTrigger>
                <Badge {...props}>
                    {displayNameByProgressCode[
                        progressCode as keyof typeof displayNameByProgressCode
                    ] ?? progressCode}
                </Badge>
            </TooltipTrigger>
            <TooltipContent className="w-96 font-normal">
                {descriptionByProgressCode[
                    progressCode as keyof typeof descriptionByProgressCode
                ] ?? progressCode}
            </TooltipContent>
        </Tooltip>
    );
};
