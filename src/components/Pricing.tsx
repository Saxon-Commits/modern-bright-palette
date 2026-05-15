import { motion } from 'motion/react';
import { Check, Info, Flower2, Star } from 'lucide-react';

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
  'Personalised sign with easel (larger setups)',
  'Fresh seasonal florals (enquire within — we can work within your budget)',
  '2.5-hour picnic experience',
  'Delivery, setup & pack-down (within 20km)',
  'Introduction & walkthrough by Ella',
  'Safety basket (extinguisher, lighter, etc)',
];

const extras = [
  { name: 'Fluffy Chair', price: '$25' },
  { name: 'Gold Ice Bucket', price: '$10' },
  { name: 'Ice for bucket', price: '$5' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 underline-offset-8">
          <h2 className="text-4xl md:text-6xl text-coastal-navy mb-4 italic">Pricing & Inclusions</h2>
          <p className="font-handwriting text-3xl text-coastal-blue/80 max-w-xl mx-auto transform -rotate-1">Everything you need for the perfect experience</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Pricing */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-coastal-sand rounded-3xl p-8 md:p-12 shadow-sm border border-coastal-blue/10">
              <h3 className="text-2xl font-bold mb-4 text-coastal-navy">Luxury Picnic Packages</h3>
              <p className="text-coastal-charcoal mb-8 font-medium">
                Whether you're planning a <strong className="font-bold text-coastal-navy">hens party</strong>, <strong className="font-bold text-coastal-navy">18th birthday</strong>, <strong className="font-bold text-coastal-navy">baby shower</strong>, or an intimate <strong className="font-bold text-coastal-navy">anniversary picnic</strong> in Newcastle — or just because — we've got you covered.
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

              <div className="mt-12">
                <h4 className="text-xl font-bold mb-2 flex items-center gap-2 text-coastal-navy">
                  <Check className="text-coastal-navy" size={20} />
                  Included in every setup
                </h4>
                <p className="text-sm text-coastal-charcoal/80 font-medium mb-6 italic">Everything you need for your luxury picnic</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
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

          {/* Extras */}
          <div className="space-y-8">
            <div className="bg-white shadow-md border border-coastal-blue/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-coastal-navy">Enhance Your Picnic</h3>
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

              {/* Engagement Package — standalone */}
              <div className="mt-4 p-6 bg-gradient-to-br from-coastal-sand to-coastal-blue/10 rounded-2xl border-2 border-coastal-navy/20 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="text-coastal-navy" size={18} />
                  <h4 className="font-bold text-coastal-navy text-lg">The Engagement Package</h4>
                </div>
                <div className="flex gap-4 mb-4">
                  <img
                    src="/images/style-pic-3.jpg"
                    alt="Engagement picnic setup with signature roses"
                    className="w-24 h-24 object-cover rounded-xl flex-shrink-0 shadow-sm"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-2xl font-bold text-coastal-navy mb-1">$200</p>
                    <p className="text-sm text-coastal-charcoal font-medium leading-relaxed">
                      A fully styled luxury picnic setup featuring our signature artificial roses — creating a stunning and intimate atmosphere for your special occasion.
                    </p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-coastal-navy/10">
                  <p className="text-xs text-coastal-charcoal/70 italic flex items-start gap-1">
                    <Flower2 size={12} className="text-coastal-navy mt-0.5 flex-shrink-0" />
                    Fresh florals in engagement photos provided by Bloom With Us and available as an optional add-on from $550.
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
