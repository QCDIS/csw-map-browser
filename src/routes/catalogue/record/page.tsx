import { CswClient } from "@/lib/csw/api";
import { LoaderFunctionArgs, useRouteLoaderData } from "react-router-dom";

export function RecordPage() {
    return <div>Record</div>;
}
RecordPage.loader = loader;

async function loader({ params }: LoaderFunctionArgs) {
    const record = await CswClient.getRecordById(
        params.endpoint!,
        params.recordId!
    );
    return {
        recordId: params.recordId!,
        record,
    };
}

export function useRecordPageData() {
    return useRouteLoaderData("record-page") as Awaited<
        ReturnType<typeof loader>
    >;
}
