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
            #1 Bike Rental & Car Rental in Daman.<br />
            <span className="serif-gold-text">Hayana Travels</span>
          </h1>

          <p className="hero-serif-subtitle">
            Best Bike Rental in <strong>Daman</strong> from ₹400/day. Swift Dzire Sedan & Maruti Ertiga 7-Seater Car Rental in <strong>Daman Local & All-India Drops</strong>. Free Devka hotel doorstep delivery!
          </p>

          <div className="hero-bullets-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <div className="bullet-luxury-item">
              <i className="fas fa-motorcycle gold-bullet-icon"></i>
              <div>
                <strong>TVS Jupiter Scooter</strong>
                <p>₹400/Day • Daman Only</p>
              </div>
            </div>
            <div className="bullet-luxury-item">
              <i className="fas fa-car gold-bullet-icon"></i>
              <div>
                <strong>Swift Dzire Sedan</strong>
                <p>Local ₹2,200 • ₹13/km (Min 300km)</p>
              </div>
            </div>
            <div className="bullet-luxury-item">
              <i className="fas fa-shuttle-van gold-bullet-icon"></i>
              <div>
                <strong>Maruti Ertiga 7-Seater</strong>
                <p>Local ₹3,000 • ₹15/km (Min 300km)</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '24px' }}>
            <button 
              className="btn btn-gold-luxury btn-sm"
              onClick={() => onOpenBookingModal('Swift Dzire (Sedan)', '₹2,200/8H')}
            >
              <i className="fas fa-car"></i> Swift Dzire (₹2,200)
            </button>
            <button 
              className="btn btn-gold-luxury btn-sm"
              onClick={() => onOpenBookingModal('Maruti Ertiga VXI (7-Seater)', '₹3,000/8H')}
            >
              <i className="fas fa-shuttle-van"></i> Ertiga VXI (₹3,000)
            </button>
            <button 
              className="btn dark-whatsapp-btn btn-sm"
              onClick={() => onOpenBookingModal('TVS Jupiter (Daman Only)', '₹400/day')}
            >
              <i className="fab fa-whatsapp"></i> TVS Jupiter (₹400)
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
