
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background decoration with enhanced gradients */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-scrutinx-light/40 to-transparent rounded-bl-full opacity-80"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-2/3 bg-gradient-to-tr from-scrutinx-light/30 to-transparent rounded-tr-full opacity-60"></div>
      <div className="absolute top-1/3 left-1/4 -z-10 w-16 h-16 rounded-full bg-scrutinx-purple/10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 -z-10 w-24 h-24 rounded-full bg-scrutinx-light/20 animate-pulse" style={{ animationDuration: '4s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className={`w-full md:w-1/2 space-y-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-scrutinx-purple to-scrutinx-dark bg-clip-text text-transparent">Gasless Voting</span> for Web3 Communities
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Create decentralized polls where voters pay no gas, secured by Merkle-proof
              whitelists and meta-transactions for a seamless voting experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="outline"
                className="border-scrutinx-purple text-scrutinx-purple hover:bg-scrutinx-light px-6 py-6 text-lg transition-all hover:shadow-md hover:scale-105"
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className={`w-full md:w-1/2 flex justify-center transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="bg-gradient-to-br from-scrutinx-light to-white p-6 rounded-lg shadow-lg transform hover:rotate-0 transition-all duration-500 hover:scale-102 hover:shadow-xl">
                <img 
                  src="/placeholder.svg" 
                  alt="ScrutinX Interface Mockup" 
                  className="w-full h-auto rounded"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl max-w-xs transform hover:scale-105 transition-transform">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="bg-scrutinx-light rounded-full p-0.5">
                      <Check className="h-4 w-4 text-scrutinx-dark" />
                    </div>
                    <span className="text-sm">Zero gas for voters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-scrutinx-light rounded-full p-0.5">
                      <Check className="h-4 w-4 text-scrutinx-dark" />
                    </div>
                    <span className="text-sm">Secure whitelisting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-scrutinx-light rounded-full p-0.5">
                      <Check className="h-4 w-4 text-scrutinx-dark" />
                    </div>
                    <span className="text-sm">Meta-transaction architecture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
