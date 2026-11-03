import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Scissors, Baby, Brain, Bone, Zap, Activity,
  FlaskConical, CircleDot, Users, Ribbon, ChevronRight, ArrowRight
} from 'lucide-react';
import generalSurgeryImg from '../assets/SERVICEPHOTO/General Surgery.png';
import obgynImg from '../assets/SERVICEPHOTO/Obstetrics & Gynaecology.png';
import neuroSpineImg from '../assets/SERVICEPHOTO/Neuro & Spine Surgery.png';
import orthoImg from '../assets/SERVICEPHOTO/Ortho & Joint Replacement.png';
import laserLapImg from '../assets/SERVICEPHOTO/Laser & Laproscopy Surgery.png';
import gastroImg from '../assets/SERVICEPHOTO/Gastroenterology.png';
import vascularImg from '../assets/SERVICEPHOTO/Vascular Surgery.png';
import urologyImg from '../assets/SERVICEPHOTO/Urology.png';
import pediatricsImg from '../assets/SERVICEPHOTO/Pediatrics.png';
import oncologyImg from '../assets/SERVICEPHOTO/Oncology.png';

const SPECIALITIES = [
  {
    id: 'general-surgery',
    title: 'General Surgery',
    icon: Scissors,
    color: '#0284c7',
    bg: 'from-sky-50 to-sky-100/50',
    iconBg: 'bg-sky-100',
    image: generalSurgeryImg,
    procedures: ['Laparoscopic Cholecystectomy', 'Hernia Repair', 'Appendectomy', 'Thyroid Surgery'],
  },
  {
    id: 'obgyn',
    title: 'Obstetrics & Gynaecology',
    icon: Baby,
    color: '#db2777',
    bg: 'from-pink-50 to-pink-100/50',
    iconBg: 'bg-pink-100',
    image: obgynImg,
    procedures: ['High-Risk Pregnancy', 'Painless Delivery', 'Laparoscopic Gynae', 'Infertility Care'],
  },
  {
    id: 'neuro-spine',
    title: 'Neuro & Spine Surgery',
    icon: Brain,
    color: '#7c3aed',
    bg: 'from-violet-50 to-violet-100/50',
    iconBg: 'bg-violet-100',
    image: neuroSpineImg,
    procedures: ['Endoscopic Spine', 'Stroke Unit', 'Brain Tumour Surgery', 'Disc Decompression'],
  },
  {
    id: 'ortho',
    title: 'Ortho & Joint Replacement',
    icon: Bone,
    color: '#0369a1',
    bg: 'from-blue-50 to-blue-100/50',
    iconBg: 'bg-blue-100',
    image: orthoImg,
    procedures: ['Knee Replacement', 'Hip Replacement', 'Shoulder Replacement', 'Orthopaedic Trauma'],
  },
  {
    id: 'laser-lap',
    title: 'Laser & Laproscopy Surgery',
    icon: Zap,
    color: '#d97706',
    bg: 'from-amber-50 to-amber-100/50',
    iconBg: 'bg-amber-100',
    image: laserLapImg,
    procedures: ['Laser Piles Surgery', 'Lap. Hernia', 'Lap. Cholecystectomy', 'PCNL'],
  },
  {
    id: 'gastro',
    title: 'Gastroenterology',
    icon: Activity,
    color: '#059669',
    bg: 'from-emerald-50 to-emerald-100/50',
    iconBg: 'bg-emerald-100',
    image: gastroImg,
    procedures: ['Endoscopy', 'Colonoscopy', 'ERCP', 'Liver Disease Management'],
  },
  {
    id: 'vascular',
    title: 'Vascular Surgery',
    icon: CircleDot,
    color: '#dc2626',
    bg: 'from-red-50 to-red-100/50',
    iconBg: 'bg-red-100',
    image: vascularImg,
    procedures: ['Varicose Veins', 'AV Fistula', 'Carotid Endarterectomy', 'Bypass Surgery'],
  },
  {
    id: 'urology',
    title: 'Urology',
    icon: FlaskConical,
    color: '#0891b2',
    bg: 'from-cyan-50 to-cyan-100/50',
    iconBg: 'bg-cyan-100',
    image: urologyImg,
    procedures: ['Kidney Stone (PCNL)', 'Prostate Surgery', 'Urethral Surgery', 'Laparoscopic Urology'],
  },
  {
    id: 'pediatrics',
    title: 'Pediatrics',
    icon: Users,
    color: '#16a34a',
    bg: 'from-green-50 to-green-100/50',
    iconBg: 'bg-green-100',
    image: pediatricsImg,
    procedures: ['Neonatal ICU', 'Pediatric Surgery', 'Child Vaccination', 'Growth Disorders'],
  },
  {
    id: 'oncology',
    title: 'Oncology',
    icon: Ribbon,
    color: '#9333ea',
    bg: 'from-purple-50 to-purple-100/50',
    iconBg: 'bg-purple-100',
    image: oncologyImg,
    procedures: ['Surgical Oncology', 'Chemotherapy', 'Radiation Therapy', 'Cancer Screening'],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function SpecialitiesSection({ onSelectSpecialty, onOpenBooking }) {
  const [showAll, setShowAll] = useState(false);
  const displayedSpecialities = showAll ? SPECIALITIES : SPECIALITIES.slice(0, 8);

  return (
    <section id="specialties" className="py-14 sm:py-20 bg-[#f6faf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#008277] uppercase mb-3">
            <span className="w-6 h-px bg-[#008277]" />
            KLC Hospitals
            <span className="w-6 h-px bg-[#008277]" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002420] mb-3 tracking-tight">
            Our <span className="text-[#008277]">Specialities</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            World-class care across 10+ specialities — backed by advanced technology, expert surgeons, and compassionate healing.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {displayedSpecialities.map((spec) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#008277]/40 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer"
                onClick={() => onSelectSpecialty && onSelectSpecialty({ id: spec.id, title: spec.title })}
              >
                {/* Top — Image if available, else Icon Gradient */}
                {spec.image ? (
                  <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-100">
                    <img
                      src={spec.image}
                      alt={spec.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient overlay at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/60 to-transparent" />
                    {/* Small icon badge */}
                    <div
                      className={`absolute top-3 right-3 w-8 h-8 rounded-xl ${spec.iconBg} flex items-center justify-center shadow-md backdrop-blur-sm`}
                      style={{ color: spec.color }}
                    >
                      <Icon size={16} strokeWidth={2} />
                    </div>
                  </div>
                ) : (
                  <div className={`bg-gradient-to-br ${spec.bg} px-5 pt-8 pb-6 flex flex-col items-center text-center`}>
                    <div
                      className={`w-16 h-16 rounded-2xl ${spec.iconBg} flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                      style={{ color: spec.color }}
                    >
                      <Icon size={32} strokeWidth={1.8} />
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  {/* Title */}
                  <h3
                    className="text-base font-bold text-[#002420] leading-snug group-hover:text-[#008277] transition-colors min-h-[2.75rem] flex items-center mb-3"
                  >
                    {spec.title}
                  </h3>

                  {/* Procedures List */}
                  <div className="space-y-2 mb-4 flex-1">
                    {spec.procedures.map((proc, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-slate-600 group-hover:text-slate-800 transition-colors"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: spec.color }}
                        />
                        <span className="leading-snug truncate">{proc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Consult button */}
                  <div className="pt-3 border-t border-slate-100 mt-auto">
                    <button
                      className="w-full py-2.5 px-4 rounded-xl bg-[#008277] hover:bg-[#002420] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all duration-300 group/btn active:scale-98"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectSpecialty && onSelectSpecialty({ id: spec.id, title: spec.title });
                      }}
                    >
                      <span>Book Consultation</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Button */}
        <motion.div
          className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#002420] hover:bg-[#008277] text-white font-bold text-sm sm:text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 group border border-teal-900/40 cursor-pointer"
          >
            <span>{showAll ? 'Show Fewer Specialities' : 'View All Specialities (10+)'}</span>
            <ArrowRight
              size={18}
              className={`text-[#d4af37] transition-transform duration-300 ${
                showAll ? '-rotate-90' : 'group-hover:translate-x-1.5'
              }`}
            />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
