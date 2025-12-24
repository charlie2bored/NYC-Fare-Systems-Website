import Header from "@/app/components/Header";
import HomeSection from "@/app/components/HeroSection";
import ObjectiveSection from "@/app/components/ObjectiveSection";
import ProcessSection from "@/app/components/ProcessSection";
import FindingsSection from "@/app/components/FindingsSection";
import ContactSection from "@/app/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HomeSection />
        <ObjectiveSection />
        <ProcessSection />
        <FindingsSection />
        <ContactSection />
      </main>
    </div>
  );
}