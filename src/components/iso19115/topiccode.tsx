import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent } from "../ui/tooltip";
import { Badge } from "../ui/badge";
import {
    descriptionByTopicCode,
    displayNameByTopicCode,
} from "@/lib/csw/parsing/topic-code";

type TopicCodeBadgeProps = {
    topicCode: string;
} & React.ComponentProps<typeof Badge>;

export const TopicCodeBadge = ({
    topicCode,
    ...props
}: TopicCodeBadgeProps) => {
    return (
        <Tooltip>
            <TooltipTrigger>
                <Badge {...props}>
                    {displayNameByTopicCode[
                        topicCode as keyof typeof displayNameByTopicCode
                    ] ?? topicCode}
                </Badge>
            </TooltipTrigger>
            <TooltipContent>
                {descriptionByTopicCode[
                    topicCode as keyof typeof descriptionByTopicCode
                ] ?? topicCode}
            </TooltipContent>
        </Tooltip>
    );
};
