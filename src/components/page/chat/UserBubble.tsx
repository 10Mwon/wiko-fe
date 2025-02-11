export default function UserBubble({ text }: { text: string }) {
  return (
    <div className="rounded-b-3xl rounded-l-3xl inline-block bg-wikoBlue p-4 mb-2  text-white whitespace-pre-line mt-6">
      {text}
    </div>
  );
}
