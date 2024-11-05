import React from 'react';
import { Globe, Smartphone, Search, Code2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites that are fast, secure, and scalable, built with modern technologies',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences',
    },
    {
      icon: Search,
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with functionality',
    },
    {
      icon: Code2,
      title: 'Custom Solutions',
      description: 'Tailored software solutions to address your unique business challenges',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Comprehensive digital solutions tailored to your needs
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}