import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bone, 
  Brain, 
  Activity, 
  HeartPulse, 
  CheckCircle, 
  Calendar, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PHYSIOTHERAPY_DATA } from '../data/hospitalData';

const ICON_MAP = {
  Bone: Bone,
  Brain: Brain,
  Activity: Activity,
  HeartPulse: HeartPulse
};

export default function PhysiotherapySection({ onOpenBooking }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="physiotherapy" className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#008277] text-xs font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
            <Sparkles size={14} />
            <span>Dedicated Department of Rehabilitation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#002e29] mb-3 tracking-tight">
            {PHYSIOTHERAPY_DATA.heading}
          </h2>
          <p className="text-sm sm:text-base font-semibold text-[#008277] mb-4">
            {PHYSIOTHERAPY_DATA.subheading}
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {PHYSIOTHERAPY_DATA.description}
          </p>
        </motion.div>

        {/* 4 Rehab Programs */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {PHYSIOTHERAPY_DATA.programs.map((prog, idx) => {
            const IconComp = ICON_MAP[prog.icon] || Activity;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-[#008277] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
                whileHover={{ y: -6 }}
              >
                <div className="w-12 h-12 rounded-xl bg-teal-100/70 text-[#008277] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#008277] group-hover:text-white transition-all">
                  <IconComp size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#002e29] mb-2 leading-snug">
                  {prog.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4 grow">
                  {prog.desc}
                </p>
                <button
                  type="button"
                  onClick={() => onOpenBooking && onOpenBooking({ department: 'Physiotherapy & Rehabilitation' })}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#008277] hover:text-[#005a52] transition-colors mt-auto cursor-pointer"
                >
                  <span>Book Rehab Session</span>
                  <ArrowRight size={13} />
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features & Equipment Highlights Banner */}
        <motion.div 
          className="bg-gradient-to-r from-[#003833] to-[#005a52] rounded-3xl p-6 sm:p-8 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border border-[#d4af37]/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              State-of-the-Art Rehab Gymnasium & Electrotherapy
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-teal-100">
              {PHYSIOTHERAPY_DATA.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#f8df8c] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenBooking && onOpenBooking({ department: 'Physiotherapy & Rehabilitation' })}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b88d1d] text-[#002e29] font-black text-sm shadow-md hover:brightness-105 transition-all cursor-pointer"
          >
            <Calendar size={18} />
            <span>Consult Physiotherapist</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
