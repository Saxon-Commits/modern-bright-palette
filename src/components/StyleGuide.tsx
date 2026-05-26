import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useStyleColor } from '../context/StyleContext';

const styles = [
  {
    title: 'The "Blue"',
    images: ['/images/style-pic-2.webp', '/images/hero-3.webp'],
    description: 'Bold blue florals with gorgeous statement glassware. Perfect for a coastal hens party, oceanside proposal, or anyone who loves a dramatic, jewel-toned palette that really pops in photos.',
    color: '#6094d0',
    tag: 'Statement & Coastal',
    keywords: 'Blue hydrangeas · Statement glassware · Gold cutlery · Coastal vibes'
  },
  {
    title: 'The "Neutral"',
    images: ['/images/style-pic-1.webp', '/images/hero-2.webp'],
    description: 'Timeless, underrated, elegant. Warm linen tones, white florals and soft textures — the kind of setup that photographs beautifully in any light and suits any location.',
    color: '#d4a373',
    tag: 'Timeless & Elegant',
    keywords: 'White florals · Warm linens · Candlelight · Understated luxury'
  },
  {
    title: 'The "Red & Pink"',
    images: ['/images/style-pic-3.webp', '/images/red style guide close up image.webp'],
    description: 'Our favourite! Playful, vibrant and a little fun. Bright blooms, rich reds and pops of pink — ideal for hens parties, milestone birthdays, and anyone who wants their picnic to feel like a celebration.',
    color: '#D83D50',
    tag: 'Playful & Vibrant',
    keywords: 'Pink dahlias · Red accents · Umbrellas · Birthday & hens vibes'
  },
];

export default function StyleGuide() {
  const [index, setIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const { setActiveColor } = useStyleColor();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setActiveColor(styles[index].color);
  }, [index, setActiveColor]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % styles.length);
    }, 15000); // 15 seconds for a relaxed reading pace
    return () => clearInterval(interval);
  }, [index, isPaused]);

  const slideTransition = shouldReduceMotion ? { duration: 0 } : { duration: 0.5 };
  const textTransition = shouldReduceMotion ? { duration: 0 } : { duration: 0.4 };

  return (
    <section 
      id="style-guide" 
      className="py-24 text-white overflow-hidden transition-colors duration-1000" 
      style={{ backgroundColor: styles[index].color }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="uppercase tracking-widest text-sm font-bold text-white/70 mb-4 block">Style Guide</span>
            <h2 className="text-4xl md:text-7xl leading-none font-bold">
              Choose Your <br />
              <span className="italic font-display font-normal">Aesthetic.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4 max-w-md w-full">
            <p className="text-white/90 text-base font-light leading-relaxed md:text-right">
              Every detail is curated to match your vision. Choose from our signature coastal styles or request something unique.
            </p>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-xs font-semibold text-white border border-white/20 shadow-sm cursor-pointer"
              aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            >
              <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'}`}></span>
              <span>{isPaused ? 'Slideshow Paused' : 'Slideshow Playing'}</span>
            </button>
          </div>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Large featured image & detail */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main wide shot */}
            <div className="relative group/card overflow-hidden rounded-[2rem] shadow-2xl aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={slideTransition}
                  className="w-full h-full relative"
                >
                  <img
                    src={styles[index].images[0]}
                    alt={`${styles[index].title} luxury picnic setup — full view`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/90 font-bold bg-white/10 backdrop-blur-md px-3 py-1 rounded-md inline-block mb-3 border border-white/10">
                      {styles[index].tag}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-display italic text-white leading-tight">
                      {styles[index].title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Arrow navigation buttons - accessible and visible on hover/focus */}
              <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIndex((prev) => (prev - 1 + styles.length) % styles.length);
                  }}
                  className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-all opacity-0 group-hover/card:opacity-100 focus:opacity-100 pointer-events-auto cursor-pointer border border-white/15"
                  aria-label="Previous style"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIndex((prev) => (prev + 1) % styles.length);
                  }}
                  className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-all opacity-0 group-hover/card:opacity-100 focus:opacity-100 pointer-events-auto cursor-pointer border border-white/15"
                  aria-label="Next style"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Close-up detail shot */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index + 'closeup'}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={slideTransition}
                  className="w-full h-full relative"
                >
                  <img
                    src={styles[index].images[1]}
                    alt={`${styles[index].title} luxury picnic — close-up detail`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  
                  {/* Clean wrap-able keyword badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {styles[index].keywords.split(' · ').map((keyword, k) => (
                      <span
                        key={k}
                        className="bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-medium border border-white/10 shadow-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Description */}
            <div className="min-h-[5rem]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index + 'desc'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={textTransition}
                  className="text-white text-base md:text-lg font-light leading-relaxed"
                >
                  {styles[index].description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Theme thumbnail selector — all 3 visible at once */}
          <div className="lg:col-span-5 grid grid-cols-3 lg:grid-cols-1 gap-4">
            <p className="col-span-3 lg:col-span-1 text-white/60 text-xs uppercase tracking-widest font-bold mb-1 hidden lg:block">
              All Themes
            </p>
            {styles.map((style, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  i === index
                    ? 'ring-4 ring-white shadow-2xl scale-[1.02]'
                    : 'opacity-70 hover:opacity-95 hover:scale-[1.01]'
                }`}
                aria-label={`Select style theme: ${style.title}`}
              >
                <div className="aspect-[4/3] lg:aspect-[16/9]">
                  <img
                    src={style.images[0]}
                    alt={`${style.title} picnic style thumbnail`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-2.5 sm:p-4">
                  <span className="hidden sm:inline text-[9px] lg:text-xs uppercase tracking-widest text-white/80 font-bold mb-0.5">
                    {style.tag}
                  </span>
                  <span className="text-xs sm:text-sm lg:text-base font-display italic text-white leading-tight">
                    {style.title}
                  </span>
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
