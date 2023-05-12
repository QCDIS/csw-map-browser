import { CatalogueLayout } from "./routes/catalogue/layout.tsx";
import { CataloguePage } from "./routes/catalogue/page.tsx";
import { RecordPage } from "./routes/catalogue/record/page.tsx";
import { ErrorPage } from "./routes/error.tsx";
import { Index } from "./routes/index.tsx";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
        errorElement: <ErrorPage />,
    },
    {
        id: "catalogue-layout",
        element: <CatalogueLayout />,
        errorElement: <ErrorPage />,
        loader: CatalogueLayout.loader,
        children: [
            {
                path: "catalogue/:endpoint",
                element: <CataloguePage />,
            },
            {
                id: "record-page",
                path: "catalogue/:endpoint/record/:recordId",
                element: <RecordPage />,
                loader: RecordPage.loader,
            },
        ],
    },
]);
