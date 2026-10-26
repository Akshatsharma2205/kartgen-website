import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
}

export function Logo({
  variant = "dark",
  size = "md",
  showSubtitle = true,
}: LogoProps) {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: "h-8",
    md: "h-9",
    lg: "h-11",
  };

  const textClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-kg-blue focus-visible:ring-offset-2 rounded-lg"
      aria-label="Kartgen Infotech LLP - Return to Home"
    >
      {/* Official Logo Slot:
          If an official vector logo file is added to public/brand/,
          it can be swapped here directly. */}
      <div className={`relative flex items-center justify-center shrink-0 ${sizeClasses[size]} aspect-square rounded-xl bg-kg-navy shadow-sm transition-transform duration-200 group-hover:scale-105`}>
        <svg
          viewBox="0 0 64 64"
          className="w-full h-full p-1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect width="64" height="64" rx="14" fill="#10233F" />
          <path
            d="M18 23.5C18 20.46 20.46 18 23.5 18H40.5C43.54 18 46 20.46 46 23.5V25H38V24H26V40H38V35H46V40.5C46 43.54 43.54 46 40.5 46H23.5C20.46 46 18 43.54 18 40.5V23.5Z"
            fill="#FFFFFF"
          />
          <path
            d="M29 31H45"
            stroke="#1769E8"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-bold tracking-tight leading-none ${textClasses[size]} ${
            isLight ? "text-white" : "text-kg-navy"
          }`}
        >
          Kartgen
        </span>
        {showSubtitle && (
          <span
            className={`text-[10px] uppercase font-semibold tracking-widest mt-1 leading-none ${
              isLight ? "text-slate-300" : "text-kg-muted"
            }`}
          >
            Infotech LLP
          </span>
        )}
      </div>
    </Link>
  );
}
