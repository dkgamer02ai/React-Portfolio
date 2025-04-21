import React from 'react';
import { skills, certifications } from '../data/skills';
import { CheckCircle2, Shield } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const Skills: React.FC = () => {
  // Type for dynamic icon lookup
  type IconName = keyof typeof LucideIcons;
  
  const getIcon = (iconName: string) => {
    console.log(iconName,LucideIcons[iconName as IconName] as React.ElementType);
    const Icon = (LucideIcons[iconName as IconName] || Shield) as React.ElementType;
    return <Icon className="w-8 h-8 text-cyan-400" />;
  };
  
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Expertise & Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-5"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technical expertise and specialized knowledge in various cybersecurity domains that help organizations protect their digital assets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-4 p-3 bg-gray-700/50 rounded-md inline-block">
                {getIcon(skill.icon)}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </h3>
              <p className="text-gray-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Certifications & Credentials
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-gray-800/50 rounded-lg border border-gray-700"
              >
                <div className="mr-4 p-3 bg-gray-700/50 rounded-md">
                  {getIcon(cert.icon)}
                  
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {cert.name}
                  </h4>
                  <div className="flex items-center text-gray-400 mb-1">
                    <span>Issued by {cert.issuer}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <CheckCircle2 className="w-4 h-4 mr-1 text-cyan-500" />
                    <span>Obtained {cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;