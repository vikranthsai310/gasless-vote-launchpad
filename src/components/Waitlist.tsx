
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Check, AlertCircle } from "lucide-react";

const Waitlist = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
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
    <section id="waitlist" className="py-16 bg-scrutinx-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-6 md:p-8 lg:p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Waitlist</h2>
                <p className="text-lg text-gray-600">
                  Be the first to access ScrutinX when we launch our private alpha
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="wallet" className="block text-sm font-medium mb-1">
                    Wallet Address (Optional)
                  </label>
                  <Input
                    id="wallet"
                    type="text"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    placeholder="0x..."
                    className="w-full"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Add your wallet address to be considered for early testing
                  </p>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-scrutinx-purple hover:bg-scrutinx-dark text-white py-6 text-lg"
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
              
              <div className="mt-8 space-y-4">
                <h3 className="font-semibold text-lg">Early Access Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-scrutinx-purple mt-0.5 shrink-0" />
                    <p>Be first to test new features before public release</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-scrutinx-purple mt-0.5 shrink-0" />
                    <p>Exclusive access to developer API documentation</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-scrutinx-purple mt-0.5 shrink-0" />
                    <p>Priority support and direct feedback channel to the team</p>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-md flex items-start gap-3">
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
