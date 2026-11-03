import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, Calendar, PhoneCall, ShieldCheck, 
  CheckCircle2, Clock, Sparkles, Stethoscope, ArrowRight,
  AlertCircle, HelpCircle, ChevronDown, Award, Activity,
  BedDouble, HeartPulse, UserCheck, Share2
} from 'lucide-react';
import { SPECIALITIES_DETAIL } from '../data/specialitiesDetailData';
import { DOCTORS } from '../data/hospitalData';

export default function SpecialityDetailPage({ 
  specialitySlug = 'knee-replacement', 
  onOpenBooking = () => {}, 
  onNavigate = () => {} 
}) {
  const [activeFaq, setActiveFaq] = useState(0);
  const [copied, setCopied] = useState(false);

  // Retrieve data or fallback
  const data = SPECIALITIES_DETAIL[specialitySlug] || SPECIALITIES_DETAIL['knee-replacement'];

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [specialitySlug]);

  // Filter relevant doctors
  const relevantDoctors = DOCTORS.filter(doc => {
    if (specialitySlug.includes('ortho') || specialitySlug.includes('knee') || specialitySlug.includes('hip') || specialitySlug.includes('shoulder') || specialitySlug.includes('trauma')) {
      return doc.department === 'orthopaedics';
    }
    if (specialitySlug.includes('neuro') || specialitySlug.includes('spine')) {
      return doc.department === 'neurology';
    }
    if (specialitySlug.includes('obgyn') || specialitySlug.includes('obstetrics')) {
      return doc.department === 'obgyn';
    }
    if (specialitySlug.includes('general-surgery')) {
      return doc.department === 'gensurgery';
    }
    if (specialitySlug.includes('laser')) {
      return doc.department === 'laserlap';
    }
    if (specialitySlug.includes('gastro')) {
      return doc.department === 'gastroenterology';
    }
    if (specialitySlug.includes('oncology')) {
      return doc.department === 'oncology';
    }
    if (specialitySlug.includes('pediatrics')) {
      return doc.department === 'paediatrics';
    }
    if (specialitySlug.includes('urology')) {
      return doc.department === 'urology';
    }
    if (specialitySlug.includes('vascular')) {
      return doc.department === 'vascular';
    }
    return true;
  }).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${data.title} - KLC Hospitals`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-[#002e29]">
      
      {/* 1. TOP HERO BANNER (250px Height, Center Aligned) */}
      <div className="relative bg-gradient-to-r from-[#002420] via-[#00342e] to-[#001714] text-white h-[250px] flex flex-col justify-center px-4 sm:px-6 overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#008277]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00a896]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 w-full">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center flex-wrap gap-2 text-[11px] sm:text-xs font-semibold text-teal-300 mb-2 uppercase tracking-wider">
            <button onClick={() => onNavigate('home')} className="hover:underline hover:text-white cursor-pointer">
              Home
            </button>
            <ChevronRight size={12} className="text-teal-400" />
            <button onClick={() => onNavigate('specialities')} className="hover:underline hover:text-white cursor-pointer">
              Specialities
            </button>
            {data.parentTitle && (
              <>
                <ChevronRight size={12} className="text-teal-400" />
                <button 
                  onClick={() => onNavigate('speciality-detail', data.parentSpecialty)} 
                  className="hover:underline hover:text-white cursor-pointer"
                >
                  {data.parentTitle}
                </button>
              </>
            )}
            <ChevronRight size={12} className="text-teal-400" />
            <span className="text-white font-bold">{data.title}</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-300/30 text-teal-200 text-[11px] font-extrabold backdrop-blur-md">
                <Sparkles size={12} className="text-[#f8df8c]" />
                <span>{data.badge}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
              {data.title}
            </h1>

            <p className="text-teal-100/90 text-xs sm:text-sm max-w-xl mx-auto font-medium line-clamp-1">
              {data.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* 2. MAIN BODY CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-14">

        {/* Section A: Clinical Overview with Real Visual Asset */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Real Service Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
                <img 
                  src={data.image} 
                  alt={data.title}
                  className="w-full h-auto max-h-[340px] object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-300 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded">
                    KLC Hospitals Clinical Suite
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold mt-1 text-white drop-shadow-md">
                    {data.title}
                  </h4>
                </div>
              </div>
            </div>

            {/* Right: Overview text, Stats, CTAs */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#008277] block">
                Department Overview & Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#002e29]">
                {data.overviewHeading || `Clinical Excellence & Advanced ${data.title}`}
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {data.overview}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                {data.statHighlights.map((stat, sIdx) => (
                  <div key={sIdx} className="p-2.5 sm:p-3 rounded-xl bg-slate-50/90 border border-slate-200 text-center flex flex-col justify-center min-h-[68px]">
                    <div className="text-sm sm:text-base lg:text-[17px] font-black text-[#008277] tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-[10.5px] font-bold text-slate-500 uppercase tracking-wider mt-0.5 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#008277] hover:bg-[#009b8e] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer active:scale-95"
                >
                  <Calendar size={15} />
                  <span>Book Consultation</span>
                </button>
                <a
                  href="tel:7482068777"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 transition-all"
                >
                  <PhoneCall size={14} className="text-[#008277]" />
                  <span>Call 74820-68777</span>
                </a>
              </div>
            </div>

          </div>

          {/* Sub-Pages if available (e.g. on Main Ortho page) */}
          {data.subPages && (
            <div className="mt-8 pt-8 border-t border-slate-100">
              <h3 className="text-base font-bold text-[#002e29] mb-4">
                Explore Dedicated Sub-Speciality Pages:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.subPages.map((sub, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => onNavigate('speciality-detail', sub.slug)}
                    className="p-5 rounded-2xl bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-[#008277] text-left transition-all group cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-[#008277] mb-2">
                      <span className="text-xs font-black uppercase tracking-wider">Sub-Menu Page</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h4 className="font-bold text-sm text-[#002e29] mb-1 group-hover:text-[#008277]">
                      {sub.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {sub.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Section B: Key Procedures Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#008277]">
              Surgical Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#002e29] mt-1">
              Advanced Procedures & Interventions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Performed in Class-100 Laminar Airflow Theatres adhering to international clinical pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.procedures.map((proc, pIdx) => (
              <div 
                key={pIdx}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-[#008277]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#008277] flex items-center justify-center font-black text-sm group-hover:bg-[#008277] group-hover:text-white transition-colors">
                      0{pIdx + 1}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#002e29] group-hover:text-[#008277] transition-colors">
                      {proc.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {proc.desc}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 size={14} />
                    <span>NABH Protocol Verified</span>
                  </span>
                  <button 
                    onClick={onOpenBooking} 
                    className="text-[#008277] font-bold hover:underline cursor-pointer"
                  >
                    Consult Doctor →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section C: Symptoms / When to Consult & Technologies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Symptoms Checklist */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <AlertCircle size={20} />
              </div>
              <h3 className="text-lg font-black text-[#002e29]">
                When Should You Consult Our Specialists?
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Do not ignore persistent symptoms. Timely clinical assessment prevents permanent functional impairment.
            </p>

            <div className="space-y-2.5 pt-2">
              {data.symptoms.map((sym, sIdx) => (
                <div key={sIdx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    !
                  </span>
                  <span>{sym}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cutting-Edge Technologies */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#002e29] to-[#001714] text-white shadow-xl space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-400/20 text-teal-300 flex items-center justify-center">
                <Sparkles size={20} />
              </div>
              <h3 className="text-lg font-black text-white">
                Next-Gen Technologies & OT Systems
              </h3>
            </div>
            <p className="text-xs text-slate-300">
              State-of-the-art medical equipment ensuring sub-millimeter precision, zero cuts, and minimal blood loss.
            </p>

            <div className="space-y-2.5 pt-2">
              {data.technologies.map((tech, tIdx) => (
                <div key={tIdx} className="flex items-start gap-3 p-3 rounded-xl bg-white/10 border border-white/10 text-xs sm:text-sm text-teal-100 backdrop-blur-md">
                  <CheckCircle2 size={16} className="text-teal-300 shrink-0 mt-0.5" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Section D: Recovery Timeline (If available) */}
        {data.recoveryTimeline && (
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#008277]">
                Fast-Track Recovery
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#002e29] mt-1">
                Your Patient Recovery Pathway
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.recoveryTimeline.map((step, rIdx) => (
                <div key={rIdx} className="p-5 rounded-2xl bg-teal-50/50 border border-teal-100 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-extrabold text-[#008277] uppercase tracking-wider block mb-1">
                      {step.phase}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {step.text}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-teal-200/50 text-[11px] text-teal-800 font-bold flex items-center gap-1">
                    <Clock size={13} />
                    <span>Assisted by Dedicated Physical Therapist</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section E: Senior Specialists Available for this Department */}
        {relevantDoctors.length > 0 && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#008277]">
                  Medical Faculty
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#002e29] mt-1">
                  Department Specialists & Surgeons
                </h2>
              </div>

              <button
                onClick={() => onNavigate('doctors')}
                className="text-xs sm:text-sm font-bold text-[#008277] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View All 160+ Doctors</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relevantDoctors.map((doc) => (
                <div 
                  key={doc.id}
                  className="rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#008277]/40 transition-all overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Doctor Full Poster */}
                    <div className="w-full bg-slate-50 overflow-hidden border-b border-slate-100">
                      <img 
                        src={doc.image} 
                        alt={doc.name} 
                        className="w-full h-auto object-contain"
                      />
                    </div>

                    <div className="p-4 space-y-2">
                      {/* Highlights / Points in Boxes */}
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-[#008277] text-xs font-bold border border-teal-100">
                          {doc.experience} Experience
                        </span>
                        {doc.badges && doc.badges.map((b, bIdx) => (
                          <span key={bIdx} className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <button
                      onClick={onOpenBooking}
                      className="w-full py-2.5 rounded-xl bg-[#008277] hover:bg-[#009b8e] text-white text-xs sm:text-sm font-bold transition-all shadow-xs active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Calendar size={15} />
                      <span>Book Appointment</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section F: Frequently Asked Questions */}
        {data.faqs && (
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#008277]">
                Patient Queries
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#002e29] mt-1">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3 max-w-3xl mx-auto">
              {data.faqs.map((faq, fIdx) => (
                <div 
                  key={fIdx}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === fIdx ? -1 : fIdx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-bold text-sm sm:text-base text-[#002e29] hover:text-[#008277] bg-white transition-colors cursor-pointer"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <ChevronDown 
                      size={18} 
                      className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                        activeFaq === fIdx ? 'rotate-180 text-[#008277]' : ''
                      }`}
                    />
                  </button>

                  {activeFaq === fIdx && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section G: Direct OPD Booking Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#002420] via-[#003831] to-[#001714] text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-teal-200 text-xs font-bold">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>Cashless Hospitalization Across 45+ TPAs</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Schedule Your Consultation for {data.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Consult with senior specialists at KLC Hospitals, Kankarbagh, Patna. Same-day diagnostics, second opinions, and cashless admission support.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-2.5 sm:px-8 py-3 sm:py-4 rounded-xl bg-[#008277] hover:bg-[#009b8e] text-white font-black text-xs sm:text-base shadow-xl hover:shadow-teal-500/30 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap"
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </button>
            <a
              href="tel:7482068777"
              className="w-full sm:w-auto px-2.5 sm:px-6 py-3 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-base border border-white/20 transition-all flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap"
            >
              <PhoneCall size={16} className="text-emerald-400 shrink-0" />
              <span>Call: 74820-68777</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
