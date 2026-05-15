import { motion } from 'motion/react';
import { Users, Heart, Sparkles } from 'lucide-react';

export default function SocialImpact() {
  const stats = [
    { icon: Users, label: 'Inclusive Employment', value: '100%', detail: 'Staff paid at full award wage' },
    { icon: Heart, label: 'Community Support', value: 'Local', detail: 'Newcastle, NSW · Support small business' },
    { icon: Sparkles, label: 'Bespoke Picnic Experience', value: 'Luxury', detail: 'Stylish and comfortable' },
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
              About Us
            </h2>
            <div className="space-y-6 text-lg text-coastal-charcoal font-medium leading-relaxed">
              <p>
                We’re a boutique luxury picnic business based in the Newcastle region, creating elevated picnic experiences for you and your loved ones. Think effortlessly elegant setups designed for comfort, connection, and slowing things down.
              </p>
              <p>
                Perfect for birthdays, hens, baby showers, gender reveals or simply getting together just “because”. Our picnics are all about sharing moments, laughing lots, and creating beautiful memories together.
              </p>
              <p>
                The Picnic Project is proudly run by a small team of two - Tay, the founder, and Ella, our beautiful first employee. When you book with us, you’re not only supporting a small local business, you’re also supporting inclusive employment. 
              </p>
            </div>

            <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col bg-white shadow-md p-6 rounded-3xl border border-coastal-blue/10 hover:-translate-y-1 transition-transform">
                  <stat.icon className="text-coastal-navy mb-4" size={32} />
                  <span className="text-2xl font-bold text-coastal-navy">{stat.value}</span>
                  <span className="text-xs uppercase tracking-widest font-bold text-coastal-charcoal mt-1">{stat.label}</span>
                  <span className="text-xs text-coastal-charcoal/70 mt-2 font-medium">{stat.detail}</span>
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
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white relative z-10">
              <img
                src="/images/ella-tay.jpg"
                alt="Friends celebrating with a luxury picnic setup in Newcastle, NSW"
                className="w-full h-full object-cover will-change-transform [transform:translateZ(0)] [image-rendering:-webkit-optimize-contrast]"
                loading="lazy"
              />
            </div>
            {/* Design accents */}
            <div className="absolute -top-10 -right-10 w-64 h-64 border-2 border-coastal-blue/30 rounded-full -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-coastal-wood/20 rounded-full -z-0"></div>
          </motion.div>
        </div>
      </div>
      <div className="mt-20 text-center relative z-10 px-4">
        <p className="font-handwriting text-3xl md:text-4xl text-coastal-blue transform -rotate-2 inline-block">
          With love, Ella & Tay
        </p>
      </div>
    </section>
  );
}
