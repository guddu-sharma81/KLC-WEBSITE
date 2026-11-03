import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, Navigation, CheckCircle2 } from 'lucide-react';
import { HOSPITAL_INFO, AMBULANCE_LOCATIONS } from '../data/hospitalData';

export default function EmergencySection({ onEmergencyCall }) {
  const [dispatchSimulated, setDispatchSimulated] = useState(false);
  const [patientLocation, setPatientLocation] = useState('');

  const handleSimulateDispatch = (e) => {
    e.preventDefault();
    if (!patientLocation.trim()) return;
    setDispatchSimulated(true);
  };

  return (
    <section id="emergency" className="py-20 bg-gradient-to-br from-[#1c080e] via-[#2a0b14] to-[#14060a] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Emergency Left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/35 mb-4">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              <span>Level-1 Trauma Center Open 24/7/365</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight leading-tight">
              Zero Delay in Critical Emergencies
            </h2>
            <p className="text-rose-200 text-base sm:text-lg leading-relaxed mb-8">
              In stroke, cardiac arrest, or severe polytrauma, every second counts. KLC Hospital's rapid emergency response guarantees triage in under 60 seconds and immediate catheterization or surgical intervention.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.a 
                href="tel:7482068777" 
                className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-700 text-white font-extrabold text-base sm:text-lg shadow-xl shadow-rose-900/40 hover:from-rose-700 hover:to-rose-800 transition-all cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <PhoneCall size={22} />
                <span>Call Trauma: 74820-68777</span>
              </motion.a>

              <motion.a 
                href="tel:7482098777" 
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-rose-200 font-bold text-base border border-rose-500/40 transition-all cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <PhoneCall size={20} className="text-[#f8df8c]" />
                <span>Alt Line: 74820-98777</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Emergency Right - Ambulance Dispatch Tracker */}
          <motion.div 
            className="bg-white/5 border border-rose-500/35 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10">
              <div>
                <h4 className="text-xl font-bold text-white mb-0.5">
                  GPS Rapid Ambulance Hubs
                </h4>
                <span className="text-xs text-slate-300 font-medium">
                  Advanced Life Support (ALS) with ECMO ready
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                <span>Fleet Active</span>
              </div>
            </div>

            {/* Simulated Fast Request Form */}
            <AnimatePresence mode="wait">
              {!dispatchSimulated ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSimulateDispatch} 
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter pickup locality or landmark..."
                      value={patientLocation}
                      onChange={(e) => setPatientLocation(e.target.value)}
                      className="grow px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white text-sm outline-none focus:border-rose-400 placeholder:text-slate-400"
                      required
                    />
                    <motion.button 
                      type="submit" 
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 text-white font-bold text-sm flex items-center gap-2 cursor-pointer shrink-0 shadow-md"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Navigation size={16} />
                      <span>Dispatch</span>
                    </motion.button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="dispatched"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-900/40 border border-emerald-500 rounded-2xl p-4 mb-6 flex items-center gap-3.5"
                >
                  <CheckCircle2 size={26} className="text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white text-sm">
                      Ambulance Unit #ALS-07 Dispatched!
                    </div>
                    <div className="text-xs text-emerald-200">
                      Heading to {patientLocation} | ETA: 7 mins | Paramedic calling your phone
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hub Locations List */}
            <div className="space-y-3">
              {AMBULANCE_LOCATIONS.map((loc, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-center justify-between bg-black/25 border border-white/10 rounded-xl px-4 py-3 transition-colors hover:border-white/25"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <div className="font-semibold text-sm text-slate-100">{loc.area}</div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-emerald-400 font-medium">● {loc.status}</span>
                    <span className="text-[#f8df8c] font-bold">{loc.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
