import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export function FilterPanel() {
    return (
        <div className="flex flex-col">
            <form
                className="flex"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <Input placeholder="Search" className="rounded-r-none" />
                <Button className="rounded-l-none" type="submit">
                    <SearchIcon className="h-5 w-5" />
                </Button>
            </form>
        </div>
    );
}
