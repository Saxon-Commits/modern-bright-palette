import Hero from '@/src/components/Hero';
import SocialImpact from '@/src/components/SocialImpact';
import StyleGuide from '@/src/components/StyleGuide';
import WhyChooseUs from '@/src/components/WhyChooseUs';
import InstagramFeed from '@/src/components/InstagramFeed';
import Location from '@/src/components/Location';
import { motion } from 'motion/react';
import SEO from '@/src/components/SEO';
import { homeSchema } from '@/src/lib/seoData';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO 
        title="Luxury Picnic Newcastle | Hens Parties, Proposals & Birthdays"
        description="Book a bespoke luxury picnic setup in Newcastle, NSW. Perfect for hens parties, proposals, & birthdays. 100% inclusive—let us style your perfect day!"
        canonical="/"
        schema={homeSchema}
      />
      <Hero />
      <SocialImpact />

      {/* Editorial strip — Ella at work */}
      <div className="relative h-[65vh] md:h-[85vh] overflow-hidden flex flex-col md:flex-row items-center justify-center bg-stone-900">
        {/* Blurred Background (Desktop Only) */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center blur-xl scale-110 opacity-50"
          style={{ backgroundImage: `url('/images/hero-ella.webp')` }}
        />
        
        {/* Image: Fills background on mobile, floating rounded box on desktop */}
        <img
          src="/images/hero-ella.webp"
          alt="Ella from The Picnic Project carefully setting up a luxury picnic in Newcastle"
          className="absolute md:relative inset-0 md:inset-auto z-10 w-full md:w-auto h-full md:h-[calc(100%-4rem)] object-cover md:rounded-[2rem] md:shadow-2xl"
          loading="lazy"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-start pt-24 md:pt-0 justify-center md:items-center md:justify-start px-8 md:px-24 z-20 pointer-events-none w-full bg-gradient-to-b from-black/60 via-black/10 to-transparent md:bg-none">
          <p className="font-handwriting text-5xl md:text-6xl text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] transform -rotate-2 text-center md:text-left">
            every detail, with love
          </p>
        </div>
      </div>

      <StyleGuide />
      <WhyChooseUs />
      <InstagramFeed />
      <Location />
    </motion.div>
  );
}
