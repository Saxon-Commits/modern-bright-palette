import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [scrolled, setScrolled] = useState(!isHomePage);

  // On non-home pages (no hero), always show the solid navbar
  useEffect(() => {
    if (!isHomePage) {
      setScrolled(true);
      return;
    }
    setScrolled(window.scrollY > 50);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Style Guide', path: '/#style-guide' },
    { name: 'FAQ', path: '/faq' },
    { name: 'T&Cs', path: '/tcs' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-8 py-6",
      scrolled || isOpen ? "glass-nav py-4" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col group">
          <span className={cn(
            "font-serif text-2xl md:text-3xl transition-colors duration-300",
            scrolled || isOpen ? "text-stone-800" : "text-white"
          )}>
            The Picnic Project
          </span>
          <span className={cn(
            "font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase transition-colors duration-300",
            scrolled || isOpen ? "text-stone-500" : "text-white/70"
          )}>
            Newcastle
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "font-medium transition-colors",
                scrolled ? "text-coastal-navy hover:opacity-80" : "text-white hover:text-coastal-sand"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://form.jotform.com/260421379292054?fbclid=PAVERFWAQ35-hleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafLcaOhSDvO_hu47amDfIi2_ly7hRzFeYx91n3gaQMAhERb5minO-Ja15XARw_aem_dIzyDJkY6rzVQe4JUF4ANw"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "transition-all shadow-md px-6 py-2.5 rounded-full font-medium hover:opacity-90",
              scrolled || isOpen
                ? "bg-coastal-navy border-coastal-navy text-white"
                : "border border-white text-white hover:bg-white hover:text-coastal-navy"
            )}
          >
            Book Your Picnic
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden transition-colors hover:opacity-80",
            scrolled || isOpen ? "text-coastal-navy" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-4 shadow-xl md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg font-medium py-2 hover:opacity-80 transition-colors text-coastal-navy"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://form.jotform.com/260421379292054?fbclid=PAVERFWAQ35-hleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafLcaOhSDvO_hu47amDfIi2_ly7hRzFeYx91n3gaQMAhERb5minO-Ja15XARw_aem_dIzyDJkY6rzVQe4JUF4ANw"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-white bg-coastal-navy font-medium text-center shadow-lg transition-all hover:opacity-90"
            onClick={() => setIsOpen(false)}
          >
            Book Your Picnic
          </a>
        </motion.div>
      )}
    </nav>
  );
}
