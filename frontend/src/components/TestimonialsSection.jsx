import React, { useRef, useState, useEffect } from 'react';
import { 
  Star, Award, CheckCircle, ChevronLeft, ChevronRight, 
  Play, X, Heart
} from 'lucide-react';

const PATIENT_VIDEOS = [
  {
    id: 'IXdqHIyQEWo',
    patient: 'Rameshwar Yadav',
    treatment: 'Ayushman Bharat Cashless Care',
    location: 'Patna, Bihar',
    title: 'Happy Patient Story',
    highlight: 'Zero Out-of-Pocket Cost',
    rating: 5,
  },
  {
    id: 'ieBlL52CFU4',
    patient: 'Sunita Devi',
    treatment: 'Laparoscopic Surgery',
    location: 'Chapra, Bihar',
    title: 'Free Treatment & Rapid Recovery',
    highlight: 'Painless Procedure',
    rating: 5,
  },
  {
    id: 'MGNRdx8QKKs',
    patient: 'Md. Imran Ansari',
    treatment: 'Orthopaedic Trauma Care',
    location: 'Vaishali, Bihar',
    title: 'Swasthya Ab Sabke Liye',
    highlight: 'Walked on Day 3',
    rating: 5,
  },
  {
    id: 'S6KdEO-dF0E',
    patient: 'Pooja Sharma',
    treatment: 'Maternity & Normal Delivery',
    location: 'Kankarbagh, Patna',
    title: 'Safe Motherhood Experience',
    highlight: 'Compassionate Nursing',
    rating: 5,
  },
  {
    id: 'h2iVt1XSeL8',
    patient: 'Brijesh Narayan Singh',
    treatment: 'Joint Replacement & Spine',
    location: 'Bhojpur, Bihar',
    title: 'Respect, Care, Healing',
    highlight: 'Senior Citizen Care',
    rating: 5,
  },
  {
    id: 'xPj07dhSgjw',
    patient: 'Anita Kumari',
    treatment: 'Laser Gynaecological Surgery',
    location: 'Muzaffarpur, Bihar',
    title: 'Positive Recovery Experience',
    highlight: 'Discharged in 24 Hrs',
    rating: 5,
  },
  {
    id: 'JixpfHPVFCQ',
    patient: 'Deepak Verma',
    treatment: 'General Surgery & ICU Care',
    location: 'Gaya, Bihar',
    title: 'Successful Treatment Under Ayushman',
    highlight: 'Life-Saving Triage',
    rating: 5,
  },
  {
    id: 'yOaXEt5av38',
    patient: 'Sarita Devi',
    treatment: 'Comprehensive Inpatient Care',
    location: 'Nalanda, Bihar',
    title: 'Thank You KLC Hospitals',
    highlight: 'Exceptional Doctors',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#f8faf9] relative overflow-hidden">
      {/* Background soft ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#008277]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header - Perfectly Centered with Standard Font Size */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#008277] uppercase mb-3">
            <span className="w-6 h-px bg-[#008277]" />
            Real Healing Stories • Video Testimonials
            <span className="w-6 h-px bg-[#008277]" />
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002420] mb-3 tracking-tight">
            Trusted by Thousands of <span className="text-[#008277]">Families</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Watch genuine recovery stories and heartfelt video feedback from real patients and families treated with compassion at KLC Hospitals.
          </p>
        </div>

        {/* Carousel Container with Left and Right Navigation Arrows */}
        <div className="relative group/carousel px-1 sm:px-3">

          {/* Left Arrow Button - Vertically centered on the left side of carousel */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Previous Videos"
            className={`absolute -left-2 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center transition-all duration-300 border cursor-pointer shadow-xl ${
              canScrollLeft
                ? 'bg-white hover:bg-[#002420] text-[#002420] hover:text-white border-slate-200 hover:scale-110 active:scale-95'
                : 'bg-white/80 text-slate-300 border-slate-200 opacity-0 pointer-events-none'
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          {/* 9:16 Video Shorts Carousel Track */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory py-4 pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {PATIENT_VIDEOS.map((video) => {
              const isPlaying = playingVideoId === video.id;
              const thumbUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

              return (
                <div
                  key={video.id}
                  className="w-[240px] sm:w-[270px] md:w-[280px] shrink-0 snap-start flex flex-col"
                >
                  <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group bg-black border border-slate-200/90">
                    {isPlaying ? (
                      /* Inline Video Player playing directly inside the card */
                      <div className="relative w-full h-full bg-black">
                        <iframe
                          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1&modestbranding=1`}
                          title={video.title}
                          className="w-full h-full border-0 rounded-3xl"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                        {/* Stop/Close button on top right of playing card */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setPlayingVideoId(null);
                          }}
                          className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center shadow-lg border border-white/30 cursor-pointer transition-all hover:scale-110"
                          title="Close Video"
                          aria-label="Close Video"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      /* Video Thumbnail with Play Button */
                      <div
                        onClick={() => setPlayingVideoId(video.id)}
                        className="relative w-full h-full cursor-pointer"
                      >
                        {/* YouTube Thumbnail */}
                        <img
                          src={thumbUrl}
                          alt={video.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Gradient overlays for readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/60" />

                        {/* Top Badge: Verified Patient Story */}
                        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                            <Heart size={11} className="text-rose-500 fill-rose-500" />
                            <span>Patient Story</span>
                          </span>

                          <span className="px-2 py-0.5 rounded-full bg-rose-600 text-white text-[10px] font-black tracking-wider uppercase shadow-xs">
                            Short
                          </span>
                        </div>

                        {/* Center Play Button with pulse ripple */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <div className="relative flex items-center justify-center">
                            <span className="absolute w-16 h-16 rounded-full bg-rose-600/40 animate-ping" />
                            <div className="w-14 h-14 rounded-full bg-rose-600 group-hover:bg-rose-700 text-white flex items-center justify-center shadow-xl shadow-rose-950/60 group-hover:scale-110 transition-all duration-300">
                              <Play size={22} className="fill-white translate-x-0.5" />
                            </div>
                          </div>
                        </div>

                        {/* Bottom Information Card Overlay */}
                        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 flex flex-col justify-end text-white">
                          {/* Stars */}
                          <div className="flex gap-1 text-[#f8df8c] mb-1.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={13} className="fill-[#f8df8c]" />
                            ))}
                          </div>

                          {/* Patient Name */}
                          <h3 className="text-sm sm:text-base font-extrabold text-white leading-snug drop-shadow-xs group-hover:text-[#2dd4bf] transition-colors">
                            {video.patient}
                          </h3>

                          {/* Treatment info */}
                          <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                            {video.treatment}
                          </p>

                          {/* Location & Highlight Pill */}
                          <div className="mt-2.5 pt-2.5 border-t border-white/15 flex items-center justify-between text-[11px] text-slate-400">
                            <span className="text-[#f8df8c] font-semibold">{video.highlight}</span>
                            <span>{video.location}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button - Vertically centered on the right side of carousel */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Next Videos"
            className={`absolute -right-2 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center transition-all duration-300 border cursor-pointer shadow-xl ${
              canScrollRight
                ? 'bg-[#002420] hover:bg-[#008277] text-white border-[#002420] hover:scale-110 active:scale-95 shadow-[#002420]/30'
                : 'bg-white/80 text-slate-300 border-slate-200 opacity-0 pointer-events-none'
            }`}
          >
            <ChevronRight size={24} />
          </button>

        </div>

        {/* Accreditation Logos / Trust Banner */}
        <div className="mt-10 sm:mt-14 p-4 sm:p-6 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
            <div className="flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-0 rounded-xl bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0 text-slate-700 font-bold text-[11px] sm:text-sm">
              <Award size={20} className="text-[#008277] shrink-0" />
              <span className="leading-tight">NABH Accredited Hospital</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-0 rounded-xl bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0 text-slate-700 font-bold text-[11px] sm:text-sm">
              <Award size={20} className="text-[#d4af37] shrink-0" />
              <span className="leading-tight">Ayushman Bharat Empanelled</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-0 rounded-xl bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0 text-slate-700 font-bold text-[11px] sm:text-sm">
              <Award size={20} className="text-emerald-600 shrink-0" />
              <span className="leading-tight">NABL Certified Labs</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-0 rounded-xl bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0 text-slate-700 font-bold text-[11px] sm:text-sm">
              <CheckCircle size={20} className="text-amber-500 shrink-0" />
              <span className="leading-tight">ISO 9001:2015 Verified</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
