import AboutSection from "@/component/about/about";
import DiscussRequirement from "@/component/discuss/discussSection";
import FAQSection from "@/component/faq/faqSection";
import HeroSection from "@/component/hero/hero";
import IndustriesSection from "@/component/industries/industry";
import OfferingsSection from "@/component/Offerings/offerings";
import ProjectCycleSection from "@/component/projectCycle/projectCycle";
import SuccessSection from "@/component/success/success";
import TechnologyStack from "@/component/techStack/techstack";
import Testimonials from "@/component/testimonials/testimonialsSection";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <AboutSection />
        <TechnologyStack />
        <SuccessSection />
        <OfferingsSection />
        <IndustriesSection />
        <ProjectCycleSection />
        <DiscussRequirement />
        <Testimonials />
        <FAQSection />
      </main>
    </div>
  );
}
