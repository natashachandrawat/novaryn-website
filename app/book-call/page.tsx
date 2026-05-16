const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://cal.com/natasha-chandrawat-rnsfm8/30min";

export default function BookCallPage() {
  return (
    <main className="min-h-screen bg-paper px-3 py-6 text-graphite-900 sm:px-6 sm:py-8">
      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-graphite-900/10 bg-paper shadow-[0_30px_80px_-40px_rgba(13,13,14,0.35)]">
        <div className="border-b border-graphite-900/10 px-4 py-3 sm:px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite-500">
            Book a Discovery Call
          </p>
        </div>

        <iframe
          title="Book a call"
          src={CALENDLY_URL}
          className="h-[78vh] w-full min-h-[680px] bg-paper"
        />
      </div>
    </main>
  );
}
