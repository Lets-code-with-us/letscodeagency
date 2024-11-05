import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Building <span className="text-indigo-600">Digital Excellence</span>
            <br />Together
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We craft exceptional websites and applications that drive real business growth. 
            Let's transform your vision into digital reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-indigo-600 bg-white border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition">
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}