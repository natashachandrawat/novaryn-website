import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="relative h-7 w-7">
        <svg viewBox="0 0 32 32" fill="none" className="h-full w-full" aria-hidden>
          <rect
            x="1"
            y="1"
            width="30"
            height="30"
            rx="8"
            stroke="#0d0d0e"
            strokeOpacity="0.55"
            strokeWidth="1"
            fill="rgba(13,13,14,0.04)"
          />
          <path
            d="M9 22V10l14 12V10"
            stroke="#0d0d0e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-[16px] font-medium tracking-[-0.02em] lowercase text-graphite-900">
        nova<span className="font-serif italic font-normal">r</span>yn
      </span>
    </div>
  );
}
