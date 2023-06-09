import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import {
    useCatalogueActions,
    useCatalogueSearchFilter,
    useCatalogueTopicCodesFilter,
    useCatalogueTypesFilter,
} from "../store";
import { useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { displayNameByTopicCode } from "@/lib/csw/parsing/topic-code";
import { displayNameByScopeCode } from "@/lib/csw/parsing/scope-code";
import { Checkbox } from "@/components/ui/checkbox";

export function FilterPanel() {
    const searchFilter = useCatalogueSearchFilter();
    const topicCodes = useCatalogueTopicCodesFilter();
    const types = useCatalogueTypesFilter();
    const { setSearchFilter, setTopicCodesFilter, setTypesFilter } =
        useCatalogueActions();

    const [search, setSearch] = useState<string>("");

    function onSubmit() {
        setSearchFilter(search);
    }

    const searchFilterRef = useRef(searchFilter);
    useEffect(() => {
        setSearch(searchFilterRef.current);
    }, []);

    return (
        <div className="flex flex-col gap-4">
            <form
                className="flex"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}
            >
                <Input
                    placeholder="Search"
                    className="rounded-r-none"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onBlur={onSubmit}
                />
                <Button className="rounded-l-none" type="submit">
                    <SearchIcon className="h-5 w-5" />
                </Button>
            </form>

            <div>
                <Label className="font-bold">Topic code</Label>
                <div className="flex flex-col gap-1">
                    {(
                        Object.keys(
                            displayNameByTopicCode
                        ) as (keyof typeof displayNameByTopicCode)[]
                    ).map((topicCode) => (
                        <div
                            className="flex items-center gap-2"
                            key={topicCode}
                        >
                            <Checkbox
                                checked={topicCodes.has(topicCode)}
                                onCheckedChange={(checked) => {
                                    const newTopicCodes = new Set(topicCodes);
                                    if (checked) {
                                        newTopicCodes.add(topicCode);
                                    } else {
                                        newTopicCodes.delete(topicCode);
                                    }
                                    setTopicCodesFilter(newTopicCodes);
                                }}
                            />
                            <label className="text-sm font-medium leading-none truncate">
                                {displayNameByTopicCode[topicCode]}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <Label className="font-bold">Resource type</Label>
                <div className="flex flex-col gap-1">
                    {(
                        Object.keys(
                            displayNameByScopeCode
                        ) as (keyof typeof displayNameByScopeCode)[]
                    ).map((scopeCode) => (
                        <div
                            className="flex items-center gap-2"
                            key={scopeCode}
                        >
                            <Checkbox
                                checked={types.has(scopeCode)}
                                onCheckedChange={(checked) => {
                                    const newTypes = new Set(types);
                                    if (checked) {
                                        newTypes.add(scopeCode);
                                    } else {
                                        newTypes.delete(scopeCode);
                                    }
                                    setTypesFilter(newTypes);
                                }}
                            />
                            <label className="text-sm font-medium leading-none truncate">
                                {displayNameByScopeCode[scopeCode]}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
