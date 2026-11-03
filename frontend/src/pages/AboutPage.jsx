import React, { useState } from 'react';
import { 
  Building2, ShieldCheck, Award, HeartHandshake, 
  Users, CheckCircle2, ArrowRight, PhoneCall, Calendar,
  Clock, Sparkles, Activity, FileCheck, Stethoscope,
  BedDouble, HeartPulse, Baby, Eye, ChevronRight
} from 'lucide-react';
import { HOSPITAL_INFO, STATS, DOCTORS } from '../data/hospitalData';
import { 
  aboutUsImg,
  emergencyFacilityImg,
  radiologyFacilityImg,
  labFacilityImg,
  pharmacyFacilityImg,
  deluxeRoomImg,
  icuRoomImg,
  nicuRoomImg,
  hduRoomImg,
  singleAcRoomImg,
  generalWardImg
} from '../assets/hospitalAssets';

export default function AboutPage({ onOpenBooking, onNavigate }) {
  const [selectedFacilityTab, setSelectedFacilityTab] = useState('all');

  const milestones = [
    { year: '2008', title: 'Foundation of KLC', desc: 'Started with a vision to provide world-class affordable healthcare to Eastern India.' },
    { year: '2014', title: 'Advanced ICU & OT Expansion', desc: 'Inaugurated dedicated 24x7 Critical Care units and modular laminar airflow OTs.' },
    { year: '2019', title: 'Robotic Surgery Program', desc: 'Introduced computer-navigated and robotic joint replacement and minimally invasive suites.' },
    { year: '2024', title: 'NABH Accreditation & 100+ Beds', desc: 'Expanded multi-speciality campus at Kankarbagh with 160+ specialist faculty.' }
  ];

  const coreValues = [
    {
      icon: HeartHandshake,
      title: 'Patient-First Compassion',
      desc: 'Treating every patient like family with utmost warmth, dignity, transparent counseling, and personalized attention.'
    },
    {
      icon: ShieldCheck,
      title: 'NABH Protocol & Zero-Infection',
      desc: 'Stringent multi-tier sterilization, Class-100 HEPA air filtration, continuous clinical audits, and zero-infection targets.'
    },
    {
      icon: Sparkles,
      title: 'Technological Precision',
      desc: 'Robotic joint consoles, 3T digital MRI, biplane cath lab, endoscopic spine systems, and continuous AI patient monitors.'
    },
    {
      icon: FileCheck,
      title: 'Ethical & Transparent Billing',
      desc: 'Clear upfront pricing, honest medical advice, zero unnecessary investigations, and 100% cashless tie-up across 45+ TPAs.'
    }
  ];

  const facilitiesList = [
    {
      id: 'emergency',
      name: '24/7 Level-1 Emergency & Trauma Care',
      desc: 'Round-the-clock emergency triage, resuscitation bays, dedicated trauma surgeon on-site, and GPS-tracked ALS ambulances.',
      image: emergencyFacilityImg,
      badge: '24/7 Emergency',
      highlight: 'Turnaround < 12 Mins'
    },
    {
      id: 'radiology',
      name: 'Advanced Radiology & 3.0 Tesla Imaging',
      desc: 'State-of-the-art 3T Silent MRI, 256-Slice High-Speed CT, 4D Ultrasound, and digital mammography for precise diagnosis.',
      image: radiologyFacilityImg,
      badge: 'Advanced Imaging',
      highlight: 'Ultra-High Clarity'
    },
    {
      id: 'laboratory',
      name: '24/7 NABL Accredited Diagnostic Pathology',
      desc: 'Fully automated biochemistry, hematology, microbiology, and molecular biology testing with digital report dispatch within 60 minutes.',
      image: labFacilityImg,
      badge: 'Automated Lab',
      highlight: 'NABL Certified'
    },
    {
      id: 'pharmacy',
      name: '24x7 In-House Hospital Pharmacy',
      desc: 'Complete inventory of certified prescription medications, oncology injectables, and surgical implants with cold-chain storage.',
      image: pharmacyFacilityImg,
      badge: '100% Genuine',
      highlight: 'Open 24 Hours'
    }
  ];

  const roomCategories = [
    { name: 'Smart Intensive Care Unit (ICU)', desc: '1:1 specialized critical nursing with mechanical ventilators & central monitoring.', image: icuRoomImg, badge: 'Critical Care' },
    { name: 'Neonatal ICU (NICU)', desc: 'Level-3 micro-environment warmers & incubators for delicate newborns.', image: nicuRoomImg, badge: 'Level-3 NICU' },
    { name: 'High Dependency Unit (HDU)', desc: 'Continuous telemetry step-down monitoring between ICU and rooms.', image: hduRoomImg, badge: 'Step-Down Care' },
    { name: 'Deluxe Private A/C Suite', desc: 'Spacious suite with patient electric bed, attendant sofa-bed, TV, and en-suite washroom.', image: deluxeRoomImg, badge: 'Executive Comfort' },
    { name: 'Single Private A/C Room', desc: 'Quiet private room for focused healing with attached bathroom and dedicated attendant couch.', image: singleAcRoomImg, badge: 'Private Care' },
    { name: 'Clean & Spacious General Ward', desc: 'Air-conditioned multi-bed recovery ward with privacy curtains and continuous nursing.', image: generalWardImg, badge: 'Economical Care' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-[#002e29]">
      
      {/* 1. HERO HEADER (250px Height, Center Aligned) */}
      <div className="relative bg-gradient-to-r from-[#002420] via-[#003d37] to-[#001714] text-white h-[250px] flex flex-col justify-center px-4 sm:px-6 overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#008277]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold text-teal-300 mb-2 uppercase tracking-wider">
            <button onClick={() => onNavigate('home')} className="hover:underline hover:text-white cursor-pointer">Home</button>
            <ChevronRight size={12} className="text-teal-400" />
            <span className="text-white font-bold">About Us</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-teal-400/30 text-teal-200 text-[11px] font-bold backdrop-blur-md">
                <Award size={13} className="text-[#d4af37]" />
                <span>{HOSPITAL_INFO.parentUnit}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
              World-Class Healthcare with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-200 to-emerald-300">Human Compassion</span>
            </h1>

            <p className="text-teal-100/90 text-xs sm:text-sm max-w-xl mx-auto font-medium">
              Premier 100+ Bed Super Multispeciality Hospital in Kankarbagh, Patna.
            </p>
          </div>
        </div>
      </div>

      {/* 2. STATS BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-2xl shadow-xl border border-slate-200/80">
          {STATS.slice(0, 4).map((item, idx) => (
            <div key={idx} className="text-center p-3 border-r last:border-r-0 border-slate-100">
              <div className="text-2xl sm:text-3xl font-black text-[#008277] mb-1">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-500 hidden sm:block mt-0.5">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. MAIN STORY & REAL HOSPITAL CAMPUS VISUAL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Text Story */}
          {/* Text Story with Highlighted Key Words */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#008277]">
              Our Heritage & Vision
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#002e29] tracking-tight">
              A Trusted Healthcare Pillar Serving <span className="text-[#008277]">Patna & Eastern India</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Founded with the conviction that every patient deserves access to <strong className="text-[#002e29] font-bold bg-teal-50/80 px-1 py-0.5 rounded border border-teal-200/60">metropolitan-standard tertiary healthcare</strong> without traveling outside Bihar, <strong className="text-[#008277] font-black">KLC Hospitals</strong> has evolved into one of Eastern India’s <span className="text-[#008277] font-bold">most technologically advanced medical institutions</span>.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From <strong className="text-[#002e29] font-bold">autonomous robotic joint replacement</strong> and <strong className="text-[#002e29] font-bold">endoscopic micro-neurosurgery</strong> to <strong className="text-[#008277] font-bold">24/7 interventional cath lab</strong> procedures and <strong className="text-[#008277] font-bold">neonatal intensive care (NICU)</strong>, our campus brings together over <span className="inline-block px-2 py-0.5 rounded-md bg-teal-50 text-[#008277] font-black border border-teal-200">160+ senior specialists</span> across <strong className="text-[#002e29] font-bold">30+ medical disciplines</strong>.
            </p>

            {/* Quick Feature Pills with Bold Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {[
                { bold: '100+ Advanced', normal: 'Hospital Beds' },
                { bold: 'Modular Class-100', normal: 'Laminar OTs' },
                { bold: '24/7 Level-1', normal: 'Polytrauma & ICU' },
                { bold: '45+ Cashless', normal: 'TPA Partnerships' },
                { bold: 'Robotic', normal: 'Joint Arthroplasty' },
                { bold: 'In-House 24x7', normal: 'NABL Diagnostics' }
              ].map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2 p-2 rounded-xl bg-slate-50/80 border border-slate-200/80 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 size={16} className="text-[#008277] shrink-0" />
                  <span>
                    <strong className="text-[#008277] font-black">{feat.bold}</strong> {feat.normal}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('specialities')}
                className="inline-flex items-center gap-2 text-sm font-black text-[#008277] hover:underline cursor-pointer"
              >
                <span>Explore Super Specialities & Departments</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Real Campus Visual (About Us.png) - 100% Uncropped & Uncut */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white w-full">
              <img 
                src={aboutUsImg} 
                alt="KLC Hospitals Main Campus & Branch Centers" 
                className="w-full h-auto object-contain block transition-transform duration-300 hover:scale-[1.01]"
              />
            </div>
          </div>

        </div>

        {/* 4. REAL FACILITIES & DIAGNOSTIC CENTERS (With Real Photos) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#008277]">
              World-Class Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#002e29] mt-1">
              Our Modern Hospital Facilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Photographed directly on-site at our Kankarbagh campus in Patna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilitiesList.map((fac) => (
              <div
                key={fac.id}
                className="rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#008277]/40 transition-all overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img 
                      src={fac.image} 
                      alt={fac.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[11px] font-bold">
                      {fac.badge}
                    </div>
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-[#008277] text-white text-[11px] font-black shadow-xs">
                      {fac.highlight}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-extrabold text-base text-[#002e29] mb-2 leading-snug group-hover:text-[#008277] transition-colors">
                      {fac.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-teal-50 text-[#008277] font-bold text-xs border border-slate-200 hover:border-teal-300 transition-all cursor-pointer"
                  >
                    Avail Facility →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. INPATIENT ROOM INFRASTRUCTURE (With Real Room Photos) */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#008277]">
              Inpatient Accommodations
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#002e29] mt-1">
              Designed for Comfort, Hygiene & Speedy Recovery
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              From state-of-the-art critical ICU pods to comfortable private suites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roomCategories.map((room, rIdx) => (
              <div 
                key={rIdx}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 hover:shadow-lg transition-all group"
              >
                <div className="relative h-44 overflow-hidden bg-slate-800">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[11px] font-bold">
                    {room.badge}
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="font-extrabold text-sm sm:text-base text-[#002e29] mb-1">
                    {room.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {room.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. OUR MEDICAL FACULTY & SENIOR LEADERSHIP (With Real Doctor Photos) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#008277]">
                Distinguished Doctors
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#002e29] mt-1">
                Eminent Consultants & Department Heads
              </h2>
            </div>

            <button
              onClick={() => onNavigate('doctors')}
              className="text-xs sm:text-sm font-bold text-[#008277] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All 160+ Specialist Faculty</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCTORS.slice(0, 4).map((doc) => (
              <div
                key={doc.id}
                className="rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#008277]/40 transition-all p-5 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square mb-4 bg-slate-100">
                    <img 
                      src={doc.image} 
                      alt={doc.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 text-teal-300 text-[10px] font-bold backdrop-blur-xs">
                      {doc.experience} Experience
                    </div>
                  </div>

                  <h3 className="font-extrabold text-base text-[#002e29] leading-snug group-hover:text-[#008277] transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-[#008277] font-bold mt-0.5">
                    {doc.role}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                    {doc.degrees}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-2 rounded-xl bg-[#008277] hover:bg-[#009b8e] text-white text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
                  >
                    Book OPD Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. CORE VALUES 4-PILLAR GRID */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#008277]">
              Our Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#002e29] mt-1">
              The Four Pillars that Define Our Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-[#008277]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#008277] group-hover:bg-[#008277] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-base font-bold text-[#002e29] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 8. JOURNEY MILESTONES */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#008277]">
              16+ Years of Growth
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#002e29] mt-1">
              Milestones in Our Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-2xl font-black text-[#008277] block mb-2">
                  {m.year}
                </span>
                <h4 className="text-sm font-bold text-[#002e29] mb-1.5">
                  {m.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 9. BOTTOM ACTION BANNER */}
        <div className="p-6 sm:p-12 rounded-3xl bg-gradient-to-r from-[#002420] via-[#003831] to-[#001714] text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-3xl font-black mb-2 text-white">
              Need Medical Guidance or a Second Opinion?
            </h3>
            <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed">
              Our senior clinical coordinators are available round-the-clock to guide you with specialist appointments, cashless hospitalization queries, and emergency ambulance dispatch.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-3 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#008277] hover:bg-[#009b8e] text-white font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap"
            >
              <Calendar size={15} />
              <span>Book Appointment</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-3 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer flex items-center justify-center whitespace-nowrap"
            >
              Contact Hospital
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
