import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, Check, PhoneCall, 
  ArrowRight, ShieldCheck, BedDouble, Activity,
  Baby, HeartPulse, Sparkles, Wind, Award
} from 'lucide-react';

import icuImg from '../assets/rooms/icu.jpg';
import nicuImg from '../assets/rooms/nicu.jpg';
import hduImg from '../assets/rooms/hdu.jpg';
import generalWardImg from '../assets/rooms/general_ward.jpg';
import singleNonAcImg from '../assets/rooms/single_non_ac.jpg';
import singleAcImg from '../assets/rooms/single_ac.jpg';
import deluxeAcImg from '../assets/rooms/deluxe_ac.jpg';

const ROOM_CATEGORIES = [
  {
    id: 'icu',
    code: '01',
    name: 'I.C.U',
    category: 'Intensive Care Unit',
    shortDesc: '24x7 critical life-support with dedicated intensivists & 1:1 nursing.',
    image: icuImg,
    badge: 'Critical Life Support',
    accent: '#ef4444',
    icon: HeartPulse,
    highlights: [
      'Invasive Mechanical Ventilators',
      'Multipara Vital Sign Monitors',
      'Central Oxygen & Suction Lines',
      '1:1 Dedicated Critical Nurse'
    ],
    amenities: ['24x7 Intensivist', 'Emergency Defibrillator', 'Blood Gas Support', 'Isolated Sterile Pod']
  },
  {
    id: 'nicu',
    code: '02',
    name: 'N.I.C.U',
    category: 'Neonatal Intensive Care',
    shortDesc: 'Specialized sterile incubators & warmers for premature newborns & infants.',
    image: nicuImg,
    badge: 'Neonatal Care Unit',
    accent: '#db2777',
    icon: Baby,
    highlights: [
      'Servo Radiant Warmers',
      'Micro-Environment Incubators',
      'LED Infant Phototherapy',
      '24x7 Senior Neonatologist'
    ],
    amenities: ['HEPA Sterile Air', 'Kangaroo Mother Care', 'Infant Feeding Support', 'Surfactant Therapy']
  },
  {
    id: 'hdu',
    code: '03',
    name: 'H.D.U',
    category: 'High Dependency Unit',
    shortDesc: 'Continuous telemetry step-down monitoring between ICU and recovery wards.',
    image: hduImg,
    badge: 'Step-Down Care',
    accent: '#f59e0b',
    icon: Activity,
    highlights: [
      'Continuous Telemetry Vitals',
      '1:2 Specialized Nursing Care',
      'Rapid ICU Escalation Link',
      'High-Flow Oxygen Delivery'
    ],
    amenities: ['Bedside Cardiac Sync', 'Automated Infusion Pumps', 'Doctor Rounds 24x7', 'Motorized Bed']
  },
  {
    id: 'general-ward',
    code: '04',
    name: 'General Ward',
    category: 'Multi-Bed Inpatient Ward',
    shortDesc: 'Clean, spacious, economical inpatient recovery ward with 24-hour nursing.',
    image: generalWardImg,
    badge: 'Economical Recovery',
    accent: '#059669',
    icon: BedDouble,
    highlights: [
      'Full Bedside Privacy Curtains',
      'Centralized Oxygen Pipeline',
      'Electric Nurse Call Buzzer',
      'Ayushman Bharat Eligible'
    ],
    amenities: ['Daily Sanitization', 'Attendant Stool', 'Dedicated Nutrition', 'Luggage Lockers']
  },
  {
    id: 'single-non-ac',
    code: '05',
    name: 'Single Room Non A/C',
    category: 'Private Inpatient Room',
    shortDesc: 'Quiet private recovery room with natural ventilation and dedicated attendant bed.',
    image: singleNonAcImg,
    badge: 'Private & Quiet',
    accent: '#008277',
    icon: Wind,
    highlights: [
      'Private Single Patient Bed',
      'Comfortable Attendant Couch',
      'Attached Sanitized Washroom',
      'Large Ventilated Window'
    ],
    amenities: ['Bedside Calling Bell', 'Wardrobe & Table', 'Hot Water Facility', 'Patient Privacy']
  },
  {
    id: 'single-ac',
    code: '06',
    name: 'Single Room A/C',
    category: 'Air-Conditioned Private Room',
    shortDesc: 'Climate-controlled private room with motorized bed, TV and personalized care.',
    image: singleAcImg,
    badge: 'Climate Controlled',
    accent: '#0284c7',
    icon: Sparkles,
    highlights: [
      'Individual Split Air Conditioner',
      'Multi-Position Adjustable Bed',
      'Wall-Mounted LED Smart TV',
      'Attendant Sofa-cum-Bed'
    ],
    amenities: ['Attached Deluxe Washroom', 'High-Speed Wi-Fi', 'Daily Doctor Consultation', 'Bedside Oxygen']
  },
  {
    id: 'deluxe-ac',
    code: '07',
    name: 'Deluxe Room A/C',
    category: 'VIP Executive Suite',
    shortDesc: 'Premium hospital suite featuring luxury living lounge, smart TV and 5-star comfort.',
    image: deluxeAcImg,
    badge: 'Executive VIP Suite',
    accent: '#d4af37',
    icon: Award,
    highlights: [
      'Fully-Motorized Patient Bed',
      'Plush Leather Sofa Lounge',
      'Large Smart LED TV & Refrigerator',
      'Wood-Paneled Ambient Suite'
    ],
    amenities: ['En-suite Modern Bath', 'Dining Table & Pantry', 'VIP Guest Access', 'Priority Attendant Desk']
  }
];

export default function RoomCategorySection({ onOpenBooking }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = ROOM_CATEGORIES[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % ROOM_CATEGORIES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + ROOM_CATEGORIES.length) % ROOM_CATEGORIES.length);
  };

  const handleInquire = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      window.location.href = 'tel:7482068777';
    }
  };

  return (
    <section id="rooms" className="py-16 sm:py-24 bg-[#f8faf9] text-[#002420] relative overflow-hidden">
      {/* Soft ambient background glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#008277]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#008277] uppercase mb-2">
            <span className="w-6 h-px bg-[#008277]" />
            HOSPITAL ADMISSION & ACCOMMODATION
            <span className="w-6 h-px bg-[#008277]" />
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002420] mb-3 tracking-tight">
            Room <span className="text-[#008277]">Categories</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Choose from comprehensive critical care suites to private air-conditioned rooms designed for patient healing and family comfort.
          </p>
        </div>

        {/* Horizontal Category Switcher Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 mb-6 sm:mb-8 sm:justify-center">
          {ROOM_CATEGORIES.map((room, idx) => {
            const isActive = idx === activeIndex;
            const Icon = room.icon;

            return (
              <button
                key={room.id}
                onClick={() => setActiveIndex(idx)}
                className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer border shrink-0 ${
                  isActive
                    ? 'bg-[#002420] text-white border-[#002420] shadow-md shadow-[#002420]/20 scale-102'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-[#008277] hover:text-[#008277]'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-[#d4af37]' : 'text-slate-400'} />
                <span>{room.name}</span>
              </button>
            );
          })}
        </div>

        {/* Master Showcase Box (Split Interactive Architectural Layout) */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/60 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Content Column (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28 }}
                >
                  {/* Category Number & Tag */}
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span 
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-black tracking-wider text-white"
                      style={{ backgroundColor: current.accent }}
                    >
                      {current.code}
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {current.category}
                    </span>
                  </div>

                  {/* Room Name */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#002420] tracking-tight leading-tight mb-2">
                    {current.name}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                    {current.shortDesc}
                  </p>

                  {/* 4 Crisp Key Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {current.highlights.map((feat, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 bg-[#f8faf9] px-3 py-2 rounded-xl border border-slate-200/70 text-xs text-slate-700 font-medium"
                      >
                        <div 
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-white"
                          style={{ backgroundColor: current.accent }}
                        >
                          <Check size={10} strokeWidth={3} />
                        </div>
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Amenities Chip Row */}
                  <div className="flex flex-wrap gap-1.5 mb-7">
                    {current.amenities.map((item, i) => (
                      <span 
                        key={i} 
                        className="text-[11px] font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md"
                      >
                        • {item}
                      </span>
                    ))}
                  </div>

                  {/* Action CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={handleInquire}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#008277] hover:bg-[#002420] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                      <span>Inquire Admission</span>
                      <ArrowRight size={15} />
                    </button>

                    <a
                      href="tel:7482068777"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-[#002420] font-bold text-xs sm:text-sm border border-slate-200 transition-all active:scale-95 cursor-pointer"
                    >
                      <PhoneCall size={15} className="text-[#008277]" />
                      <span>74820-68777</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Interactive Room Frame (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-slate-950 border border-slate-200 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.id}
                    src={current.image}
                    alt={current.name}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Floating Category Pill */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#002420] text-xs font-black shadow-md border border-white/60">
                  <span 
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: current.accent }}
                  />
                  <span>{current.badge}</span>
                </div>

                {/* Arrow Navigators */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Room"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-[#002420] flex items-center justify-center shadow-lg transition-all active:scale-90 cursor-pointer border border-white/60"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Room"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#002420] hover:bg-[#008277] text-white flex items-center justify-center shadow-lg transition-all active:scale-90 cursor-pointer border border-white/20"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                {/* Active Indicator Dots */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/20">
                  {ROOM_CATEGORIES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      aria-label={`Jump to room ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        i === activeIndex 
                          ? 'w-5 bg-[#d4af37]' 
                          : 'w-1.5 bg-white/50 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Quick Thumbnail Strip (Click to Switch Instantly) */}
              <div className="grid grid-cols-7 gap-2 mt-3 sm:mt-4">
                {ROOM_CATEGORIES.map((room, idx) => {
                  const isSelected = idx === activeIndex;
                  return (
                    <button
                      key={room.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`relative rounded-lg sm:rounded-xl overflow-hidden aspect-[4/3] cursor-pointer transition-all border-2 ${
                        isSelected 
                          ? 'border-[#008277] ring-2 ring-[#008277]/30 scale-102 shadow-sm' 
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                      title={room.name}
                    >
                      <img 
                        src={room.image} 
                        alt={room.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center p-0.5">
                        <span className="text-[9px] sm:text-[10px] font-black text-white text-center leading-tight truncate px-1">
                          {room.name}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Trust & Insurance Strip */}
        <div className="mt-8 rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#008277] flex items-center justify-center shrink-0 border border-teal-200">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#002420]">
                Ayushman Bharat & All Leading Health Insurance TPA Accepted
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                Seamless cashless admission across ICU, HDU, General Ward & Private Rooms.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto flex items-center justify-center shrink-0">
            <a
              href="tel:7482068777"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-teal-50 hover:bg-teal-100/80 text-[#008277] border border-teal-200 font-bold text-xs sm:text-sm transition-all active:scale-95 cursor-pointer shadow-2xs"
            >
              <PhoneCall size={14} className="shrink-0" />
              <span className="whitespace-nowrap">24/7 Inpatient Desk: 74820-68777</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
