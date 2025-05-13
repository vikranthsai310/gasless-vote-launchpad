
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full backdrop-blur-sm z-50 py-4 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md" : "bg-white/80"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2 group">
            <img 
              src="/lovable-uploads/575b1710-0aa9-4c4d-8282-393b41857c58.png" 
              alt="ScrutinX Logo" 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" 
            />
            <span className="hidden md:inline-block text-2xl font-bold bg-gradient-to-r from-scrutinx-dark to-scrutinx-purple bg-clip-text text-transparent">
              ScrutinX
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-scrutinx-purple transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-scrutinx-purple after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left">
            About
          </a>
          <a href="#features" className="text-gray-700 hover:text-scrutinx-purple transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-scrutinx-purple after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left">
            Features
          </a>
          <a href="#roadmap" className="text-gray-700 hover:text-scrutinx-purple transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-scrutinx-purple after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left">
            Roadmap
          </a>
          <a href="#team" className="text-gray-700 hover:text-scrutinx-purple transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-scrutinx-purple after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left">
            Team
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="text-scrutinx-purple" /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-4 z-50 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-gray-700 hover:text-scrutinx-purple transition-colors pl-2 border-l-2 border-transparent hover:border-scrutinx-purple"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#features" 
                className="text-gray-700 hover:text-scrutinx-purple transition-colors pl-2 border-l-2 border-transparent hover:border-scrutinx-purple"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#roadmap" 
                className="text-gray-700 hover:text-scrutinx-purple transition-colors pl-2 border-l-2 border-transparent hover:border-scrutinx-purple"
                onClick={() => setMobileMenuOpen(false)}
              >
                Roadmap
              </a>
              <a 
                href="#team" 
                className="text-gray-700 hover:text-scrutinx-purple transition-colors pl-2 border-l-2 border-transparent hover:border-scrutinx-purple"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
