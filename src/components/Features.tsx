import { Check, BarChart, Users, Clock } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features</h2>
          <p className="text-lg text-gray-600">
            Everything you need for seamless decentralized voting and governance
          </p>
        </div>
        
        <div className="space-y-24">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <div className="bg-scrutinx-light p-6 rounded-lg">
                <img 
                  src="/CreatePoll.png" 
                  alt="Create Poll Interface" 
                  className="w-full h-auto rounded max-w-md mx-auto"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-scrutinx-dark">Create Poll</h3>
              <p className="text-gray-700">
                Launch your own gasless voting poll with complete control over parameters,
                voter access, and timing.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-scrutinx-purple mt-1 shrink-0" />
                  <p>Set poll title, description, and voting options</p>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-scrutinx-purple mt-1 shrink-0" />
                  <p>Upload voter whitelist through CSV or wallet addresses</p>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-scrutinx-purple mt-1 shrink-0" />
                  <p>Set start and end dates with automatic execution</p>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-scrutinx-purple mt-1 shrink-0" />
                  <p>Deposit MATIC to cover gasless voting for participants</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <div className="bg-scrutinx-light p-6 rounded-lg">
                <img 
                  src="/Meta.jpg" 
                  alt="Meta-Transaction Voting Flow" 
                  className="w-full h-auto rounded max-w-md mx-auto"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-scrutinx-dark">Meta-Tx Voting</h3>
              <p className="text-gray-700">
                Enable frictionless voting with our advanced meta-transaction architecture that handles
                all the complex blockchain interactions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-scrutinx-purple mt-1 shrink-0" />
                  <p>User signs vote with their wallet (no gas needed)</p>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-scrutinx-purple mt-1 shrink-0" />
                  <p>Our relayer submits the vote on-chain with Merkle proof</p>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-scrutinx-purple mt-1 shrink-0" />
                  <p>Smart contract verifies and records the vote</p>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-scrutinx-purple mt-1 shrink-0" />
                  <p>Real-time vote tallying and results</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <div className="bg-scrutinx-light p-6 rounded-lg">
                <img 
                  src="/Results.jpg" 
                  alt="Analytics Dashboard" 
                  className="w-full h-auto rounded max-w-md mx-auto"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-scrutinx-dark">Analytics & Insights</h3>
              <p className="text-gray-700">
                Gain valuable insights into voting patterns and engagement with comprehensive
                analytics tools.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-scrutinx-light bg-opacity-40 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <BarChart className="h-5 w-5 text-scrutinx-purple" />
                    <h4 className="font-medium">Real-time Results</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    View live voting data with beautiful visualizations
                  </p>
                </div>
                <div className="bg-scrutinx-light bg-opacity-40 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="h-5 w-5 text-scrutinx-purple" />
                    <h4 className="font-medium">Participation Metrics</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Track voter turnout and engagement rates
                  </p>
                </div>
                <div className="bg-scrutinx-light bg-opacity-40 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="h-5 w-5 text-scrutinx-purple" />
                    <h4 className="font-medium">Timeline Analysis</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    See voting patterns across different time periods
                  </p>
                </div>
                <div className="bg-scrutinx-light bg-opacity-40 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Check className="h-5 w-5 text-scrutinx-purple" />
                    <h4 className="font-medium">Verification Logs</h4>
                  </div>
                  <p className="text-sm text-gray-600">
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
