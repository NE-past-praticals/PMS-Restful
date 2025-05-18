
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lock, Car, PackageOpen, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8" />
            <span className="text-xl font-bold">ParkSmart</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <Link to="#features" className="hover:text-blue-200 transition-colors">Features</Link>
            <Link to="#how-it-works" className="hover:text-blue-200 transition-colors">How it Works</Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/login">
              <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="default" className="bg-white text-blue-700 hover:bg-blue-50">
                Sign Up
              </Button>
            </Link>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
          <div className={`md:w-1/2 flex flex-col items-start space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Smart Parking for a <span className="text-blue-300">Smarter City</span>
            </h1>
            <p className="text-xl text-blue-100">
              Find, book, and manage parking spots with ease. 
              Save time and reduce stress with our intelligent parking solution.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <Link to="/register">
                <Button className="w-full sm:w-auto px-8 py-6 text-lg bg-white text-blue-700 hover:bg-blue-50 hover-lift">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg bg-transparent border-white text-white hover:bg-white/10 hover-lift">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
          <div className={`md:w-1/2 mt-10 md:mt-0 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Modern Parking" 
              className="rounded-lg shadow-2xl object-cover w-full h-[400px]" 
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gradient">
              Smart Features for Modern Parking
            </h2>
            <p className="text-lg text-gray-600">
              Our platform provides innovative solutions to make parking hassle-free
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Car className="h-10 w-10 text-blue-500" />,
                title: "Find Parking Quickly",
                description: "Easily locate available parking spots near your destination"
              },
              {
                icon: <Clock className="h-10 w-10 text-blue-500" />,
                title: "Real-time Availability",
                description: "Get up-to-date information on parking spot availability"
              },
              {
                icon: <PackageOpen className="h-10 w-10 text-blue-500" />,
                title: "Various Parking Sizes",
                description: "Find the right spot size for your vehicle, from compact to large"
              },
              {
                icon: <Lock className="h-10 w-10 text-blue-500" />,
                title: "Secure Reservations",
                description: "Book your spot in advance and have peace of mind"
              },
              {
                icon: <Shield className="h-10 w-10 text-blue-500" />,
                title: "Safe & Secure",
                description: "All parking locations are monitored and secure"
              },
              {
                icon: <ArrowRight className="h-10 w-10 text-blue-500" />,
                title: "Easy Access",
                description: "Quick entry and exit from parking facilities"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-6 hover-lift"
              >
                <div className="mb-4 p-3 rounded-full bg-blue-100 inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gradient">
              How ParkSmart Works
            </h2>
            <p className="text-lg text-gray-600">
              Using our service is simple and straightforward
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-8">
            {[
              {
                step: "01",
                title: "Create an Account",
                description: "Sign up and set up your profile with your vehicle information"
              },
              {
                step: "02",
                title: "Find a Spot",
                description: "Browse available parking spots and select the one that fits your needs"
              },
              {
                step: "03",
                title: "Book & Pay",
                description: "Reserve your spot and complete payment securely through our platform"
              },
              {
                step: "04",
                title: "Park with Ease",
                description: "Follow directions to your spot and enjoy hassle-free parking"
              }
            ].map((step, index) => (
              <div key={index} className="relative w-full md:w-1/4 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-blue-700">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full">
                    <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 to-blue-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Park Smarter?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of drivers who are already saving time with ParkSmart
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/register">
              <Button className="w-full sm:w-auto px-8 py-6 text-lg bg-white text-blue-700 hover:bg-blue-50 hover-lift">
                Create Free Account <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg bg-transparent border-white text-white hover:bg-white/10 hover-lift">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <Car className="h-8 w-8" />
                <span className="text-xl font-bold">ParkSmart</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Smart parking solution for modern cities. Find, book, and manage parking spots with ease.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                  <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                  <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                  <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 ParkSmart. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
