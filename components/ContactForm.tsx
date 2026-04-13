'use client';
import React, { useState } from 'react';
import { Users, Mail, Phone } from 'lucide-react';

interface ContactFormProps {
  title: string;
  subtitle?: string;
}

const ContactForm = (props: ContactFormProps) => {
  const title = props.title || 'Get in Touch';
  const subtitle = props.subtitle || 'We are here to help you on your fitness journey!';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 md:py-16">
      <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
      <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mt-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
          <div className="flex items-center border border-gray-300 rounded-md mt-1">
            <Users className="w-6 h-6 text-primary p-2" />
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="flex-1 p-2 outline-none" placeholder="Your Name" required />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
          <div className="flex items-center border border-gray-300 rounded-md mt-1">
            <Mail className="w-6 h-6 text-primary p-2" />
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 p-2 outline-none" placeholder="Your Email" required />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="border border-gray-300 rounded-md w-full p-2 outline-none" placeholder="Your Message" rows={4} required></textarea>
        </div>
        <button type="submit" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;