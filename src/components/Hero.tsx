import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Bug, Shield } from 'lucide-react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ$+-*/=%"\'#&_(),.;:?!\\|{}<>[]^~';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(20, 24, 36, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#50E3C2';
      ctx.font = `${fontSize}px 'Press Start 2P'`;

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
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
    />
  );
};

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-retro-darker py-20">
      <MatrixRain />
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center mb-8 bg-retro-dark p-4 rounded-lg pixel-border">
            <ShieldCheck className="w-8 h-8 text-retro-green mr-3" />
            <span className="text-retro-green text-xl font-pixel">SECURITY EXPERT</span>
          </div>

          <div className="max-w-4xl mx-auto mb-12 relative">
            <h1 className="text-4xl md:text-5xl font-pixel leading-relaxed mb-6">
              <span className="text-retro-yellow">HACK</span>
              <span className="text-retro-pink">&lt;</span>
              <span className="text-retro-blue">THE</span>
              <span className="text-retro-pink">&gt;</span>
              <span className="text-retro-purple">PLANET</span>
              <span className="animate-blink text-retro-green">_</span>
            </h1>

            <div className="flex justify-center gap-6 mb-8">
              <Bug className="w-12 h-12 text-retro-pink animate-float" />
              <Shield className="w-12 h-12 text-retro-blue animate-float" style={{ animationDelay: '0.5s' }} />
              <Bug className="w-12 h-12 text-retro-green animate-float" style={{ animationDelay: '1s' }} />
            </div>

            <p className="text-lg text-retro-blue mb-8 font-pixel">
              eJPTv2 Certified // Vulnerability Hunter // Code Breaker
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#projects" className="retro-button text-white font-pixel">
              VIEW_MISSIONS.exe
            </a>
            <a href="#contact" className="retro-button text-white font-pixel bg-retro-purple">
              INITIATE_CONTACT.exe
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="text-retro-green font-pixel text-sm animate-pixel-bounce">
            PRESS START
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;