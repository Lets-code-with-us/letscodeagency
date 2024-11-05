import React from 'react';
import { Lightbulb, Users, Palette, Code2, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Ideation',
      description: 'Have an innovative idea? Let’s connect and collaborate to brainstorm effectively, turning your unique vision into a remarkable reality!',
    },
    {
      icon: Users,
      title: 'User Survey',
      description: 'We leverage our tech community to conduct surveys, gathering insights on market trends and user needs to refine your project',
    },
    {
      icon: Palette,
      title: 'UI Design',
      description: 'Design stunning, intuitive interfaces that enhance user experience and effectively convey your brands message.',
    },
    {
      icon: Code2,
      title: 'Development',
      description: 'Develop robust, scalable solutions that meet your business needs while ensuring optimal performance and reliability.',
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'We will launch your product in our network and maintain it with expertise, ensuring seamless operation and continuous support for long-term success.',
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Our Process
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            A proven approach to delivering exceptional results
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100">
                    <step.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-center text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-indigo-100" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}