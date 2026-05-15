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
            <p className="text-coastal-charcoal max-w-sm font-medium leading-relaxed mb-6">
              Elevated outdoor dining and luxury picnic experiences. Proudly supporting inclusive employment for people with disability.
            </p>
            <div className="text-coastal-charcoal text-sm font-medium space-y-1">
              <p><strong className="font-medium text-coastal-navy">The Picnic Project Newcastle</strong></p>
              <p>Servicing the Newcastle area &amp; surrounds</p>
              <p>Newcastle, NSW 2300, Australia</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-coastal-navy mb-6 uppercase text-xs tracking-widest">Connect</h4>
            <ul className="space-y-4 text-coastal-charcoal font-medium">
              <li><a href="https://www.instagram.com/thepicnicproject.newcastle/" target="_blank" rel="noopener noreferrer" className="hover:text-coastal-blue transition-colors">Instagram</a></li>
              <li><a href="https://www.facebook.com/people/The-Picnic-Project/61583017870519/" target="_blank" rel="noopener noreferrer" className="hover:text-coastal-blue transition-colors">Facebook</a></li>
              <li><a href="tel:0422666211" className="hover:text-coastal-blue transition-colors">0422 666 211</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-coastal-navy mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-coastal-charcoal font-medium">
              <li><Link to="/tcs" className="hover:text-coastal-blue transition-colors">Terms & Conditions</Link></li>
              <li><a href="#" className="hover:text-coastal-blue transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex justify-center items-center text-xs text-coastal-navy/40 font-medium uppercase tracking-widest">
          <p>© 2024 The Picnic Project Newcastle. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
