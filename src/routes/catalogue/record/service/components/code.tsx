import { getHighlighter, Lang, setCDN, setWasm } from "shiki";
import { CopyButton } from "./copy-button";
import { useQuery } from "@tanstack/react-query";

setCDN("https://unpkg.com/shiki/");
setWasm("https://unpkg.com/shiki/langs.wasm");

interface Props {
    src: string;
    lang?: Lang;
}

export function Code({ src, lang = "py" }: Props) {
    const query = useQuery({
        queryKey: ["shiki", src, lang],
        queryFn: async () => {
            return await getHighlighter({
                theme: "github-light",
                langs: ["py"],
            });
        },
        staleTime: Infinity,
    });

    if (!query.data) return null;

    const code = query.data.codeToHtml(src, {
        lang: lang,
    });

    return (
        <div className="relative w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto border p-2">
            <div dangerouslySetInnerHTML={{ __html: code }}></div>
            <CopyButton value={src} className="absolute top-2 right-2" />
        </div>
    );
}
