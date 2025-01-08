import React from 'react';
import { DollarSign, Shield, Calendar } from 'lucide-react';

const BENEFITS = [
  {
    icon: DollarSign,
    title: 'Earn Extra Income',
    description: 'Make up to $1,500/month sharing your car'
  },
  {
    icon: Shield,
    title: 'Insurance Coverage',
    description: '$1M liability insurance and 24/7 roadside assistance'
  },
  {
    icon: Calendar,
    title: 'Flexible Schedule',
    description: 'You control when your car is available'
  }
];

export default function HostPromo() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Share Your Car, Earn Extra Income
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of hosts who are earning extra income by sharing their cars on LuxeRide.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Start Hosting
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {BENEFITS.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-blue-100">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}