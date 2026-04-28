import { motion } from 'motion/react';
import { Users, Heart, Sparkles } from 'lucide-react';

export default function SocialImpact() {
  const stats = [
    { icon: Users, label: 'Inclusive Employment', value: '100%', detail: 'Staff identified with disability' },
    { icon: Heart, label: 'Community Support', value: 'Local', detail: 'Hunter Region focus' },
    { icon: Sparkles, label: 'Bespoke Experience', value: 'Premium', detail: 'Curated with care' },
  ];

  return (
    <section className="py-24 bg-coastal-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl text-coastal-navy mb-8">
              Purity with a <span className="italic block mt-2 text-coastal-navy/80">Purpose.</span>
            </h2>
            <div className="space-y-6 text-lg text-coastal-navy/80 font-light leading-relaxed">
              <p>
                The Picnic Project isn't just about beautiful setups; it's about creating
                meaningful opportunities. We are a social enterprise dedicated to providing
                employment and training for people with disabilities in our coastal community.
              </p>
              <p>
                Every booking directly supports our mission to foster inclusivity, build
                confidence, and showcase the incredible talents of our diverse team.
                When you celebrate with us, you're helping us build a more inclusive Newcastle.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <stat.icon className="text-coastal-blue mb-4" size={32} />
                  <span className="text-3xl font-bold text-coastal-navy">{stat.value}</span>
                  <span className="text-xs uppercase tracking-widest font-bold text-coastal-navy/60 mt-1">{stat.label}</span>
                  <span className="text-sm text-coastal-navy/40 mt-1">{stat.detail}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
              <img
                src="/images/social-toast.jpg"
                alt="Social gathering picnic setup"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Design accents */}
            <div className="absolute -top-10 -right-10 w-64 h-64 border-2 border-coastal-blue/30 rounded-full -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-coastal-wood/20 rounded-full -z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
