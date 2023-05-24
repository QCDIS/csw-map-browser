import { CatalogueLayout } from "./routes/catalogue/layout.tsx";
import { loader as catalogueLayoutLoader } from "./routes/catalogue/loader.tsx";
import { CataloguePage } from "./routes/catalogue/page.tsx";
import { loader as recordPageLoader } from "./routes/catalogue/record/loader.tsx";
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
        loader: catalogueLayoutLoader,
        children: [
            {
                path: "catalogue/:endpoint/",
                element: <CataloguePage />,
            },
            {
                id: "record-page",
                path: "catalogue/:endpoint/record/:recordId/service/:serviceId/",
                element: <RecordPage />,
                loader: recordPageLoader,
            },
        ],
    },
]);
