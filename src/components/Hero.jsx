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
            Your journey.<br />
            <span className="serif-gold-text">Our wheels.</span>
          </h1>

          <p className="hero-serif-subtitle">
            Trusted bike rentals in <strong>Daman & Diu</strong> from ₹400/day. Maruti Ertiga car hire <strong>all over India</strong> from ₹12/km.
          </p>

          <div className="hero-bullets-grid">
            <div className="bullet-luxury-item">
              <i className="fas fa-motorcycle gold-bullet-icon"></i>
              <div>
                <strong>TVS Jupiter (Scooter)</strong>
                <p>Available ONLY FOR DAMAN • Free Doorstep Delivery</p>
              </div>
            </div>
            <div className="bullet-luxury-item">
              <i className="fas fa-user-tie gold-bullet-icon"></i>
              <div>
                <strong>Maruti Ertiga (7-Seater)</strong>
                <p>With Professional Driver Only • All Over India</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '28px' }}>
            <button 
              className="btn btn-gold-luxury btn-lg"
              onClick={() => onOpenBookingModal('TVS Jupiter (Daman Only)', '₹400/day')}
            >
              <i className="fas fa-motorcycle"></i> Rent TVS Jupiter
            </button>
            <button 
              className="btn btn-dark-luxury btn-lg"
              onClick={() => onOpenBookingModal('Maruti Ertiga (With Driver)', '₹12/km')}
            >
              <i className="fas fa-car"></i> Rent Ertiga (With Driver)
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
