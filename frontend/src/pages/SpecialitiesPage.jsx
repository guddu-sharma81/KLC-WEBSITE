import React from 'react';
import { 
  Bone, Brain, Baby, Activity, Cpu, HeartPulse, 
  Ambulance, ShieldAlert, CheckCircle2, ArrowRight, 
  Calendar, PhoneCall, Stethoscope, Sparkles, Filter
} from 'lucide-react';
import { 
  orthoImg,
  neuroImg,
  obgynImg,
  generalSurgeryImg,
  laserLapImg,
  gastroImg,
  oncologyImg,
  pediatricsImg,
  urologyImg,
  vascularImg
} from '../assets/hospitalAssets';

const SPECIALITIES_LIST = [
  {
    id: "ortho-joint-replacement",
    slug: "ortho-joint-replacement",
    title: "Ortho & Joint Replacement",
    shortDesc: "Robotic knee, hip, and shoulder replacements with sub-millimeter precision, 24/7 polytrauma, and rapid sports recovery.",
    image: orthoImg,
    badge: "Robotic Precision",
    doctorsCount: 18,
    subProcedures: [
      { name: "Knee Replacement", slug: "knee-replacement" },
      { name: "Hip Replacement", slug: "hip-replacement" },
      { name: "Shoulder Replacement", slug: "shoulder-replacement" },
      { name: "Orthopaedic Trauma", slug: "orthopaedic-trauma" }
    ]
  },
  {
    id: "neurology-spine",
    slug: "neurology-spine",
    title: "Neurology & Spine",
    shortDesc: "Endoscopic spine surgery, 24/7 acute stroke intervention unit, slipped disc decompression, and micro-neurosurgery.",
    image: neuroImg,
    badge: "Comprehensive Stroke Care",
    doctorsCount: 14,
    subProcedures: [
      { name: "Endoscopic Spine Surgery", slug: "neurology-spine" },
      { name: "Stroke Unit & Thrombolysis", slug: "neurology-spine" },
      { name: "Microscopic Brain Surgery", slug: "neurology-spine" },
      { name: "Spine Deformity Correction", slug: "neurology-spine" }
    ]
  },
  {
    id: "obstetrics-gynaecology",
    slug: "obstetrics-gynaecology",
    title: "Obstetrics & Gynaecology",
    shortDesc: "Advanced maternal-fetal care, high-risk pregnancy management, painless normal delivery, and laparoscopic surgeries.",
    image: obgynImg,
    badge: "Modern Birthing Suites",
    doctorsCount: 12,
    subProcedures: [
      { name: "High-Risk Pregnancy Care", slug: "obstetrics-gynaecology" },
      { name: "Painless Normal Delivery", slug: "obstetrics-gynaecology" },
      { name: "Laparoscopic Gynae Surgery", slug: "obstetrics-gynaecology" },
      { name: "Infertility Management", slug: "obstetrics-gynaecology" }
    ]
  },
  {
    id: "general-surgery",
    slug: "general-surgery",
    title: "General Surgery",
    shortDesc: "Minimally invasive laparoscopic hernia repair, gallbladder removal, appendix surgery, and trauma surgical care.",
    image: generalSurgeryImg,
    badge: "Fast-Track Recovery",
    doctorsCount: 15,
    subProcedures: [
      { name: "Laparoscopic Gallbladder", slug: "general-surgery" },
      { name: "Advanced Hernia Repair", slug: "general-surgery" },
      { name: "Thyroid & Breast Care", slug: "general-surgery" },
      { name: "Gastrointestinal Surgery", slug: "general-surgery" }
    ]
  },
  {
    id: "laser-laproscopy",
    slug: "laser-laproscopy",
    title: "Laser & Laproscopy Surgery",
    shortDesc: "Day-care laser surgery for piles, fissures, and fistula; endovenous laser for varicose veins with zero cut & painless discharge.",
    image: laserLapImg,
    badge: "Zero Cuts • Day Care",
    doctorsCount: 11,
    subProcedures: [
      { name: "Laser Piles & Fistula Care", slug: "laser-laproscopy" },
      { name: "Laser Varicose Veins (EVLT)", slug: "laser-laproscopy" },
      { name: "Single-Incision Laparoscopy", slug: "laser-laproscopy" },
      { name: "Painless Day-Care Discharge", slug: "laser-laproscopy" }
    ]
  },
  {
    id: "gastroenterology",
    slug: "gastroenterology",
    title: "Gastroenterology & Hepatology",
    shortDesc: "Complete clinical evaluation and endoscopic treatment for liver, gallbladder, pancreas, and intestinal disorders.",
    image: gastroImg,
    badge: "Advanced Endoscopy",
    doctorsCount: 10,
    subProcedures: [
      { name: "Upper GI Endoscopy", slug: "gastroenterology" },
      { name: "Colonoscopy & Polypectomy", slug: "gastroenterology" },
      { name: "ERCP Stone Extraction", slug: "gastroenterology" },
      { name: "Liver Cirrhosis Care", slug: "gastroenterology" }
    ]
  },
  {
    id: "oncology",
    slug: "oncology",
    title: "Comprehensive Cancer Care",
    shortDesc: "Multidisciplinary cancer center offering surgical oncology, chemotherapy day care lounge, and targeted immunotherapy.",
    image: oncologyImg,
    badge: "Tumour Board Supported",
    doctorsCount: 14,
    subProcedures: [
      { name: "Surgical Oncology", slug: "oncology" },
      { name: "Day-Care Chemotherapy", slug: "oncology" },
      { name: "Targeted Immunotherapy", slug: "oncology" },
      { name: "Cancer Screening Clinic", slug: "oncology" }
    ]
  },
  {
    id: "pediatrics",
    slug: "pediatrics",
    title: "Pediatrics & Neonatology (NICU)",
    shortDesc: "Level-3 advanced NICU for premature newborns, round-the-clock pediatric emergency, and vaccination clinic.",
    image: pediatricsImg,
    badge: "Level-3 NICU",
    doctorsCount: 12,
    subProcedures: [
      { name: "Advanced Neonatal ICU", slug: "pediatrics" },
      { name: "Pediatric Critical Care", slug: "pediatrics" },
      { name: "Child Immunization", slug: "pediatrics" },
      { name: "Growth & Nutrition", slug: "pediatrics" }
    ]
  },
  {
    id: "urology",
    slug: "urology",
    title: "Urology & Kidney Care",
    shortDesc: "Holmium laser kidney stone dusting (RIRS, Mini-PCNL), prostate surgery (TURP), and dialysis management.",
    image: urologyImg,
    badge: "Laser Stone Center",
    doctorsCount: 9,
    subProcedures: [
      { name: "Laser RIRS Stone Surgery", slug: "urology" },
      { name: "Mini-PCNL Stone Removal", slug: "urology" },
      { name: "Bipolar TURP for Prostate", slug: "urology" },
      { name: "Hemodialysis Care", slug: "urology" }
    ]
  },
  {
    id: "vascular-surgery",
    slug: "vascular-surgery",
    title: "Vascular & Endovascular Surgery",
    shortDesc: "Endovenous laser ablation for varicose veins, DVT clot dissolution, diabetic foot limb salvage, and dialysis AV fistulas.",
    image: vascularImg,
    badge: "Endovascular Excellence",
    doctorsCount: 8,
    subProcedures: [
      { name: "EVLT for Varicose Veins", slug: "vascular-surgery" },
      { name: "DVT Thrombolysis", slug: "vascular-surgery" },
      { name: "AV Fistula for Dialysis", slug: "vascular-surgery" },
      { name: "Diabetic Limb Salvage", slug: "vascular-surgery" }
    ]
  }
];

export default function SpecialitiesPage({ onOpenBooking, onNavigate }) {
  return (
    <div className="bg-slate-50 min-h-screen text-[#002e29]">
      {/* Page Hero Header (250px Height, Center Aligned) */}
      <div className="relative bg-gradient-to-r from-[#002420] via-[#003d37] to-[#001714] text-white h-[250px] flex flex-col justify-center px-4 sm:px-6 overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#008277]/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 w-full">
          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold text-teal-300 mb-2 uppercase tracking-wider">
            <button onClick={() => onNavigate('home')} className="hover:underline hover:text-white cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-white font-bold">Super Specialities</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-teal-400/30 text-teal-200 text-[11px] font-bold backdrop-blur-md">
                <Sparkles size={13} className="text-[#f8df8c]" />
                <span>Multi-Disciplinary Centres of Excellence</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              Advanced Clinical <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-200 to-emerald-300">Super Specialities</span>
            </h1>

            <p className="text-teal-100/90 text-xs sm:text-sm max-w-xl mx-auto font-medium">
              Robotic Precision, Modular OTs & 160+ Eminent Specialist Faculty.
            </p>
          </div>
        </div>
      </div>

      {/* Main Specialities Showcase with Real Photos & Dedicated Detail Page Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPECIALITIES_LIST.map((dept) => {
            return (
              <div
                key={dept.id}
                className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#008277]/40 transition-all overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Real Visual Image Banner */}
                  <div className="relative h-56 overflow-hidden bg-slate-900 cursor-pointer" onClick={() => onNavigate('speciality-detail', dept.slug)}>
                    <img 
                      src={dept.image} 
                      alt={dept.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30">
                        {dept.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h2 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-md">
                        {dept.title}
                      </h2>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {dept.shortDesc}
                    </p>

                    {/* Sub-Procedures Grid with Direct Links */}
                    <div className="mb-2 pt-4 border-t border-slate-100">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Sub-Menu & Specialized Procedures:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {dept.subProcedures.map((proc, pIdx) => (
                          <button
                            key={pIdx}
                            onClick={() => onNavigate('speciality-detail', proc.slug)}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-100 hover:border-teal-300 text-xs font-semibold text-slate-800 transition-all text-left cursor-pointer group/proc"
                          >
                            <span className="group-hover/proc:text-[#008277]">{proc.name}</span>
                            <ArrowRight size={13} className="text-slate-400 group-hover/proc:text-[#008277] group-hover/proc:translate-x-0.5 transition-transform shrink-0" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="p-6 pt-0 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => onNavigate('speciality-detail', dept.slug)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-[#008277] hover:underline cursor-pointer"
                  >
                    <span>View Dedicated Details Page</span>
                    <ArrowRight size={15} />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenBooking()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#008277] hover:bg-[#009b8e] text-white font-bold text-xs sm:text-sm transition-all shadow-xs active:scale-95 cursor-pointer"
                    >
                      <Calendar size={14} />
                      <span>Book OPD</span>
                    </button>
                    <a
                      href="tel:7482068777"
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#002e29] transition-colors"
                      title="Direct Call Helpline"
                    >
                      <PhoneCall size={16} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Hospital Assistance Strip */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#002420] via-[#003831] to-[#001714] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black mb-1.5 text-white">
              Unsure which specialist you need to consult?
            </h3>
            <p className="text-xs sm:text-sm text-teal-100/90">
              Speak directly with our 24/7 patient helpdesk or let our Medical Triage team assist you.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => onNavigate('doctors')}
              className="w-full sm:w-auto px-2.5 sm:px-5 py-3 rounded-xl bg-white text-[#002e29] font-bold text-xs sm:text-sm hover:bg-teal-50 transition-all cursor-pointer flex items-center justify-center whitespace-nowrap"
            >
              Doctor Directory
            </button>
            <a
              href="tel:7482068777"
              className="w-full sm:w-auto px-2.5 sm:px-5 py-3 rounded-xl bg-teal-800/80 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm border border-teal-600/50 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              <PhoneCall size={14} className="shrink-0" />
              <span>74820-68777</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
