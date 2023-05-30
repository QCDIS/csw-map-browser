import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useCatalogueActions, useCatalogueSearchFilter } from "../store";
import { useEffect, useRef, useState } from "react";

export function FilterPanel() {
    const searchFilter = useCatalogueSearchFilter();
    const { setSearchFilter } = useCatalogueActions();

    const [search, setSearch] = useState<string>("");

    function onSubmit() {
        setSearchFilter(search);
    }

    const searchFilterRef = useRef(searchFilter);
    useEffect(() => {
        setSearch(searchFilterRef.current);
    }, []);

    return (
        <div className="flex flex-col">
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
        </div>
    );
}
