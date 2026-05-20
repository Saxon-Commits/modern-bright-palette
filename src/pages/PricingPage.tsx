import { motion } from 'motion/react';
import Pricing from '@/src/components/Pricing';
import SEO from '@/src/components/SEO';

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Luxury Picnic Packages — The Picnic Project Newcastle",
  "provider": {
    "@type": "LocalBusiness",
    "name": "The Picnic Project Newcastle",
    "url": "https://thepicnicproject.au",
    "telephone": "+61422666211"
  },
  "areaServed": "Newcastle, NSW & surrounds",
  "description": "Bespoke luxury picnic packages for hens parties, birthdays, proposals, baby showers and anniversaries in Newcastle, NSW. Pricing from $250 for up to 4 people.",
  "offers": [
    { "@type": "Offer", "name": "Up to 4 people", "price": "250", "priceCurrency": "AUD" },
    { "@type": "Offer", "name": "5–8 people", "price": "320", "priceCurrency": "AUD" },
    { "@type": "Offer", "name": "9–12 people", "price": "390", "priceCurrency": "AUD" },
    { "@type": "Offer", "name": "13–16 people", "price": "460", "priceCurrency": "AUD" }
  ]
};

export default function PricingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO
        title="Luxury Picnic Pricing & Packages Newcastle | The Picnic Project"
        description="Explore premium luxury picnic packages in Newcastle from $250! Find full inclusions, optional extras, engagement setups & local partners. Book yours today!"
        canonical="/pricing"
        schema={pricingSchema}
      />
      <div className="pt-28">
        <Pricing />
      </div>
    </motion.div>
  );
}
