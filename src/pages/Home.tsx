import Hero from '@/src/components/Hero';
import SocialImpact from '@/src/components/SocialImpact';
import Pricing from '@/src/components/Pricing';
import StyleGuide from '@/src/components/StyleGuide';
import WhyChooseUs from '@/src/components/WhyChooseUs';
import FAQ from '@/src/components/FAQ';
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
      <Pricing />
      <StyleGuide />
      <WhyChooseUs />
      <FAQ />
      <Location />
    </motion.div>
  );
}
