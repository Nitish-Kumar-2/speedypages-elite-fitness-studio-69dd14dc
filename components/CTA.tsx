import React from 'react';
import { Coffee, Users, Star } from 'lucide-react';

interface CTAProps {
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton?: string;
}

const CTA = (props: CTAProps) => {
  const title = props.title || 'Achieve Your Fitness Goals';
  const description = props.description || 'Join us today and take the first step towards a healthier you!';
  const primaryButton = props.primaryButton || 'Get Started';
  const secondaryButton = props.secondaryButton || 'Learn More';

  return (
    <section className="py-12 px-4 md:py-16 bg-white rounded-lg shadow-md">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-700 mb-6">{description}</p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">{primaryButton}</button>
          <button className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary-light transition-colors">{secondaryButton}</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;