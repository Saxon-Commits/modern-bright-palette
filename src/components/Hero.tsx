import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-picnic-setup-new.jpg" 
          alt="Luxury beach picnic setup for a hens party or proposal at Merewether Beach, Newcastle"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-coastal-sand/60"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-sans text-sm md:text-base tracking-[0.25em] uppercase text-coastal-blue font-medium mb-6">
            NEWCASTLE, NSW
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1] md:leading-[1.1] [text-shadow:0_2px_10px_rgba(0,0,0,0.4)]">
            The Ultimate Picnic <br />
            Experience – <br className="md:hidden" />
            <span className="italic font-normal text-coastal-blue [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]">supporting inclusion.</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/95 mb-10 max-w-3xl mx-auto font-medium tracking-wide [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]">
            Luxury picnic experiences designed for connections, celebrations, and social impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://form.jotform.com/260421379292054?fbclid=PAVERFWAQ35-hleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafLcaOhSDvO_hu47amDfIi2_ly7hRzFeYx91n3gaQMAhERb5minO-Ja15XARw_aem_dIzyDJkY6rzVQe4JUF4ANw" target="_blank" rel="noopener noreferrer" className="coastal-button pl-10 pr-8 py-4 text-lg flex items-center gap-6 group shadow-2xl">
              Book Your Picnic <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#pricing" className="text-white hover:text-coastal-blue font-medium underline underline-offset-8 transition-colors">
              View Pricing & Inclusions
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
          "A warm invitation to connect"
        </span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white hidden md:block"
      >
        <div className="w-[1px] h-20 bg-white/30 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-pulse origin-top"></div>
        </div>
      </motion.div>
    </section>
  );
}
