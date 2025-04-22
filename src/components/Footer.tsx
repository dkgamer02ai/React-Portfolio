import React from 'react';
import { ShieldAlert, Github, Linkedin, Box, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <ShieldAlert className="h-8 w-8 text-cyan-400 mr-2" />
            <span className="font-bold text-xl text-white">Security My Fooot</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <SocialIcon icon={<Github />} href="https://github.com/dkgamer02ai" label="GitHub" />
            <SocialIcon icon={<Linkedin />} href="https://linkedin.com/in/prashar-arin" label="LinkedIn" />
            <SocialIcon icon={<Box />} href="https://app.hackthebox.com/profile/1304249" label="Hack The Box" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-4">About</h3>
            <p className="text-gray-400 mb-4">
              Dedicated Cybersecurity Student with a passion for ethical hacking and a commitment to continuous learning. I am eager to apply my skills in real-world scenarios and contribute to the field of cybersecurity.
              Currently pursuing a degree in Computer Science with a focus on cybersecurity, I am actively seeking internships and entry-level positions to gain hands-on experience and further develop my expertise.
            </p>
            <a href="#contact" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
              Get in touch <ArrowUp className="ml-1 w-4 h-4 rotate-45" />
            </a>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#hero" label="Home" />
              <FooterLink href="#skills" label="Skills" />
              <FooterLink href="#projects" label="Projects" />
              <FooterLink href="#services" label="Services" />
              <FooterLink href="#about" label="About" />
              <FooterLink href="#contact" label="Contact" />
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Security My Fooot. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href, label }) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="p-2 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-cyan-400 rounded-full transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => {
  return (
    <li>
      <a
        href={href}
        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
      >
        {label}
      </a>
    </li>
  );
};

export default Footer;