export default function Newspaper({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.93496 1.75L3.9375 1.75H18.8125L18.815 1.75C19.394 1.75168 19.9488 1.98242 20.3582 2.39182C20.7676 2.80121 20.9983 3.35599 21 3.93496L21 3.9375V22.7423H19.25V3.93918C19.2494 3.82289 19.203 3.7115 19.1207 3.62926C19.0385 3.54703 18.9272 3.50058 18.8109 3.5H3.93911C3.82284 3.50058 3.71149 3.54703 3.62926 3.62926C3.54703 3.71149 3.50058 3.82284 3.5 3.93911V23.186C3.50134 23.5341 3.6402 23.8675 3.88633 24.1137C4.13251 24.3598 4.46601 24.4987 4.81412 24.5H22.75V26.25H4.8125L4.80989 26.25C3.9991 26.2476 3.22221 25.9244 2.6489 25.3511C2.07558 24.7778 1.75243 24.0009 1.75 23.1901L1.75 23.1875V3.9375L1.75 3.93496C1.75168 3.35599 1.98243 2.80121 2.39182 2.39182C2.80121 1.98243 3.35599 1.75168 3.93496 1.75Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.25 7C19.25 6.51675 19.6418 6.125 20.125 6.125H24.0625C24.6427 6.125 25.1991 6.35547 25.6093 6.7657C26.0195 7.17594 26.25 7.73234 26.25 8.3125V22.75C26.25 23.6783 25.8813 24.5685 25.2249 25.2249C24.5685 25.8813 23.6783 26.25 22.75 26.25C21.8217 26.25 20.9315 25.8813 20.2751 25.2249C19.6187 24.5685 19.25 23.6783 19.25 22.75V7ZM21 7.875V22.75C21 23.2141 21.1844 23.6592 21.5126 23.9874C21.8408 24.3156 22.2859 24.5 22.75 24.5C23.2141 24.5 23.6592 24.3156 23.9874 23.9874C24.3156 23.6592 24.5 23.2141 24.5 22.75V8.3125C24.5 8.19647 24.4539 8.08519 24.3719 8.00314C24.2898 7.92109 24.1785 7.875 24.0625 7.875H21Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.25 7C12.25 6.51675 12.6418 6.125 13.125 6.125H16.625C17.1082 6.125 17.5 6.51675 17.5 7C17.5 7.48325 17.1082 7.875 16.625 7.875H13.125C12.6418 7.875 12.25 7.48325 12.25 7Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.25 10.5C12.25 10.0168 12.6418 9.625 13.125 9.625H16.625C17.1082 9.625 17.5 10.0168 17.5 10.5C17.5 10.9832 17.1082 11.375 16.625 11.375H13.125C12.6418 11.375 12.25 10.9832 12.25 10.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.25 14C5.25 13.5168 5.64175 13.125 6.125 13.125H16.625C17.1082 13.125 17.5 13.5168 17.5 14C17.5 14.4832 17.1082 14.875 16.625 14.875H6.125C5.64175 14.875 5.25 14.4832 5.25 14Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.25 17.5C5.25 17.0168 5.64175 16.625 6.125 16.625H16.625C17.1082 16.625 17.5 17.0168 17.5 17.5C17.5 17.9832 17.1082 18.375 16.625 18.375H6.125C5.64175 18.375 5.25 17.9832 5.25 17.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.25 21C5.25 20.5168 5.64175 20.125 6.125 20.125H16.625C17.1082 20.125 17.5 20.5168 17.5 21C17.5 21.4832 17.1082 21.875 16.625 21.875H6.125C5.64175 21.875 5.25 21.4832 5.25 21Z"
        fill={color}
      />
      <path
        d="M9.625 11.375H6.125C5.89294 11.375 5.67038 11.2828 5.50628 11.1187C5.34219 10.9546 5.25 10.7321 5.25 10.5V7C5.25 6.76794 5.34219 6.54538 5.50628 6.38128C5.67038 6.21719 5.89294 6.125 6.125 6.125H9.625C9.85706 6.125 10.0796 6.21719 10.2437 6.38128C10.4078 6.54538 10.5 6.76794 10.5 7V10.5C10.5 10.7321 10.4078 10.9546 10.2437 11.1187C10.0796 11.2828 9.85706 11.375 9.625 11.375Z"
        fill={color}
      />
    </svg>
  );
}
