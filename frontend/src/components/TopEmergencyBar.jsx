import React from 'react';
import { PhoneCall, AlertTriangle, Clock, MapPin, Languages } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { useLanguage } from '../context/LanguageContext';

export default function TopEmergencyBar({ onOpenEmergency }) {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-sky-100/90 via-[#e0f2fe] to-sky-100/90 text-slate-800 py-1.5 sm:py-2 border-b border-sky-200/90 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        
        {/* Mobile View (< 640px): Crisp single line, perfectly aligned, no awkward line wraps */}
        <div className="flex sm:hidden items-center justify-between gap-1.5 w-full">
          {/* Left: Emergency Alert & Primary Phone */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
            </span>
            <AlertTriangle size={13} className="text-rose-600 shrink-0" />
            <a 
              href="tel:7482068777" 
              className="text-[#003833] font-black text-xs hover:text-[#008277] transition-colors whitespace-nowrap"
            >
              74820-68777
            </a>
          </div>

          {/* Center: Location Badge */}
          <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#003833] bg-white/95 px-2 py-0.5 rounded-full border border-sky-300/80 shadow-2xs whitespace-nowrap">
            <MapPin size={11} className="text-[#008277] shrink-0" />
            <span>{language === 'hi' ? 'पटना व छपरा' : 'Patna & Chhapra'}</span>
          </div>

          {/* Right: Language Switcher */}
          <button 
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white text-[#003833] border border-sky-300 text-[11px] font-black transition-all cursor-pointer shadow-2xs active:scale-95 shrink-0"
            title="Change Language / भाषा बदलें"
          >
            <Languages size={12} className="text-[#008277]" />
            <span>{language === 'en' ? 'हिन्दी' : 'EN'}</span>
          </button>
        </div>

        {/* Tablet & Desktop View (>= 640px): Full width spacious toolbar */}
        <div className="hidden sm:flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          {/* Left: Emergency Alert, Phone Numbers, Address & Hours */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            {/* Emergency Tag with Live Ping */}
            <div className="flex items-center gap-2 font-bold text-rose-600">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-600"></span>
              </span>
              <AlertTriangle size={15} className="text-rose-600 shrink-0" />
              <span className="font-extrabold">{t('emergencyTrauma')}</span>
              
              {/* Clickable Phone Numbers */}
              <div className="flex items-center gap-1.5 text-[#003833] font-black tracking-wide">
                <a 
                  href="tel:7482068777" 
                  className="hover:text-[#008277] transition-colors underline-offset-2 hover:underline"
                >
                  74820-68777
                </a>
                <span className="text-slate-400">,</span>
                <a 
                  href="tel:7482098777" 
                  className="hover:text-[#008277] transition-colors underline-offset-2 hover:underline"
                >
                  74820-98777
                </a>
              </div>
            </div>

            {/* Location Badge */}
            <div className="flex items-center gap-1.5 text-[#003833] font-bold bg-white/95 px-2.5 py-0.5 rounded-full border border-sky-300/80 shadow-2xs">
              <MapPin size={13} className="text-[#008277] shrink-0" />
              <span>{t('location')}</span>
            </div>

            {/* 24x7 Hours Open */}
            <div className="hidden lg:flex items-center gap-1.5 text-emerald-800 font-extrabold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 shadow-2xs">
              <Clock size={13} className="text-emerald-700" />
              <span>{t('openHours')}</span>
            </div>
          </div>

          {/* Right: Ambulance Dispatch & Language Translator */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Dispatch Ambulance Button */}
            <button 
              onClick={onOpenEmergency} 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-rose-600 font-bold border border-rose-200 hover:bg-rose-50 transition-all cursor-pointer text-xs shadow-2xs"
            >
              <PhoneCall size={13} className="text-rose-600" />
              <span>{t('ambulanceDispatch')}</span>
            </button>

            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#003833] border border-sky-300 hover:bg-sky-50 hover:border-sky-400 text-xs font-black transition-all cursor-pointer shadow-xs active:scale-95"
              title="Change Language / भाषा बदलें"
            >
              <Languages size={14} className="text-[#008277]" />
              <span className="tracking-wide">
                {language === 'en' ? 'हिन्दी' : 'English'}
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
