import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarqueeBand } from "@/components/MarqueeBand";
import { TechStack } from "@/components/TechStack";
import { Services } from "@/components/Services";
import { SelectedWorks } from "@/components/SelectedWorks";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
// import { Recognition } from "@/components/Recognition"; // section 6 (Standards) — hidden per request
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-paper text-graphite-900">
      <ScrollProgress />
      <WhatsAppFloat />
      <CustomCursor />
      <Navbar />
      <Hero />
      <MarqueeBand />
      <TechStack />
      <Services />
      <SelectedWorks />
      <Process />
      <About />
      <FAQ />
      {/* <Recognition /> */}
      <CTA />
      <Footer />
    </main>
  );
}


