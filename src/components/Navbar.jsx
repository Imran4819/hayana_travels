import React, { useState } from 'react';

export default function Navbar({ onOpenBookingModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Announcement Ticker Line */}
      <div className="top-ticker-bar">
        <div className="ticker-track">
          <span>Maruti Ertiga Car Hire All Over India from ₹12/km</span>
          <span className="ticker-dot">•</span>
          <span>Helmet + Full Tank Included with Every Bike</span>
          <span className="ticker-dot">•</span>
          <span>Booking Confirmed in 30 Minutes</span>
          <span className="ticker-dot">•</span>
          <span>500+ Happy Customers</span>
          <span className="ticker-dot">•</span>
          <span>Santosh Abhale (+91 93098 20905)</span>
          <span className="ticker-dot">•</span>
          <span>Maruti Ertiga Car Hire All Over India from ₹12/km</span>
          <span className="ticker-dot">•</span>
          <span>Helmet + Full Tank Included with Every Bike</span>
          <span className="ticker-dot">•</span>
          <span>Booking Confirmed in 30 Minutes</span>
          <span className="ticker-dot">•</span>
          <span>500+ Happy Customers</span>
          <span className="ticker-dot">•</span>
          <span>Santosh Abhale (+91 93098 20905)</span>
          <span className="ticker-dot">•</span>
        </div>
      </div>

      {/* Main Navbar Header */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#" className="brand-logo" aria-label="Hayana Travels Home">
            <img src="/logo.png" alt="Hayana Travels Logo" className="brand-logo-img" />
          </a>

          {/* Desktop Menu - Hidden on screens <= 992px */}
          <ul className="nav-menu desktop-menu-only">
            <li><a href="#hero" className="nav-link active">Home</a></li>
            <li><a href="#fleet" className="nav-link">Bikes</a></li>
            <li><a href="#fleet" className="nav-link">Cars</a></li>
            <li><a href="#specialties" className="nav-link">About</a></li>
            <li><a href="#calculator" className="nav-link">Fare Calculator</a></li>
            <li><a href="#reviews" className="nav-link">Reviews</a></li>
          </ul>

          <div className="nav-actions">
            <button 
              className="btn dark-whatsapp-btn desktop-only-btn" 
              onClick={() => onOpenBookingModal('Quick Navigation Inquiry', '')}
            >
              <i className="fab fa-whatsapp"></i> WhatsApp Us
            </button>

            {/* Mobile Hamburger Button - Shown on screens <= 992px */}
            <button 
              className="mobile-toggle" 
              aria-label="Open Left Sidebar Menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      {/* LEFT-SIDE SIDEBAR DRAWER OVERLAY */}
      <div 
        className={`sidebar-backdrop ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* LEFT-SIDE OFF-CANVAS SIDEBAR DRAWER */}
      <aside className={`sidebar-drawer ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <img src="/logo.png" alt="Hayana Travels Logo" className="brand-logo-img" style={{ height: '36px' }} />
          <button 
            className="sidebar-close-btn" 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Sidebar Menu"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul className="sidebar-links">
            <li>
              <a href="#hero" className="sidebar-link" onClick={handleLinkClick}>
                <i className="fas fa-home"></i> Home
              </a>
            </li>
            <li>
              <a href="#fleet" className="sidebar-link" onClick={handleLinkClick}>
                <i className="fas fa-motorcycle"></i> Bike Rentals (Daman)
              </a>
            </li>
            <li>
              <a href="#fleet" className="sidebar-link" onClick={handleLinkClick}>
                <i className="fas fa-car"></i> Ertiga Cars (All India)
              </a>
            </li>
            <li>
              <a href="#specialties" className="sidebar-link" onClick={handleLinkClick}>
                <i className="fas fa-info-circle"></i> About Us
              </a>
            </li>
            <li>
              <a href="#calculator" className="sidebar-link" onClick={handleLinkClick}>
                <i className="fas fa-calculator"></i> Fare Calculator
              </a>
            </li>
            <li>
              <a href="#reviews" className="sidebar-link" onClick={handleLinkClick}>
                <i className="fas fa-star"></i> Reviews & Ratings
              </a>
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <button 
            className="btn dark-whatsapp-btn" 
            style={{ width: '100%' }}
            onClick={() => { setMobileMenuOpen(false); onOpenBookingModal('Left Sidebar WhatsApp Inquiry', ''); }}
          >
            <i className="fab fa-whatsapp"></i> WhatsApp Us
          </button>

          <div style={{ marginTop: '16px', fontSize: '0.8rem', color: '#a8a29e', textAlign: 'center' }}>
            <p><strong>Santosh Abhale</strong></p>
            <p>+91 93098 20905 • Daman</p>
          </div>
        </div>
      </aside>
    </>
  );
}

