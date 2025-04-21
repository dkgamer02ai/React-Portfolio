import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldAlert } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
          <ShieldAlert className="h-6 w-6" />
          <span className="font-bold text-xl tracking-tight">Security My Fooot</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-4 space-y-1 text-center">
            <NavLinks isMobile={true} closeMenu={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  isMobile?: boolean;
  closeMenu?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ isMobile = false, closeMenu }) => {
  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleClick = () => {
    if (isMobile && closeMenu) {
      closeMenu();
    }
  };

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={handleClick}
          className={`
            text-gray-300 hover:text-cyan-400 transition-colors duration-300
            ${isMobile ? 'block py-3 px-4 text-lg' : 'text-sm font-medium'}
          `}
        >
          {link.name}
        </a>
      ))}
      <a
        href="#contact"
        onClick={handleClick}
        className={`
          bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600
          text-white px-4 py-2 rounded-md font-medium transition-all duration-300
          ${isMobile ? 'block mx-auto w-4/5 text-center mt-4' : ''}
        `}
      >
        Hire Me
      </a>
    </>
  );
};

export default Header;