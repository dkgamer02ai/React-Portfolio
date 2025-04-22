import React from 'react';
import { Shield, Award, BookOpen, Target, Fingerprint } from 'lucide-react';
import profilePic from '/src/assets/pfp.png';

const About: React.FC = () => {
  const stats = [
    { value: 'eJPTv2', label: 'Certification', icon: <Award className="w-5 h-5 text-cyan-400" /> },
    { value: '75+', label: 'Vulnerabilities Exploited', icon: <Target className="w-5 h-5 text-cyan-400" /> },
    { value: '25+', label: 'Security Assessments', icon: <Shield className="w-5 h-5 text-cyan-400" /> },
  ];

  return (
    <section id="about" className="py-10 bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Profile Section */}
        <div className="text-center mb-16">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-cyan-400">
              <img
                src={profilePic}
                alt="Arin Prashar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
              <Fingerprint className="w-5 h-5 text-gray-900" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Arin Prashar</h2>
          <p className="text-cyan-400 text-lg">Vulnerability Analyst & Penetration Tester</p>
          <p className="text-cyan-400 text-lg">System Administration</p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto my-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
                <div className="bg-gray-800 p-3 border-b border-gray-700 flex items-center">
                  <div className="flex gap-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-400 text-sm font-mono flex-1 text-center">
                    vulnerability-scan.sh
                  </div>
                </div>
                
                <div className="p-4 font-mono text-sm">
                  <div className="flex">
                    <span className="text-green-400 mr-2">$</span>
                    <span className="text-cyan-400">whoami</span>
                  </div>
                  <div className="text-gray-300 mt-1 mb-3">Vulnerability Analyst & Penetration Tester</div>
                  
                  <div className="flex">
                    <span className="text-green-400 mr-2">$</span>
                    <span className="text-cyan-400">cat expertise.txt</span>
                  </div>
                  <div className="text-gray-300 mt-1 mb-3">
                    <span className="text-yellow-400">['Web App Testing', 'Network Security', 'Development', 'Vulnerability Assessment']</span>
                  </div>
                  
                  <div className="flex">
                    <span className="text-green-400 mr-2">$</span>
                    <span className="text-cyan-400">cat tools.json</span>
                  </div>
                  <div className="text-gray-300 mt-1 mb-3">
                    <span className="text-white">{`{`}</span><br />
                    <span className="text-gray-300 pl-4">primary: <span className="text-yellow-400">['Nikito', 'Metasploit', 'Nmap','Searchsploit','Netcat']</span>,</span><br />
                    <span className="text-gray-300 pl-4">scripting: <span className="text-yellow-400">['Python', 'Bash', 'Java']</span>,</span><br />
                    <span className="text-gray-300 pl-4">analysis: <span className="text-yellow-400">['Wireshark', 'TCPDump','Autopsy']</span></span><br />
                    <span className="text-white">{`}`}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">$</span>
                    <span className="text-cyan-400">echo <span className="text-green-400">$STATUS</span></span>
                  </div>
                  <div className="text-gray-300 mt-1 mb-3">
                  <span className="text-red-400 mr-2">Looking For Work....</span>
                  <span className="ml-2 inline-block w-2 h-4 bg-cyan-400 animate-pulse"></span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mb-5"></div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              As a certified eJPTv2 professional, I specialize in vulnerability assessment and penetration testing. My expertise lies in identifying security weaknesses in web applications, networks, and APIs before malicious actors can exploit them.
            </p>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              I combine technical expertise with clear communication skills to deliver actionable security insights. My reports provide detailed findings and practical remediation steps that help organizations strengthen their security posture.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-md transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
              <a 
                href="https://drive.google.com/file/d/1pMo10L1JdPehXgRZM8bTrpw9owLcxMcp/view?usp=sharing"
                className="py-3 px-6 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-md transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5" /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;