
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
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-scrutinx-purple"></div>
            
            <div className="space-y-16">
              {/* Phase 1 */}
              <div className="relative flex flex-col md:flex-row md:items-center gap-8">
                <div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-scrutinx-dark mb-2">Alpha Release</h3>
                  <p className="text-gray-600 mb-4">Q3 2025</p>
                  <ul className="space-y-2">
                    <li className="flex items-center md:justify-end gap-2">
                      <span>Core voting functionality</span>
                      <Check className="h-4 w-4 text-scrutinx-purple shrink-0" />
                    </li>
                    <li className="flex items-center md:justify-end gap-2">
                      <span>Basic whitelisting</span>
                      <Check className="h-4 w-4 text-scrutinx-purple shrink-0" />
                    </li>
                    <li className="flex items-center md:justify-end gap-2">
                      <span>Testnet deployment</span>
                      <Check className="h-4 w-4 text-scrutinx-purple shrink-0" />
                    </li>
                  </ul>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-4 border-scrutinx-purple bg-white"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2 ml-12 md:ml-0">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-sm text-gray-600">
                      Initial release focusing on core functionality and early testing with select partners.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Phase 2 */}
              <div className="relative flex flex-col md:flex-row md:items-center gap-8">
                <div className="md:w-1/2 md:pr-12 order-2">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-sm text-gray-600">
                      Public beta with enhanced features and broader access for community testing and feedback.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-4 border-scrutinx-purple bg-white"></div>
                </div>
                <div className="md:w-1/2 md:text-right md:pl-12 order-1 ml-12 md:ml-0">
                  <h3 className="text-xl font-bold text-scrutinx-dark mb-2">Public Beta</h3>
                  <p className="text-gray-600 mb-4">Q4 2025</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 md:justify-end">
                      <span>Advanced analytics</span>
                      <Check className="h-4 w-4 text-scrutinx-purple shrink-0" />
                    </li>
                    <li className="flex items-center gap-2 md:justify-end">
                      <span>Enhanced admin controls</span>
                      <Check className="h-4 w-4 text-scrutinx-purple shrink-0" />
                    </li>
                    <li className="flex items-center gap-2 md:justify-end">
                      <span>Developer API access</span>
                      <Check className="h-4 w-4 text-scrutinx-purple shrink-0" />
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Phase 3 */}
              <div className="relative flex flex-col md:flex-row md:items-center gap-8">
                <div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-scrutinx-dark mb-2">Mainnet Launch</h3>
                  <p className="text-gray-600 mb-4">Q1 2026</p>
                  <ul className="space-y-2">
                    <li className="flex items-center md:justify-end gap-2">
                      <span>Multi-chain support</span>
                      <Check className="h-4 w-4 text-scrutinx-purple shrink-0" />
                    </li>
                    <li className="flex items-center md:justify-end gap-2">
                      <span>Enterprise features</span>
                      <Check className="h-4 w-4 text-scrutinx-purple shrink-0" />
                    </li>
                    <li className="flex items-center md:justify-end gap-2">
                      <span>Full security audits</span>
                      <Check className="h-4 w-4 text-scrutinx-purple shrink-0" />
                    </li>
                  </ul>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-4 border-scrutinx-purple bg-white"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2 ml-12 md:ml-0">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-sm text-gray-600">
                      Full production release with complete feature set and expanded blockchain network support.
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
