import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { homeSchema } from '@/src/lib/seoData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Extract FAQs directly from the schema we created earlier so content is strictly synced
  const faqSchema = homeSchema.find((s: any) => s['@type'] === 'FAQPage');
  const faqs = faqSchema?.mainEntity.map((item: any) => ({
    question: item.name,
    answer: item.acceptedAnswer.text
  })) || [];

  return (
    <section className="py-24 bg-coastal-sand">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-sm font-bold text-coastal-blue/60 mb-4 block">Got Questions?</span>
          <h2 className="text-4xl md:text-5xl text-coastal-navy mb-6">Frequently Asked <span className="italic">Questions.</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq: any, i: number) => (
            <div key={i} className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50 transition-all ${openIndex === i ? 'border-l-4 border-l-coastal-navy' : 'border-l-4 border-l-transparent'}`}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-bold text-[#4A2E2E] pr-8">{faq.question}</h3>
                <ChevronDown 
                  className={`text-coastal-navy/40 transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="p-6 pt-0 text-coastal-charcoal leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
