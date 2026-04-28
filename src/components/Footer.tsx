import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
             <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-coastal-blue rounded-full flex items-center justify-center">
                <span className="text-coastal-navy font-bold font-display text-lg">P</span>
              </div>
              <span className="font-display font-bold text-xl text-coastal-navy tracking-tight">
                The Picnic Project
              </span>
            </Link>
            <p className="text-coastal-navy/60 max-w-sm font-light leading-relaxed">
              Elevated outdoor dining and luxury picnic experiences in Newcastle and the Hunter Region. 
              Proudly supporting inclusive employment for people with disability.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-coastal-navy mb-6 uppercase text-xs tracking-widest">Connect</h4>
            <ul className="space-y-4 text-coastal-navy/70">
              <li><a href="#" className="hover:text-coastal-blue transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-coastal-blue transition-colors">Facebook</a></li>
              <li><a href="mailto:hello@thepicnicproject.au" className="hover:text-coastal-blue transition-colors">Email Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-coastal-navy mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-coastal-navy/70">
              <li><Link to="/tcs" className="hover:text-coastal-blue transition-colors">Terms & Conditions</Link></li>
              <li><a href="#" className="hover:text-coastal-blue transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-coastal-navy/40 font-medium uppercase tracking-widest">
          <p>© 2024 The Picnic Project Newcastle. All Rights Reserved.</p>
          <p>Managed with Love by Social Impact Team.</p>
        </div>
      </div>
    </footer>
  );
}
