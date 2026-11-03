import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { HOSPITAL_INFO, SPECIALTIES } from '../data/hospitalData';
import logoImg from '../assets/logo.png.png';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61565946324503',
    hoverClass: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:shadow-lg hover:shadow-[#1877F2]/30',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/klchospitals',
    hoverClass: 'hover:bg-black hover:text-white hover:border-slate-500 hover:shadow-lg hover:shadow-white/15',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/klc_hospitals',
    hoverClass: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/30',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/klchospitals/posts/?viewAsMember=true',
    hoverClass: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-lg hover:shadow-[#0A66C2]/30',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@KLCHospitals/videos',
    hoverClass: 'hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:shadow-lg hover:shadow-[#FF0000]/30',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer({ onOpenBooking, onOpenEmergency, onNavigate = () => {} }) {
  return (
    <footer className="relative bg-gradient-to-b from-[#001714] via-[#00110f] to-[#000b0a] text-slate-300 pt-16 sm:pt-20 pb-28 sm:pb-12 overflow-hidden">
      {/* Ambient Lighting & High-Tech Mesh Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60" />
      <div className="absolute -top-32 left-10 w-[500px] h-[500px] bg-[#008277]/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-24 right-10 w-[450px] h-[450px] bg-[#d4af37]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Top Multi-layer Glowing Divider */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/40 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4">
            <button 
              onClick={() => onNavigate('home')} 
              className="inline-block mb-4 p-3 bg-white/95 rounded-2xl shadow-lg border border-amber-400/40 transition-transform hover:scale-105 cursor-pointer text-left"
            >
              <img 
                src={logoImg} 
                alt="KLC Hospitals - Super Multispeciality Hospital" 
                className="h-14 w-auto object-contain"
              />
            </button>

            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              <strong className="text-white">KLC Hospitals</strong> (A Unit of Anaisha Lifecare Pvt. Ltd.) is a state-of-the-art super multispeciality hospital dedicated to precision medical technology, robotic surgery, and round-the-clock emergency care.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  title={item.name}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 active:scale-95 shadow-sm ${item.hoverClass}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Super Specialities */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold text-white mb-5 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-9 after:h-0.5 after:bg-[#d4af37] after:rounded">
              Super Specialities
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {SPECIALTIES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <button 
                    onClick={() => onNavigate('specialities')} 
                    className="hover:text-[#f8df8c] hover:translate-x-1 transition-all inline-block cursor-pointer text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Patient Services */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-white mb-5 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-9 after:h-0.5 after:bg-[#d4af37] after:rounded">
              Patient Care
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button 
                  onClick={() => onOpenBooking()} 
                  className="hover:text-[#f8df8c] hover:translate-x-1 transition-all inline-block cursor-pointer text-left"
                >
                  Book OPD
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-[#f8df8c] hover:translate-x-1 transition-all inline-block cursor-pointer text-left"
                >
                  24/7 Ambulance & Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('physiotherapy')} 
                  className="hover:text-[#f8df8c] hover:translate-x-1 transition-all inline-block cursor-pointer text-left"
                >
                  Physiotherapy & Rehab
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('gallery')} 
                  className="hover:text-[#f8df8c] hover:translate-x-1 transition-all inline-block cursor-pointer text-left"
                >
                  Hospital Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('doctors')} 
                  className="hover:text-[#f8df8c] hover:translate-x-1 transition-all inline-block cursor-pointer text-left"
                >
                  Find Doctors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-[#f8df8c] hover:translate-x-1 transition-all inline-block cursor-pointer text-left"
                >
                  About Hospital
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Emergency */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold text-white mb-5 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-9 after:h-0.5 after:bg-[#d4af37] after:rounded">
              Our Hospital Branches
            </h4>
            <div className="space-y-3.5 text-sm text-slate-300">
              {/* Branch 1: Patna */}
              <div className="flex items-start gap-2.5">
                <MapPin size={17} className="text-[#d4af37] shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <strong className="text-white block font-bold text-[13px]">Patna (Main Campus):</strong>
                  <span className="text-slate-300">E-9, RBI Colony, Malahipakari Chowk, Kankarbagh, Patna, Bihar 800020</span>
                </div>
              </div>

              {/* Branch 2: Chhapra */}
              <div className="flex items-start gap-2.5">
                <MapPin size={17} className="text-[#d4af37] shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <strong className="text-white block font-bold text-[13px]">Chhapra Branch:</strong>
                  <span className="text-slate-300">Near Daudpur Station, Chhapra, Bihar 841205</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1 border-t border-white/10">
                <Phone size={17} className="text-[#d4af37] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <div>
                    <span className="text-slate-400 mr-1.5">Patna Helpline:</span>
                    <strong className="text-white font-extrabold">
                      <a href="tel:7482068777" className="hover:text-[#f8df8c]">74820-68777</a>
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-400 mr-1.5">Chhapra Helpline:</span>
                    <strong className="text-white font-extrabold">
                      <a href="tel:7482068555" className="hover:text-[#f8df8c]">74820-68555</a>
                    </strong>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail size={17} className="text-[#d4af37] shrink-0 mt-0.5" />
                <a href="mailto:info@klchospitals.info" className="text-xs text-teal-300 font-bold hover:underline hover:text-teal-200">
                  info@klchospitals.info
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock size={17} className="text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{HOSPITAL_INFO.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left border-t border-white/5">
          <p className="leading-relaxed">
            © {new Date().getFullYear()} <strong className="text-white">KLC Hospitals</strong> (A Unit of Anaisha Lifecare Pvt. Ltd.). All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-slate-400">
            <span className="hover:text-[#d4af37] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="hover:text-[#d4af37] transition-colors cursor-pointer">Terms of Healthcare</span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="hover:text-[#d4af37] transition-colors cursor-pointer">NABH & Bio-Waste Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
