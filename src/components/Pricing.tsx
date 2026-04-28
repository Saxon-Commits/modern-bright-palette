import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';

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
  '2.5-hour picnic experience',
  'Delivery, setup & pack-down (within 20km)',
  'Introduction & walkthrough by Ella',
  'Safety basket (extinguisher, lighter, etc)',
];

const extras = [
  { name: 'Fluffy Chair', price: '$25' },
  { name: 'Personalised Sign', price: '$50' },
  { name: 'Gold Ice Bucket', price: '$10' },
  { name: 'Ice for bucket', price: '$5' },
  { name: 'Fresh Seasonal Blooms', price: 'Enquire' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 underline-offset-8">
          <h2 className="text-4xl md:text-6xl text-coastal-navy mb-4 italic">Pricing & Inclusions</h2>
          <p className="text-coastal-navy/60 max-w-xl mx-auto">Everything you need for the most perfect luxury picnic experience.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Pricing */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-coastal-sand rounded-3xl p-8 md:p-12 shadow-sm border border-coastal-blue/10">
              <h3 className="text-2xl font-bold mb-8 text-coastal-navy">Luxury Picnic Packages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pricingData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-coastal-blue transition-colors">
                    <span className="font-medium text-lg">{item.group}</span>
                    <span className="text-2xl font-bold text-coastal-navy">{item.price}</span>
                  </div>
                ))}
                <div className="md:col-span-2 flex items-center justify-between p-6 bg-coastal-navy text-white rounded-2xl shadow-md cursor-pointer hover:bg-coastal-blue hover:text-coastal-navy transition-all">
                  <span className="font-bold text-lg">17-20 people</span>
                  <span className="uppercase tracking-widest text-sm font-bold">Enquire Direct</span>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Info className="text-coastal-blue" size={20} />
                  Included in every setup
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {inclusions.map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-coastal-blue/20 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-coastal-navy" />
                      </div>
                      <span className="text-coastal-navy/70 text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Extras */}
          <div className="space-y-8">
            <div className="bg-coastal-white border-2 border-coastal-blue/30 rounded-3xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-8 text-coastal-navy">Enhance Your Picnic</h3>
              <p className="text-sm text-coastal-navy/60 mb-8 italic">Want to take your picnic to the next level? We offer a selection of optional add-ons.</p>
              
              <div className="space-y-4">
                {extras.map((extra, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                    <span className="font-medium text-coastal-navy">{extra.name}</span>
                    <span className="font-bold text-coastal-navy">{extra.price}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-coastal-sand rounded-2xl">
                <h4 className="font-bold text-coastal-navy mb-2">Social Events</h4>
                <p className="text-sm text-coastal-navy/60">We also specialize in Proposals ($450) and Group events starting from $45pp. Contact us for a custom quote.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
