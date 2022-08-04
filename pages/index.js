import Head from "../components/Head";
import HeroSection from "../components/pages/home/HeroSection";
import ProgramSection from "../components/pages/home/ProgramSection";
import FacultySection from "../components/pages/home/FacultySection";

export default function Home() {
  return (
    <div className="flex-grow space-y-32">
      <Head />
      <HeroSection />
      <ProgramSection />
      <FacultySection />
    </div>
  );
}
