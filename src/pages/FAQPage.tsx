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
        title="Luxury Picnic FAQs Newcastle | Answers to Common Questions"
        description="Got questions about luxury picnic setups in Newcastle? Find answers about catering, locations, wet weather, custom styling, kids, pets and bookings here!"
        canonical="/faq"
        schema={faqSchema}
      />
      <div className="pt-28">
        <FAQ />
      </div>
    </motion.div>
  );
}
