import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <div className="bg-white relative w-full min-h-screen" >
      <Header />

      <Hero />

      <Solutions />

      <Portfolio />

      <Footer />
    </div>
  );
}
