import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <p className="mt-4 text-xl text-gray-600">{subtitle}</p>
    </div>
  );
}