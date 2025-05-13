import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import { ArrowUp } from "lucide-react";
import { initializeAnimations } from "@/lib/animationObserver";

const Index = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down
      setShowScrollButton(window.scrollY > 500);
      
      // Calculate scroll progress for the progress indicator
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Initialize all animations
    initializeAnimations();
    
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
      </main>
      <Footer />
      
      {/* Enhanced Scroll to top button with progress ring */}
      <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${showScrollButton ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
        <div className="relative">
          {/* Progress circle */}
          <svg className="w-12 h-12 -rotate-90" viewBox="0 0 100 100">
            <circle
              className="text-gray-200"
              strokeWidth="5"
              stroke="currentColor"
              fill="transparent"
              r="42"
              cx="50"
              cy="50"
            />
            <circle
              className="text-scrutinx-purple transition-all duration-300"
              strokeWidth="5"
              strokeDasharray={264}
              strokeDashoffset={264 - (264 * scrollProgress) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="42"
              cx="50"
              cy="50"
            />
          </svg>
          
          {/* Button */}
          <button
            onClick={scrollToTop}
            className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-scrutinx-purple" />
          </button>
        </div>
      </div>
      
      {/* Background decorative elements with parallax effect */}
      <div className="fixed top-1/4 right-0 w-64 h-64 bg-scrutinx-light/10 rounded-full blur-3xl -z-10" data-parallax="0.05"></div>
      <div className="fixed bottom-1/3 left-0 w-96 h-96 bg-scrutinx-purple/5 rounded-full blur-3xl -z-10" data-parallax="0.08"></div>
      <div className="fixed top-3/4 right-1/4 w-48 h-48 bg-scrutinx-light/10 rounded-full blur-3xl -z-10" data-parallax="0.12"></div>
    </div>
  );
};

export default Index;
