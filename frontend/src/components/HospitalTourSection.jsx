import React, { useState, useEffect } from 'react';
import { 
  Play, Volume2, Calendar, ArrowRight, PhoneCall, 
  X 
} from 'lucide-react';

export default function HospitalTourSection({ onOpenBooking }) {
  const [isOpenFullVideo, setIsOpenFullVideo] = useState(false);
  const videoId = 'QY36_jqq4fY';

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpenFullVideo(false);
    };
    if (isOpenFullVideo) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpenFullVideo]);

  return (
    <section id="hospital-tour" className="py-6 sm:py-10 bg-slate-50 relative">
      <div className="max-w-[1380px] mx-auto px-3 sm:px-6 lg:px-8">

        {/* Wide Cinematic Banner Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-950/20 bg-[#001714] border border-teal-500/20">
          
          {/* Background Video Layer - Full Bleed Edge-to-Edge with Zero Black Bars */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
            {/* Fallback high-res poster */}
            <div 
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80')` 
              }}
            />

            {/* Video Player scaled to fill 100% card background */}
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1`}
              title="KLC Hospital Virtual Tour Video"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[260%] min-h-[260%] sm:min-w-[140%] sm:min-h-[140%] pointer-events-none object-cover"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>

          {/* Clean Gradient Overlay for crisp text contrast */}
          <div className="absolute inset-0 bg-[#001714]/65 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001714]/90 via-[#002420]/40 to-[#001714]/75 z-10" />

          {/* Centered Foreground Content */}
          <div className="relative z-20 px-4 py-8 sm:py-16 md:py-20 flex flex-col items-center text-center max-w-3xl mx-auto">
            
            {/* Centered Live Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-teal-400/30 text-[11px] sm:text-xs font-bold text-teal-300 mb-3 sm:mb-4 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wider uppercase">Live Hospital Walkthrough</span>
            </div>

            {/* Centered Main Heading */}
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-snug drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] mb-2.5 sm:mb-4">
              Take a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-200 to-emerald-300">Virtual Tour</span> of KLC Hospitals
            </h2>

            {/* Crisp Centered Subtitle */}
            <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] mb-5 sm:mb-8 font-medium">
              Explore our 100+ bed facility, modern modular operation theatres, and 24x7 emergency critical care infrastructure in Patna.
            </p>

            {/* Centered Modern CTA Action Buttons */}
            <div className="w-full max-w-md mx-auto flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4">
              {/* Primary Appointment Button */}
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#008277] to-[#00a89a] hover:from-[#009488] hover:to-[#00bdae] text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-teal-950/60 transition-all duration-300 active:scale-95 cursor-pointer border border-teal-300/30"
              >
                <Calendar size={16} className="text-teal-100" />
                <span>Book Appointment</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary 2 Buttons in 1 Row on Mobile */}
              <div className="grid grid-cols-2 gap-2 w-full sm:w-auto sm:flex sm:items-center sm:gap-3">
                <button
                  onClick={() => setIsOpenFullVideo(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm border border-white/30 backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-lg whitespace-nowrap"
                >
                  <Volume2 size={15} className="text-teal-300 shrink-0" />
                  <span>Watch Video</span>
                </button>

                <a
                  href="tel:7482068777"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/60 hover:bg-black/80 text-white text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all active:scale-95 whitespace-nowrap"
                >
                  <PhoneCall size={13} className="text-emerald-400 animate-pulse shrink-0" />
                  <span className="text-slate-300">24x7:</span>
                  <span className="font-bold text-white">74820-68777</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Full Video Modal Popup with Sound & Controls */}
      {isOpenFullVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={() => setIsOpenFullVideo(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#002420] text-white border-b border-teal-500/30">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <h3 className="text-xs sm:text-sm font-bold">
                  KLC Super Speciality Hospital — Full Video Walkthrough
                </h3>
              </div>
              <button
                onClick={() => setIsOpenFullVideo(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
                title="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Responsive 16:9 Video Player */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title="KLC Hospital Full Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 bg-[#001714] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
              <p>📍 Kankarbagh Main Road, Patna, Bihar • 24x7 Emergency Services Available</p>
              <button
                onClick={() => {
                  setIsOpenFullVideo(false);
                  if (onOpenBooking) onOpenBooking();
                }}
                className="px-4 py-1.5 rounded-lg bg-[#008277] hover:bg-[#00a89a] text-white font-bold transition-all cursor-pointer"
              >
                Book Consultation Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

