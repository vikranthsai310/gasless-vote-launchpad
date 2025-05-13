import { Check, BarChart, Users, Clock } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-12 md:py-16" data-animation-type="fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 md:mb-16 text-center" data-animation-type="fade-up">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4" data-animation-type="fade-up">Features</h2>
          <p className="text-base md:text-lg text-gray-600" data-animation-type="fade-up">
            Everything you need for seamless decentralized voting and governance
          </p>
        </div>
        
        <div className="space-y-16 md:space-y-24">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12" data-animation-type="fade-up">
            <div className="w-full md:w-1/2">
              <div className="bg-scrutinx-light p-4 md:p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-scrutinx-purple/10 group">
                <img 
                  src="/CreatePoll.png" 
                  alt="Create Poll Interface" 
                  className="w-full h-auto rounded max-w-md mx-auto transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6" data-animation-type="slide-left" data-stagger>
              <h3 className="text-xl md:text-2xl font-bold text-scrutinx-dark" data-staggered data-animation-type="fade-up">Create Poll</h3>
              <p className="text-base md:text-lg text-gray-700" data-staggered data-animation-type="fade-up">
                Launch your own gasless voting poll with complete control over parameters,
                voter access, and timing.
              </p>
              <ul className="space-y-2 md:space-y-3" data-stagger>
                <li className="flex items-start gap-2 md:gap-3" data-staggered data-animation-type="fade-up">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-scrutinx-purple mt-1 shrink-0" />
                  <p className="text-sm md:text-base">Set poll title, description, and voting options</p>
                </li>
                <li className="flex items-start gap-2 md:gap-3" data-staggered data-animation-type="fade-up">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-scrutinx-purple mt-1 shrink-0" />
                  <p className="text-sm md:text-base">Upload voter whitelist through CSV or wallet addresses</p>
                </li>
                <li className="flex items-start gap-2 md:gap-3" data-staggered data-animation-type="fade-up">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-scrutinx-purple mt-1 shrink-0" />
                  <p className="text-sm md:text-base">Set start and end dates with automatic execution</p>
                </li>
                <li className="flex items-start gap-2 md:gap-3" data-staggered data-animation-type="fade-up">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-scrutinx-purple mt-1 shrink-0" />
                  <p className="text-sm md:text-base">Deposit MATIC to cover gasless voting for participants</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-12" data-animation-type="fade-up">
            <div className="w-full md:w-1/2">
              <div className="bg-scrutinx-light p-4 md:p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-scrutinx-purple/10 group">
                <img 
                  src="/Meta.jpg" 
                  alt="Meta-Transaction Voting Flow" 
                  className="w-full h-auto rounded max-w-md mx-auto transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6" data-animation-type="slide-right" data-stagger>
              <h3 className="text-xl md:text-2xl font-bold text-scrutinx-dark" data-staggered data-animation-type="fade-up">Meta-Tx Voting</h3>
              <p className="text-base md:text-lg text-gray-700" data-staggered data-animation-type="fade-up">
                Enable frictionless voting with our advanced meta-transaction architecture that handles
                all the complex blockchain interactions.
              </p>
              <ul className="space-y-2 md:space-y-3" data-stagger>
                <li className="flex items-start gap-2 md:gap-3" data-staggered data-animation-type="fade-up">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-scrutinx-purple mt-1 shrink-0" />
                  <p className="text-sm md:text-base">User signs vote with their wallet (no gas needed)</p>
                </li>
                <li className="flex items-start gap-2 md:gap-3" data-staggered data-animation-type="fade-up">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-scrutinx-purple mt-1 shrink-0" />
                  <p className="text-sm md:text-base">Our relayer submits the vote on-chain with Merkle proof</p>
                </li>
                <li className="flex items-start gap-2 md:gap-3" data-staggered data-animation-type="fade-up">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-scrutinx-purple mt-1 shrink-0" />
                  <p className="text-sm md:text-base">Smart contract verifies and records the vote</p>
                </li>
                <li className="flex items-start gap-2 md:gap-3" data-staggered data-animation-type="fade-up">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-scrutinx-purple mt-1 shrink-0" />
                  <p className="text-sm md:text-base">Real-time vote tallying and results</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12" data-animation-type="fade-up">
            <div className="w-full md:w-1/2">
              <div className="bg-scrutinx-light p-4 md:p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-scrutinx-purple/10 group">
                <img 
                  src="/Results.jpg" 
                  alt="Analytics Dashboard" 
                  className="w-full h-auto rounded max-w-md mx-auto transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6" data-animation-type="slide-left">
              <h3 className="text-xl md:text-2xl font-bold text-scrutinx-dark" data-animation-type="fade-up">Analytics & Insights</h3>
              <p className="text-base md:text-lg text-gray-700" data-animation-type="fade-up">
                Gain valuable insights into voting patterns and engagement with comprehensive
                analytics tools.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4" data-stagger>
                <div className="bg-scrutinx-light bg-opacity-40 p-3 md:p-4 rounded-lg" data-staggered data-animation-type="zoom-in">
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <BarChart className="h-4 w-4 md:h-5 md:w-5 text-scrutinx-purple" />
                    <h4 className="font-medium text-sm md:text-base">Real-time Results</h4>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">
                    View live voting data with beautiful visualizations
                  </p>
                </div>
                <div className="bg-scrutinx-light bg-opacity-40 p-3 md:p-4 rounded-lg" data-staggered data-animation-type="zoom-in">
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <Users className="h-4 w-4 md:h-5 md:w-5 text-scrutinx-purple" />
                    <h4 className="font-medium text-sm md:text-base">Participation Metrics</h4>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">
                    Track voter turnout and engagement rates
                  </p>
                </div>
                <div className="bg-scrutinx-light bg-opacity-40 p-3 md:p-4 rounded-lg" data-staggered data-animation-type="zoom-in">
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <Clock className="h-4 w-4 md:h-5 md:w-5 text-scrutinx-purple" />
                    <h4 className="font-medium text-sm md:text-base">Timeline Analysis</h4>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">
                    See voting patterns across different time periods
                  </p>
                </div>
                <div className="bg-scrutinx-light bg-opacity-40 p-3 md:p-4 rounded-lg" data-staggered data-animation-type="zoom-in">
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-scrutinx-purple" />
                    <h4 className="font-medium text-sm md:text-base">Verification Logs</h4>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">
                    Audit trail of all voting actions for transparency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
