import ReactMarkdown from "react-markdown";
export default function WikoBubble({ text }: { text: string }) {
  return (
    <div className="rounded-b-3xl rounded-r-3xl inline-block bg-wikoGray p-4 mb-2 whitespace-pre-line ">
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
}
