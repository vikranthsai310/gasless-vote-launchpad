import { Check } from "lucide-react";

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Roadmap</h2>
          <p className="text-lg text-gray-600">
            Our journey to revolutionize decentralized voting
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Animated timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5">
              <div className="absolute inset-0 bg-gradient-to-b from-scrutinx-purple via-scrutinx-light to-scrutinx-purple animate-gradient-flow bg-[length:100%_200%]"></div>
              <div className="absolute inset-0 bg-scrutinx-purple/20"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-scrutinx-purple/30 to-transparent animate-pulse"></div>
            </div>
            
            <div className="space-y-16">
              {/* Phase 1 */}
              <div className="relative flex flex-col md:flex-row md:items-center gap-8">
                <div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-scrutinx-dark mb-2 text-purple-600 whitespace-nowrap">Development Phase (Q2 2025 – Ongoing)</h3>
                  <p className="text-gray-600 mb-4 font-medium">Smart contract architecture (voting + token)</p>
                  <ul className="space-y-2">
                    <li className="flex items-center md:justify-end gap-2">
                      <span>Security auditing & testnet deployment</span>
                      <Check className="h-5 w-5 text-purple-600 shrink-0" />
                    </li>
                    <li className="flex items-center md:justify-end gap-2">
                      <span>Whitelisting & admin dashboard integration</span>
                      <Check className="h-5 w-5 text-purple-600 shrink-0" />
                    </li>
                    <li className="flex items-center md:justify-end gap-2">
                      <span>Tokenomics finalization and legal structuring</span>
                      <Check className="h-5 w-5 text-purple-600 shrink-0" />
                    </li>
                  </ul>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-4 border-purple-600 bg-white"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2 ml-12 md:ml-0">
                  <div className="bg-white p-5 rounded-lg shadow-md border border-purple-100">
                    <p className="text-sm text-gray-600">
                      Foundation phase focusing on building secure infrastructure and establishing the core technical framework.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Phase 2 - Final Release */}
              <div className="relative flex flex-col md:flex-row md:items-center gap-8">
                <div className="md:w-1/2 order-2 md:order-1 md:pr-12">
                  <div className="bg-white p-5 rounded-lg shadow-md border border-purple-100">
                    <p className="text-sm text-gray-600">
                      Official platform launch with complete feature set, token distribution and advanced analytics for a production-ready decentralized voting system.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-4 border-purple-600 bg-white"></div>
                </div>
                <div className="md:w-1/2 order-1 md:order-2 md:pl-12 ml-12 md:ml-0">
                  <div className="text-right">
                    <h3 className="text-xl font-bold mb-2 text-purple-600 whitespace-nowrap text-right">Final Release – Q3/Q4 2025 (August–September)</h3>
                    <p className="text-gray-600 mb-4 font-medium text-right">Major Launch Milestones</p>
                    <ul className="space-y-3 pl-8">
                      <li className="flex justify-start gap-2">
                        <span className="text-left">Full launch of ScrutinX Web DApp</span>
                      </li>
                      <li className="flex justify-start gap-2">
                        <span className="text-left">Secure decentralized voting system live on Polygon Mainnet</span>
                      </li>
                      <li className="flex justify-start gap-2">
                        <span className="text-left">Release of the ScrutinX Token (utility-focused)</span>
                      </li>
                      <li className="flex justify-start gap-2">
                        <span className="text-left">Token launch event</span>
                      </li>
                      <li className="flex justify-start gap-2">
                        <span className="text-left">Airdrop for early supporters</span>
                      </li>
                      <li className="flex justify-start gap-2">
                        <span className="text-left">DAO governance preview using the token</span>
                      </li>
                      <li className="flex justify-start gap-2">
                        <span className="text-left">Voter analytics dashboard with real-time stats</span>
                      </li>
                      <li className="flex justify-start gap-2">
                        <span className="text-left">API access for institutions & developers</span>
                      </li>
                      <li className="flex justify-start gap-2">
                        <span className="text-left">Community onboarding and campaign kickoff</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Phase 3 */}
              <div className="relative flex flex-col md:flex-row md:items-center gap-8">
                <div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-purple-600 mb-2 whitespace-nowrap">Post-Launch Vision (Q4 2025 – 2026)</h3>
                  <p className="text-gray-600 mb-4 font-medium">Expanding Ecosystem Features</p>
                  <ul className="space-y-3">
                    <li className="flex items-center md:justify-end gap-2">
                      <span>Mobile app version</span>
                    </li>
                    <li className="flex items-center md:justify-end gap-2">
                      <span>Multi-language support</span>
                    </li>
                    <li className="flex items-center md:justify-end gap-2">
                      <span>Enhanced security features</span>
                    </li>
                  </ul>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-4 border-purple-600 bg-white"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2 ml-12 md:ml-0">
                  <div className="bg-white p-5 rounded-lg shadow-md border border-purple-100">
                    <p className="text-sm text-gray-600">
                      Expanding the platform with additional features and support for broader user adoption across different devices and regions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
