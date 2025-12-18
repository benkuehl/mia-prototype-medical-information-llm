const MiaLogo = ({ className = "h-9 w-9" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield background */}
      <path
        d="M24 4L6 12v12c0 11 8 18 18 22 10-4 18-11 18-22V12L24 4z"
        fill="hsl(var(--primary))"
      />
      {/* Inner shield highlight */}
      <path
        d="M24 7L9 14v10c0 9 6.5 15 15 18.5V7z"
        fill="hsl(var(--primary))"
        opacity="0.8"
      />
      {/* Pill body */}
      <rect
        x="14"
        y="14"
        width="12"
        height="20"
        rx="6"
        fill="white"
      />
      {/* Pill divider line */}
      <line
        x1="14"
        y1="24"
        x2="26"
        y2="24"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        opacity="0.3"
      />
      {/* Smiley face - eyes */}
      <circle cx="17.5" cy="20" r="1.2" fill="hsl(var(--primary))" />
      <circle cx="22.5" cy="20" r="1.2" fill="hsl(var(--primary))" />
      {/* Smiley face - smile */}
      <path
        d="M17 26c0 0 1.5 2 3 2s3-2 3-2"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Checkmark circle */}
      <circle cx="34" cy="16" r="8" fill="white" />
      {/* Checkmark */}
      <path
        d="M30 16l2.5 2.5L37 13"
        stroke="hsl(var(--primary))"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export default MiaLogo;
