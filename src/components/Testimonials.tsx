import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Working with this team was a game-changer for our business. They delivered beyond our expectations and helped us achieve our digital transformation goals ahead of schedule.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    },
    {
      name: 'Michael Chen',
      role: 'Founder, InnovateCo',
      content: "Their attention to detail and technical expertise helped us launch our platform ahead of schedule. The team's commitment to quality is truly outstanding.",
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
    },
    {
      name: 'Emily Davis',
      role: 'Marketing Director, GrowthLabs',
      content: "The team's creative approach and dedication to our project exceeded all expectations. They truly understand how to deliver results that matter.",
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-indigo-100 group-hover:text-indigo-200 transition-colors duration-300" />
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-indigo-50 group-hover:ring-indigo-100 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full shadow-inner" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-indigo-600 opacity-90">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">"{testimonial.content}"</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}