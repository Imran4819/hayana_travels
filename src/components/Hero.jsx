import React from 'react';

export default function Hero({ onOpenBookingModal }) {
  return (
    <section className="hero-section dark-luxury-hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-gold-tag">
            <span className="gold-line"></span> DAMAN · DIU · ALL OF INDIA
          </div>
          
          <h1 className="hero-serif-title">
            Best Bike Rental & Car Rental in Daman.<br />
            <span className="serif-gold-text">Hayana Travels</span>
          </h1>

          <p className="hero-serif-subtitle">
            <strong>Self Drive in Daman</strong> (DL Compulsory, Fuel Extra, Refundable Deposit on handover) &amp; <strong>Chauffeur Driven Cars</strong> for Fixed City Drops &amp; All-India Outstation Tours!
          </p>

          <div className="hero-bullets-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <div className="bullet-luxury-item">
              <i className="fas fa-motorcycle gold-bullet-icon"></i>
              <div>
                <strong>TVS Jupiter (Self Drive)</strong>
                <p>₹600/Day • Deposit ₹1,000 (Refundable)</p>
              </div>
            </div>
            <div className="bullet-luxury-item">
              <i className="fas fa-car gold-bullet-icon"></i>
              <div>
                <strong>Swift Dzire (Sedan)</strong>
                <p>Self Drive ₹2,200 (Dep. ₹3k) • ₹13/km</p>
              </div>
            </div>
            <div className="bullet-luxury-item">
              <i className="fas fa-shuttle-van gold-bullet-icon"></i>
              <div>
                <strong>Ertiga VXI (7-Seater)</strong>
                <p>Self Drive ₹2,800 (Dep. ₹4k) • ₹15/km</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '24px' }}>
            <button 
              className="btn btn-gold-luxury btn-sm"
              onClick={() => onOpenBookingModal('Self Drive Inquiry', 'Jupiter ₹600 / Dzire ₹2200 / Ertiga ₹2800')}
            >
              <i className="fas fa-key"></i> 1st Sec: Self Drive
            </button>
            <button 
              className="btn btn-gold-luxury btn-sm"
              onClick={() => onOpenBookingModal('With Driver Inquiry', 'Ertiga & Swift Dzire')}
            >
              <i className="fas fa-user-tie"></i> 2nd Sec: With Driver
            </button>
            <button 
              className="btn dark-whatsapp-btn btn-sm"
              onClick={() => onOpenBookingModal('Fixed Route Drop Inquiry', 'Vapi / Surat / Mumbai')}
            >
              <i className="fas fa-route"></i> 3rd Sec: Fixed Drops
            </button>
            <button 
              className="btn btn-gold-luxury btn-sm"
              onClick={() => onOpenBookingModal('All India Outstation Inquiry', 'Dzire ₹13/km | Ertiga ₹15/km')}
            >
              <i className="fas fa-globe"></i> 4th Sec: All India
            </button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-card-luxury">
            <img src="/assets/images/ertiga_real.png" alt="Hayana Travels Luxury Fleet" />
            <div className="hero-overlay-tag-dark">
              <div className="tag-info">
                <h4 style={{ color: '#ffffff' }}>Santosh Abhale • Hayana Travels</h4>
                <p style={{ color: '#d4af37' }}>★ 4.9 Verified Rating • Miramar Devka Beach</p>
              </div>
              <button 
                className="btn dark-whatsapp-btn btn-sm"
                onClick={() => onOpenBookingModal('Hero Luxury Reservation', '')}
              >
                <i className="fab fa-whatsapp"></i> Reserve Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
