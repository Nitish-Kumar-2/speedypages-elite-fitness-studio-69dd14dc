import React from 'react';
import { Coffee, Users, Star } from 'lucide-react';

interface HeroProps {
  title: string;
  tagline: string;
  primaryCta?: string;
  secondaryCta?: string;
}

const Hero = (props: HeroProps) => {
  const title = props.title || 'Welcome to Elite Fitness Studio';
  const tagline = props.tagline || 'Transform your health with personalized fitness solutions';
  const primaryCta = props.primaryCta || 'Get Started';
  const secondaryCta = props.secondaryCta || 'Learn More';

  return (
    <section className="py-12 px-4 md:py-16 bg-gradient-to-br from-green-500 to-green-700 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-8">{tagline}</p>
        <div className="flex justify-center space-x-4">
          <a href="/signup" className="px-6 py-3 bg-white text-green-700 rounded-lg hover:bg-gray-100 transition-colors">{primaryCta}</a>
          <a href="/services" className="px-6 py-3 border border-white rounded-lg hover:bg-white/20 transition-colors">{secondaryCta}</a>
        </div>
        <div className="mt-12 flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <Coffee className="w-8 h-8 text-white mb-2" />
            <span>Personal Training</span>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-8 h-8 text-white mb-2" />
            <span>Group Classes</span>
          </div>
          <div className="flex flex-col items-center">
            <Star className="w-8 h-8 text-white mb-2" />
            <span>Wellness Programs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;