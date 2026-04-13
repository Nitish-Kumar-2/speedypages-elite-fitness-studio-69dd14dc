import React from 'react';
import { Users, Coffee, Star } from 'lucide-react';

interface HeaderProps {
  logo: string;
  navigation: Array<{ label: string; path: string }>; 
}

const Header = (props: HeaderProps) => {
  const items = props.navigation || [];
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={props.logo} alt="Elite Fitness Studio Logo" className="h-10" />
          <h1 className="text-2xl font-bold text-primary ml-4">Elite Fitness Studio</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.path} className="text-gray-700 hover:text-primary transition-colors" aria-label={item.label}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;