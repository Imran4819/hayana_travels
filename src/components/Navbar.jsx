import React, { useState } from 'react';

export default function Navbar({ onOpenBookingModal, onOpenLoginModal, currentUser, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Announcement Ticker Line */}
      <div className="top-ticker-bar">
        <div className="ticker-track">
          <span>Self Drive Daman: TVS Jupiter ₹600 (Dep. ₹1,000) • Swift Dzire ₹2,200 (Dep. ₹3,000) • Ertiga ₹2,800 (Dep. ₹4,000)</span>
          <span className="ticker-dot">•</span>
          <span>DL Compulsory &amp; Fuel Not Included • Deposit Refunded on Drop</span>
          <span className="ticker-dot">•</span>
          <span>Fixed City Drops: Vapi Station Drop ₹700 (Dzire) / ₹900 (Ertiga)</span>
          <span className="ticker-dot">•</span>
          <span>All India Outstation: Swift Dzire ₹13/km • Ertiga 7-Seater ₹15/km (Min 300km/day + Toll &amp; Parking)</span>
          <span className="ticker-dot">•</span>
          <span>Santosh Abhale (+91 93098 20905)</span>
          <span className="ticker-dot">•</span>
          <span>Self Drive Daman: TVS Jupiter ₹600 (Dep. ₹1,000) • Swift Dzire ₹2,200 (Dep. ₹3,000) • Ertiga ₹2,800 (Dep. ₹4,000)</span>
          <span className="ticker-dot">•</span>
          <span>DL Compulsory &amp; Fuel Not Included • Deposit Refunded on Drop</span>
          <span className="ticker-dot">•</span>
          <span>Fixed City Drops: Vapi Station Drop ₹700 (Dzire) / ₹900 (Ertiga)</span>
          <span className="ticker-dot">•</span>
          <span>All India Outstation: Swift Dzire ₹13/km • Ertiga 7-Seater ₹15/km (Min 300km/day + Toll &amp; Parking)</span>
          <span className="ticker-dot">•</span>
          <span>Santosh Abhale (+91 93098 20905)</span>
          <span className="ticker-dot">•</span>
        </div>
      </div>

      {/* Main Navbar Header */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#" className="brand-logo" aria-label="Hayana Travels Home">
            <div className="logo-badge-wrapper">
              <img src="/logo.png" alt="Hayana Travels Logo" className="brand-logo-img" />
            </div>
            <div className="brand-title-box">
              <span className="brand-title-main">HAYANA</span>
              <span className="brand-title-sub">TRAVELS</span>
            </div>
          </a>

          {/* Desktop Menu - Hidden on screens <= 992px */}
          <ul className="nav-menu desktop-menu-only">
            <li><a href="#hero" className="nav-link active">Home</a></li>
            <li><a href="#fleet" className="nav-link">Bikes &amp; Cars</a></li>
            <li><a href="#offers" className="nav-link">Coupons &amp; Offers</a></li>
            <li><a href="#calculator" className="nav-link">Fare Calculator</a></li>
            <li><a href="#payment-methods" className="nav-link">Payments</a></li>
            <li><a href="#reviews" className="nav-link">Reviews</a></li>
          </ul>

          <div className="nav-actions">
            {currentUser ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--gold-dark)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <i className="fas fa-user-circle" style={{ fontSize: '1.2rem' }}></i> {currentUser.name.split(' ')[0]}
                </span>
                <button 
                  className="btn btn-sm"
                  style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#dc2626', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '4px 10px', borderRadius: '8px' }}
                  onClick={onLogout}
                  title="Logout"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                className="btn btn-gold-luxury btn-sm"
                onClick={onOpenLoginModal}
              >
                <i className="fas fa-user"></i> Login
              </button>
            )}

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
          <div className="brand-logo">
            <div className="logo-badge-wrapper" style={{ padding: '3px 6px' }}>
              <img src="/logo.png" alt="Hayana Travels Logo" className="brand-logo-img" style={{ height: '32px' }} />
            </div>
            <div className="brand-title-box">
              <span className="brand-title-main" style={{ fontSize: '1.05rem' }}>HAYANA</span>
              <span className="brand-title-sub" style={{ fontSize: '0.62rem' }}>TRAVELS</span>
            </div>
          </div>
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
            <li>
              {currentUser ? (
                <a href="#logout" className="sidebar-link" onClick={(e) => { e.preventDefault(); handleLinkClick(); onLogout(); }}>
                  <i className="fas fa-sign-out-alt" style={{ color: '#ef4444' }}></i> Logout ({currentUser.name.split(' ')[0]})
                </a>
              ) : (
                <a href="#login" className="sidebar-link" onClick={(e) => { e.preventDefault(); handleLinkClick(); onOpenLoginModal(); }}>
                  <i className="fas fa-user-lock" style={{ color: 'var(--gold-dark)' }}></i> Login
                </a>
              )}
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

