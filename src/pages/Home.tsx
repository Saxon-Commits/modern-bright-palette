import Hero from '@/src/components/Hero';
import SocialImpact from '@/src/components/SocialImpact';
import Pricing from '@/src/components/Pricing';
import StyleGuide from '@/src/components/StyleGuide';
import Location from '@/src/components/Location';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <SocialImpact />
      <Pricing />
      <StyleGuide />
      <Location />
    </motion.div>
  );
}
