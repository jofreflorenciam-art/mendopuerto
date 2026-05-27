import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const headerLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Quiénes Somos', href: '#nosotros' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Ubicación', href: '#ubicacion' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-lg py-2 border-b-4 border-primary' : 'py-4 border-b border-border/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-32">
          <a href="#inicio" className="flex items-center shrink-0">
            <img 
              src="https://horizons-cdn.hostinger.com/dd275a68-1ddd-4705-843f-2ebbf61bfaed/8f3e9f28e7dfd14165d97b94947672ad.png" 
              alt="Mendopuerto S.A." 
              className="h-20 md:h-28 lg:h-32 w-auto object-contain transition-all duration-300"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {headerLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-foreground/80 hover:text-primary font-semibold text-[15px] uppercase tracking-wide transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contacto" 
              className="bg-primary text-white px-8 py-3.5 rounded font-bold hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] shadow-sm uppercase tracking-wide text-[15px]"
            >
              Contacto
            </a>
          </nav>

          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b-4 border-primary shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
              {headerLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }}
                  className="block text-foreground font-semibold text-lg py-3 border-b border-border/50"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contacto" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center mt-4 bg-primary text-white px-6 py-4 rounded-lg font-bold text-lg"
              >
                Contacto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
