import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ExternalLink, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-retro-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-pixel text-retro-green mb-4">
            MISSION_LOG.txt
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-retro-blue to-retro-purple mx-auto mb-5"></div>
          <p className="text-retro-blue font-pixel text-sm max-w-2xl mx-auto">
            CLASSIFIED_PROJECTS &gt; ACCESS_GRANTED
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-retro-darker border-2 border-retro-blue hover:border-retro-purple transition-all duration-500 pixel-shadow"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-retro-darker via-retro-darker/90 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-pixel text-retro-green mb-2 group-hover:text-retro-yellow">
                  {project.title}
                </h3>
                
                <p className={`text-retro-blue mb-4 transition-opacity duration-300 ${
                  activeProject === project.id ? 'opacity-100' : 'opacity-80'
                }`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-pixel bg-retro-dark text-retro-pink rounded-full border border-retro-purple"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link || '#'}
                  className="inline-flex items-center text-sm font-pixel text-retro-yellow hover:text-retro-green"
                >
                  ACCESS_FILES <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-md bg-retro-dark hover:bg-retro-light text-retro-green font-pixel transition-colors duration-300 border-2 border-retro-green"
          >
            REQUEST_ACCESS <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;