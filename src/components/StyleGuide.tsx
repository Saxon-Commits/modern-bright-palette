import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { useStyleColor } from '../context/StyleContext';

const styles = [
  {
    title: 'The "Blue"',
    images: ['/images/style-pic-2.jpg', '/images/hero-3.jpg'],
    description: 'Bold blue florals with gorgeous statement glassware. Perfect for a coastal hens party, oceanside proposal, or anyone who loves a dramatic, jewel-toned palette that really pops in photos.',
    color: '#6094d0',
    tag: 'Statement & Coastal',
    keywords: 'Blue hydrangeas · Statement glassware · Gold cutlery · Coastal vibes'
  },
  {
    title: 'The "Neutral"',
    images: ['/images/style-pic-1.jpg', '/images/hero-2.jpg'],
    description: 'Timeless, underrated, elegant. Warm linen tones, white florals and soft textures — the kind of setup that photographs beautifully in any light and suits any location.',
    color: '#d4a373',
    tag: 'Timeless & Elegant',
    keywords: 'White florals · Warm linens · Candlelight · Understated luxury'
  },
  {
    title: 'The "Red & Pink"',
    images: ['/images/style-pic-3.jpg', '/images/hero-4.jpg'],
    description: 'Our favourite! Playful, vibrant and a little fun. Bright blooms, rich reds and pops of pink — ideal for hens parties, milestone birthdays, and anyone who wants their picnic to feel like a celebration.',
    color: '#D83D50',
    tag: 'Playful & Vibrant',
    keywords: 'Pink dahlias · Red accents · Umbrellas · Birthday & hens vibes'
  },
];

export default function StyleGuide() {
  const [index, setIndex] = useState(2);
  const { setActiveColor } = useStyleColor();

  useEffect(() => {
    setActiveColor(styles[index].color);
  }, [index, setActiveColor]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % styles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="style-guide" className="py-24 text-white overflow-hidden transition-colors duration-700" style={{ backgroundColor: styles[index].color }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <div>
            <span className="uppercase tracking-widest text-sm font-bold text-white/60 mb-4 block">Style Guide</span>
            <h2 className="text-4xl md:text-7xl leading-none">Choose Your <br /><span className="italic">Aesthetic.</span></h2>
          </div>
          <p className="text-white/60 max-w-sm mt-8 md:mt-0 font-light">
            Every detail is curated to match your vision. Choose from our signature coastal styles or request something unique.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Large featured image */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main wide shot */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative"
              >
                <img
                  src={styles[index].images[0]}
                  alt={`${styles[index].title} luxury picnic setup — full view`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <span className="text-xs uppercase tracking-widest text-white/70 font-bold">{styles[index].tag}</span>
                  <h3 className="text-3xl font-display italic text-white mt-1">{styles[index].title}</h3>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Close-up detail shot */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index + 'closeup'}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="aspect-[16/7] rounded-2xl overflow-hidden shadow-xl relative"
              >
                <img
                  src={styles[index].images[1]}
                  alt={`${styles[index].title} luxury picnic — close-up detail`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-5">
                  <span className="text-xs text-white/90 font-medium tracking-wide">{styles[index].keywords}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={index + 'desc'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-white/80 text-base font-light leading-relaxed"
              >
                {styles[index].description}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Theme thumbnail selector — all 3 visible at once */}
          <div className="lg:col-span-5 grid grid-cols-3 lg:grid-cols-1 gap-4">
            <p className="col-span-3 lg:col-span-1 text-white/50 text-xs uppercase tracking-widest font-bold mb-1 hidden lg:block">All Themes</p>
            {styles.map((style, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  i === index
                    ? 'ring-4 ring-white shadow-2xl scale-[1.02]'
                    : 'opacity-60 hover:opacity-90 hover:scale-[1.01]'
                }`}
              >
                <div className="aspect-[4/3] lg:aspect-[16/9]">
                  <img
                    src={style.image}
                    alt={`${style.title} picnic style`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-3 lg:p-4">
                  <span className="text-[10px] lg:text-xs uppercase tracking-widest text-white/60 font-bold">{style.tag}</span>
                  <span className="text-sm lg:text-base font-display italic text-white leading-tight">{style.title}</span>
                </div>
                {i === index && (
                  <div className="absolute top-3 right-3 w-3 h-3 bg-white rounded-full shadow-lg" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
