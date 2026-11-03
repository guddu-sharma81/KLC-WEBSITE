import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Stethoscope, Clock, ArrowRight } from 'lucide-react';
import { SPECIALTIES, DOCTORS } from '../data/hospitalData';
import { useLanguage } from '../context/LanguageContext';

export default function QuickBookingWidget({ onBookWithData }) {
  const { t } = useLanguage();
  const [selectedDept, setSelectedDept] = useState('cardiology');
  const [selectedDoctor, setSelectedDoctor] = useState('doc-1');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedSlot, setSelectedSlot] = useState('Morning (10:30 AM - 01:00 PM)');

  const filteredDoctors = DOCTORS.filter(
    (doc) => !selectedDept || doc.department === selectedDept
  );

  const handleDeptChange = (e) => {
    const dept = e.target.value;
    setSelectedDept(dept);
    const matchedDocs = DOCTORS.filter((d) => d.department === dept);
    if (matchedDocs.length > 0) {
      setSelectedDoctor(matchedDocs[0].id);
    } else {
      setSelectedDoctor('');
    }
  };

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    const docObj = DOCTORS.find((d) => d.id === selectedDoctor) || DOCTORS[0];
    const deptObj = SPECIALTIES.find((s) => s.id === selectedDept) || SPECIALTIES[0];
    onBookWithData({
      department: deptObj.title,
      doctor: docObj.name,
      doctorId: docObj.id,
      date: selectedDate,
      timeSlot: selectedSlot
    });
  };

  return (
    <motion.div 
      className="-mt-10 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 mb-16"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#d4af37]/35">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2.5 text-xl font-extrabold text-[#002e29]">
            <Calendar size={24} className="text-[#008277]" />
            <span>{t('instantOpdTitle')}</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{t('zeroWaitBadge')}</span>
          </div>
        </div>

        {/* Form Grid */}
        <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          {/* Department */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              {t('deptLabel')}
            </label>
            <div className="flex items-center gap-2.5 bg-[#f6faf9] border border-slate-200 rounded-xl px-3.5 py-3 focus-within:border-[#008277] focus-within:ring-2 focus-within:ring-[#008277]/15 transition-all">
              <Stethoscope size={18} className="text-[#008277] shrink-0" />
              <select 
                value={selectedDept} 
                onChange={handleDeptChange}
                className="w-full bg-transparent text-sm font-semibold text-[#002e29] outline-none cursor-pointer"
              >
                {SPECIALTIES.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Doctor */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              {t('doctorLabel')}
            </label>
            <div className="flex items-center gap-2.5 bg-[#f6faf9] border border-slate-200 rounded-xl px-3.5 py-3 focus-within:border-[#008277] focus-within:ring-2 focus-within:ring-[#008277]/15 transition-all">
              <User size={18} className="text-[#008277] shrink-0" />
              <select 
                value={selectedDoctor} 
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-[#002e29] outline-none cursor-pointer"
              >
                {filteredDoctors.length > 0 ? (
                  filteredDoctors.map((doc) => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name}
                    </option>
                  ))
                ) : (
                  <option value="">Next Available Specialist</option>
                )}
              </select>
            </div>
          </div>

          {/* Consultation Date */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              {t('dateLabel')}
            </label>
            <div className="flex items-center gap-2.5 bg-[#f6faf9] border border-slate-200 rounded-xl px-3.5 py-3 focus-within:border-[#008277] focus-within:ring-2 focus-within:ring-[#008277]/15 transition-all">
              <Calendar size={18} className="text-[#008277] shrink-0" />
              <input 
                type="date" 
                value={selectedDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-[#002e29] outline-none"
              />
            </div>
          </div>

          {/* Preferred Session */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              {t('sessionLabel')}
            </label>
            <div className="flex items-center gap-2.5 bg-[#f6faf9] border border-slate-200 rounded-xl px-3.5 py-3 focus-within:border-[#008277] focus-within:ring-2 focus-within:ring-[#008277]/15 transition-all">
              <Clock size={18} className="text-[#008277] shrink-0" />
              <select 
                value={selectedSlot} 
                onChange={(e) => setSelectedSlot(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-[#002e29] outline-none cursor-pointer"
              >
                <option value="Morning (09:00 AM - 12:00 PM)">{t('morningSlot')}</option>
                <option value="Afternoon (12:30 PM - 03:30 PM)">{t('afternoonSlot')}</option>
                <option value="Evening (04:00 PM - 07:30 PM)">{t('eveningSlot')}</option>
              </select>
            </div>
          </div>

          {/* Submit CTA */}
          <div>
            <motion.button 
              type="submit" 
              className="w-full h-12 flex items-center justify-center gap-2 px-6 rounded-xl bg-gradient-to-r from-[#005a52] to-[#008277] text-white font-bold text-sm shadow-md hover:shadow-lg hover:from-[#004841] hover:to-[#006e65] transition-all cursor-pointer border border-[#d4af37]/40"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{t('checkSlotsBtn')}</span>
              <ArrowRight size={17} className="text-[#f8df8c]" />
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
