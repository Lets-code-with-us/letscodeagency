import React from 'react';

export default function Portfolio() {
  const projects = [
    
    {
      title: ' E-Vi',
      description: 'Revolutionize urban transport with Chhota Otto, designed for comfort and efficiency.',
      image: 'auto.png',
      tags: ['NEXT js', 'Framer',],
    },
    {
      title: 'DesiQna',
      description: 'DesiQNA Personalized Training & 1-1 Mentoring Program',
      image: 'desiqna.png',
      tags: ['MERN'],
    },
    {
      title: 'Staylon Beauty',
      description: 'Offers a range of beauty and wellness services.',
      image: 'staylon.png',
      tags: ['HTML', 'CSS','JS'],
    },
    {
      title: 'Traid Trails',
      description: 'Traid Trails deliver high-quality agricultural products right to your doorstep.',
      image: 'tradetrails.png',
      tags: ['Wordpress'],
    },
    {
      title: 'Sanjay Caterers',
      description: 'Offer a wide range of catering options that cater to all occasions.',
      image: 'staylon.png',
      tags: ['HTML', 'CSS','JS'],
    },
    
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Our Work
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Showcasing our latest projects and achievements
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-indigo-100 text-indigo-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}