import React, { useState } from 'react';
import { Search, Calendar, Car } from 'lucide-react';
import type { SearchParams } from '../types';

export default function SearchBar() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    location: '',
    startDate: '',
    endDate: '',
    type: '',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search params:', searchParams);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Location"
            className="pl-10 w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchParams.location}
            onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
          />
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="date"
            className="pl-10 w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchParams.startDate}
            onChange={(e) => setSearchParams({ ...searchParams, startDate: e.target.value })}
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Car className="h-5 w-5 text-gray-400" />
          </div>
          <select
            className="pl-10 w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchParams.type}
            onChange={(e) => setSearchParams({ ...searchParams, type: e.target.value })}
          >
            <option value="">All Types</option>
            <option value="luxury">Luxury</option>
            <option value="suv">SUV</option>
            <option value="sedan">Sedan</option>
            <option value="ev">Electric</option>
          </select>
        </div>
      </div>
      
      <button
        type="submit"
        className="w-full mt-4 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Search Available Cars
      </button>
    </form>
  );
}