import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import TopEmergencyBar from './components/TopEmergencyBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import QuickBookingWidget from './components/QuickBookingWidget';
import StatsCounter from './components/StatsCounter';
import AboutSection from './components/AboutSection';
import SpecialitiesSection from './components/SpecialitiesSection';
import PhysiotherapySection from './components/PhysiotherapySection';
import DoctorsSection from './components/DoctorsSection';
import GallerySection from './components/GallerySection';
import FacilitiesSection from './components/FacilitiesSection';
import RoomCategorySection from './components/RoomCategorySection';
import TestimonialsSection from './components/TestimonialsSection';
import HospitalTourSection from './components/HospitalTourSection';
import AppointmentModal from './components/AppointmentModal';
import VirtualAssistant from './components/VirtualAssistant';
import FloatingSocialBar from './components/FloatingSocialBar';
import Footer from './components/Footer';

// Separate Dedicated Detail Pages
import AboutPage from './pages/AboutPage';
import SpecialitiesPage from './pages/SpecialitiesPage';
import SpecialityDetailPage from './pages/SpecialityDetailPage';
import PhysiotherapyPage from './pages/PhysiotherapyPage';
import DoctorsPage from './pages/DoctorsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import { SPECIALITIES_DETAIL } from './data/specialitiesDetailData';

export default function App() {
  const parseHash = () => {
    const raw = window.location.hash.replace('#', '').replace(/^\//, '').toLowerCase();
    if (!raw || raw === 'home') return { page: 'home', slug: '' };

    if (raw.startsWith('specialities/') || raw.startsWith('speciality/')) {
      const parts = raw.split('/');
      return { page: 'speciality-detail', slug: parts[1] || 'knee-replacement' };
    }

    if (['about', 'specialities', 'specialties', 'physiotherapy', 'doctors', 'gallery', 'contact'].includes(raw)) {
      return { page: raw === 'specialties' ? 'specialities' : raw, slug: '' };
    }

    if (SPECIALITIES_DETAIL[raw]) {
      return { page: 'speciality-detail', slug: raw };
    }

    return { page: 'home', slug: '' };
  };

  const initialRoute = parseHash();
  const [currentPage, setCurrentPage] = useState(initialRoute.page);
  const [currentSpecialitySlug, setCurrentSpecialitySlug] = useState(initialRoute.slug || 'knee-replacement');

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState(null);

  // Sync state with browser hash navigation (Back/Forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const route = parseHash();
      setCurrentPage(route.page);
      if (route.slug) {
        setCurrentSpecialitySlug(route.slug);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page, subSlug = '') => {
    if (page === 'speciality-detail' || (page === 'specialities' && subSlug)) {
      const slug = subSlug || 'knee-replacement';
      setCurrentPage('speciality-detail');
      setCurrentSpecialitySlug(slug);
      window.location.hash = `#specialities/${slug}`;
    } else {
      const target = page === 'specialties' ? 'specialities' : page;
      setCurrentPage(target);
      setCurrentSpecialitySlug('');
      window.location.hash = `#${target}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = () => {
    setBookingPrefill(null);
    setIsBookingModalOpen(true);
  };

  const handleBookWithData = (data) => {
    setBookingPrefill(data);
    setIsBookingModalOpen(true);
  };

  const handleOpenEmergency = () => {
    handleNavigate('contact');
  };

  const handleSelectSpecialty = (specialty) => {
    setBookingPrefill({
      department: specialty.title
    });
    setIsBookingModalOpen(true);
  };

  const handleBookDoctor = (doctor) => {
    setBookingPrefill({
      doctor: doctor.name,
      doctorId: doctor.id
    });
    setIsBookingModalOpen(true);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#f6faf9] text-[#0c1e1c] selection:bg-[#008277] selection:text-white">
        {/* 24/7 Top Emergency Bar */}
        <TopEmergencyBar onOpenEmergency={handleOpenEmergency} />

        {/* Main Sticky Navbar with Full Multi-Page Navigation */}
        <Navbar 
          onOpenBooking={handleOpenBooking} 
          onOpenEmergency={handleOpenEmergency} 
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />

        <main className="flex-1">
          {/* Dedicated Page Routing */}
          {currentPage === 'about' && (
            <AboutPage 
              onOpenBooking={handleOpenBooking} 
              onNavigate={handleNavigate} 
            />
          )}

          {currentPage === 'specialities' && (
            <SpecialitiesPage 
              onOpenBooking={handleOpenBooking} 
              onNavigate={handleNavigate} 
            />
          )}

          {currentPage === 'speciality-detail' && (
            <SpecialityDetailPage 
              specialitySlug={currentSpecialitySlug}
              onOpenBooking={handleOpenBooking} 
              onNavigate={handleNavigate} 
            />
          )}

          {currentPage === 'physiotherapy' && (
            <PhysiotherapyPage 
              onOpenBooking={handleOpenBooking} 
              onNavigate={handleNavigate} 
            />
          )}

          {currentPage === 'doctors' && (
            <DoctorsPage 
              onOpenBooking={handleOpenBooking} 
              onNavigate={handleNavigate} 
            />
          )}

          {currentPage === 'gallery' && (
            <GalleryPage 
              onOpenBooking={handleOpenBooking} 
              onNavigate={handleNavigate} 
            />
          )}

          {currentPage === 'contact' && (
            <ContactPage 
              onOpenBooking={handleOpenBooking} 
              onNavigate={handleNavigate} 
            />
          )}

          {currentPage === 'home' && (
            <>
              {/* Hero Section */}
              <HeroSection 
                onOpenBooking={handleOpenBooking} 
                onOpenEmergency={handleOpenEmergency} 
              />

              {/* About KLC Hospitals Section */}
              <AboutSection onOpenBooking={handleOpenBooking} />

              {/* Quick Appointment Finder & Booking Widget */}
              <QuickBookingWidget onBookWithData={handleBookWithData} />

              {/* Live Hospital Metrics / Benchmarks */}
              <StatsCounter />

              {/* Centers of Excellence / Specialties */}
              <SpecialitiesSection 
                onSelectSpecialty={handleSelectSpecialty} 
                onOpenBooking={handleOpenBooking}
              />

              {/* Dedicated Physiotherapy & Rehabilitation Section */}
              <PhysiotherapySection onOpenBooking={handleOpenBooking} />

              {/* Distinguished Medical Specialists */}
              <DoctorsSection onBookDoctor={handleBookDoctor} />

              {/* Hospital Infrastructure & Facilities Gallery */}
              <GallerySection />

              {/* Advanced Technology & 24x7 Facilities */}
              <FacilitiesSection 
                onOpenBooking={handleOpenBooking}
                onOpenEmergency={handleOpenEmergency}
              />

              {/* Hospital Inpatient Room Categories */}
              <RoomCategorySection onOpenBooking={handleOpenBooking} />

              {/* Verified Patient Stories & Accreditations */}
              <TestimonialsSection />

              {/* Virtual Hospital Tour & Walkthrough */}
              <HospitalTourSection onOpenBooking={handleOpenBooking} />
            </>
          )}
        </main>

        {/* Comprehensive Hospital Directory Footer */}
        <Footer 
          onOpenBooking={handleOpenBooking} 
          onOpenEmergency={handleOpenEmergency} 
          onNavigate={handleNavigate}
        />

        {/* Interactive Appointment Booking Modal */}
        <AppointmentModal 
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          initialData={bookingPrefill}
        />

        {/* Floating Left-Side Social Media Bar */}
        <FloatingSocialBar />

        {/* Floating KLC Care Bot / Virtual Health Assistant */}
        <VirtualAssistant 
          onOpenBooking={handleOpenBooking}
          onOpenEmergency={handleOpenEmergency}
        />
      </div>
    </LanguageProvider>
  );
}

