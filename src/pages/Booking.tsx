import { motion } from 'motion/react';
import { Calendar, Users, Clock, MapPin, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center bg-coastal-sand text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md"
        >
          <div className="w-20 h-20 bg-coastal-blue rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Send className="text-coastal-navy" size={32} />
          </div>
          <h1 className="text-4xl text-coastal-navy mb-4">Request Sent!</h1>
          <p className="text-coastal-navy/60 mb-8 leading-relaxed">
            Thank you for your enquiry. Ella or one of our team members will be in touch within 24 hours to confirm availability and discuss your setup.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="coastal-button"
          >
            Return Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl md:text-7xl text-coastal-navy mb-8">Book Your <br /><span className="italic">Experience.</span></h1>
            <p className="text-xl text-coastal-navy/60 font-light mb-12 leading-relaxed">
              Fill out the form below and we'll get back to you with availability. 
              Please note that your booking is only confirmed once a deposit has been received.
            </p>

            <div className="space-y-8">
              {[
                { icon: Clock, title: '2.5 Hour Hire', desc: 'Standard set-up duration, extensions available.' },
                { icon: MapPin, title: 'Setup & Pack-down', desc: 'We take care of everything so you can just enjoy.' },
                { icon: Users, title: 'Bespoke Inclusions', desc: 'Catering guides & wet weather backups provided.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-coastal-sand flex items-center justify-center flex-shrink-0 text-coastal-navy">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-coastal-navy">{item.title}</h4>
                    <p className="text-sm text-coastal-navy/60 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-coastal-sand rounded-[2rem] p-8 md:p-12 shadow-sm border border-coastal-blue/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-coastal-navy/40">Full Name</label>
                  <input type="text" required className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coastal-blue" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-coastal-navy/40">Email Address</label>
                  <input type="email" required className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coastal-blue" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-coastal-navy/40">Preferred Date</label>
                  <div className="relative">
                    <input type="date" required className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coastal-blue appearance-none" />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-coastal-navy/20 pointer-events-none" size={18} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-coastal-navy/40">Number of Guests</label>
                  <input type="number" min="2" max="50" required className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coastal-blue" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-coastal-navy/40">Preferred Location</label>
                <input type="text" placeholder="e.g. King Edward Park" className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coastal-blue" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-coastal-navy/40">Occasion & Any Extras</label>
                <textarea rows={4} className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coastal-blue" placeholder="Tell us about your celebration..."></textarea>
              </div>

              <div className="flex items-center gap-3 py-4">
                <input type="checkbox" required className="w-5 h-5 rounded border-gray-300 text-coastal-navy focus:ring-coastal-blue" />
                <span className="text-sm text-coastal-navy/60">I agree to the <Link to="/tcs" className="underline hover:text-coastal-navy">Terms & Conditions</Link></span>
              </div>

              <button type="submit" className="coastal-button w-full py-5 text-lg shadow-xl shadow-coastal-navy/10">
                Send Booking Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
