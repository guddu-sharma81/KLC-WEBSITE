import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { HEALTH_PACKAGES } from '../data/hospitalData';

export default function HealthPackagesSection({ onBookPackage }) {
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#008277] uppercase block mb-3">
            Preventive Healthcare
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002e29] mb-4 tracking-tight">
            Comprehensive Health Checkup Plans
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Detect early warning signs with advanced pathology, radiodiagnostics, and personalized senior physician consultations.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {HEALTH_PACKAGES.map((pkg, idx) => {
            const isHighlighted = idx === 1;
            return (
              <motion.div 
                key={pkg.id} 
                className={`relative bg-white border-2 rounded-3xl p-7 sm:p-8 flex flex-col transition-all duration-300 ${
                  isHighlighted 
                    ? 'border-[#d4af37] shadow-2xl shadow-[#d4af37]/15 -translate-y-2' 
                    : 'border-slate-200/90 shadow-sm hover:border-[#008277] hover:shadow-xl'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.25 } 
                }}
              >
                {/* Popular Pill */}
                {pkg.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#f6d365] via-[#d4af37] to-[#c59b27] text-[#002e29] text-[11px] font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Zap size={12} className="fill-[#002e29]" />
                    <span>{pkg.highlight}</span>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#002e29] mb-1.5">
                    {pkg.title}
                  </h3>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    {pkg.subtitle}
                  </div>
                </div>

                {/* Price Box */}
                <div className="text-center py-5 border-y border-dashed border-slate-200 mb-6">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-sm text-slate-400 line-through">
                      {pkg.originalPrice}
                    </span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#008277] font-heading">
                      {pkg.price}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[#b88d1d]">
                    {pkg.testsCount}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8 grow">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check size={16} className="text-[#008277] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button 
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isHighlighted
                      ? 'bg-gradient-to-r from-[#005a52] to-[#008277] text-white shadow-md hover:shadow-lg border border-[#d4af37]/40'
                      : 'bg-[#f6faf9] hover:bg-[#008277] text-[#002e29] hover:text-white border border-slate-200'
                  }`}
                  onClick={() => onBookPackage(pkg)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Book This Package</span>
                  <ArrowRight size={16} />
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
