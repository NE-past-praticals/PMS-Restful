
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Car } from 'lucide-react';

interface AuthLayoutProps {
  className?: string;
}

export function AuthLayout({ className }: AuthLayoutProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side brand/image panel */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 flex-col justify-between">
        <div className="flex items-center space-x-2">
          <Car className="h-8 w-8" />
          <span className="text-xl font-bold">ParkSmart</span>
        </div>
        
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <h1 className="text-4xl font-bold mb-4">Your Smart Parking Solution</h1>
          <p className="text-lg text-blue-200 mb-8">
            Find, book, and manage parking spots with ease. Join thousands of drivers who are saving time with ParkSmart.
          </p>
          
          <div className="mt-8 relative">
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-400 rounded-full filter blur-xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-indigo-400 rounded-full filter blur-xl opacity-50 animate-pulse delay-700"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1589830400747-59a7b5557e4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Car parking" 
              className="rounded-xl object-cover shadow-2xl animate-in"
            />
          </div>
        </div>
        
        <div className="text-sm text-blue-200">
          © 2025 ParkSmart. All rights reserved.
        </div>
      </div>
      
      {/* Right side content panel */}
      <div className={`w-full md:w-1/2 flex items-center justify-center p-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className={cn('w-full max-w-md p-8 bg-white rounded-2xl shadow-lg border border-gray-100', className)}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
