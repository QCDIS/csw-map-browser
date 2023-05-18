import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useCatalogueActions } from "../store";
import { useState } from "react";

export function FilterPanel() {
    const { setSearchFilter } = useCatalogueActions();

    const [search, setSearch] = useState<string>("");

    function onSubmit() {
        setSearchFilter(search);
    }

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
                />
                <Button className="rounded-l-none" type="submit">
                    <SearchIcon className="h-5 w-5" />
                </Button>
            </form>
        </div>
    );
}
