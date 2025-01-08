import React from 'react';
import { Star } from 'lucide-react';
import { CarCard } from '../ui/CarCard';
import { SectionTitle } from '../ui/SectionTitle';

const FEATURED_CARS = [
  {
    id: '1',
    name: 'Tesla Model S',
    make: 'Tesla',
    model: 'Model S',
    year: 2023,
    price: 199,
    location: 'San Francisco, CA',
    type: 'ev',
    features: ['Autopilot', 'Long Range', 'Premium Interior'],
    images: ['https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80'],
    rating: 4.9,
    reviews: 124
  },
  {
    id: '2',
    name: 'Porsche 911 Carrera',
    make: 'Porsche',
    model: '911',
    year: 2023,
    price: 299,
    location: 'Los Angeles, CA',
    type: 'luxury',
    features: ['Sport Mode', 'Leather Interior', 'PDK'],
    images: ['https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&q=80'],
    rating: 4.8,
    reviews: 89
  },
  {
    id: '3',
    name: 'Range Rover Sport',
    make: 'Land Rover',
    model: 'Range Rover Sport',
    year: 2023,
    price: 249,
    location: 'Miami, FL',
    type: 'suv',
    features: ['4x4', 'Panoramic Roof', 'Premium Sound'],
    images: ['https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80'],
    rating: 4.7,
    reviews: 156
  }
];

export default function FeaturedCars() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Cars"
          subtitle="Discover our most popular vehicles"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_CARS.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}