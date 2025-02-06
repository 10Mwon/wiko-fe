"use client";
export default function Search({
  size = 20,
  handler,
  className = "",
}: {
  size?: number;
  handler: () => void;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={handler}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3419 13.4392C9.60017 15.6351 5.58684 15.4623 3.04526 12.9207C0.318245 10.1937 0.318245 5.77229 3.04526 3.04527C5.77228 0.318245 10.1937 0.318245 12.9207 3.04527C15.4622 5.58684 15.6351 9.60016 13.4392 12.3419L18.7727 17.6755C19.0758 17.9785 19.0758 18.4697 18.7727 18.7727C18.4697 19.0758 17.9785 19.0758 17.6755 18.7727L12.3419 13.4392ZM4.14253 11.8234C2.02152 9.70239 2.02152 6.26355 4.14253 4.14253C6.26355 2.02152 9.70239 2.02152 11.8234 4.14253C13.9429 6.26199 13.9444 9.69735 11.8281 11.8187L11.8234 11.8234L11.8187 11.8281C9.69735 13.9444 6.26199 13.9429 4.14253 11.8234Z"
        fill="#555555"
        stroke="#555555"
        strokeLinecap="round"
      />
    </svg>
  );
}
