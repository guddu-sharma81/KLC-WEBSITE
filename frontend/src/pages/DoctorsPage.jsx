import React, { useState } from 'react';
import { 
  Search, Star, Calendar, Clock, Award, ShieldCheck, 
  CheckCircle2, ArrowRight, PhoneCall, Sparkles, Filter 
} from 'lucide-react';
import { DOCTORS } from '../data/hospitalData';

export default function DoctorsPage({ onOpenBooking, onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesDept = selectedDept === 'all' || doc.department === selectedDept;
    const matchesQuery = 
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.speciality.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.degrees.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesQuery;
  });

  const departments = [
    { id: 'all', label: 'All Specialists' },
    { id: 'cardiology', label: 'Cardiology' },
    { id: 'neurology', label: 'Neurology' },
    { id: 'orthopaedics', label: 'Orthopaedics' },
    { id: 'oncology', label: 'Oncology' },
    { id: 'robotic', label: 'Robotic Surgery' },
    { id: 'paediatrics', label: 'Paediatrics' },
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
            <span className="text-white font-bold">Our Doctors</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-teal-400/30 text-teal-200 text-[11px] font-bold backdrop-blur-md">
                <Award size={13} className="text-[#f8df8c]" />
                <span>160+ Super Specialists Across 30+ Disciplines</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              Meet Our Eminent <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-200 to-emerald-300">Medical Faculty</span>
            </h1>

            <p className="text-teal-100/90 text-xs sm:text-sm max-w-xl mx-auto font-medium">
              Distinguished Specialists Trained at AIIMS, PGIMER & Leading Global Centers.
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-7 relative z-20 space-y-3">
        <div className="p-4 bg-white rounded-2xl shadow-xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Department Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto no-scrollbar pb-1 md:pb-0">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedDept === dept.id
                    ? 'bg-[#008277] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search doctor by name, specialty..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#008277]"
            />
          </div>

        </div>
      </div>

      {/* Doctors Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {filteredDoctors.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-slate-500 text-base font-semibold mb-3">No specialists match your search criteria.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedDept('all'); }}
              className="px-4 py-2 rounded-xl bg-[#008277] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#008277]/40 transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Doctor Full Image / Poster */}
                  <div className="w-full bg-slate-50 overflow-hidden border-b border-slate-100">
                    <img 
                      src={doc.image} 
                      alt={doc.name} 
                      className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
                    />
                  </div>

                  {/* Doctor Details & Points */}
                  <div className="p-5 space-y-3">
                    {/* Highlights / Points in Boxes */}
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-[#008277] text-xs font-bold border border-teal-100">
                        {doc.experience} Experience
                      </span>
                      {doc.badges && doc.badges.map((b, bIdx) => (
                        <span key={bIdx} className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA button */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenBooking()}
                    className="w-full py-3 rounded-xl bg-[#008277] hover:bg-[#009b8e] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar size={15} />
                    <span>Book Appointment</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
