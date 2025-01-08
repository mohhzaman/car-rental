import React from 'react';
import { Star, MapPin, Clock, Gauge } from 'lucide-react';
import type { Car } from '../../types';

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <div className="bg-black/95 rounded-sm border border-amber-500/20 overflow-hidden hover:border-amber-400 transition-all group">
      <div className="relative h-56">
        <img
          src={car.images[0]}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-amber-400 text-black px-3 py-1 rounded-sm font-bold">
          ${car.price}/day
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{car.name}</h3>
            <div className="text-sm text-gray-400">{car.year} • {car.make}</div>
          </div>
          <div className="flex items-center bg-white/10 px-2 py-1 rounded-sm">
            <Star className="h-4 w-4 text-amber-400 fill-current" />
            <span className="ml-1 text-white">{car.rating}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div className="flex items-center text-gray-400">
            <Gauge className="h-4 w-4 mr-2" />
            620 HP
          </div>
          <div className="flex items-center text-gray-400">
            <Clock className="h-4 w-4 mr-2" />
            3.2s 0-60
          </div>
        </div>

        <button className="w-full bg-amber-400 text-black py-3 font-bold hover:bg-amber-300 transition-colors">
          Reserve Now
        </button>
      </div>
    </div>
  );
}