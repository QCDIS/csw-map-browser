import { CswClient } from "@/lib/csw/api";
import { LoaderFunctionArgs } from "react-router-dom";

export default function RecordPage() {
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
