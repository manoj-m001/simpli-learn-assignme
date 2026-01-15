import Hero from "../components/Hero";
import Explore from "../components/Explore";
import Speakers from "../components/Speakers";
import Insights from "../components/Insights";
import Agenda from "../components/Agenda";
import Rsvp from "../components/Rsvp";
import Footer from "../components/Footer";
import HeroContent from "@/components/HeroContent";

export default function Page() {
  return (
    <>
      <Hero />
      <HeroContent/>
      <Explore />
      <Speakers />
      <Insights />
      <Agenda />
      <Footer />
    </>
  );
}
