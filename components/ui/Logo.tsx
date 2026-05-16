import { cn } from "@/lib/utils";

type LogoSystem = "A" | "B1" | "B2" | "B3" | "B4" | "B5" | "B6" | "C";
const ACTIVE_LOGO: LogoSystem = "B6";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center", className)}>
      {ACTIVE_LOGO === "A" && <LogoA />}
      {ACTIVE_LOGO === "B1" && <LogoB1 />}
      {ACTIVE_LOGO === "B2" && <LogoB2 />}
      {ACTIVE_LOGO === "B3" && <LogoB3 />}
      {ACTIVE_LOGO === "B4" && <LogoB4 />}
      {ACTIVE_LOGO === "B5" && <LogoB5 />}
      {ACTIVE_LOGO === "B6" && <LogoB6 />}
      {ACTIVE_LOGO === "C" && <LogoC />}
    </div>
  );
}

function Wordmark() {
  return (
    <span className="text-[18px] font-semibold tracking-[-0.03em] lowercase text-graphite-900">
      nova<span className="font-serif italic font-normal tracking-[-0.015em]">r</span>yn
    </span>
  );
}

// A: text-led luxury wordmark + tiny symbol
function LogoA() {
  return (
    <div className="inline-flex items-center gap-2.5">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-graphite-900/22 bg-paper">
        <span className="h-1.5 w-1.5 rounded-full bg-graphite-900" />
      </span>
      <Wordmark />
    </div>
  );
}

// B: icon-led modern tech mark + clean wordmark
function LogoB1() {
  return (
    <div className="inline-flex items-center gap-2.5">
      <span className="relative inline-flex h-8 w-8 items-center justify-center">
        <svg viewBox="0 0 36 36" fill="none" className="h-full w-full" aria-hidden>
          <rect x="1" y="1" width="34" height="34" rx="10" fill="#0d0d0e" />
          <rect x="1" y="1" width="34" height="34" rx="10" stroke="rgba(255,255,255,0.18)" />
          <path
            d="M10.5 24.5V11.5L25.5 24.5V11.5"
            stroke="#efece5"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M10.5 24.5H16.2" stroke="#efece5" strokeOpacity="0.35" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="25.5" cy="11.5" r="1.55" fill="#7dd3fc" />
        </svg>
      </span>
      <Wordmark />
    </div>
  );
}

function LogoB2() {
  return (
    <div className="inline-flex items-center gap-2.5">
      <span className="relative inline-flex h-8 w-8 items-center justify-center">
        <svg viewBox="0 0 36 36" fill="none" className="h-full w-full" aria-hidden>
          <rect x="1" y="1" width="34" height="34" rx="10" fill="#0d0d0e" />
          <rect x="1" y="1" width="34" height="34" rx="10" stroke="rgba(255,255,255,0.18)" />
          <path
            d="M10.5 24.6V11.4L25.5 24.6V11.4"
            stroke="#efece5"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M13.2 13.8L22.8 22.1" stroke="#7dd3fc" strokeOpacity="0.7" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="13.2" cy="13.8" r="1.2" fill="#7dd3fc" />
          <circle cx="22.8" cy="22.1" r="1.2" fill="#7dd3fc" />
        </svg>
      </span>
      <Wordmark />
    </div>
  );
}

function LogoB3() {
  return (
    <div className="inline-flex items-center gap-2.5">
      <span className="relative inline-flex h-8 w-8 items-center justify-center">
        <svg viewBox="0 0 36 36" fill="none" className="h-full w-full" aria-hidden>
          <rect x="1" y="1" width="34" height="34" rx="10" fill="url(#b3bg)" />
          <rect x="1" y="1" width="34" height="34" rx="10" stroke="rgba(13,13,14,0.22)" />
          <path
            d="M10.5 23.8V12L25.5 23.8V12"
            stroke="#0d0d0e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M10.5 23.8H15.8" stroke="#0d0d0e" strokeOpacity="0.28" strokeWidth="1.1" strokeLinecap="round" />
          <circle cx="25.5" cy="12" r="1.45" fill="#3a64ff" />
        <defs>
            <linearGradient id="b3bg" x1="3" y1="2" x2="33" y2="33" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#efece5" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <Wordmark />
    </div>
  );
}

function LogoB4() {
  return (
    <div className="inline-flex items-center gap-2.5">
      <span className="relative inline-flex h-8 w-8 items-center justify-center">
        <svg viewBox="0 0 36 36" fill="none" className="h-full w-full" aria-hidden>
          <rect x="1" y="1" width="34" height="34" rx="10" fill="#0d0d0e" />
          <rect x="1" y="1" width="34" height="34" rx="10" stroke="rgba(255,255,255,0.15)" />
          <path
            d="M10.5 24.5V11.5L25.5 24.5V11.5"
            stroke="#efece5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M10.5 24.5H15.6" stroke="#efece5" strokeOpacity="0.32" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M14.2 14.8L24 23.2" stroke="#86efac" strokeOpacity="0.72" strokeWidth="1.15" strokeLinecap="round" />
          <circle cx="14.2" cy="14.8" r="1.2" fill="#86efac" />
        </svg>
      </span>
      <span className="text-[18px] font-semibold tracking-[-0.03em] lowercase text-graphite-900">
        nova<span className="font-serif italic font-normal tracking-[-0.015em] text-graphite-700">r</span>yn
      </span>
    </div>
  );
}

function LogoB5() {
  return (
    <div className="inline-flex items-center gap-2.5">
      <span className="relative inline-flex h-8 w-8 items-center justify-center">
        <svg viewBox="0 0 36 36" fill="none" className="h-full w-full" aria-hidden>
          <rect x="1" y="1" width="34" height="34" rx="10" fill="#0d0d0e" />
          <rect x="1" y="1" width="34" height="34" rx="10" stroke="rgba(255,255,255,0.16)" />
          <path
            d="M9.5 21.8C11.1 14.7 17 10.8 23.2 12.2C26.7 13 28.2 16.1 26.6 18.6C24.2 22.2 19.1 20.6 16.1 24.2C14.2 26.6 15.2 29.4 18.1 30.1"
            stroke="#efece5"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle cx="23.4" cy="12.3" r="1.5" fill="#7dd3fc" />
          <circle cx="15.9" cy="24.3" r="1.3" fill="#86efac" />
          <path d="M10 25.6H24.8" stroke="#efece5" strokeOpacity="0.28" strokeWidth="1.1" strokeLinecap="round" />
        </svg>
      </span>
      <Wordmark />
    </div>
  );
}

function LogoB6() {
  return (
    <div className="inline-flex items-center gap-2.5">
      <span className="relative inline-flex h-8 w-8 items-center justify-center">
        <svg viewBox="0 0 36 36" fill="none" className="h-full w-full" aria-hidden>
          <rect x="1" y="1" width="34" height="34" rx="10" fill="#0d0d0e" />
          <rect x="1" y="1" width="34" height="34" rx="10" stroke="rgba(255,255,255,0.16)" />

          {/* clear initial N */}
          <path
            d="M11 24.6V11.4L25 24.6V11.4"
            stroke="#f3f4f6"
            strokeWidth="2.15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* simple orbit */}
          <path
            d="M9.9 20.7C11.6 15.1 16.1 12.5 21.1 12.8C24.4 13 26.3 15 26 17.4C25.6 20.5 22.8 22.2 19.8 22.2"
            stroke="#d1d5db"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <circle cx="26" cy="17.4" r="1.2" fill="#ffffff" />
        </svg>
      </span>
      <Wordmark />
    </div>
  );
}

// C: abstract premium emblem + minimal text
function LogoC() {
  return (
    <div className="inline-flex items-center gap-2.5">
      <span className="relative inline-flex h-8 w-8 items-center justify-center">
        <svg viewBox="0 0 36 36" fill="none" className="h-full w-full" aria-hidden>
          <rect x="1" y="1" width="34" height="34" rx="10" fill="url(#c-bg)" />
          <rect x="1" y="1" width="34" height="34" rx="10" stroke="rgba(13,13,14,0.2)" />
          <path
            d="M9.8 21.5C12.2 14.2 16.8 11.2 26.2 12.3"
            stroke="#0d0d0e"
            strokeOpacity="0.9"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M9.8 24.2H25.6"
            stroke="#0d0d0e"
            strokeOpacity="0.45"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <circle cx="26.3" cy="12.4" r="1.8" fill="#0d0d0e" />
          <defs>
            <linearGradient id="c-bg" x1="4" y1="3" x2="32" y2="33" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#efece5" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="text-[18px] font-medium tracking-[-0.028em] lowercase text-graphite-900">
        novaryn
      </span>
    </div>
  );
}
