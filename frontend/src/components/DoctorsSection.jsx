import React from 'react';
import { 
  Calendar, Star, PhoneCall, ArrowRight, ShieldCheck
} from 'lucide-react';

// Eagerly import all 14 official doctor banner photos from Doctorphotos folder
const doctorImageModules = import.meta.glob('../assets/Doctorphotos/*.jpeg', { eager: true, import: 'default' });

const DOCTORS_LIST = [
  {
    id: 'doc-1',
    name: 'Dr. Surendra Prasad Singh',
    role: 'General Physician & Diabetologist',
    degrees: 'MBBS, MD FCCP, PGD - MCH',
    department: 'General Medicine',
    imageKey: '1.46.03 AM (2)',
  },
  {
    id: 'doc-2',
    name: 'Dr. Vijaya',
    role: 'Sr. Consultant Obstetrics & Gynaecology',
    degrees: 'MBBS, MS - General Surgeon',
    department: 'Gynaecology',
    imageKey: '1.46.07 AM (1)',
  },
  {
    id: 'doc-3',
    name: 'Dr. Krishna Kumar',
    role: 'Physiotherapy & Rehabilitation',
    degrees: 'PT, BPT (PMCH)',
    department: 'Physiotherapy',
    imageKey: '1.46.09 AM',
  },
  {
    id: 'doc-4',
    name: 'Dr. Ajay Kumar',
    role: 'Paediatric & Neonatal Specialist',
    degrees: 'MBBS (Gold Medalist), MD, Ex-AIIMS',
    department: 'Paediatrics',
    imageKey: '1.46.10 AM (2)',
  },
  {
    id: 'doc-5',
    name: 'Dr. Neeti Neha',
    role: 'Sr. Consultant Laser & Laparoscopic Surgeon',
    degrees: 'MBBS, MS - General Surgery, FIAGES',
    department: 'Laser Surgery',
    imageKey: '1.46.10 AM.',
  },
  {
    id: 'doc-6',
    name: 'Dr. Chandan Shekhar',
    role: 'Orthopedics & Joint Replacement',
    degrees: 'MBBS, D. Ortho, DNB, MS Ortho',
    department: 'Orthopedics',
    imageKey: '1.46.11 AM',
  },
  {
    id: 'doc-7',
    name: 'Dr. Abhinay Jayaswal',
    role: 'Spine, Endoscopic & Joint Replacement Surgeon',
    degrees: 'MBBS (BMCRI), MS Ortho (KMCH)',
    department: 'Spine & Ortho',
    imageKey: '1.46.12 AM',
  },
  {
    id: 'doc-8',
    name: 'Dr. Ashutosh Kumar Sinha',
    role: 'Sr. Consultant General Physician & Cardiology',
    degrees: 'MBBS, MD, DM (Cardiology)',
    department: 'Cardiology',
    imageKey: '1.46.13 AM',
  },
  {
    id: 'doc-9',
    name: 'Dr. Kundan Kumar',
    role: 'General Physician',
    degrees: 'B.A.M.S (BU)',
    department: 'General Medicine',
    imageKey: '1.46.14 AM (1)',
  },
  {
    id: 'doc-10',
    name: 'Dr. Rahul Kumar Singh',
    role: 'Orthopedic & Joint Replacement Surgeon',
    degrees: 'MBBS, MS, Ex-Senior Resident AIIMS',
    department: 'Orthopedics',
    imageKey: '1.46.15 AM',
  },
  {
    id: 'doc-11',
    name: 'Dr. Shaibal Chatterjee',
    role: 'Sr. Consultant Facial Trauma & Oral Cancer',
    degrees: 'BDS (Hons), MDS (OMFS)',
    department: 'Oncology & Dental',
    imageKey: '1.46.17 AM (1)',
  },
  {
    id: 'doc-12',
    name: 'Dr. Raj Kishor Roshan',
    role: 'Sr. Consultant Urologist & General Surgeon',
    degrees: 'MBBS, MS',
    department: 'Urology',
    imageKey: '1.46.17 AM.',
  },
  {
    id: 'doc-13',
    name: 'Dr. Piyush Pippal',
    role: 'Sr. Consultant Laparoscopic & GI Surgeon',
    degrees: 'MBBS, MS, FMAS, FALS, FAIS, FIAGS',
    department: 'Laparoscopy & GI',
    imageKey: '1.46.18 AM (1)',
  },
  {
    id: 'doc-14',
    name: 'Dr. V. Prakash',
    role: 'Senior Surgeon & Cancer Specialist',
    degrees: 'MBBS, MS - FMAS, FIAGES',
    department: 'Onco Surgery',
    imageKey: '1.46.18 AM.',
  },
];

// Helper to resolve the correct photo for each doctor
const resolveDoctorPhoto = (imageKey, index) => {
  const match = Object.entries(doctorImageModules).find(([k]) => k.includes(imageKey));
  if (match) return match[1];
  const allUrls = Object.values(doctorImageModules);
  return allUrls[index % allUrls.length];
};

// Double the list for seamless continuous infinite marquee
const MARQUEE_DOCTORS = [...DOCTORS_LIST, ...DOCTORS_LIST];

export default function DoctorsSection({ onBookDoctor }) {
  const handleBook = (doc) => {
    if (onBookDoctor) {
      onBookDoctor({
        name: doc.name,
        department: doc.department,
        id: doc.id
      });
    }
  };

  return (
    <section id="doctors" className="py-16 sm:py-24 bg-[#f8faf9] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#008277]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header - Perfectly Centered */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#008277] uppercase mb-3">
            <span className="w-6 h-px bg-[#008277]" />
            Our Medical Faculty • 14+ Senior Specialists
            <span className="w-6 h-px bg-[#008277]" />
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002420] mb-3 tracking-tight">
            Our Leading <span className="text-[#008277]">Doctors & Specialists</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Consult with Bihar's trusted team of super-specialists across surgery, medicine, orthopaedics, and critical care at KLC Hospitals.
          </p>
        </div>

      </div>

      {/* Infinite Smooth Auto Marquee Track */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left & Right subtle edge fade gradient for premium look */}
        <div className="absolute left-0 inset-y-0 w-12 sm:w-28 bg-gradient-to-r from-[#f8faf9] via-[#f8faf9]/70 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-12 sm:w-28 bg-gradient-to-l from-[#f8faf9] via-[#f8faf9]/70 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-5 sm:gap-6 px-4">
          {MARQUEE_DOCTORS.map((doc, index) => {
            const photoUrl = resolveDoctorPhoto(doc.imageKey, index);

            return (
              <div
                key={`${doc.id}-${index}`}
                className="w-[270px] sm:w-[310px] shrink-0 flex flex-col"
              >
                <div 
                  className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer h-full"
                  onClick={() => handleBook(doc)}
                >
                  {/* Doctor Full Poster Image */}
                  <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden">
                    <img
                      src={photoUrl}
                      alt={doc.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />

                    {/* Availability Badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#002420] shadow-md border border-white/60">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Available</span>
                    </div>
                  </div>

                  {/* Card Bottom: Quick Consultation Button */}
                  <div className="p-3.5 sm:p-4 bg-white border-t border-slate-100 mt-auto flex flex-col gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBook(doc);
                      }}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#008277] hover:bg-[#002420] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-98 cursor-pointer group/btn"
                    >
                      <Calendar size={14} className="text-[#f8df8c]" />
                      <span>Book Consultation</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 pt-4">
        <div className="text-center">
          <a
            href="tel:7482068777"
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-bold text-[#002420] hover:text-[#008277] transition-colors bg-teal-50/80 sm:bg-transparent border border-teal-100 sm:border-0 rounded-2xl px-4 py-2.5 sm:p-0 shadow-sm sm:shadow-none"
          >
            <div className="flex items-center gap-1.5 text-slate-700">
              <PhoneCall size={15} className="text-[#008277] shrink-0" />
              <span>Need Help Finding the Right Doctor?</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-slate-600">Call OPD Helpline:</span>
              <span className="text-[#008277] font-extrabold whitespace-nowrap">74820-68777</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
