import { useNavigate, useRouteError } from "react-router-dom";

export function ErrorPage() {
    const navigate = useNavigate();
    const error = useRouteError() as any;
    console.error(error);

    return (
        <div className="h-screen flex flex-col justify-center gap-12 items-center">
            <h1 className="text-6xl font-bold">Error</h1>
            <p className="text-center">
                An error has occurred.
                <br />
                <button onClick={() => navigate(-1)} className="font-bold">
                    Go back
                </button>
            </p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
