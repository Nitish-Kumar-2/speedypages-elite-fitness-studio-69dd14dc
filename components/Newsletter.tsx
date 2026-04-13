'use client';
import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface NewsletterProps {
  title: string;
  description: string;
  buttonText: string;
}

const Newsletter = (props: NewsletterProps) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle subscription logic here
    console.log(`Subscribed with email: ${email}`);
  };

  return (
    <section className="py-12 px-4 md:py-16 bg-white rounded-lg shadow-md">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">{props.title}</h2>
        <p className="mt-4 text-lg text-gray-600">{props.description}</p>
        <form onSubmit={handleSubscribe} className="mt-6 flex justify-center">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
          />
          <button type="submit" className="px-6 py-2 bg-primary text-white rounded-r-md hover:bg-primary-dark transition-colors">
            <Mail className="w-6 h-6 inline-block mr-2" />
            {props.buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;