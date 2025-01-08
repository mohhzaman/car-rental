import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { FAQItem } from '../ui/FAQItem';

const FAQ_ITEMS = [
  {
    question: 'What do I need to rent a car?',
    answer: 'You need a valid driver\'s license, proof of insurance, and a credit card. You must be at least 21 years old (25 for luxury vehicles).'
  },
  {
    question: 'Is insurance included?',
    answer: 'Yes, all rentals include basic insurance coverage. Additional coverage options are available for purchase.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Free cancellation up to 24 hours before your rental. Cancellations within 24 hours may be subject to a fee.'
  },
  {
    question: 'How does the pickup process work?',
    answer: 'You can pick up your car at our designated locations. We\'ll verify your documents and hand over the keys after a brief vehicle inspection.'
  }
];

export default function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our service"
        />
        
        <div className="mt-12 space-y-6">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}