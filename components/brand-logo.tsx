import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  showWordmark?: boolean;
  inverted?: boolean;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({
  className,
  showWordmark = true,
  inverted = false,
  size = "md",
}: BrandLogoProps) {
  const iconSizes = {
    sm: "h-9 w-9",
    md: "h-11 w-11",
    lg: "h-14 w-14",
  };

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("shrink-0", iconSizes[size])}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="baSun" x1="60" y1="22" x2="60" y2="62" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCD647" />
            <stop offset="1" stopColor="#E8A30A" />
          </linearGradient>
          <linearGradient id="baLeaf" x1="16" y1="16" x2="104" y2="104" gradientUnits="userSpaceOnUse">
            <stop stopColor="#65A30D" />
            <stop offset="1" stopColor="#1B5E20" />
          </linearGradient>
          <clipPath id="baCircleClip">
            <circle cx="60" cy="60" r="42" />
          </clipPath>
        </defs>

        {/* Outer botanical leaf arc */}
        <path
          d="M60 10C32.4 10 10 32.4 10 60C10 87.6 32.4 110 60 110C83.5 110 103.2 93.8 108.5 72C102.5 87.5 87.6 98.5 70 98.5C47 98.5 28.5 80 28.5 57C28.5 36.2 43.8 19 63.8 16C75 14.3 86.2 18 94.5 25C85.5 15.6 73.4 10 60 10Z"
          fill="url(#baLeaf)"
        />
        {/* Top sprouting leaf */}
        <path
          d="M28 31C23 22 28 14 38 14C37 22 33 27 28 31Z"
          fill="#65A30D"
        />

        {/* Inner emblem landscape */}
        <g clipPath="url(#baCircleClip)">
          <circle cx="60" cy="60" r="42" fill="#FEFBE8" />
          {/* Rising Sun */}
          <circle cx="56" cy="48" r="19" fill="url(#baSun)" />
          {/* Back hills */}
          <path
            d="M14 70C30 56 54 58 74 68C88 75 100 66 110 62V106H14V70Z"
            fill="#65A30D"
          />
          {/* Foreground terraced field */}
          <path
            d="M14 82C34 72 60 72 108 86V108H14V82Z"
            fill="#1B5E20"
          />
          {/* Furrow highlight curves */}
          <path
            d="M22 86C42 78 66 80 96 90"
            stroke="#A3E635"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M28 94C46 88 68 89 92 97"
            stroke="#FEF08A"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
          {/* Farmhouse silhouette */}
          <path
            d="M66 74V65L72 60L78 65V74H66Z"
            fill="#543426"
          />
          <rect x="70.5" y="68.5" width="3" height="5.5" fill="#FEFBE8" />
        </g>

        {/* Protective Phytosanitary Shield */}
        <g transform="translate(73, 30)">
          <path
            d="M15 2L28 6.5V16.5C28 24.5 22.5 31 15 34C7.5 31 2 24.5 2 16.5V6.5L15 2Z"
            fill="#166534"
            stroke="#FEFBE8"
            strokeWidth="2.5"
          />
          <path
            d="M15 9V25M10 15.5C12.2 15.5 14.5 17 15 19.5C15.5 17 17.8 15.5 20 15.5"
            stroke="#FCD647"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>

      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-serif text-xl font-bold tracking-tight",
              inverted ? "text-forest-200" : "text-forest-800"
            )}
          >
            Best{" "}
            <span className={inverted ? "text-harvest-300" : "text-earth-800"}>
              Agriculture
            </span>
          </span>
          <span
            className={cn(
              "mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em]",
              inverted ? "text-forest-300/80" : "text-muted-foreground"
            )}
          >
            Dschang • Cameroun
          </span>
        </span>
      )}
    </span>
  );
}
