import { motion } from 'motion/react';
import { Heart, Sparkles, MapPin } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: MapPin,
      title: "Local to Newcastle & The Hunter",
      desc: "Based in Newcastle NSW, we proudly service our stunning coastal beaches, parks, and travel to the Hunter Valley on request. We know all the best hidden gems."
    },
    {
      icon: Heart,
      title: "100% Inclusive Employment",
      desc: "We are a proudly inclusive small business. Every booking directly supports meaningful employment opportunities"
    },
    {
      icon: Sparkles,
      title: "Premium Bespoke Experience",
      desc: "No two picnics feel the same! From a romantic proposal for two to an 18th birthday or a classy hens party, our setups are luxurious, elevated, and tailored to you."
    }
  ];

  return (
    <section className="py-24 bg-coastal-sand">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-widest text-sm font-bold text-coastal-blue/60 mb-4 block">The Picnic Project Difference</span>
          <h2 className="text-4xl md:text-5xl text-coastal-navy mb-6">Why Choose <span className="italic">Us?</span></h2>
          <p className="text-lg text-coastal-charcoal max-w-2xl mx-auto font-medium leading-relaxed">
            We don't just set up tables and rugs. We create memorable, high-end outdoor experiences across the Newcastle and Hunter Region, all while supporting our local community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-coastal-navy shadow-lg rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <reason.icon size={36} />
              </div>
              <h3 className="text-xl font-bold text-coastal-navy mb-4">{reason.title}</h3>
              <p className="text-coastal-charcoal leading-relaxed font-medium">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
