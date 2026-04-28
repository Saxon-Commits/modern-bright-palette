import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const styles = [
  {
    title: 'Nautical Blue',
    image: '/images/event-sign.jpg',
    description: 'Crisp white linens paired with deep sea-foam accents and natural wood.'
  },
  {
    title: 'Earthly Sand',
    image: '/images/pouring-drink.jpg',
    description: 'Warm, organic tones with jute textures and dried floral highlights.'
  },
  {
    title: 'Golden Sunset',
    image: '/images/kids-party.jpg',
    description: 'Vibrant and warm, perfect for evening celebrations as the sun dips.'
  },
];

export default function StyleGuide() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % styles.length);
  const prev = () => setIndex((prev) => (prev - 1 + styles.length) % styles.length);

  return (
    <section id="style-guide" className="py-24 bg-coastal-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <div>
            <span className="uppercase tracking-widest text-sm font-bold text-coastal-blue/60 mb-4 block">Style Guide</span>
            <h2 className="text-4xl md:text-7xl leading-none">Choose Your <br /><span className="italic">Aesthetic.</span></h2>
          </div>
          <p className="text-white/60 max-w-sm mt-8 md:mt-0 font-light">
            Every detail is curated to match your vision. Choose from our signature coastal styles or request something unique.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-8 aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl relative"
            >
              <img
                src={styles[index].image}
                alt={styles[index].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12 lg:hidden">
                <div>
                  <h3 className="text-3xl font-display italic mb-2">{styles[index].title}</h3>
                  <p className="text-white/80">{styles[index].description}</p>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-4 hidden lg:block">
              <motion.div
                key={index + 'desc'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h3 className="text-5xl font-display italic text-coastal-blue">{styles[index].title}</h3>
                <p className="text-xl text-white/80 font-light leading-relaxed">
                  {styles[index].description}
                </p>
                <div className="h-px bg-white/20 w-32"></div>
                <div className="flex items-center gap-4">
                  <button onClick={prev} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-coastal-navy transition-all">
                    <ChevronLeft />
                  </button>
                  <button onClick={next} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-coastal-navy transition-all">
                    <ChevronRight />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation for mobile */}
          <div className="flex items-center justify-center gap-6 mt-8 lg:hidden">
            <button onClick={prev} className="p-2 text-white/60 active:text-white"><ChevronLeft size={32} /></button>
            <div className="flex gap-2">
              {styles.map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-coastal-blue w-6' : 'bg-white/30'}`}></div>
              ))}
            </div>
            <button onClick={next} className="p-2 text-white/60 active:text-white"><ChevronRight size={32} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
