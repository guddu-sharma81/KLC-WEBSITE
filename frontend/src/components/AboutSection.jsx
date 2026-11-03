import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, ShieldCheck, Award, CalendarCheck2, Stethoscope, Users, HeartPulse, GitBranch, Scissors } from 'lucide-react';
import aboutImg from '../assets/About Us.png';

const highlights = [
  { text: "Bihar's Premier Super Multispeciality Hospital", bold: true },
  { text: 'NABH & JCI Accredited Quality Standards', bold: true },
  { text: 'Advanced Robotic & Laparoscopic Surgery', bold: true },
  { text: '24/7 Emergency & Trauma Care', bold: false },
  { text: 'Cashless – 45+ Insurance TPAs Empaneled', bold: false },
  { text: 'State-of-the-Art Smart ICU & Critical Care', bold: false },
];

const stats = [
  { num: '52,000+', label: 'Successful Surgeries', icon: Scissors },
  { num: '160+',    label: 'Super Specialists',   icon: Stethoscope },
  { num: '99.4%',  label: 'Patient Satisfaction', icon: HeartPulse },
  { num: '2',      label: 'Branches',             icon: GitBranch },
];

// Fake doctor avatar initials for group display
const doctorAvatars = ['RK', 'SP', 'AM', 'NK', 'VR'];

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function AboutSection({ onOpenBooking }) {
  return (
    <section id="about" className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-[#002420] relative overflow-hidden">

      {/* ── Premium Background Light Effects ── */}

      {/* Subtle dot-grid texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      {/* Big radial gold spotlight — top center-right */}
      <div className="absolute -top-32 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.04) 40%, transparent 70%)' }}
      />

      {/* Teal radial glow — bottom left */}
      <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,130,119,0.18) 0%, rgba(0,130,119,0.06) 45%, transparent 70%)' }}
      />

      {/* Diagonal light beam streak */}
      <div className="absolute top-0 left-1/2 w-px h-full pointer-events-none opacity-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #d4af37 30%, #008277 70%, transparent)' }}
      />

      {/* Animated pulsing teal orb — center right */}
      <motion.div
        className="absolute top-1/2 right-12 w-40 h-40 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,130,119,0.22) 0%, transparent 70%)', transform: 'translateY(-50%)' }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Small gold sparkle orb — bottom right */}
      <motion.div
        className="absolute bottom-8 right-1/3 w-24 h-24 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* ═══ LEFT — Content ═══ */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {/* Label */}
            <motion.div variants={fadeLeft} className="flex items-center gap-2 mb-3">
              <div className="h-[2px] w-8 bg-[#d4af37]" />
              <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.2em]">About Us</span>
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={fadeLeft} className="text-2xl sm:text-3xl xl:text-4xl font-black text-white leading-tight mb-1 tracking-tight">
              About <span className="text-[#d4af37]">KLC Hospitals</span>
            </motion.h2>
            <motion.p variants={fadeLeft} className="text-[#008277] font-semibold text-xs sm:text-sm mb-4 tracking-wide">
              Kayra Lifecare — A Unit of Anaisha Lifecare Pvt. Ltd.
            </motion.p>

            {/* Description */}
            <motion.p variants={fadeLeft} className="text-slate-300 text-sm leading-relaxed mb-4">
              KLC Hospitals stands as{' '}
              <span className="text-white font-semibold">Bihar's premier super multispeciality healthcare facility</span>,
              delivering world-class tertiary medical treatments to Eastern India. With branches in{' '}
              <span className="text-[#d4af37] font-semibold">Kankarbagh, Patna</span> &{' '}
              <span className="text-[#d4af37] font-semibold">Daudpur, Chapra</span>{' '}
              — advanced care reaches every corner of Bihar.
            </motion.p>

            {/* Highlights */}
            <motion.ul variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {highlights.map((item, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 size={14} className="text-[#d4af37] mt-0.5 shrink-0" />
                  {item.bold
                    ? <span className="font-bold text-white">{item.text}</span>
                    : <span className="text-slate-400">{item.text}</span>
                  }
                </motion.li>
              ))}
            </motion.ul>

            {/* Doctor Group + Trusted By */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6 p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              {/* Avatar Stack */}
              <div className="flex -space-x-2 shrink-0">
                {doctorAvatars.map((init, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[#002420] flex items-center justify-center text-[10px] font-black text-white shrink-0"
                    style={{ background: `hsl(${160 + i * 25}, 45%, 35%)`, zIndex: 5 - i }}
                  >
                    {init}
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-[#002420] bg-[#d4af37]/20 flex items-center justify-center text-[9px] font-bold text-[#d4af37]" style={{ zIndex: 0 }}>
                  +155
                </div>
              </div>
              {/* Text */}
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="text-[#d4af37] fill-[#d4af37]" />
                  ))}
                  <span className="text-[#d4af37] text-xs font-bold ml-1">4.9/5</span>
                </div>
                <p className="text-white text-xs font-semibold">Trusted by <span className="text-[#d4af37]">50,000+</span> Patients</p>
                <p className="text-slate-400 text-[10px]">Based on 1,20,000+ verified reviews</p>
              </div>
            </motion.div>

            {/* Stats row — no boxes, only dividers */}
            <motion.div variants={stagger} className="flex items-center mb-6">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <React.Fragment key={i}>
                    <motion.div variants={fadeUp} className="flex items-center gap-2.5 px-4 first:pl-0">
                      <div className="w-8 h-8 rounded-lg bg-[#d4af37]/15 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-[#d4af37]" />
                      </div>
                      <div>
                        <p className="text-base sm:text-lg font-black text-[#d4af37] leading-none">{s.num}</p>
                        <p className="text-[10px] text-slate-400 font-medium mt-0.5">{s.label}</p>
                      </div>
                    </motion.div>
                    {i < stats.length - 1 && (
                      <div className="w-px h-8 bg-white/15 shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}
            </motion.div>

            {/* Accreditation + CTA */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#d4af37] text-[#002420] font-bold text-sm rounded-lg shadow-lg hover:bg-[#c9a227] transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <CalendarCheck2 size={16} />
                Book Appointment
              </button>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <ShieldCheck size={14} className="text-[#008277]" />
                <span>NABH & JCI Accredited</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ═══ RIGHT — Premium Shaped Graphic ═══ */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="relative flex justify-center items-center"
          >
            {/* Outer decorative ring */}
            <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-[#d4af37]/15 pointer-events-none" />
            <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-[#008277]/20 pointer-events-none" />

            {/* Gold corner accent top-right */}
            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#d4af37]/50 rounded-tr-2xl pointer-events-none" />
            {/* Teal corner accent bottom-left */}
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#008277]/50 rounded-bl-2xl pointer-events-none" />

            {/* Shaped image container */}
            <div className="relative z-10 w-full max-w-lg xl:max-w-xl">
              {/* Premium shape: asymmetric clip with gold border */}
              <div
                className="relative overflow-hidden shadow-2xl"
                style={{
                  clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)',
                  background: 'linear-gradient(135deg, #003630 0%, #001a18 100%)',
                  padding: '3px',
                }}
              >
                <div
                  style={{
                    clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)',
                  }}
                >
                  <img
                    src={aboutImg}
                    alt="About KLC Hospitals"
                    className="w-full h-auto object-cover block"
                  />
                </div>
              </div>

              {/* Gold border overlay for shape */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)',
                  background: 'transparent',
                  outline: '2px solid rgba(212,175,55,0.4)',
                  outlineOffset: '-2px',
                }}
              />

              {/* Floating badge — top left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute -top-4 -left-4 bg-[#d4af37] rounded-xl px-3 py-2 shadow-2xl flex items-center gap-2"
              >
                <Award size={16} className="text-[#002420]" />
                <div>
                  <p className="text-[10px] font-black text-[#002420] leading-none">NABH Accredited</p>
                  <p className="text-[9px] text-[#002420]/70 mt-0.5">Premium Healthcare</p>
                </div>
              </motion.div>

              {/* Floating badge — bottom right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-xl px-3 py-2 shadow-2xl flex items-center gap-2"
              >
                <div className="w-7 h-7 rounded-lg bg-[#002420] flex items-center justify-center shrink-0">
                  <span className="text-[#d4af37] text-[10px] font-black">15+</span>
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#002420] leading-none">Years of Trust</p>
                  <p className="text-[9px] text-slate-500 mt-0.5">Est. 2008</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
