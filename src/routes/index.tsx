import { useState } from "react";
import { Button } from "../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";

const DEV_DEFAULT_ENDPOINT =
    "https://nationaalgeoregister.nl/geonetwork/srv/eng/csw";

function Index() {
    const navigate = useNavigate();
    const [endpoint, setEndpoint] = useState(
        import.meta.env.DEV ? DEV_DEFAULT_ENDPOINT : ""
    );
    const [error, setError] = useState<string>();

    function goToCatalogue() {
        let url: URL | undefined = undefined;
        try {
            url = new URL(endpoint);
        } catch (e) {
            setError("Invalid URL");
            return;
        }

        navigate(`/catalogue/${encodeURIComponent(url.toString())}`);
    }

    return (
        <div className="grid place-content-center h-screen">
            <Card className={cn("w-[400px]")}>
                <CardHeader>
                    <CardTitle>View Metadata Catalogue</CardTitle>
                    <CardDescription>
                        Insert a CSW endpoint to browse the metadata catalogue
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="endpoint">CSW endpoint</Label>
                            <Input
                                id="endpoint"
                                placeholder="https://example.com/geonetwork/srv/eng/csw"
                                value={endpoint}
                                onChange={(e) => setEndpoint(e.target.value)}
                            />
                            {error && (
                                <p className="text-destructive text-sm">
                                    {error}
                                </p>
                            )}
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button className="w-full" onClick={goToCatalogue}>
                        View Catalogue
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Index;
