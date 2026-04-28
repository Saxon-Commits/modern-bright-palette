import { MapPin, Navigation } from 'lucide-react';

const areas = [
  'Newcastle City & Ocean Baths',
  'Bar Beach & Dixon Park',
  'Merewether Beach',
  'King Edward Park',
  'Nobbys Beach & Foreshore',
  'The Hunter Region (On request)',
];

export default function Location() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="h-[400px] md:h-[500px] w-full bg-coastal-sand rounded-[2rem] overflow-hidden relative shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1533555543719-7d0476495d43?q=80&w=1000&auto=format&fit=crop" 
                alt="Map of Newcastle Coastal Areas" 
                className="w-full h-full object-cover opacity-50 grayscale mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none">
                <div className="text-center group pointer-events-auto">
                    <div className="w-16 h-16 bg-coastal-navy text-white rounded-full flex items-center justify-center mb-4 mx-auto animate-bounce shadow-xl">
                      <MapPin size={32} />
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <span className="uppercase tracking-widest text-sm font-bold text-coastal-navy/40 mb-4 block">Where we setup</span>
            <h2 className="text-4xl md:text-6xl text-coastal-navy mb-8">Serving Newcastle <br />& The Hunter.</h2>
            <p className="text-lg text-coastal-navy/70 font-light mb-10 leading-relaxed">
              We primarily service the beautiful beaches and parks within a 20km radius of Newcastle. 
              Want to venture further? We're happy to travel to the Hunter Valley or surrounding regions for a small additional fee.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {areas.map((area, i) => (
                <div key={i} className="flex items-center gap-3 py-3 border-b border-gray-100">
                  <Navigation size={16} className="text-coastal-blue rotate-45" />
                  <span className="text-coastal-navy font-medium">{area}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-coastal-blue/10 rounded-2xl border border-coastal-blue/20">
              <p className="text-coastal-navy font-medium flex items-center gap-2">
                <MapPin size={18} />
                Preferred Locations
              </p>
              <p className="text-sm text-coastal-navy/60 mt-2">
                Upon booking, we provide a curated list of our favourite secret spots and wet weather backups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
