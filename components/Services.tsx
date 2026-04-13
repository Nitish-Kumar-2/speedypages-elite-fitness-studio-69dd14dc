import React from 'react';
import { Users, Dumbbell, Heart } from 'lucide-react';

interface ServicesProps {
  title?: string;
  subtitle?: string;
  services: Array<{icon: string; title: string; description: string; price?: string;}>
}

const iconMap: Record<string, React.ElementType> = {
  'Users': Users,
  'Dumbbell': Dumbbell,
  'Heart': Heart
};

const Services = (props: ServicesProps) => {
  const title = props.title || 'Our Services';
  const subtitle = props.subtitle || 'Explore our range of fitness solutions';
  const services = props.services || [];
  
  return (
    <section className="py-12 px-4 md:py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-12">{subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Users;
            return (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                <IconComponent className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-2">{service.description}</p>
                {service.price && <p className="text-lg font-bold text-primary">{service.price}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;