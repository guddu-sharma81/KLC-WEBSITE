import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  PhoneCall, Ambulance, ShieldCheck, MessageSquare, 
  Calendar, AlertTriangle, ArrowRight, ExternalLink, Building2
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function ContactPage({ onOpenBooking, onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'General Enquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeBranchId, setActiveBranchId] = useState('patna');

  const branches = HOSPITAL_INFO.branches || [];
  const currentBranch = branches.find(b => b.id === activeBranchId) || branches[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  const contactCards = [
    {
      title: '24/7 Emergency Helpline',
      desc: 'Immediate clinical triage, ambulance dispatch & trauma admission.',
      phone: '74820-68777',
      altPhone: '74820-98777',
      icon: Ambulance,
      color: 'bg-rose-50 text-rose-600 border-rose-200'
    },
    {
      title: 'Official Email Helpdesk',
      desc: 'Corporate queries, insurance TPA claims, reports & patient support.',
      email: 'info@klchospitals.info',
      icon: Mail,
      color: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      title: 'Branch 1: Patna (Main Campus)',
      desc: 'E-9, RBI Colony, Malahipakari Chowk, Kankarbagh, Patna, Bihar 800020',
      address: 'E-9, RBI Colony, Malahipakari Chowk, Kankarbagh, Patna, Bihar 800020',
      phone: '74820-68777',
      icon: MapPin,
      color: 'bg-teal-50 text-[#008277] border-teal-200'
    },
    {
      title: 'Branch 2: Chhapra Branch',
      desc: 'Near Daudpur Station, Chhapra, Bihar 841205',
      address: 'Near Daudpur Station, Chhapra, Bihar 841205',
      phone: '74820-68555',
      altPhone: '74820-68777',
      icon: Building2,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    }
  ];

  const faqs = [
    {
      q: 'Are emergency services available 24x7?',
      a: 'Yes, our Level-1 Trauma Centre, Smart ICU, Emergency OT, In-house Blood Storage, and Diagnostic Radiology (CT/MRI/X-Ray) operate 24 hours a day, 365 days a year.'
    },
    {
      q: 'Does KLC Hospital accept cashless health insurance?',
      a: 'Yes, we are empanelled with over 45+ leading insurance providers and TPAs including Star Health, HDFC ERGO, ICICI Lombard, Care Health, Medi Assist, Paramount, and more.'
    },
    {
      q: 'What are the patient visiting hours?',
      a: 'General Ward visiting hours: 05:00 PM – 07:00 PM daily. ICU visiting is restricted to 1 attendant per patient from 04:00 PM – 05:00 PM to maintain zero infection standards.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-[#002e29]">
      {/* Page Hero Header (250px Height, Center Aligned) */}
      <div className="relative bg-gradient-to-r from-[#002420] via-[#003d37] to-[#001714] text-white h-[250px] flex flex-col justify-center px-4 sm:px-6 overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#008277]/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 w-full">
          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold text-teal-300 mb-2 uppercase tracking-wider">
            <button onClick={() => onNavigate('home')} className="hover:underline hover:text-white cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-white font-bold">Contact Us</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-teal-400/30 text-teal-200 text-[11px] font-bold backdrop-blur-md">
                <PhoneCall size={13} className="text-[#f8df8c]" />
                <span>We Are Here for You 24 Hours a Day</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              Get in Touch with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-200 to-emerald-300">KLC Hospitals</span>
            </h1>

            <p className="text-teal-100/90 text-xs sm:text-sm max-w-xl mx-auto font-medium">
              24/7 Emergency Helpline, Specialist OPD Booking & Hospital Directions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20 space-y-12 pb-16">
        
        {/* 4 Contact Channels Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${card.color}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-[#002e29] mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  {card.phone && (
                    <div className="space-y-1">
                      <a href={`tel:${card.phone.replace(/[^0-9]/g, '')}`} className="block text-sm font-extrabold text-[#008277] hover:underline">
                        {card.phone}
                      </a>
                      {card.altPhone && (
                        <a href={`tel:${card.altPhone.replace(/[^0-9]/g, '')}`} className="block text-xs font-bold text-slate-600 hover:text-[#008277]">
                          Alt: {card.altPhone}
                        </a>
                      )}
                    </div>
                  )}
                  {card.email && (
                    <a href={`mailto:${card.email}`} className="text-xs sm:text-sm font-bold text-[#008277] hover:underline break-all">
                      {card.email}
                    </a>
                  )}
                  {card.address && (
                    <p className="text-xs font-semibold text-slate-700">
                      {card.address}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 2-Column: Interactive Form & Campus Map (Equal Height) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Contact Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg flex flex-col justify-between h-full">
            <div>
              <div className="mb-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#008277]">
                  Online Enquiry & Call-Back Request
                </span>
                <h2 className="text-2xl font-black text-[#002e29] mt-1">
                  Send Us a Message
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill in your details below and our patient coordination team will respond within 15 minutes.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-3 animate-fade-in my-auto">
                  <div className="w-14 h-14 rounded-full bg-[#008277] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-[#002e29]">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Your enquiry has been received. Our clinical coordinator will call you at <strong className="text-[#008277]">{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', department: 'General Enquiry', message: '' });
                    }}
                    className="mt-4 px-5 py-2 rounded-xl bg-[#008277] text-white text-xs font-bold cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-between flex-1">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Patient / Attendant Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#008277]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9876543210"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#008277]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#008277]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Select Department / Concern
                        </label>
                        <select
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#008277]"
                        >
                          <option>General Enquiry</option>
                          <option>Doctor Consultation (OPD)</option>
                          <option>Ortho & Joint Replacement</option>
                          <option>Neurology & Spine Care</option>
                          <option>Physiotherapy Session</option>
                          <option>Surgery & Second Opinion</option>
                          <option>Insurance / Cashless TPA</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Message / Medical Query
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your symptoms or enquiry..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#008277]"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#008277] hover:bg-[#009b8e] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send size={15} />
                      <span>Submit Enquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right: Hospital Branches Overview */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg flex flex-col justify-between h-full space-y-4">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <h3 className="text-lg font-bold text-[#002e29] flex items-center gap-2">
                  <MapPin className="text-[#008277]" size={20} />
                  <span>Our Hospital Branches</span>
                </h3>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#008277] bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200 w-fit">
                  2 Locations in Bihar
                </span>
              </div>

              {/* Branch Switcher Tabs */}
              <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-100 rounded-2xl">
                {branches.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setActiveBranchId(b.id)}
                    className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                      activeBranchId === b.id
                        ? 'bg-[#008277] text-white shadow-md'
                        : 'text-slate-600 hover:text-[#002e29] hover:bg-slate-200/70'
                    }`}
                  >
                    {b.shortName}
                  </button>
                ))}
              </div>

              {/* Selected Branch Details */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                <div>
                  <span className="text-[11px] font-bold text-[#008277] uppercase tracking-wider block mb-1">
                    {currentBranch.isMain ? '★ Main Multi-Speciality Campus' : '★ Super Speciality Branch'}
                  </span>
                  <h4 className="text-base font-extrabold text-[#002e29]">
                    {currentBranch.name}
                  </h4>
                  <div className="mt-1.5 flex items-start gap-2 font-semibold text-slate-800 leading-relaxed">
                    <MapPin size={16} className="text-[#008277] shrink-0 mt-0.5" />
                    <span>{currentBranch.address}</span>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-slate-200/80 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone size={15} className="text-[#008277] shrink-0" />
                    <div>
                      <strong className="text-slate-800 mr-1.5">Helpline:</strong>
                      <a href={`tel:${currentBranch.phone.replace(/[^0-9]/g, '')}`} className="text-[#008277] font-bold hover:underline">
                        {currentBranch.phone}
                      </a>
                      {currentBranch.altPhone && (
                        <>
                          <span className="text-slate-400 mx-1">,</span>
                          <a href={`tel:${currentBranch.altPhone.replace(/[^0-9]/g, '')}`} className="text-[#008277] font-bold hover:underline">
                            {currentBranch.altPhone}
                          </a>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail size={15} className="text-[#008277] shrink-0" />
                    <div>
                      <strong className="text-slate-800 mr-1.5">Email:</strong>
                      <a href={`mailto:${currentBranch.email}`} className="text-[#008277] font-bold hover:underline">
                        {currentBranch.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Building2 size={15} className="text-[#008277] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 mr-1.5">Landmark:</strong>
                      <span>{currentBranch.landmark}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={15} className="text-[#008277] shrink-0" />
                    <div>
                      <strong className="text-slate-800 mr-1.5">Working Hours:</strong>
                      <span>Open 24x7 Hours (Emergency & Trauma)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Branch Reference Cards (Bottom aligned) */}
            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Quick Access to Both Branches:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {branches.map((b) => (
                  <div
                    key={b.id}
                    onClick={() => setActiveBranchId(b.id)}
                    className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex flex-col justify-between gap-1.5 ${
                      activeBranchId === b.id
                        ? 'border-[#008277] bg-teal-50/70 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <strong className="text-slate-900 font-bold text-xs">{b.shortName}</strong>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                        activeBranchId === b.id ? 'bg-[#008277] text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {activeBranchId === b.id ? 'Viewing' : 'Select'}
                      </span>
                    </div>
                    <span className="text-slate-500 text-[11px] line-clamp-2">{b.address}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Full-Width Interactive Google Maps Section (Placed Below Form) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#008277] uppercase tracking-wider mb-1">
                <MapPin size={16} />
                <span>Hospital Map Location & Directions</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#002e29]">
                {currentBranch.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                📍 {currentBranch.address}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Branch quick toggle */}
              <div className="flex items-center p-1 bg-slate-100 rounded-xl">
                {branches.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setActiveBranchId(b.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeBranchId === b.id
                        ? 'bg-[#008277] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {b.shortName}
                  </button>
                ))}
              </div>

              <a
                href={currentBranch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#002e29] font-bold text-xs transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={13} />
              </a>

              <button
                onClick={onOpenBooking}
                className="px-5 py-2 rounded-xl bg-[#008277] hover:bg-[#009e91] text-white font-bold text-xs transition-colors cursor-pointer shadow-sm"
              >
                Book OPD Visit
              </button>
            </div>
          </div>

          {/* Full-width Responsive Google Maps iframe */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-80 sm:h-96 md:h-[420px] bg-slate-100 shadow-inner">
            <iframe
              title={`${currentBranch.name} Full Map`}
              src={currentBranch.mapEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Bottom landmark / transit highlights */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 block font-bold mb-1">🏢 Prominent Landmark:</strong>
              <span>{currentBranch.landmark}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 block font-bold mb-1">📞 Direct Helpline:</strong>
              <a href={`tel:${currentBranch.phone.replace(/[^0-9]/g, '')}`} className="text-[#008277] font-bold hover:underline">
                {currentBranch.phone}
              </a>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 block font-bold mb-1">🚗 Emergency Access:</strong>
              <span>24x7 Ambulance Ramp & Attendant Parking</span>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#008277]">
              Need Help?
            </span>
            <h2 className="text-2xl font-black text-[#002e29] mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h4 className="text-sm font-bold text-[#002e29] mb-2">
                  {faq.q}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
