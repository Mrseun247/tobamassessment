import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LearningManagementSystem from "@/components/sections/LearningManagementSystem";
import FeatureSection from "@/components/sections/FeatureSection";
import ManagementDevelopmentProgram from "@/components/sections/ManagementDevelopmentProgram";
import TransformationHub from "@/components/sections/TransformationHub";
import TrainingTheConsultant from "@/components/sections/TrainingTheConsultant";
import ConsultationBanner from "@/components/sections/ConsultationBanner";
import Testimonials from "@/components/sections/Testimonials";
import FinalCta from "@/components/sections/FinalCta";
import { featureSections } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LearningManagementSystem />
        {featureSections.map((section) => (
          <FeatureSection key={section.id} section={section} />
        ))}
        <ManagementDevelopmentProgram />
        <TransformationHub />
        <TrainingTheConsultant />
        <ConsultationBanner />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
