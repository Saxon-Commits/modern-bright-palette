import { motion } from 'motion/react';
import FAQ from '@/src/components/FAQ';
import SEO from '@/src/components/SEO';
import { homeSchema } from '@/src/lib/seoData';

const faqSchema = homeSchema.find((s: any) => s['@type'] === 'FAQPage');

export default function FAQPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO
        title="FAQs | The Picnic Project Newcastle"
        description="Answers to your most common questions about our luxury picnic setups in Newcastle — food, weather, locations, group sizes, kids, pets and more."
        canonical="/faq"
        schema={faqSchema}
      />
      <div className="pt-28">
        <FAQ />
      </div>
    </motion.div>
  );
}
