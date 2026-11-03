import React from 'react';
import { 
  Activity, Sparkles, CheckCircle2, ArrowRight, Calendar, 
  PhoneCall, ShieldCheck, HeartPulse, Clock, Award, 
  Flame, Dumbbell, UserCheck, Zap
} from 'lucide-react';

export default function PhysiotherapyPage({ onOpenBooking, onNavigate }) {
  const rehabPrograms = [
    {
      title: 'Post-Surgical Ortho Rehab',
      desc: 'Specialized mobilization and strengthening protocols following total knee replacement, hip replacement, ACL reconstruction, and fracture fixation.',
      points: ['Early weight-bearing training', 'Joint range of motion recovery', 'Swelling and pain reduction', 'Rapid return to daily mobility'],
      icon: Activity,
      badge: 'Rapid Recovery'
    },
    {
      title: 'Neuro & Stroke Rehabilitation',
      desc: 'Targeted neuroplasticity therapy for hemiplegia, stroke recovery, traumatic brain injury, Parkinson’s disease, and spinal cord injuries.',
      points: ['Balance & coordination re-education', 'Robotic gait training', 'Spasticity reduction therapy', 'Independent living assistance'],
      icon: HeartPulse,
      badge: 'Neuroplasticity'
    },
    {
      title: 'Spine & Sciatica Non-Surgical Care',
      desc: 'Comprehensive non-invasive relief for slipped discs, cervical spondylosis, lumbar radiculopathy, and chronic lower back pain.',
      points: ['Computerized spinal decompression', 'Core stability reinforcement', 'Posture correction protocols', 'Sciatic nerve mobilization'],
      icon: Zap,
      badge: 'Zero Surgery'
    },
    {
      title: 'Sports Injury & Athletic Performance',
      desc: 'Evidence-based conditioning for ligament sprains, muscle tears, rotator cuff tears, tendonitis, and athlete return-to-sport testing.',
      points: ['Biomechanics assessment', 'Dry needling & kinesio taping', 'Eccentric strength loading', 'Sports performance conditioning'],
      icon: Dumbbell,
      badge: 'For Athletes'
    },
    {
      title: 'Geriatric Mobility & Fall Prevention',
      desc: 'Gentle, structured programs tailored for seniors to boost bone density, overcome severe osteoarthritis, and regain standing confidence.',
      points: ['Fall-risk reduction drills', 'Arthritic joint lubrication', 'Endurance and flexibility', 'Assisted walking re-training'],
      icon: UserCheck,
      badge: 'Senior Care'
    },
    {
      title: 'Advanced Electrotherapy & Pain Relief',
      desc: 'State-of-the-art modalities that accelerate deep cellular tissue healing without heavy analgesic medication dependency.',
      points: ['High-intensity Class-4 Laser', 'Targeted Radiofrequency (TECAR)', 'Interferential Therapy (IFT)', 'Therapeutic Ultrasound & TENS'],
      icon: Flame,
      badge: 'Painless Tech'
    }
  ];

  const recoverySteps = [
    { step: '01', title: 'Clinical Assessment', desc: 'Thorough evaluation of joint biomechanics, pain triggers, muscle power, and gait pattern by senior physios.' },
    { step: '02', title: 'Personalized Plan', desc: 'Custom tailored therapeutic protocol combining manual mobilization, electrotherapy, and progressive loading.' },
    { step: '03', title: 'Supervised Sessions', desc: '1-on-1 supervised rehabilitation in our modern gym setup equipped with computerized gait and resistance rigs.' },
    { step: '04', title: 'Lifelong Wellness', desc: 'Detailed home exercise prescription, ergonomics training, and periodic follow-up to prevent recurring injuries.' }
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
            <span className="text-white font-bold">Physiotherapy & Rehabilitation</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-teal-400/30 text-teal-200 text-[11px] font-bold backdrop-blur-md">
                <Sparkles size={13} className="text-[#f8df8c]" />
                <span>Advanced Ortho-Neuro Rehab Center</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              Restore Movement & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-200 to-emerald-300">Reclaim Your Active Life</span>
            </h1>

            <p className="text-teal-100/90 text-xs sm:text-sm max-w-xl mx-auto font-medium">
              Robotic Gait Training, Spine Decompression & Sports Injury Recovery.
            </p>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
        
        {/* Programs Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#008277]">
              Specialized Treatment Streams
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#002e29] mt-1">
              Comprehensive Rehabilitation Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rehabPrograms.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#008277]/40 transition-all p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#008277] flex items-center justify-center border border-teal-100">
                        <Icon size={24} />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-[#002e29] text-xs font-bold border border-slate-200">
                        {prog.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-[#002e29] mb-2">
                      {prog.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {prog.desc}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      {prog.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 size={14} className="text-[#008277] shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100">
                    <button
                      onClick={onOpenBooking}
                      className="w-full py-2.5 rounded-xl bg-teal-50 hover:bg-[#008277] text-[#008277] hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Book Assessment Session</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4-Step Recovery Process */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#008277]">
              Proven Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#002e29] mt-1">
              Your Journey to Total Mobility
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {recoverySteps.map((step, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 relative">
                <span className="text-3xl font-black text-[#008277]/30 block mb-2">
                  {step.step}
                </span>
                <h4 className="text-base font-bold text-[#002e29] mb-1.5">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#002420] via-[#003831] to-[#001714] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-black mb-2 text-white">
              Suffering from Joint Stiffness or Chronic Pain?
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 leading-relaxed">
              Consult with our Chief Physiotherapist today to begin a structured recovery plan and experience pain relief without invasive surgery.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-2.5 sm:px-6 py-3 rounded-xl bg-[#008277] hover:bg-[#009b8e] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center whitespace-nowrap"
            >
              Book Physio OPD
            </button>
            <a
              href="tel:7482068777"
              className="w-full sm:w-auto px-2.5 sm:px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center justify-center whitespace-nowrap"
            >
              Call 74820-68777
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
