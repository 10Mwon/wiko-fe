"use client";

export function LinkToChat() {
  const handleClick = () => {};

  return (
    <div
      className="relative w-full h-[54px] rounded-full bg-[#F0F0F0] cursor-pointer overflow-hidden mb-[58px]"
      onClick={handleClick}
    >
      <div className="absolute top-0 left-0 h-full w-[114px] bg-[#ADE6BB] rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out ">
        <span className="text-gray-600 text-xl font-semibold font-lexend">
          Chat
        </span>
      </div>
    </div>
  );
}
