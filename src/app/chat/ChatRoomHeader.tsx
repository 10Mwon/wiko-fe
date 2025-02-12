import BackButton from "@/components/ui/button/BackButton";

export default function ChatRoomHeader() {
  return (
    <header className="fixed w-full px-3 pt-6 bg-white">
      <BackButton className="fixed top-6" />
      <h1 className="text-center font-semibold font-lexend mt-3">
        Liu Hongfei님
        <br />
        반가워요,Wiko봇이에요!
      </h1>
    </header>
  );
}
