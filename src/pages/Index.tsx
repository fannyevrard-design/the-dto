import { Nav } from "@/sections/Nav";
import { Hero } from "@/sections/Hero";
import { Diff } from "@/sections/Diff";
import { Mission } from "@/sections/Mission";
import { Pillars } from "@/sections/Pillars";
import { Footer } from "@/sections/Footer";
import { DtoWaitlistModal } from "@/components/DtoWaitlistModal";
import { DtoIntro } from "@/components/DtoIntro";

const Index = () => {
  return (
    <>
      <DtoIntro />
      <main className="min-h-screen bg-dto-bg text-dto-text">
        <Nav />
        <Hero />
        <Diff />
        <Pillars />
        <Mission />
        <Footer />
        <DtoWaitlistModal />
      </main>
    </>
  );
};

export default Index;

