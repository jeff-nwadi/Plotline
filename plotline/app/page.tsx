import Image from "next/image";
import { LandingPage } from "../components/LandingPage";
import { Navbar } from "../components/Navbar";
import { ContentPage } from "../components/ContentPage";
import FeatureSection from "../components/FeatureSection";
import WhyChooseUs from "../components/WhyChooseUs";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content wrapper with higher z-index to cover the sticky footer */}
      <main className="relative z-10 bg-white">
        <div className="background h-[150vh] md:h-[120vh] lg:h-[140vh]">
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
        <FAQSection />
        <BlogSection />
      </main>

      {/* Footer reveals from behind as the user scrolls to the bottom */}
      <Footer />
    </div>
  );
}
