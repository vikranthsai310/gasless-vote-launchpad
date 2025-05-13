
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 py-4 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/575b1710-0aa9-4c4d-8282-393b41857c58.png" 
              alt="ScrutinX Logo" 
              className="h-10 w-auto" 
            />
            <span className="hidden md:inline-block text-2xl font-bold text-scrutinx-purple">
              ScrutinX
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-scrutinx-purple transition-colors">
            About
          </a>
          <a href="#features" className="text-gray-700 hover:text-scrutinx-purple transition-colors">
            Features
          </a>
          <a href="#roadmap" className="text-gray-700 hover:text-scrutinx-purple transition-colors">
            Roadmap
          </a>
          <a href="#team" className="text-gray-700 hover:text-scrutinx-purple transition-colors">
            Team
          </a>
          <Button 
            href="#waitlist" 
            className="bg-scrutinx-purple hover:bg-scrutinx-dark text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Join Waitlist
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-4 z-50">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-gray-700 hover:text-scrutinx-purple transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#features" 
                className="text-gray-700 hover:text-scrutinx-purple transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#roadmap" 
                className="text-gray-700 hover:text-scrutinx-purple transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Roadmap
              </a>
              <a 
                href="#team" 
                className="text-gray-700 hover:text-scrutinx-purple transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </a>
              <Button 
                className="bg-scrutinx-purple hover:bg-scrutinx-dark text-white w-full transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
              >
                Join Waitlist
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
