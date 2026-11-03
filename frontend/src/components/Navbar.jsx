import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Menu, 
  X, 
  Phone, 
  ChevronDown, 
  ChevronRight,
  MapPin
} from 'lucide-react';
import logoImg from '../assets/logo.png.png';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onOpenBooking, onOpenEmergency, currentPage = 'home', onNavigate = () => {} }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [specialtiesDropdownOpen, setSpecialtiesDropdownOpen] = useState(false);
  const [orthoFlyoutOpen, setOrthoFlyoutOpen] = useState(false);
  const [mobileSpecialtiesOpen, setMobileSpecialtiesOpen] = useState(false);
  const [mobileOrthoOpen, setMobileOrthoOpen] = useState(false);
  
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const orthoTimeoutRef = useRef(null);
  const { t } = useLanguage();

  // Desktop hover for Specialities
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setSpecialtiesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setSpecialtiesDropdownOpen(false);
      setOrthoFlyoutOpen(false);
    }, 180);
  };

  // Desktop hover for Ortho submenu
  const handleOrthoEnter = () => {
    if (orthoTimeoutRef.current) clearTimeout(orthoTimeoutRef.current);
    setOrthoFlyoutOpen(true);
  };

  const handleOrthoLeave = () => {
    orthoTimeoutRef.current = setTimeout(() => {
      setOrthoFlyoutOpen(false);
    }, 150);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSpecialtiesDropdownOpen(false);
        setOrthoFlyoutOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (orthoTimeoutRef.current) clearTimeout(orthoTimeoutRef.current);
    };
  }, []);

  // Lock body scroll on mobile drawer open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setMobileSpecialtiesOpen(false);
    setMobileOrthoOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-[68px] flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center shrink-0 h-full py-0.5 cursor-pointer text-left"
          title="KLC Hospitals Home"
        >
          <img 
            src={logoImg} 
            alt="KLC Hospitals" 
            className="h-[54px] sm:h-[62px] w-auto max-w-[280px] sm:max-w-[360px] object-contain transition-transform duration-200 hover:scale-102"
          />
        </button>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-4 xl:gap-6 list-none font-bold text-[15.5px] xl:text-[16.5px] text-[#002e29]">
            {/* About Page Link */}
            <li>
              <button 
                onClick={() => onNavigate('about')} 
                className={`hover:text-[#008277] transition-colors py-2 cursor-pointer ${
                  currentPage === 'about' ? 'text-[#008277] border-b-2 border-[#008277]' : ''
                }`}
              >
                {t('navAbout')}
              </button>
            </li>

            {/* Specialities (Clean Dropdown + Page Link) */}
            <li 
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => {
                  onNavigate('specialities');
                  setSpecialtiesDropdownOpen(false);
                }}
                className={`flex items-center gap-1.5 py-2 transition-colors cursor-pointer ${
                  currentPage === 'specialities' || specialtiesDropdownOpen ? 'text-[#008277]' : 'hover:text-[#008277]'
                }`}
              >
                <span>{t('navSpecialties')}</span>
                <ChevronDown 
                  size={15} 
                  className={`transition-transform duration-200 ${specialtiesDropdownOpen ? 'rotate-180 text-[#008277]' : 'text-slate-400'}`} 
                />
              </button>

              {/* Simple Dropdown Menu */}
              <AnimatePresence>
                {specialtiesDropdownOpen && (
                  <motion.div
                    className="absolute top-full left-0 pt-2 w-[320px] z-50"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-2 text-[15.5px]">
                      {/* View All Specialities Top Item */}
                      <button
                        onClick={() => {
                          onNavigate('specialities');
                          setSpecialtiesDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 rounded-xl bg-teal-50 text-[#008277] hover:bg-teal-100 font-extrabold text-xs uppercase tracking-wider mb-1 cursor-pointer"
                      >
                        Browse All Specialities →
                      </button>

                      {/* 1. Ortho & Joint Replacement */}
                      <div 
                        className="relative"
                        onMouseEnter={handleOrthoEnter}
                        onMouseLeave={handleOrthoLeave}
                      >
                        <button
                          onClick={() => {
                            onNavigate('speciality-detail', 'ortho-joint-replacement');
                            setSpecialtiesDropdownOpen(false);
                            setOrthoFlyoutOpen(false);
                          }}
                          className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-[#002e29] hover:bg-teal-50 hover:text-[#008277] transition-all font-bold group cursor-pointer text-left"
                        >
                          <span>Ortho & Joint Replacement</span>
                          <ChevronRight size={17} className="text-slate-400 group-hover:text-[#008277] transition-colors" />
                        </button>

                        {/* Ortho Flyout Submenu */}
                        <AnimatePresence>
                          {orthoFlyoutOpen && (
                            <motion.div
                              className="absolute left-full top-0 pl-1.5 w-[280px] z-50"
                              initial={{ opacity: 0, x: -4 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -4 }}
                              transition={{ duration: 0.12 }}
                            >
                              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-2 text-[15px] font-semibold">
                                <button
                                  onClick={() => {
                                    onNavigate('speciality-detail', 'shoulder-replacement');
                                    setSpecialtiesDropdownOpen(false);
                                    setOrthoFlyoutOpen(false);
                                  }}
                                  className="w-full text-left block px-4 py-2.5 rounded-lg text-slate-700 hover:bg-teal-50 hover:text-[#008277] transition-colors cursor-pointer"
                                >
                                  Shoulder Replacement
                                </button>
                                <button
                                  onClick={() => {
                                    onNavigate('speciality-detail', 'knee-replacement');
                                    setSpecialtiesDropdownOpen(false);
                                    setOrthoFlyoutOpen(false);
                                  }}
                                  className="w-full text-left block px-4 py-2.5 rounded-lg text-slate-700 hover:bg-teal-50 hover:text-[#008277] transition-colors cursor-pointer"
                                >
                                  Knee Replacement
                                </button>
                                <button
                                  onClick={() => {
                                    onNavigate('speciality-detail', 'hip-replacement');
                                    setSpecialtiesDropdownOpen(false);
                                    setOrthoFlyoutOpen(false);
                                  }}
                                  className="w-full text-left block px-4 py-2.5 rounded-lg text-slate-700 hover:bg-teal-50 hover:text-[#008277] transition-colors cursor-pointer"
                                >
                                  Hip Replacement
                                </button>
                                <button
                                  onClick={() => {
                                    onNavigate('speciality-detail', 'orthopaedic-trauma');
                                    setSpecialtiesDropdownOpen(false);
                                    setOrthoFlyoutOpen(false);
                                  }}
                                  className="w-full text-left block px-4 py-2.5 rounded-lg text-slate-700 hover:bg-teal-50 hover:text-[#008277] transition-colors cursor-pointer"
                                >
                                  Orthopaedic Trauma
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* 2. Neurology & Spine */}
                      <button
                        onClick={() => {
                          onNavigate('speciality-detail', 'neurology-spine');
                          setSpecialtiesDropdownOpen(false);
                        }}
                        className="w-full text-left block px-4 py-2.5 rounded-xl text-[#002e29] hover:bg-teal-50 hover:text-[#008277] transition-all font-bold cursor-pointer"
                      >
                        Neurology & Spine
                      </button>

                      {/* 3. Obstetrics & Gynaecology */}
                      <button
                        onClick={() => {
                          onNavigate('speciality-detail', 'obstetrics-gynaecology');
                          setSpecialtiesDropdownOpen(false);
                        }}
                        className="w-full text-left block px-4 py-2.5 rounded-xl text-[#002e29] hover:bg-teal-50 hover:text-[#008277] transition-all font-bold cursor-pointer"
                      >
                        Obstetrics & Gynaecology
                      </button>

                      {/* 4. General Surgery */}
                      <button
                        onClick={() => {
                          onNavigate('speciality-detail', 'general-surgery');
                          setSpecialtiesDropdownOpen(false);
                        }}
                        className="w-full text-left block px-4 py-2.5 rounded-xl text-[#002e29] hover:bg-teal-50 hover:text-[#008277] transition-all font-bold cursor-pointer"
                      >
                        General Surgery
                      </button>

                      {/* 5. Laser & Laproscopy Surgery */}
                      <button
                        onClick={() => {
                          onNavigate('speciality-detail', 'laser-laproscopy');
                          setSpecialtiesDropdownOpen(false);
                        }}
                        className="w-full text-left block px-4 py-2.5 rounded-xl text-[#002e29] hover:bg-teal-50 hover:text-[#008277] transition-all font-bold cursor-pointer"
                      >
                        Laser & Laproscopy Surgery
                      </button>

                      {/* 6. Gastroenterology */}
                      <button
                        onClick={() => {
                          onNavigate('speciality-detail', 'gastroenterology');
                          setSpecialtiesDropdownOpen(false);
                        }}
                        className="w-full text-left block px-4 py-2.5 rounded-xl text-[#002e29] hover:bg-teal-50 hover:text-[#008277] transition-all font-bold cursor-pointer"
                      >
                        Gastroenterology
                      </button>

                      {/* 7. Oncology (Cancer Care) */}
                      <button
                        onClick={() => {
                          onNavigate('speciality-detail', 'oncology');
                          setSpecialtiesDropdownOpen(false);
                        }}
                        className="w-full text-left block px-4 py-2.5 rounded-xl text-[#002e29] hover:bg-teal-50 hover:text-[#008277] transition-all font-bold cursor-pointer"
                      >
                        Oncology (Cancer Care)
                      </button>

                      {/* 8. Pediatrics & Neonatology */}
                      <button
                        onClick={() => {
                          onNavigate('speciality-detail', 'pediatrics');
                          setSpecialtiesDropdownOpen(false);
                        }}
                        className="w-full text-left block px-4 py-2.5 rounded-xl text-[#002e29] hover:bg-teal-50 hover:text-[#008277] transition-all font-bold cursor-pointer"
                      >
                        Pediatrics & Neonatology
                      </button>

                      {/* 9. Urology & Kidney Care */}
                      <button
                        onClick={() => {
                          onNavigate('speciality-detail', 'urology');
                          setSpecialtiesDropdownOpen(false);
                        }}
                        className="w-full text-left block px-4 py-2.5 rounded-xl text-[#002e29] hover:bg-teal-50 hover:text-[#008277] transition-all font-bold cursor-pointer"
                      >
                        Urology & Kidney Care
                      </button>

                      {/* 10. Vascular Surgery */}
                      <button
                        onClick={() => {
                          onNavigate('speciality-detail', 'vascular-surgery');
                          setSpecialtiesDropdownOpen(false);
                        }}
                        className="w-full text-left block px-4 py-2.5 rounded-xl text-[#002e29] hover:bg-teal-50 hover:text-[#008277] transition-all font-bold cursor-pointer"
                      >
                        Vascular Surgery
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Physiotherapy (Dedicated Page Link) */}
            <li>
              <button 
                onClick={() => onNavigate('physiotherapy')} 
                className={`hover:text-[#008277] transition-colors py-2 cursor-pointer ${
                  currentPage === 'physiotherapy' ? 'text-[#008277] border-b-2 border-[#008277]' : ''
                }`}
              >
                {t('navPhysiotherapy')}
              </button>
            </li>

            {/* Our Doctors (Dedicated Page Link) */}
            <li>
              <button 
                onClick={() => onNavigate('doctors')} 
                className={`hover:text-[#008277] transition-colors py-2 cursor-pointer ${
                  currentPage === 'doctors' ? 'text-[#008277] border-b-2 border-[#008277]' : ''
                }`}
              >
                {t('navDoctors')}
              </button>
            </li>

            {/* Gallery (Dedicated Page Link) */}
            <li>
              <button 
                onClick={() => onNavigate('gallery')} 
                className={`hover:text-[#008277] transition-colors py-2 cursor-pointer ${
                  currentPage === 'gallery' ? 'text-[#008277] border-b-2 border-[#008277]' : ''
                }`}
              >
                {t('navGallery')}
              </button>
            </li>

            {/* Contact Us (Replaced 24/7 Trauma as requested) */}
            <li>
              <button 
                onClick={() => onNavigate('contact')} 
                className={`hover:text-[#008277] transition-colors py-2 cursor-pointer ${
                  currentPage === 'contact' ? 'text-[#008277] border-b-2 border-[#008277]' : ''
                }`}
              >
                {t('navContact')}
              </button>
            </li>
          </ul>
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <motion.button 
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#005a52] to-[#008277] text-white font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all cursor-pointer border border-[#d4af37]/40"
            onClick={() => onOpenBooking()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Calendar size={15} className="text-[#f8df8c]" />
            <span>{t('bookAppointment')}</span>
          </motion.button>

          <button 
            className="lg:hidden p-2 rounded-lg text-[#002e29] hover:bg-slate-100 transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE RESPONSIVE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
            {/* Backdrop */}
            <motion.div 
              className="fixed inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
            />

            {/* Slide Drawer */}
            <motion.div 
              className="relative w-[300px] max-w-[85vw] h-full bg-white shadow-2xl flex flex-col justify-between overflow-y-auto z-10"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.22 }}
            >
              <div>
                {/* Mobile Drawer Header */}
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <button 
                    onClick={() => {
                      closeMobile();
                      onNavigate('home');
                    }}
                    className="cursor-pointer"
                  >
                    <img 
                      src={logoImg} 
                      alt="KLC Hospitals" 
                      className="h-8 w-auto max-w-[160px] object-contain"
                    />
                  </button>
                  <button 
                    onClick={closeMobile}
                    className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="p-4 space-y-1 text-sm font-semibold text-[#002e29]">
                  <button 
                    onClick={() => {
                      closeMobile();
                      onNavigate('about');
                    }}
                    className={`w-full text-left block px-3 py-2.5 rounded-lg cursor-pointer ${
                      currentPage === 'about' ? 'bg-teal-50 text-[#008277] font-bold' : 'hover:bg-teal-50 hover:text-[#008277]'
                    }`}
                  >
                    {t('navAbout')}
                  </button>

                  {/* Specialities Accordion in Mobile */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setMobileSpecialtiesOpen(!mobileSpecialtiesOpen)}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-teal-50 hover:text-[#008277] text-left font-semibold cursor-pointer"
                    >
                      <span>{t('navSpecialties')}</span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${mobileSpecialtiesOpen ? 'rotate-180 text-[#008277]' : 'text-slate-400'}`} 
                      />
                    </button>

                    {mobileSpecialtiesOpen && (
                      <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-teal-200 ml-3 my-1 text-xs">
                        <button
                          onClick={() => {
                            closeMobile();
                            onNavigate('specialities');
                          }}
                          className="w-full text-left block py-1.5 font-bold text-[#008277] cursor-pointer"
                        >
                          View All Specialities →
                        </button>

                        {/* Ortho nested in Mobile */}
                        <div>
                          <button
                            type="button"
                            onClick={() => setMobileOrthoOpen(!mobileOrthoOpen)}
                            className="w-full flex items-center justify-between py-1.5 text-left font-bold text-[#003833] hover:text-[#008277] cursor-pointer"
                          >
                            <span>Ortho & Joint Replacement</span>
                            <ChevronDown 
                              size={13} 
                              className={`transition-transform duration-200 ${mobileOrthoOpen ? 'rotate-180 text-[#008277]' : 'text-slate-400'}`} 
                            />
                          </button>

                          {mobileOrthoOpen && (
                            <div className="pl-3 py-1 space-y-1 text-slate-600">
                              <button onClick={() => { closeMobile(); onNavigate('speciality-detail', 'shoulder-replacement'); }} className="block w-full text-left py-1 hover:text-[#008277]">Shoulder Replacement</button>
                              <button onClick={() => { closeMobile(); onNavigate('speciality-detail', 'knee-replacement'); }} className="block w-full text-left py-1 hover:text-[#008277]">Knee Replacement</button>
                              <button onClick={() => { closeMobile(); onNavigate('speciality-detail', 'hip-replacement'); }} className="block w-full text-left py-1 hover:text-[#008277]">Hip Replacement</button>
                              <button onClick={() => { closeMobile(); onNavigate('speciality-detail', 'orthopaedic-trauma'); }} className="block w-full text-left py-1 hover:text-[#008277]">Orthopaedic Trauma</button>
                            </div>
                          )}
                        </div>

                        <button onClick={() => { closeMobile(); onNavigate('speciality-detail', 'neurology-spine'); }} className="block w-full text-left py-1.5 text-slate-700 hover:text-[#008277]">Neurology & Spine</button>
                        <button onClick={() => { closeMobile(); onNavigate('speciality-detail', 'obstetrics-gynaecology'); }} className="block w-full text-left py-1.5 text-slate-700 hover:text-[#008277]">Obstetrics & Gynaecology</button>
                        <button onClick={() => { closeMobile(); onNavigate('speciality-detail', 'general-surgery'); }} className="block w-full text-left py-1.5 text-slate-700 hover:text-[#008277]">General Surgery</button>
                        <button onClick={() => { closeMobile(); onNavigate('speciality-detail', 'laser-laproscopy'); }} className="block w-full text-left py-1.5 text-slate-700 hover:text-[#008277]">Laser & Laproscopy Surgery</button>
                        <button onClick={() => { closeMobile(); onNavigate('speciality-detail', 'gastroenterology'); }} className="block w-full text-left py-1.5 text-slate-700 hover:text-[#008277]">Gastroenterology</button>
                        <button onClick={() => { closeMobile(); onNavigate('speciality-detail', 'oncology'); }} className="block w-full text-left py-1.5 text-slate-700 hover:text-[#008277]">Oncology (Cancer)</button>
                        <button onClick={() => { closeMobile(); onNavigate('speciality-detail', 'pediatrics'); }} className="block w-full text-left py-1.5 text-slate-700 hover:text-[#008277]">Pediatrics (NICU)</button>
                        <button onClick={() => { closeMobile(); onNavigate('speciality-detail', 'urology'); }} className="block w-full text-left py-1.5 text-slate-700 hover:text-[#008277]">Urology & Kidney Care</button>
                        <button onClick={() => { closeMobile(); onNavigate('speciality-detail', 'vascular-surgery'); }} className="block w-full text-left py-1.5 text-slate-700 hover:text-[#008277]">Vascular Surgery</button>
                      </div>
                    )}
                  </div>

                  <button 
                    onClick={() => {
                      closeMobile();
                      onNavigate('physiotherapy');
                    }}
                    className={`w-full text-left block px-3 py-2.5 rounded-lg cursor-pointer ${
                      currentPage === 'physiotherapy' ? 'bg-teal-50 text-[#008277] font-bold' : 'hover:bg-teal-50 hover:text-[#008277]'
                    }`}
                  >
                    {t('navPhysiotherapy')}
                  </button>

                  <button 
                    onClick={() => {
                      closeMobile();
                      onNavigate('doctors');
                    }}
                    className={`w-full text-left block px-3 py-2.5 rounded-lg cursor-pointer ${
                      currentPage === 'doctors' ? 'bg-teal-50 text-[#008277] font-bold' : 'hover:bg-teal-50 hover:text-[#008277]'
                    }`}
                  >
                    {t('navDoctors')}
                  </button>

                  <button 
                    onClick={() => {
                      closeMobile();
                      onNavigate('gallery');
                    }}
                    className={`w-full text-left block px-3 py-2.5 rounded-lg cursor-pointer ${
                      currentPage === 'gallery' ? 'bg-teal-50 text-[#008277] font-bold' : 'hover:bg-teal-50 hover:text-[#008277]'
                    }`}
                  >
                    {t('navGallery')}
                  </button>

                  {/* Mobile Contact Link (Replaced 24/7 Trauma) */}
                  <button 
                    onClick={() => {
                      closeMobile();
                      onNavigate('contact');
                    }}
                    className={`w-full text-left block px-3 py-2.5 rounded-lg cursor-pointer ${
                      currentPage === 'contact' ? 'bg-teal-50 text-[#008277] font-bold' : 'hover:bg-teal-50 hover:text-[#008277]'
                    }`}
                  >
                    {t('navContact')}
                  </button>
                </div>
              </div>

              {/* Mobile Drawer Bottom Action */}
              <div className="p-4 border-t border-slate-100 space-y-2">
                <button 
                  onClick={() => {
                    closeMobile();
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#005a52] to-[#008277] text-white font-bold text-xs shadow-xs cursor-pointer"
                >
                  <Calendar size={16} className="text-[#f8df8c]" />
                  <span>{t('bookAppointment')}</span>
                </button>

                <a 
                  href="tel:7482068777"
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs shadow-xs text-center"
                >
                  <Phone size={14} />
                  <span>Emergency: 74820-68777</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}

