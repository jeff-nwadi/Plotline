import Image from "next/image";
import { LandingPage } from "../components/LandingPage";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen background">
      <Navbar />
      <LandingPage />
    </div>
  );
}
