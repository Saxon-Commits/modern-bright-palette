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
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107055.67030801865!2d151.6504245!3d-32.928178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b733e13d1bd6df9%3A0x5017d681632a8a0!2sNewcastle%20NSW!5e0!3m2!1sen!2sau!4v1715575510000!5m2!1sen!2sau" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Newcastle Region"
                className="w-full h-full object-cover grayscale opacity-70 mix-blend-multiply"
              ></iframe>
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
            <span className="font-handwriting text-3xl text-coastal-blue mb-2 block transform -rotate-2">The seaside vibe</span>
            <h2 className="text-4xl md:text-6xl text-coastal-navy mb-8">Serving Newcastle <br />& The Hunter.</h2>
            <p className="text-lg text-coastal-charcoal font-medium mb-10 leading-relaxed">
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
              <p className="text-sm text-coastal-charcoal mt-2 font-medium">
                Upon booking, we provide a curated list of our favourite secret spots and wet weather backups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
