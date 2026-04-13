import React from 'react';
import { Coffee, Users, Shield } from 'lucide-react';

interface FooterProps {
  companyName: string;
  copyright: string;
  links?: Array<{ label: string; path: string }>; 
}

const Footer = (props: FooterProps) => {
  const links = props.links || [];
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">{props.companyName}</div>
          <div className="text-sm">&copy; {props.copyright}</div>
        </div>
        <nav className="mt-4">
          <ul className="flex space-x-4">
            {links.map((link, idx) => (
              <li key={idx}>
                <a href={link.path} className="hover:underline" aria-label={`Navigate to ${link.label}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-6 flex space-x-4">
          <Coffee className="w-6 h-6 text-primary" aria-hidden="true" />
          <Users className="w-6 h-6 text-primary" aria-hidden="true" />
          <Shield className="w-6 h-6 text-primary" aria-hidden="true" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;