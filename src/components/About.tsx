import React from 'react';
import { Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Who We Are
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            A passionate team of digital craftsmen dedicated to creating exceptional web experiences.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with cutting-edge digital solutions that drive growth and success.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be the go-to partner for businesses seeking innovative and impactful digital transformations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
              <p className="text-gray-600">
                Excellence, Innovation, and Client Success drive everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}