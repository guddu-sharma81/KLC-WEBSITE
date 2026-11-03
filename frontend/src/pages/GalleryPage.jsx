import React, { useState, useEffect } from 'react';
import { 
  Maximize2, X, Image as ImageIcon, Camera, 
  Sparkles, Building2, Calendar, PhoneCall, ArrowRight, ChevronLeft, ChevronRight
} from 'lucide-react';
import { REAL_GALLERY_DATA } from '../assets/galleryImages';

export default function GalleryPage({ onOpenBooking, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = selectedCategory === 'all'
    ? REAL_GALLERY_DATA
    : REAL_GALLERY_DATA.filter(item => item.category === selectedCategory);

  const categories = [
    { id: 'all', label: `All Photos (${REAL_GALLERY_DATA.length})` },
    { id: 'ot', label: 'Modular OTs' },
    { id: 'icu', label: 'Smart ICUs & Critical Care' },
    { id: 'rooms', label: 'Patient Rooms & Wards' },
    { id: 'diagnostics', label: 'Diagnostics & Labs' },
    { id: 'therapy', label: 'Physiotherapy & Rehab' },
    { id: 'campus', label: 'Hospital Campus & Team' },
  ];

  const lightboxImage = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleNextLightbox = (e) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
    }
  };

  const handlePrevLightbox = (e) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <div className="bg-slate-50 min-h-screen text-[#002e29]">
      {/* Hero Header (250px Height, Center Aligned) */}
      <div className="relative bg-gradient-to-r from-[#002420] via-[#003d37] to-[#001714] text-white h-[250px] flex flex-col justify-center px-4 sm:px-6 overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#008277]/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 w-full">
          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold text-teal-300 mb-2 uppercase tracking-wider">
            <button onClick={() => onNavigate('home')} className="hover:underline hover:text-white cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-white font-bold">Hospital Gallery</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-teal-400/30 text-teal-200 text-[11px] font-bold backdrop-blur-md">
                <Camera size={13} className="text-[#f8df8c]" />
                <span>State-of-the-Art Healthcare Infrastructure</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-200 to-emerald-300">Hospital Campus</span>
            </h1>

            <p className="text-teal-100/90 text-xs sm:text-sm max-w-xl mx-auto font-medium">
              Visual Walkthrough of Modular OTs, Smart ICUs & Inpatient Suites.
            </p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-7 relative z-20">
        <div className="p-3 sm:p-4 bg-white rounded-2xl shadow-xl border border-slate-200 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#008277] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#008277]/40 transition-all overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-[#002e29] flex items-center justify-center shadow-xl scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 size={20} />
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-[#002e29] group-hover:text-[#008277] transition-colors mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#002420] to-[#003831] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-1 text-white">
              Want to see our facilities live?
            </h3>
            <p className="text-xs sm:text-sm text-teal-100">
              Take an interactive virtual video tour or book an in-person campus walk-in appointment.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-2.5 sm:px-5 py-3 rounded-xl bg-[#008277] hover:bg-[#00a89a] text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center whitespace-nowrap"
            >
              Book In-Person Visit
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="w-full sm:w-auto px-2.5 sm:px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center justify-center whitespace-nowrap"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in select-none"
          onClick={() => setLightboxIndex(null)}
        >
          <div 
            className="relative w-full max-w-5xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#001714] text-white border-b border-teal-500/30">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-teal-300 font-bold uppercase tracking-wider block">
                    {lightboxImage.categoryLabel}
                  </span>
                  <span className="text-xs text-white/50">
                    ({lightboxIndex + 1} / {filteredItems.length})
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold mt-0.5">
                  {lightboxImage.title}
                </h3>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
                title="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Image display with Next / Prev buttons */}
            <div className="relative max-h-[70vh] min-h-[300px] w-full bg-black flex items-center justify-center overflow-hidden">
              <img 
                src={lightboxImage.image} 
                alt={lightboxImage.title} 
                className="w-full h-full max-h-[70vh] object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrevLightbox}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#008277] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-white/20 shadow-lg"
                title="Previous Photo"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNextLightbox}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#008277] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-white/20 shadow-lg"
                title="Next Photo"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Description & Action */}
            <div className="p-4 sm:p-5 bg-[#001714] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 border-t border-teal-500/20">
              <p className="max-w-xl">{lightboxImage.desc}</p>
              <button
                onClick={() => {
                  setLightboxIndex(null);
                  onOpenBooking();
                }}
                className="px-5 py-2.5 rounded-xl bg-[#008277] hover:bg-[#00a89a] text-white font-bold transition-all cursor-pointer whitespace-nowrap shadow-md"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
