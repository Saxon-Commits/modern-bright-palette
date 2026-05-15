import Hero from '@/src/components/Hero';
import SocialImpact from '@/src/components/SocialImpact';
import StyleGuide from '@/src/components/StyleGuide';
import WhyChooseUs from '@/src/components/WhyChooseUs';
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
        description="Bespoke luxury picnic setups in Newcastle, NSW. Perfect for hens parties, proposals, birthdays, and baby showers. A 100% inclusive small business."
        canonical="/"
        schema={homeSchema}
      />
      <Hero />
      <SocialImpact />

      {/* Editorial strip — Ella at work */}
      <div className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="/images/hero-ella.jpg"
          alt="Ella from The Picnic Project carefully setting up a luxury picnic in Newcastle"
          className="w-full h-full object-cover object-[center_55%]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
        <div className="absolute inset-0 flex items-center px-8 md:px-16">
          <p className="font-handwriting text-3xl md:text-5xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] transform -rotate-2">
            every detail, with love
          </p>
        </div>
      </div>

      <StyleGuide />
      <WhyChooseUs />
      <Location />
    </motion.div>
  );
}
