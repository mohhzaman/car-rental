export interface Car {
  id: string;
  name: string;
  make: string;
  model: string;
  year: number;
  price: number;
  location: string;
  type: 'luxury' | 'suv' | 'sedan' | 'ev';
  features: string[];
  images: string[];
  rating: number;
  reviews: number;
}

export interface SearchParams {
  location: string;
  startDate: string;
  endDate: string;
  type?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  date: string;
}