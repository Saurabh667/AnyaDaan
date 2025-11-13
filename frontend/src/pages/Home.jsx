// src/pages/Home.jsx
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import ImpactSection from "../components/ImpactSection";
import ContributeSection from "../components/ContributeSection";
import LeaderboardSection from "../components/LeaderboardSection";
import JoinUsSection from "../components/JoinUsSection";
import Footer from "../components/Footer"; // ✅ Add this
import MissionSection from "../components/MissionSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <ImpactSection />
      <ContributeSection />
      <LeaderboardSection />
      <MissionSection />
      <JoinUsSection />
      <Footer /> 
    </div>
  );
};

export default Home;
