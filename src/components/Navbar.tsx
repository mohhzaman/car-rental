import React from 'react';
import { Car, User, Menu, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-black/95 text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-amber-400" />
            <span className="ml-2 text-2xl font-bold">LUXERIDE</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Fleet</a>
            <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Services</a>
            <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Membership</a>
            <div className="border-l border-amber-500/20 h-6 mx-4" />
            <a href="tel:+1234567890" className="flex items-center text-amber-400">
              <Phone className="h-4 w-4 mr-2" />
              <span>24/7 Concierge</span>
            </a>
            <button className="bg-amber-400 text-black px-6 py-2 rounded-sm hover:bg-amber-300 transition-colors font-semibold">
              Reserve Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button className="p-2 rounded-sm text-gray-400 hover:text-amber-400">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}