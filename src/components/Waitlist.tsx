
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Check, AlertCircle, Mail, Wallet } from "lucide-react";

const Waitlist = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      setEmail("");
      setWalletAddress("");
      
      toast({
        title: "You've joined the waitlist!",
        description: "We'll notify you when ScrutinX is ready for early access.",
        duration: 5000,
      });
    }, 1000);
  };

  return (
    <section id="waitlist" className="py-16 bg-gradient-to-br from-scrutinx-light via-white to-scrutinx-light relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
      <div className="absolute bottom-0 right-0 w-full h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
            <div className="p-6 md:p-8 lg:p-10">
              <div className="text-center mb-8">
                <div className="inline-block p-3 rounded-full bg-scrutinx-light mb-4">
                  <Mail className="h-8 w-8 text-scrutinx-purple" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-scrutinx-purple to-scrutinx-dark bg-clip-text text-transparent">
                  Join the Waitlist
                </h2>
                <p className="text-lg text-gray-600">
                  Be the first to access ScrutinX when we launch our private alpha
                </p>
              </div>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium mb-1 group-focus-within:text-scrutinx-purple transition-colors">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                        className="w-full pl-10 border-gray-300 focus:border-scrutinx-purple focus:ring focus:ring-scrutinx-light focus:ring-opacity-50"
                      />
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="wallet" className="block text-sm font-medium mb-1 group-focus-within:text-scrutinx-purple transition-colors">
                      Wallet Address (Optional)
                    </label>
                    <div className="relative">
                      <Input
                        id="wallet"
                        type="text"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                        placeholder="0x..."
                        className="w-full pl-10 border-gray-300 focus:border-scrutinx-purple focus:ring focus:ring-scrutinx-light focus:ring-opacity-50"
                      />
                      <Wallet className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Add your wallet address to be considered for early testing
                    </p>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-scrutinx-purple hover:bg-scrutinx-dark text-white py-6 text-lg shadow-lg hover:shadow-xl hover:shadow-scrutinx-light/50 transform hover:-translate-y-0.5 transition-all"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Get Early Access"
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8 animate-fade-in">
                  <div className="inline-block p-3 rounded-full bg-green-100 mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank you for joining!</h3>
                  <p className="text-gray-600 mb-4">
                    We've added you to our waitlist and will notify you when ScrutinX is ready.
                  </p>
                  <Button
                    variant="outline" 
                    className="border-scrutinx-purple text-scrutinx-purple hover:bg-scrutinx-light"
                    onClick={() => setSubmitted(false)}
                  >
                    Sign up another email
                  </Button>
                </div>
              )}
              
              <div className="mt-8 space-y-4">
                <h3 className="font-semibold text-lg">Early Access Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-md transition-colors">
                    <div className="bg-scrutinx-light rounded-full p-1 mt-0.5 shrink-0">
                      <Check className="h-4 w-4 text-scrutinx-purple" />
                    </div>
                    <p>Be first to test new features before public release</p>
                  </li>
                  <li className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-md transition-colors">
                    <div className="bg-scrutinx-light rounded-full p-1 mt-0.5 shrink-0">
                      <Check className="h-4 w-4 text-scrutinx-purple" />
                    </div>
                    <p>Exclusive access to developer API documentation</p>
                  </li>
                  <li className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-md transition-colors">
                    <div className="bg-scrutinx-light rounded-full p-1 mt-0.5 shrink-0">
                      <Check className="h-4 w-4 text-scrutinx-purple" />
                    </div>
                    <p>Priority support and direct feedback channel to the team</p>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-md flex items-start gap-3 border border-blue-100">
                <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
                <p className="text-sm text-blue-700">
                  We're committed to protecting your privacy. Your information will only be used
                  to communicate about ScrutinX updates and early access opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
