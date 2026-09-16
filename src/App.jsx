import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesBar from './components/FeaturesBar';
import QuickSearch from './components/QuickSearch';
import FleetCatalog from './components/FleetCatalog';
import SpecialtyGrid from './components/SpecialtyGrid';
import OffersSection from './components/OffersSection';
import FareCalculator from './components/FareCalculator';
import PaymentMethods from './components/PaymentMethods';
import TourPackages from './components/TourPackages';
import Testimonials from './components/Testimonials';
import BookingModal from './components/BookingModal';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';

export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    vehicleName: '',
    rate: ''
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedCalcVehicle, setSelectedCalcVehicle] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('hayana_user');
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (err) {
        console.error('Failed to parse saved user:', err);
      }
    }
  }, []);

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

  const handleLogout = () => {
    localStorage.removeItem('hayana_user');
    setCurrentUser(null);
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
      <Navbar 
        onOpenBookingModal={handleOpenModal}
        onOpenLoginModal={() => setIsLoginModalOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
      />
      <Hero onOpenBookingModal={handleOpenModal} />
      <FeaturesBar />
      <QuickSearch onOpenBookingModal={handleOpenModal} />
      <SpecialtyGrid 
        onOpenBookingModal={handleOpenModal}
        onSelectVehicleForCalc={handleSelectVehicleForCalc}
      />
      <FleetCatalog 
        onOpenBookingModal={handleOpenModal}
        onSelectVehicleForCalc={handleSelectVehicleForCalc}
      />
      <OffersSection 
        onOpenBookingModal={handleOpenModal}
        onOpenLoginModal={() => setIsLoginModalOpen(true)}
        currentUser={currentUser}
      />
      <FareCalculator 
        selectedVehicleId={selectedCalcVehicle}
        onOpenBookingModal={handleOpenModal}
      />
      <PaymentMethods />
      <TourPackages onOpenBookingModal={handleOpenModal} />
      <Testimonials onOpenBookingModal={handleOpenModal} />
      <Footer onOpenBookingModal={handleOpenModal} />

      <BookingModal 
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        vehicleName={modalState.vehicleName}
        rate={modalState.rate}
        currentUser={currentUser}
        onOpenLoginModal={() => setIsLoginModalOpen(true)}
      />

      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={(user) => setCurrentUser(user)}
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
