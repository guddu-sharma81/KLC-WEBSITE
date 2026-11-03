import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PhoneCall, Clock, ArrowRight, ShieldCheck, 
  Activity, Pill, FlaskConical, Scan, MapPin, 
  Check, Zap, Sparkles, ChevronRight
} from 'lucide-react';

import emergencyImg from '../assets/emergency_facility.jpg';
import pharmacyImg from '../assets/pharmacy_facility.jpg';
import laboratoryImg from '../assets/laboratory_facility.jpg';
import radiologyImg from '../assets/radiology_facility.jpg';

const FACILITIES = [
  {
    id: 'emergency',
    tabTitle: '24x7 TRAUMA & EMERGENCY',
    shortName: 'Trauma & Emergency',
    badge: 'Immediate Response',
    tagline: 'Level-1 Critical Care & Polytrauma ICU',
    desc: 'Equipped with zero-delay triage, advanced resuscitation bays, and critical care specialists ready around the clock for polytrauma, cardiac emergencies, and acute stroke.',
    image: emergencyImg,
    accentColor: '#ef4444',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    iconBg: 'bg-rose-500 text-white',
    icon: Activity,
    stats: [
      { label: 'Triage Speed', value: '< 60 Sec' },
      { label: 'Ambulance', value: 'ALS Onboard' },
      { label: 'Availability', value: '24/7/365' },
    ],
    pills: [
      'Level-1 Trauma & Resuscitation Suite',
      'Advanced Cardiac Life Support (ALS) Fleet',
      'Critical Care Surgeons On Floor 24x7'
    ],
    primaryAction: {
      type: 'call',
      text: 'Call Trauma: 74820-68777',
      href: 'tel:7482068777',
      color: 'bg-rose-600 hover:bg-rose-700 text-white'
    },
    floatingNote: 'Emergency Ambulance on standby 24/7'
  },
  {
    id: 'pharmacy',
    tabTitle: '24x7 PHARMACY',
    shortName: 'Hospital Pharmacy',
    badge: '100% Genuine Stock',
    tagline: 'In-House Round-the-Clock Medicine Store',
    desc: 'Fully stocked with verified life-saving drugs, surgical consumables, and cold-chain maintained vaccines with computerized billing and inpatient bedside delivery.',
    image: pharmacyImg,
    accentColor: '#008277',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    iconBg: 'bg-[#008277] text-white',
    icon: Pill,
    stats: [
      { label: 'Medicines', value: '15,000+' },
      { label: 'Stock Verif.', value: '100% Genuine' },
      { label: 'Delivery', value: 'Bedside' },
    ],
    pills: [
      'Genuine Life-Saving Emergency Injections',
      'Cold-Chain Biologicals, Serums & Vaccines',
      'Surgical Implants & Post-Operative Kits'
    ],
    primaryAction: {
      type: 'call',
      text: 'Call Pharmacy: 74820-98777',
      href: 'tel:7482098777',
      color: 'bg-[#008277] hover:bg-[#005c54] text-white'
    },
    floatingNote: 'All critical ICU & surgery drugs in stock'
  },
  {
    id: 'laboratory',
    tabTitle: '24x7 LABORATORY',
    shortName: 'Automated Pathology',
    badge: 'STAT Emergency Reports',
    tagline: 'Fully Automated Pathology & Diagnostic Lab',
    desc: 'State-of-the-art robotic biochemistry and hematology analyzers delivering hyper-accurate diagnostic results with rapid turnaround times and online report delivery.',
    image: laboratoryImg,
    accentColor: '#0284c7',
    badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
    iconBg: 'bg-sky-600 text-white',
    icon: FlaskConical,
    stats: [
      { label: 'STAT Reports', value: '30-45 Mins' },
      { label: 'Analyzers', value: 'Robotic' },
      { label: 'Error Rate', value: 'Zero-Error' },
    ],
    pills: [
      'Automated Clinical Biochemistry & Hematology',
      'Emergency Troponin-I, ABG & Sepsis Panels',
      'Direct Digital SMS & Online Report Access'
    ],
    primaryAction: {
      type: 'book',
      text: 'Book Lab Test / Home Collection',
      department: 'Laboratory',
      color: 'bg-sky-600 hover:bg-sky-700 text-white'
    },
    floatingNote: 'Emergency Troponin & ABG in 30 mins'
  },
  {
    id: 'radiology',
    tabTitle: '24x7 RADIO-DIAGNOSIS',
    shortName: 'Precision Radiology',
    badge: 'High-Precision Imaging',
    tagline: '3.0T Silent MRI & 256-Slice CT Scan',
    desc: 'Next-generation medical imaging suite featuring silent high-field MRI, ultra-low dose 256-slice CT angiography, 4D Doppler ultrasound, and instant teleradiology reads.',
    image: radiologyImg,
    accentColor: '#7c3aed',
    badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
    iconBg: 'bg-purple-600 text-white',
    icon: Scan,
    stats: [
      { label: 'MRI Field', value: '3.0 Tesla' },
      { label: 'CT Scices', value: '256-Slice' },
      { label: 'Radiation', value: 'Ultra-Low' },
    ],
    pills: [
      '3.0 Tesla Silent Whole-Body & Neuro MRI',
      '256-Slice High-Speed Cardiac & Angio CT',
      'Instant Teleradiology Reads by Specialists'
    ],
    primaryAction: {
      type: 'book',
      text: 'Schedule Imaging Scan',
      department: 'Radio-Diagnosis',
      color: 'bg-purple-600 hover:bg-purple-700 text-white'
    },
    floatingNote: 'Instant digital reports by Senior Radiologists'
  },
];

export default function FacilitiesSection({ onOpenBooking, onOpenEmergency }) {
  const [activeTab, setActiveTab] = useState('emergency');

  const currentFacility = FACILITIES.find((f) => f.id === activeTab) || FACILITIES[0];
  const CurrentIcon = currentFacility.icon;

  const handleAction = () => {
    if (currentFacility.primaryAction.type === 'call') {
      window.location.href = currentFacility.primaryAction.href;
    } else if (onOpenBooking) {
      onOpenBooking();
    }
  };

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-white text-[#002420] relative overflow-hidden">
      {/* Subtle clean ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#008277]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header with crisp alignment */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-widest text-[#008277] shadow-2xs mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span>ROUND-THE-CLOCK CRITICAL INFRASTRUCTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002420] mb-3 tracking-tight">
            Our <span className="text-[#008277]">Facilities</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Advanced medical diagnostics, 24x7 emergency response, and verified pharmacy care — operational every single minute of the year.
          </p>
        </div>

        {/* 4 Interactive Facility Segment Tabs (Mobile scrollable, desktop 4-column dock) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {FACILITIES.map((fac) => {
            const Icon = fac.icon;
            const isActive = fac.id === activeTab;

            return (
              <button
                key={fac.id}
                onClick={() => setActiveTab(fac.id)}
                className={`relative flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? 'bg-[#002420] text-white border-[#002420] shadow-lg shadow-[#002420]/15 translate-y-[-2px]'
                    : 'bg-[#f8faf9] hover:bg-slate-100/90 text-slate-700 border-slate-200/90 hover:border-slate-300 shadow-2xs'
                }`}
              >
                {/* Active Indicator bar on top */}
                {isActive && (
                  <motion.div
                    layoutId="activeFacilityIndicator"
                    className="absolute -top-1 inset-x-6 h-1 rounded-full bg-[#008277]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}

                {/* Icon box */}
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isActive ? fac.iconBg : 'bg-white text-[#008277] border border-slate-200 shadow-2xs'
                  }`}
                >
                  <Icon size={20} strokeWidth={2.2} />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <span
                    className={`block text-[11px] sm:text-xs font-extrabold uppercase tracking-wider ${
                      isActive ? 'text-[#2dd4bf]' : 'text-slate-500'
                    }`}
                  >
                    24x7 Active
                  </span>
                  <h3
                    className={`text-xs sm:text-sm font-bold truncate leading-snug ${
                      isActive ? 'text-white' : 'text-[#002420]'
                    }`}
                  >
                    {fac.shortName}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Master Showcase Stage (Split Screen View with Rich Visuals) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFacility.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-gradient-to-br from-[#f8faf9] to-[#edf7f5] border border-slate-200/80 p-5 sm:p-8 lg:p-10 shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

              {/* Left Column: Clear Text & Actions (5 Columns) */}
              <div className="lg:col-span-5 flex flex-col justify-center">

                {/* Pill & Live Beacon */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${currentFacility.badgeColor}`}>
                    {currentFacility.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live & Operational</span>
                  </div>
                </div>

                {/* Main Headline */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002420] tracking-tight leading-tight mb-3">
                  {currentFacility.tabTitle}
                </h3>

                {/* Tagline */}
                <p className="text-sm font-semibold text-[#008277] mb-3">
                  {currentFacility.tagline}
                </p>

                {/* Description (Clean, readable paragraph - No endless bullets) */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {currentFacility.desc}
                </p>

                {/* 3 Prominent Stat Metric Badges */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-6">
                  {currentFacility.stats.map((st, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-3 border border-slate-200/90 text-center shadow-2xs"
                    >
                      <span className="block text-sm sm:text-base font-black text-[#002420]">
                        {st.value}
                      </span>
                      <span className="block text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                        {st.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 3 Key Highlights Badges */}
                <div className="flex flex-col gap-2 mb-7">
                  {currentFacility.pills.map((pill, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#008277] flex items-center justify-center shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span>{pill}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons Row - Single row on mobile (grid-cols-2) and flex on desktop */}
                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-3 w-full">
                  {currentFacility.primaryAction.type === 'call' ? (
                    <a
                      href={currentFacility.primaryAction.href}
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer text-center ${currentFacility.primaryAction.color}`}
                    >
                      <PhoneCall size={15} className="shrink-0" />
                      <span className="truncate">{currentFacility.primaryAction.text}</span>
                    </a>
                  ) : (
                    <button
                      onClick={handleAction}
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer text-center ${currentFacility.primaryAction.color}`}
                    >
                      <span className="truncate sm:hidden">
                        {currentFacility.id === 'laboratory' ? 'Book Lab Test' : currentFacility.primaryAction.text}
                      </span>
                      <span className="hidden sm:inline">{currentFacility.primaryAction.text}</span>
                      <ArrowRight size={15} className="shrink-0" />
                    </button>
                  )}

                  {/* Secondary Line */}
                  <a
                    href="tel:7482098777"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#002420] font-bold text-xs sm:text-sm border border-slate-300/80 transition-all active:scale-95 cursor-pointer shadow-2xs text-center whitespace-nowrap"
                  >
                    <PhoneCall size={14} className="text-[#008277] shrink-0" />
                    <span className="whitespace-nowrap">Alt: 74820-98777</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Grand 8K Generated Graphic (7 Columns) */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 group">
                  <img
                    src={currentFacility.image}
                    alt={currentFacility.tabTitle}
                    className="w-full h-72 sm:h-96 lg:h-[440px] object-cover transition-transform duration-700 group-hover:scale-103"
                  />

                  {/* Subtle clean gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Floating Top Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#002420] border border-white/40 text-xs font-black shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>24x7 ROUND-THE-CLOCK</span>
                  </div>

                  {/* Floating Bottom Card with Key Highlight */}
                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-xl flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#002420] text-[#2dd4bf] flex items-center justify-center shrink-0">
                      <CurrentIcon size={20} />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-[#008277]">
                        Verified Hospital Facility
                      </span>
                      <p className="text-xs sm:text-sm font-extrabold text-[#002420] leading-snug">
                        {currentFacility.floatingNote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Helpdesk & Quick Helpline Bar */}
        <div className="mt-8 rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#008277] flex items-center justify-center shrink-0 border border-teal-200">
              <Clock size={20} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#002420]">
                Immediate Admission & Patient Assistance Available 24x7
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                Walk-in emergency triage and patient support active without prior booking.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto flex items-center justify-center gap-2.5 shrink-0">
            <a
              href="tel:7482068777"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              <PhoneCall size={15} />
              <span>Trauma Hotline: 74820-68777</span>
            </a>
            <div className="hidden md:flex items-center gap-1 text-xs text-slate-600 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
              <MapPin size={13} className="text-[#008277]" />
              <span>Kankarbagh, Patna</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
