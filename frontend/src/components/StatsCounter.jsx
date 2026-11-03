import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../data/hospitalData';
import { Scissors, Users, Star, BedDouble, Zap } from 'lucide-react';

// Map icons to each stat by index
const statIcons = [Scissors, Users, Star, BedDouble, Zap];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function StatsCounter() {
  return (
    <section className="py-4 sm:py-7 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        
        {/* Mobile View (< 640px): Symmetrical 2-column card grid */}
        <motion.div
          className="grid grid-cols-2 gap-2.5 sm:hidden"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {STATS.map((stat, idx) => {
            const Icon = statIcons[idx] || Star;
            const isLast = idx === STATS.length - 1;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={`flex items-center gap-2.5 p-2.5 rounded-2xl bg-slate-50/90 border border-slate-100 ${
                  isLast ? 'col-span-2 mx-auto max-w-[260px] w-full justify-center' : ''
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-[#008277]/10 flex items-center justify-center shrink-0">
                  <Icon size={17} className="text-[#008277]" />
                </div>
                <div>
                  <p className="text-lg font-black text-[#002420] leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-semibold text-slate-600 leading-tight">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tablet & Desktop View (>= 640px): Spacious horizontal strip with dividers */}
        <motion.div
          className="hidden sm:flex items-center justify-between"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {STATS.map((stat, idx) => {
            const Icon = statIcons[idx] || Star;
            return (
              <React.Fragment key={idx}>
                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-3 px-3 sm:px-5 py-3"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-[#008277]/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#008277]" />
                  </div>
                  {/* Text */}
                  <div>
                    <p className="text-xl sm:text-2xl font-black text-[#002420] leading-none">
                      {stat.value}
                    </p>
                    <p className="text-xs font-semibold text-slate-600 mt-0.5">{stat.label}</p>
                  </div>
                </motion.div>

                {/* Divider — not after last item */}
                {idx < STATS.length - 1 && (
                  <div className="w-px h-10 bg-slate-200 shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
