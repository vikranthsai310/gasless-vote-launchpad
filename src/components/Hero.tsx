
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-scrutinx-light/30 to-transparent rounded-bl-full opacity-70"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-2/3 bg-gradient-to-tr from-scrutinx-light/20 to-transparent rounded-tr-full opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 bg-scrutinx-light text-scrutinx-purple rounded-full text-sm font-medium mb-2">
              Coming Soon
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-scrutinx-purple to-scrutinx-dark bg-clip-text text-transparent">Gasless Voting</span> for Web3 Communities
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Create decentralized polls where voters pay no gas, secured by Merkle-proof
              whitelists and meta-transactions for a seamless voting experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-scrutinx-purple hover:bg-scrutinx-dark text-white px-6 py-6 text-lg shadow-lg hover:shadow-xl hover:shadow-scrutinx-light/50 transform hover:-translate-y-0.5 transition-all"
                onClick={() => {
                  document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Join the Waitlist <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
              </Button>
              <Button 
                variant="outline"
                className="border-scrutinx-purple text-scrutinx-purple hover:bg-scrutinx-light px-6 py-6 text-lg transition-all hover:shadow-md"
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="bg-gradient-to-br from-scrutinx-light to-white p-6 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
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
