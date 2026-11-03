import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, UserSearch, CalendarCheck2, Ambulance, MessageSquareMore, PhoneCall, ClipboardList } from 'lucide-react';
import slider1Img from '../assets/slider1.png';
import slider2Img from '../assets/slider2.png';
import slider3Img from '../assets/slider3.png';
import slider4Img from '../assets/slider4th.png';
import slider5Img from '../assets/slider5th.png';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      id: 1,
      image: slider1Img,
      alt: 'KLC Hospitals Super Multispeciality Hospital - Advanced Healthcare for a Healthier Tomorrow',
    },
    {
      id: 2,
      image: slider2Img,
      alt: 'A Warm Welcome to KLC Hospitals - Where Care Meets Trust',
    },
    {
      id: 3,
      image: slider3Img,
      alt: 'Our Team Working Together For Your Health - KLC Hospitals',
    },
    {
      id: 4,
      image: slider4Img,
      alt: 'KLC Hospitals - Slider 4',
    },
    {
      id: 5,
      image: slider5Img,
      alt: 'KLC Hospitals - Slider 5',
    }
  ];

  // Auto-play interval (5.5s)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    } else if (touchEndX.current - touchStartX.current > 50) {
      handlePrev();
    }
  };

  return (
    <section 
      id="home" 
      className="relative w-full bg-white text-white select-none m-0 p-0 block"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Viewport - Completely Clean Banner Image without any overlays */}
      <div className="relative w-full h-[200px] sm:h-[340px] md:h-[420px] lg:h-[490px] xl:h-[560px] 2xl:h-[620px] overflow-hidden m-0 p-0 block">
        <AnimatePresence mode="wait">
          <motion.div
            key={`slide-${slides[currentSlide].id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full m-0 p-0 overflow-hidden block"
          >
            {/* Pure Hospital Banner Image - Zero overlays, 100% visible graphics without cropping */}
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].alt} 
              className="w-full h-full object-fill sm:object-cover sm:object-top block m-0 p-0"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* Previous Arrow Button */}
        <button
          onClick={handlePrev}
          className="absolute left-1.5 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-[#008277] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={16} className="sm:hidden" />
          <ChevronLeft size={24} className="hidden sm:block" />
        </button>

        {/* Next Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute right-1.5 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-[#008277] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight size={16} className="sm:hidden" />
          <ChevronRight size={24} className="hidden sm:block" />
        </button>

      </div>

      {/* Quick Access Bar */}
      <div className="w-full bg-white border-b border-gray-200 shadow-sm">
        {/* Mobile View (< 640px): Clean 3-column x 2-row grid, 100% visible at once in 1 screen */}
        <div className="grid grid-cols-3 sm:hidden divide-x divide-y divide-gray-100 bg-white">
          {/* 1. Find A Doctor */}
          <a
            href="#doctors"
            className="flex flex-col items-center justify-center py-2.5 px-1 text-center bg-[#002420] text-[#d4af37] active:bg-[#003630] transition-colors"
          >
            <UserSearch size={18} className="text-[#d4af37] mb-1" />
            <span className="text-[11px] font-bold leading-tight">Find Doctor</span>
          </a>

          {/* 2. Book OPD */}
          <a
            href="#appointment"
            className="flex flex-col items-center justify-center py-2.5 px-1 text-center text-slate-700 active:bg-teal-50 transition-colors"
          >
            <CalendarCheck2 size={18} className="text-[#008277] mb-1" />
            <span className="text-[11px] font-bold leading-tight text-slate-800">Book OPD</span>
          </a>

          {/* 3. Emergency Care */}
          <a
            href="tel:7482068777"
            className="flex flex-col items-center justify-center py-2.5 px-1 text-center text-rose-600 active:bg-rose-50 transition-colors"
          >
            <Ambulance size={18} className="text-rose-600 mb-1" />
            <span className="text-[11px] font-bold leading-tight text-rose-700">Emergency</span>
          </a>

          {/* 4. Health Checkup */}
          <a
            href="#packages"
            className="flex flex-col items-center justify-center py-2.5 px-1 text-center text-slate-700 active:bg-teal-50 transition-colors"
          >
            <ClipboardList size={18} className="text-[#008277] mb-1" />
            <span className="text-[11px] font-semibold leading-tight text-slate-800">Checkup</span>
          </a>

          {/* 5. Second Opinion */}
          <a
            href="#appointment"
            className="flex flex-col items-center justify-center py-2.5 px-1 text-center text-slate-700 active:bg-teal-50 transition-colors"
          >
            <MessageSquareMore size={18} className="text-[#008277] mb-1" />
            <span className="text-[11px] font-semibold leading-tight text-slate-800">2nd Opinion</span>
          </a>

          {/* 6. Get Callback */}
          <a
            href="tel:7482068777"
            className="flex flex-col items-center justify-center py-2.5 px-1 text-center text-slate-700 active:bg-teal-50 transition-colors"
          >
            <PhoneCall size={18} className="text-[#008277] mb-1" />
            <span className="text-[11px] font-semibold leading-tight text-slate-800">Callback</span>
          </a>
        </div>

        {/* Desktop & Tablet View (>= 640px): Spacious horizontal bar */}
        <div className="hidden sm:flex items-stretch justify-center overflow-x-auto scrollbar-hide">
          {/* Find A Doctor - Red CTA */}
          <a
            href="#doctors"
            className="flex items-center gap-2.5 px-6 py-3 bg-[#002420] text-[#d4af37] font-bold text-sm whitespace-nowrap shrink-0 hover:bg-[#003630] transition-colors"
          >
            <UserSearch size={20} />
            <span>Find A Doctor</span>
          </a>

          <div className="w-px bg-gray-200 shrink-0" />

          {/* Health Checkup */}
          <a href="#packages" className="flex flex-col items-center justify-center gap-1 px-8 py-2.5 text-gray-700 hover:text-[#008277] hover:bg-teal-50 transition-colors whitespace-nowrap shrink-0 group border-r border-gray-200">
            <ClipboardList size={20} className="text-gray-500 group-hover:text-[#008277] transition-colors" />
            <span className="text-xs font-semibold">Health Checkup</span>
          </a>

          {/* Appointment */}
          <a href="#appointment" className="flex flex-col items-center justify-center gap-1 px-8 py-2.5 text-gray-700 hover:text-[#008277] hover:bg-teal-50 transition-colors whitespace-nowrap shrink-0 group border-r border-gray-200">
            <CalendarCheck2 size={20} className="text-gray-500 group-hover:text-[#008277] transition-colors" />
            <span className="text-xs font-semibold">Appointment</span>
          </a>

          {/* Emergency Care */}
          <a href="tel:7482068777" className="flex flex-col items-center justify-center gap-1 px-8 py-2.5 text-gray-700 hover:text-[#008277] hover:bg-teal-50 transition-colors whitespace-nowrap shrink-0 group border-r border-gray-200">
            <Ambulance size={20} className="text-gray-500 group-hover:text-[#008277] transition-colors" />
            <span className="text-xs font-semibold">Emergency Care</span>
          </a>

          {/* Second Opinion */}
          <a href="#appointment" className="flex flex-col items-center justify-center gap-1 px-8 py-2.5 text-gray-700 hover:text-[#008277] hover:bg-teal-50 transition-colors whitespace-nowrap shrink-0 group border-r border-gray-200">
            <MessageSquareMore size={20} className="text-gray-500 group-hover:text-[#008277] transition-colors" />
            <span className="text-xs font-semibold">Second Opinion</span>
          </a>

          {/* Get Callback */}
          <a href="tel:7482068777" className="flex flex-col items-center justify-center gap-1 px-8 py-2.5 text-gray-700 hover:text-[#008277] hover:bg-teal-50 transition-colors whitespace-nowrap shrink-0 group">
            <PhoneCall size={20} className="text-gray-500 group-hover:text-[#008277] transition-colors" />
            <span className="text-xs font-semibold">Get Callback</span>
          </a>
        </div>
      </div>
    </section>
  );
}
