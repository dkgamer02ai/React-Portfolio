import React, { useEffect, useRef } from 'react';
import { ArrowDown, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ$+-*/=%"\'#&_(),.;:?!\\|{}<>[]^~';
    
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0fa';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 33);
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0 opacity-30"
      ></canvas>
      
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-black/90 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20 text-center pt-16">
        <div className="inline-flex items-center justify-center mb-6 bg-gray-800/80 px-4 py-2 rounded-full">
          <ShieldCheck className="w-5 h-5 text-cyan-400 mr-2" />
          <span className="text-cyan-400 font-medium">Vulnerability Analyst & Penetration Tester</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-300 mb-6 leading-tight">
          Finding Vulnerabilities <br /> Before Attackers Do
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Certified eJPTv2 professional specializing in vulnerability assessment, penetration testing, and securing digital assets against emerging threats.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="py-3 px-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-md transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/25"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="py-3 px-8 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-md border border-gray-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;