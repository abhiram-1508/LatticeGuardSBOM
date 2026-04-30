import Hero from "@/components/sections/Hero";
import ThreatTicker from "@/components/sections/ThreatTicker";
import HowItWorks from "@/components/sections/HowItWorks";
import Comparison from "@/components/sections/Comparison";

export default function LandingPage() {
  return (
    <div className="page-enter">
      <Hero />
      <ThreatTicker />
      <HowItWorks />
      <Comparison />
    </div>
  );
}
