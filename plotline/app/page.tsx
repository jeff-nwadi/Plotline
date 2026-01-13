import Image from "next/image";
import { LandingPage } from "../components/LandingPage";
import { Navbar } from "../components/Navbar";
import { ContentPage } from "../components/ContentPage";
import FeatureSection from "../components/FeatureSection";
import WhyChooseUs from "../components/WhyChooseUs";
import BlogSection from "../components/BlogSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="background h-[160vh] md:h-[130vh]">
        <Navbar />
        <LandingPage />
        <div className="flex md:hidden">
          <ContentPage />
        </div>
      </div>
      <div className="hidden md:flex">
        <ContentPage />
      </div>
      <FeatureSection />
      <WhyChooseUs />
      <BlogSection />
    </div>
  );
}
