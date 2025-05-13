
import { ArrowRight, Shield, Zap, Wallet } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why ScrutinX?</h2>
          <p className="text-lg text-gray-600">
            We're solving the biggest challenges in decentralized governance and voting
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16" data-stagger>
          <div className="bg-white p-8 rounded-lg shadow-md reveal-left" data-staggered>
            <h3 className="text-xl font-bold mb-4 text-scrutinx-dark">The Problem</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3" data-staggered>
                <ArrowRight className="h-5 w-5 text-scrutinx-purple mt-1 shrink-0" />
                <p>High gas fees create barriers to participation in on-chain voting</p>
              </li>
              <li className="flex items-start gap-3" data-staggered>
                <ArrowRight className="h-5 w-5 text-scrutinx-purple mt-1 shrink-0" />
                <p>Centralized voting tools compromise transparency and security</p>
              </li>
              <li className="flex items-start gap-3" data-staggered>
                <ArrowRight className="h-5 w-5 text-scrutinx-purple mt-1 shrink-0" />
                <p>Complex technical requirements limit adoption and engagement</p>
              </li>
              <li className="flex items-start gap-3" data-staggered>
                <ArrowRight className="h-5 w-5 text-scrutinx-purple mt-1 shrink-0" />
                <p>Current solutions lack flexible whitelisting and administration</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md reveal-right" data-staggered>
            <h3 className="text-xl font-bold mb-4 text-scrutinx-dark">Our Solution</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3" data-staggered>
                <ArrowRight className="h-5 w-5 text-scrutinx-purple mt-1 shrink-0" />
                <p>Gasless voting experience with costs covered by the poll creator</p>
              </li>
              <li className="flex items-start gap-3" data-staggered>
                <ArrowRight className="h-5 w-5 text-scrutinx-purple mt-1 shrink-0" />
                <p>Fully on-chain results with cryptographic security guarantees</p>
              </li>
              <li className="flex items-start gap-3" data-staggered>
                <ArrowRight className="h-5 w-5 text-scrutinx-purple mt-1 shrink-0" />
                <p>Simple user interface requiring just a wallet signature</p>
              </li>
              <li className="flex items-start gap-3" data-staggered>
                <ArrowRight className="h-5 w-5 text-scrutinx-purple mt-1 shrink-0" />
                <p>Advanced controls for creators with Merkle-proof based access</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" data-stagger>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover-lift" data-staggered>
            <div className="h-14 w-14 bg-scrutinx-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Wallet className="h-7 w-7 text-scrutinx-purple" />
            </div>
            <h3 className="text-lg font-bold mb-2">Gasless Voting</h3>
            <p className="text-gray-600">
              Voters pay zero gas fees while still enjoying the security of on-chain verification. Our relayer bot covers all transaction costs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover-lift" data-staggered>
            <div className="h-14 w-14 bg-scrutinx-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-7 w-7 text-scrutinx-purple" />
            </div>
            <h3 className="text-lg font-bold mb-2">Secure Whitelisting</h3>
            <p className="text-gray-600">
              Merkle-proof technology ensures only authorized voters can participate while maintaining privacy and gas efficiency.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover-lift" data-staggered>
            <div className="h-14 w-14 bg-scrutinx-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-7 w-7 text-scrutinx-purple" />
            </div>
            <h3 className="text-lg font-bold mb-2">Meta-Transactions</h3>
            <p className="text-gray-600">
              Sign once with your wallet and our relayer handles the rest, making voting as simple as clicking a button.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
