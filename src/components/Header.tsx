
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Enhanced scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      // Update header style based on scroll position
      setScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['about', 'features', 'roadmap', 'team'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      }) || 'hero';
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (section) => activeSection === section;

  // Navigation link component
  const NavLink = ({ href, label, mobile = false }) => (
    <a 
      href={href} 
      className={`${mobile ? 'pl-2 border-l-2' : 'relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-scrutinx-purple after:transition-transform'} 
        ${isActive(href.slice(1)) ? 
          mobile ? 'text-scrutinx-purple border-scrutinx-purple' : 'text-scrutinx-purple after:scale-x-100' : 
          mobile ? 'text-gray-700 border-transparent hover:border-scrutinx-purple/50' : 'text-gray-700 after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left'} 
        transition-all duration-300 hover:text-scrutinx-purple`}
      onClick={() => mobile && setMobileMenuOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-500 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-white/80"
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
          <NavLink href="#about" label="About" />
          <NavLink href="#features" label="Features" />
          <NavLink href="#roadmap" label="Roadmap" />
          <NavLink href="#team" label="Team" />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-2 transition-transform active:scale-90"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="text-scrutinx-purple h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu with enhanced animation */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg py-4 px-4 z-50 animate-fade-in">
            <nav className="flex flex-col space-y-5 py-2">
              <NavLink href="#about" label="About" mobile={true} />
              <NavLink href="#features" label="Features" mobile={true} />
              <NavLink href="#roadmap" label="Roadmap" mobile={true} />
              <NavLink href="#team" label="Team" mobile={true} />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
