import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with placeholder overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-picnic-setup.jpg" 
          alt="Luxury beach picnic setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-coastal-white"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-coastal-blue/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold tracking-wider uppercase mb-6 border border-white/20">
            Newcastle & Hunter Region
          </span>
          <h1 className="text-5xl md:text-8xl text-white mb-8 leading-[0.9]">
            Elevated Outdoor <br />
            <span className="italic font-normal">Dining.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Luxury picnic experiences designed for connections, celebrations, and social impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/book" className="coastal-button px-10 py-4 text-lg flex items-center gap-2 group shadow-2xl">
              Book Your Picnic <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#pricing" className="text-white hover:text-coastal-blue font-medium underline underline-offset-8 transition-colors">
              View Pricing & Inclusions
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-coastal-navy hidden md:block"
      >
        <div className="w-[1px] h-20 bg-coastal-navy/30 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-coastal-navy animate-pulse origin-top"></div>
        </div>
      </motion.div>
    </section>
  );
}
