import React from 'react';
import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <div className="relative h-[800px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center h-full text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-400">
            Extraordinary Drives
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl text-gray-200">
            Experience the pinnacle of automotive excellence. 
            From Lamborghini to Ferrari, drive the extraordinary.
          </p>
          
          <SearchBar />

          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-400">200+</div>
              <div className="text-sm text-gray-300">Luxury Vehicles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">24/7</div>
              <div className="text-sm text-gray-300">Concierge Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">100%</div>
              <div className="text-sm text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}