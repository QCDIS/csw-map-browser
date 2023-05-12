import { Link, useRouteError } from "react-router-dom";

export function ErrorPage() {
    const error = useRouteError() as any;
    console.error(error);

    return (
        <div className="h-screen flex flex-col justify-center gap-12 items-center">
            <h1 className="text-6xl font-bold">Error</h1>
            <p className="text-center">
                An unexpected error has occurred.
                <br />
                <Link to="/">Go back to the homepage</Link>
            </p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
