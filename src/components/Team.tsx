import { Github, Linkedin, Twitter } from "lucide-react";

const Team = () => {
  return (
    <section id="team" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-gray-600">
            The experts behind ScrutinX
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-stagger>
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift" data-staggered>
            <div className="p-1 bg-scrutinx-light">
              <img 
                src="/placeholder.svg" 
                alt="Team Member" 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Alex Johnson</h3>
              <p className="text-scrutinx-purple font-medium mb-2">Co-Founder & CEO</p>
              <p className="text-gray-600 mb-4">
                Former blockchain architect at Meta with 10+ years experience in decentralized systems
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-scrutinx-purple transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-scrutinx-purple transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-scrutinx-purple transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift" data-staggered>
            <div className="p-1 bg-scrutinx-light">
              <img 
                src="/placeholder.svg" 
                alt="Team Member" 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Sarah Chen</h3>
              <p className="text-scrutinx-purple font-medium mb-2">Co-Founder & CTO</p>
              <p className="text-gray-600 mb-4">
                Smart contract security expert with background in zero-knowledge proofs and cryptography
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-scrutinx-purple transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-scrutinx-purple transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-scrutinx-purple transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Team Member 3 */}
          {/* <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift" data-staggered>
            <div className="p-1 bg-scrutinx-light">
              <img 
                src="/placeholder.svg" 
                alt="Team Member" 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Miguel Rodriguez</h3>
              <p className="text-scrutinx-purple font-medium mb-2">Lead Developer</p>
              <p className="text-gray-600 mb-4">
                Full-stack engineer specializing in Web3 infrastructure and relayer systems
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-scrutinx-purple transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-scrutinx-purple transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-scrutinx-purple transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Team;
