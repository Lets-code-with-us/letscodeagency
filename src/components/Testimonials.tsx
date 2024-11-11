import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'DesiQNA',
      role: 'Founder, DesiQNA',
      content: 'Let’s Code truly transformed my website! Since they developed it, I’ve seen a significant increase in leads and inquiries. The design is sleek, modern, and perfectly aligned with my brand. They not only built a visually stunning site but also ensured it was optimized for user experience and search engines.',
     
    },
    {
      name: 'Manish',
      role: 'Founder, Stalon',
      content: "Working with Let's Code was a game changer for my business. They developed a professional website that perfectly captured my vision. Thanks to their expertise, my business has grown and gained recognition in ways I never imagined.",
    },
    {
      name: 'Mirag',
      role: 'Co-Founder, Innvokate',
      content: "I can't thank Let's Code enough for the incredible website they created for me. Their team understood my business goals and delivered a site that helped me stand out. As a result, my business has gained significant visibility and has expanded far beyond what I expected.",
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