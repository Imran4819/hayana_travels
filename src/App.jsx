import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesBar from './components/FeaturesBar';
import QuickSearch from './components/QuickSearch';
import SpecialtyGrid from './components/SpecialtyGrid';
import OffersSection from './components/OffersSection';
import FleetCatalog from './components/FleetCatalog';
import FareCalculator from './components/FareCalculator';
import TourPackages from './components/TourPackages';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    vehicleName: '',
    rate: ''
  });

  const [selectedCalcVehicle, setSelectedCalcVehicle] = useState(null);

  const handleOpenModal = (vehicleName = 'General Inquiry', rate = '') => {
    setModalState({
      isOpen: true,
      vehicleName,
      rate
    });
  };

  const handleCloseModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const handleSelectVehicleForCalc = (vehicleId) => {
    setSelectedCalcVehicle(vehicleId);
    const calcSection = document.getElementById('calculator');
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      <Navbar onOpenBookingModal={handleOpenModal} />
      <Hero onOpenBookingModal={handleOpenModal} />
      <FeaturesBar />
      <QuickSearch onOpenBookingModal={handleOpenModal} />
      <SpecialtyGrid 
        onOpenBookingModal={handleOpenModal}
        onSelectVehicleForCalc={handleSelectVehicleForCalc}
      />
      <OffersSection onOpenBookingModal={handleOpenModal} />
      <FleetCatalog 
        onOpenBookingModal={handleOpenModal}
        onSelectVehicleForCalc={handleSelectVehicleForCalc}
      />
      <FareCalculator 
        selectedVehicleId={selectedCalcVehicle}
        onOpenBookingModal={handleOpenModal}
      />
      <TourPackages onOpenBookingModal={handleOpenModal} />
      <WhyChooseUs />
      <Testimonials onOpenBookingModal={handleOpenModal} />
      <Footer onOpenBookingModal={handleOpenModal} />

      <BookingModal 
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        vehicleName={modalState.vehicleName}
        rate={modalState.rate}
      />

      <a 
        href="https://wa.me/919309820905?text=Hi%20Hayana%20Travels,%20I%20want%20to%20inquire%20about%20bike/car%20rentals." 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}
