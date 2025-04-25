import React, { useState, useEffect, useRef } from 'react';
import { Shield, Award, BookOpen, Target, Fingerprint, Folder, File } from 'lucide-react';
import profilePic from '/src/assets/pfp.png';

const About: React.FC = () => {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const isSimulatingRef = useRef(false);

  const stats = [
    { value: 'eJPTv2', label: 'Certification', icon: <Award className="w-5 h-5 text-cyan-400" /> },
    { value: '75+', label: 'Vulnerabilities Exploited', icon: <Target className="w-5 h-5 text-cyan-400" /> },
    { value: '25+', label: 'Security Assessments', icon: <Shield className="w-5 h-5 text-cyan-400" /> },
  ];

  useEffect(() => {
    if (isSimulatingRef.current) return;
    isSimulatingRef.current = true;

    const initialHistory = [
      'whoami',
      'ls -la',
      'pwd',
      'ls'
    ];
    setCommandHistory(initialHistory);

    let mounted = true;
    const simulateCommands = async () => {
      const commands = [
        'cd about_me',
        'cat profile.txt',
        'cat expertise.txt',
        'cat tools.json',
        'echo $STATUS'
      ];

      for (const cmd of commands) {
        if (!mounted) break;
        
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (!mounted) break;
        setCommandHistory(prev => [...prev, cmd]);
        
        setIsLoading(false);
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }
    };

    simulateCommands();

    return () => {
      mounted = false;
      isSimulatingRef.current = false;
    };
  }, []);

  const renderCommandOutput = (command: string) => {
    switch (command) {
      case 'whoami':
        return <div className="pl-4 text-gray-300">Vulnerability Analyst and Penetration Testing</div>;
      case 'pwd':
        return <div className="pl-4 text-gray-300">/home/dkg</div>;
      case 'ls /home':
        return <div className="pl-4 text-cyan-400">dkg</div>;
      case 'ls -la':
        return (
          <div className="pl-4 space-y-1 text-gray-300">
            <div>drwxr-xr-x  2 user user 4096 Mar 15 10:30 .</div>
            <div>drwxr-xr-x 22 user user 4096 Mar 15 10:30 ..</div>
            <div>-rw-------  1 user user  220 Mar 15 10:30 .bash_history</div>
            <div>-rw-r--r--  1 user user 3526 Mar 15 10:30 .bashrc</div>
            <div>-rw-r--r--  1 user user 3526 Mar 15 10:30 .profile</div>
            <div>-rw-r--r--  1 user user 3526 Mar 15 10:30 .bash_logout</div>
            <div>drwxr-xr-x  2 user user 4096 Mar 15 10:30 about_me</div>
          </div>
        );
      case 'ls':
        return (
          <div className="pl-4 flex items-center gap-2 text-cyan-400">
            <Folder className="w-4 h-4" /> about_me
          </div>
        );
      
      case 'cat profile.txt':
        return (
          <div className="pl-4 text-gray-300">
            Vulnerability Analyst & Penetration Tester with expertise in System Administration.
            Scripting in python with automation of basic tasks such as network scanning, Dir enumeration, Subdomain enumeratoin. 
          </div>
        );
      case 'cat expertise.txt':
        return (
          <div className="pl-4">
            <span className="text-yellow-400">['Web App Testing', 'Network Security', 'Development', 'Vulnerability Assessment']</span>
          </div>
        );
      case 'cat tools.json':
        return (
          <div className="pl-4">
            <span className="text-white">{`{`}</span><br />
            <span className="pl-4">primary: <span className="text-yellow-400">['Nikito', 'Metasploit', 'Nmap', 'Searchsploit', 'Netcat']</span>,</span><br />
            <span className="pl-4">scripting: <span className="text-yellow-400">['Python', 'Bash', 'Java']</span>,</span><br />
            <span className="pl-4">analysis: <span className="text-yellow-400">['Wireshark', 'TCPDump', 'Autopsy', '']</span></span><br />
            <span className="text-white">{`}`}</span>
          </div>
        );
      case 'echo $STATUS':
        return (
          <div className="pl-4">
            <span className="text-red-400">Looking For Work....</span>
            <span className="ml-2 inline-block w-2 h-4 bg-cyan-400 animate-pulse"></span>
          </div>
        );
      case 'clear':
        return <div className="h-8"></div>;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-800">
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

        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          <div className="lg:w-1/2">
            <div className="relative h-full">
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700 h-full">
                <div className="bg-gray-800 p-3 border-b border-gray-700 flex items-center">
                  <div className="flex gap-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-400 text-sm font-mono flex-1 text-center">
                    terminal
                  </div>
                </div>
                
                <div 
                  ref={terminalRef}
                  className="p-8 font-mono text-sm h-[calc(100%-48px)] flex flex-col space-y-4 overflow-auto"
                >
                  {commandHistory.map((command, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center">
                        <span className="text-green-400 mr-2">dkg@Catalyst</span>
                        <span className="text-gray-400 mr-2">$</span>
                        <span className="text-white">{command}</span>
                      </div>
                      {renderCommandOutput(command)}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex items-center">
                      <span className="text-green-400 mr-2">dkg@Catalyst</span>
                      <span className="text-gray-400 mr-2">$</span>
                      <span className="animate-pulse">▊</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex flex-col">
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 h-full shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mb-8"></div>
              
              <div className="space-y-6 text-gray-300 leading-relaxed mb-8">
                <p>
                  As a certified eJPTv2 professional, Specializing in vulnerability assessment and penetration testing. Expertise lies in identifying security weaknesses in web applications and networks before malicious actors can exploit them.
                </p>
                <p>
                  Combining Technical expertise with clear communication skills to deliver actionable security insights. Reports provide detailed findings and practical remediation steps that help organizations strengthen their security posture.
                </p>
                <p>
                  Developing new scripts and tools to automate security tasks and improve efficiency. Passionate about staying up-to-date with the latest security trends and technologies, continuously learning and adapting to the evolving threat landscape.  
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="flex justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact"
                  className="py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-md transition-all duration-300 text-center flex-1"
                >
                  Get In Touch
                </a>
                <a 
                  href="https://drive.google.com/file/d/1pMo10L1JdPehXgRZM8bTrpw9owLcxMcp/view?usp=sharing"
                  className="py-3 px-6 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-md transition-all duration-300 text-center flex items-center justify-center gap-2 flex-1"
                >
                  <BookOpen className="w-5 h-5" /> Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
