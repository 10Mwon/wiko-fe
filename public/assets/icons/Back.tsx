export default function Back({
  size = "24",
  color = "#21272A",
}: {
  size?: string;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.8656 5.19692C19.3781 5.70949 19.3781 6.54051 18.8656 7.05308L11.9187 14L18.8656 20.9469C19.3781 21.4595 19.3781 22.2905 18.8656 22.8031C18.353 23.3156 17.522 23.3156 17.0094 22.8031L9.13442 14.9281C8.62186 14.4155 8.62186 13.5845 9.13442 13.0719L17.0094 5.19692C17.522 4.68436 18.353 4.68436 18.8656 5.19692Z"
        fill={color}
      />
    </svg>
  );
}
