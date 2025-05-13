
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";
import { ArrowUp } from "lucide-react";

const Index = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 500);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Roadmap />
        <Team />
        <Waitlist />
      </main>
      <Footer />
      
      {/* Scroll to top button */}
      {showScrollButton && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-8 right-8 p-3 bg-scrutinx-purple text-white rounded-full shadow-lg hover:bg-scrutinx-dark transition-colors z-50 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Index;
