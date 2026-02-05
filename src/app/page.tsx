import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import About from "@/components/About";
import Audience from "@/components/Audience";
import Specializations from "@/components/Specializations";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import PracticeDetails from "@/components/PracticeDetails";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />
      <Hero />
      <Approach />
      <About />
      <Audience />
      <Specializations />
      <Services />
      <Gallery />
      <Process />
      <PracticeDetails />
      <Footer />
    </main>
  );
}
