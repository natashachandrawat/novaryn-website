import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarqueeBand } from "@/components/MarqueeBand";
import { TechStack } from "@/components/TechStack";
import { Services } from "@/components/Services";
import { SelectedWorks } from "@/components/SelectedWorks";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Recognition } from "@/components/Recognition";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-paper text-graphite-900">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <Hero />
      <MarqueeBand />
      <TechStack />
      <Services />
      <SelectedWorks />
      <Process />
      <About />
      <Recognition />
      <CTA />
      <Footer />
    </main>
  );
}
