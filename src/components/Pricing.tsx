import { motion, AnimatePresence } from 'motion/react';
import { Check, Flower2, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const pricingData = [
  { group: 'Up to 4 people', price: '$250' },
  { group: '5-8 people', price: '$320' },
  { group: '9-12 people', price: '$390' },
  { group: '13-16 people', price: '$460' },
];

const inclusions = [
  'Picnic rugs & cushions',
  'Low-lying luxury picnic tables',
  'Two stylish umbrellas',
  'Mini music speaker',
  'Placemats, dinner plates & side plates',
  'Wine glasses or champagne flutes',
  'Water glasses',
  'Stunning gold cutlery',
  'Linen napkins',
  'Styled table pieces & florals',
  'White letterboard with customisable personal message',
  'Fresh seasonal florals (enquire within — we can work within your budget)',
  '2.5-hour picnic experience',
  'Delivery, setup & pack-down (within 20km)',
  'Introduction & walkthrough by Ella',
  'Safety basket (extinguisher, lighter, etc)',
];

const extras = [
  { name: 'Fluffy Chair', price: '$25' },
  { name: 'Personalised Sign with Easel', price: '$50' },
  { name: 'Gold Ice Bucket', price: '$10' },
  { name: 'Ice for bucket', price: '$5' },
];

const engagementImages = [
  { src: '/images/engagement-package.webp', position: 'object-center' },
  { src: '/images/engagement-carousel-1.webp', position: 'object-center' },
  { src: '/images/engagement-carousel-2.webp', position: 'object-center' }
];

export default function Pricing() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === engagementImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 underline-offset-8">
          <h2 className="text-4xl md:text-6xl text-coastal-navy mb-4 italic">Pricing & Inclusions</h2>
          <p className="font-handwriting text-3xl text-coastal-blue/80 max-w-xl mx-auto transform -rotate-1">Everything you need for the perfect experience</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Pricing + Enhance Your Picnic */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-coastal-sand rounded-3xl p-8 md:p-12 shadow-sm border border-coastal-blue/10">
              <h3 className="text-2xl font-bold mb-4 text-coastal-navy">Luxury Picnic Packages</h3>
              <p className="text-coastal-charcoal mb-8 font-medium">
                Whether you're planning a <strong className="font-bold text-coastal-navy">hens party</strong>, <strong className="font-bold text-coastal-navy">18th birthday</strong>, <strong className="font-bold text-coastal-navy">baby shower</strong>, <strong className="font-bold text-coastal-navy">proposal</strong>, or an intimate <strong className="font-bold text-coastal-navy">anniversary picnic</strong> in Newcastle — or just because — we've got you covered.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pricingData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-coastal-navy border-l-4 border-l-coastal-navy transition-colors">
                    <span className="font-medium text-lg text-coastal-charcoal">{item.group}</span>
                    <span className="text-2xl font-bold text-coastal-navy">{item.price}</span>
                  </div>
                ))}
                <a
                  href="https://form.jotform.com/260421379292054?fbclid=PAVERFWAQ35-hleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafLcaOhSDvO_hu47amDfIi2_ly7hRzFeYx91n3gaQMAhERb5minO-Ja15XARw_aem_dIzyDJkY6rzVQe4JUF4ANw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:col-span-2 flex items-center justify-between p-6 bg-coastal-navy text-white rounded-2xl shadow-md cursor-pointer hover:bg-coastal-blue hover:text-coastal-navy transition-all"
                >
                  <span className="font-bold text-lg">17-20 people</span>
                  <span className="uppercase tracking-widest text-sm font-bold">Enquire Direct</span>
                </a>
              </div>
            </div>

            {/* Enhance Your Picnic — now in left column */}
            <div className="bg-white shadow-md border border-coastal-blue/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-coastal-navy">Enhance Your Picnic</h3>
              <p className="text-sm text-coastal-charcoal font-medium mb-8 italic">Want to take your picnic to the next level? We offer a selection of optional add-ons.</p>

              <h4 className="text-xs font-bold uppercase tracking-widest text-coastal-charcoal mb-4">Optional Extras</h4>
              <div className="space-y-4 mb-10">
                {extras.map((extra, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                    <span className="font-medium text-coastal-navy">{extra.name}</span>
                    <span className="font-bold text-coastal-navy">{extra.price}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Included in every setup — now in right column */}
          <div className="space-y-8">
            <div className="bg-coastal-sand rounded-3xl p-8 shadow-sm border border-coastal-blue/10 h-full">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2 text-coastal-navy">
                <Check className="text-coastal-navy" size={20} />
                Included in every setup
              </h4>
              <p className="text-sm text-coastal-charcoal/80 font-medium mb-6 italic">Everything you need for your luxury picnic</p>
              <div className="space-y-4">
                {inclusions.map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-coastal-navy/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-coastal-navy" />
                    </div>
                    <span className="text-coastal-charcoal font-medium text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Engagement Package — standalone section */}
        <div className="mt-12">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-coastal-blue/10">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full bg-stone-100 group overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={engagementImages[currentImageIndex].src}
                    alt={`The Engagement Package — luxury picnic setup showcase ${currentImageIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 w-full h-full object-cover ${engagementImages[currentImageIndex].position}`}
                    loading="lazy"
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? engagementImages.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/80 flex items-center justify-center text-coastal-navy opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-white z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev === engagementImages.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/80 flex items-center justify-center text-coastal-navy opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-white z-10"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                  {engagementImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2 rounded-full transition-all ${currentImageIndex === idx ? 'bg-white w-6' : 'bg-white/50 w-2'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-coastal-sand to-coastal-blue/10 p-10 md:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="text-coastal-navy" size={20} />
                  <span className="text-xs uppercase tracking-widest font-bold text-coastal-navy/60">Special Package</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-coastal-navy mb-2">The Engagement Package</h3>
                <p className="text-4xl font-bold text-coastal-navy mb-6">$200</p>
                <p className="text-coastal-charcoal font-medium leading-relaxed mb-6">
                  A fully styled luxury picnic setup featuring our signature artificial roses — creating a stunning and intimate atmosphere for your most special occasion.
                </p>
                <div className="pt-6 border-t border-coastal-navy/10">
                  <p className="text-sm text-coastal-charcoal/70 italic flex items-start gap-2">
                    <Flower2 size={14} className="text-coastal-navy mt-0.5 flex-shrink-0" />
                    Fresh florals shown in some photos are provided by Bloom With Us and are available as an optional add-on from $550.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Creative Partners */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl text-coastal-navy italic">Trusted Partnerships & Creative Add-ons</h3>
            <p className="text-coastal-charcoal mt-2 font-medium">Elevate your picnic with our hand-picked local creatives. Available to add to any package.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all border border-coastal-blue/10">
              <h4 className="text-xl font-bold text-coastal-navy mb-2">Bloom With Us Florals</h4>
              <p className="text-sm text-coastal-charcoal leading-relaxed mb-6 font-medium">
                Add a full fresh floral setup to any package for <strong className="font-bold text-coastal-navy">$550</strong>. If you're after something larger or more customized, you can reach out directly for a tailored quote. You can also order fresh blooms through them outside of engagements!
              </p>
              <a href="https://www.bloomwithus.com.au/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-coastal-navy hover:text-coastal-navy/80 transition-colors">Visit Bloom With Us &rarr;</a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all border border-coastal-blue/10 flex flex-col">
              <h4 className="text-xl font-bold text-coastal-navy mb-2">REELRED_</h4>
              <p className="text-sm text-coastal-charcoal leading-relaxed mb-6 font-medium flex-grow">
                Work with Ruby, a content creator with over five years of industry experience. For <strong className="font-bold text-coastal-navy">$150</strong>, she will capture an hour of content from your special day and turn those moments into a beautiful, organic reel for you to keep.
              </p>
              <a href="https://www.instagram.com/reelred_/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-coastal-navy hover:text-coastal-navy/80 transition-colors mt-auto">View Instagram &rarr;</a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all border border-coastal-blue/10 flex flex-col">
              <h4 className="text-xl font-bold text-coastal-navy mb-2">Selah Co Photography</h4>
              <p className="text-sm text-coastal-charcoal leading-relaxed mb-4 font-medium">
                Beautiful lifestyle photography by Selah Co. Two simple, accessible add-on options:
              </p>
              <ul className="text-sm text-coastal-charcoal space-y-2 mb-6 font-medium flex-grow">
                <li>• <strong className="font-bold text-coastal-navy">Moments ($180)</strong>: 30-60 mins, 20-30 edited images.</li>
                <li>• <strong className="font-bold text-coastal-navy">Story ($260)</strong>: 2 hours, 40-60 images, candid style.</li>
              </ul>
              <a href="https://beacons.ai/selahcocreative" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-coastal-navy hover:text-coastal-navy/80 transition-colors mt-auto">View Portfolio &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
