import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ExternalLink, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-10 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Security Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-5"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my work in cybersecurity, demonstrating expertise in various security domains and industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-gray-900 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-80"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400">
                  {project.title}
                </h3>
                
                <p className={`text-gray-300 mb-4 transition-opacity duration-300 ${
                  activeProject === project.id ? 'opacity-100' : 'opacity-80'
                }`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-medium bg-gray-800 text-cyan-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link || '#'}
                  className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300"
                >
                  View Details <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/dkgamer02ai?tab=repositories"
            className="inline-flex items-center px-6 py-3 rounded-md bg-gray-700 hover:bg-gray-600 text-white transition-colors duration-300"
          >
            Want to see more? <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;