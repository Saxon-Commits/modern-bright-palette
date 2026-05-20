import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const heroImages = [
  {
    src: '/images/hero-picnic-setup-new.jpg',
    alt: 'Luxury beach picnic setup for a hens party or proposal at Merewether Beach, Newcastle',
  },
  {
    src: '/images/hero-2.jpg',
    alt: 'Elegant neutral-toned luxury picnic setup with white florals and candles, Newcastle',
  },
  {
    src: '/images/hero-3.jpg',
    alt: 'Stunning blue floral luxury picnic table setting, Newcastle picnic experience',
  },
  {
    src: '/images/hero-4.jpg',
    alt: 'Romantic outdoor picnic with pink florals and umbrella, Newcastle and Hunter Valley',
  },
];

export default function Hero() {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={imgIndex}
            src={heroImages[imgIndex].src}
            alt={heroImages[imgIndex].alt}
            className="absolute w-full h-full object-cover object-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-coastal-sand/50"></div>
        {/* Radial vignette centred on the text area for targeted contrast */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,0,0,0.35) 0%, transparent 100%)' }}></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl pt-16 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hidden md:block font-sans text-sm md:text-base tracking-[0.25em] uppercase text-coastal-blue font-medium mb-6">
            NEWCASTLE, NSW
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1] md:leading-[1.1] [text-shadow:0_2px_10px_rgba(0,0,0,0.4)]">
            The Ultimate Picnic <br />
            Experience – <br className="md:hidden" />
            <span className="italic font-normal text-coastal-blue [text-shadow:0_2px_12px_rgba(0,0,0,0.9),0_0_30px_rgba(0,0,0,0.6)]">supporting inclusion.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto font-medium tracking-wide [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]">
            Indulge in a stylish, comfortable picnic experience while supporting a small Newcastle business creating meaningful opportunities for people living with disability
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://form.jotform.com/260421379292054?fbclid=PAVERFWAQ35-hleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafLcaOhSDvO_hu47amDfIi2_ly7hRzFeYx91n3gaQMAhERb5minO-Ja15XARw_aem_dIzyDJkY6rzVQe4JUF4ANw" target="_blank" rel="noopener noreferrer" className="coastal-button pl-10 pr-8 py-4 text-lg flex items-center gap-6 group shadow-2xl">
              Book Your Picnic <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#pricing" className="text-white/90 hover:text-coastal-blue font-medium transition-colors px-4 py-2 rounded-full bg-black/25 hover:bg-black/35 backdrop-blur-sm border border-white/20 text-sm md:text-base">
              View Pricing &amp; Inclusions
            </a>
          </div>
        </motion.div>
      </div>

      {/* Hand-written snippet */}
      <motion.div
        initial={{ opacity: 0, rotate: -5 }}
        animate={{ opacity: 1, rotate: -5 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 right-4 md:bottom-12 md:right-12 z-20 text-right max-w-[80vw]"
      >
        <span className="font-handwriting text-2xl md:text-3xl text-stone-800 font-medium tracking-wide drop-shadow-[0_0_12px_rgba(255,255,255,1)]">
          "Luxury picnics with purpose"
        </span>
      </motion.div>

      {/* Image dots indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setImgIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === imgIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`}
          />
        ))}
      </div>
    </section>
  );
}
