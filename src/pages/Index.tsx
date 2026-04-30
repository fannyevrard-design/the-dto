import { LangProvider } from "@/i18n/LangContext";
import { Nav } from "@/sections/Nav";
import { Hero } from "@/sections/Hero";
import { Diff } from "@/sections/Diff";
import { Concept } from "@/sections/Concept";
import { Mission } from "@/sections/Mission";
import { Pillars } from "@/sections/Pillars";
import { Waitlist } from "@/sections/Waitlist";
import { Footer } from "@/sections/Footer";
import { DtoWaitlistModal } from "@/components/DtoWaitlistModal";

const Index = () => {
  return (
    <LangProvider>
      <main className="min-h-screen bg-dto-bg text-dto-text">
        <Nav />
        <Hero />
        <Diff />
        <Concept />
        <Mission />
        <Pillars />
        <Waitlist />
        <Footer />
        <DtoWaitlistModal />
      </main>
    </LangProvider>
  );
};

export default Index;
