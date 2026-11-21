import Image from "next/image";
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
  const imageDimensions = {
    sm: { width: 38, height: 43, box: "h-10 w-10" },
    md: { width: 46, height: 52, box: "h-12 w-12" },
    lg: { width: 58, height: 66, box: "h-16 w-16" },
  };

  const dim = imageDimensions[size];

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl",
          inverted ? "bg-white/95 p-1 shadow-sm" : "p-0.5",
          dim.box
        )}
      >
        <Image
          src="/images/logo-best-agriculture.png"
          alt="Logo officiel Best Agriculture"
          width={dim.width}
          height={dim.height}
          priority
          className="h-full w-full object-contain"
        />
      </span>

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
