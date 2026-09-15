import React from 'react';

export default function SpecialtyGrid({ onOpenBookingModal, onSelectVehicleForCalc }) {
  return (
    <section className="section light-luxury-section" id="specialties">
      <div className="container">
        <div className="section-header text-left-header">
          <div className="hero-gold-tag" style={{ justifyContent: 'center' }}>
            <span className="gold-line"></span> DAMAN & DIU ONLY
          </div>
          <h2 className="section-title-serif">Rent a Bike</h2>
          <p className="section-desc-serif">
            Explore every beach lane, fort road, and coastal highway of Daman & Diu on two wheels. All bikes include a helmet and full tank.
          </p>
        </div>

        <div className="specialty-grid">
          {/* TVS Jupiter Specialty Card */}
          <div className="specialty-card-luxury">
            <div className="card-badge-gold">MOST POPULAR</div>
            <img src="/assets/images/jupiter_real.png" className="specialty-img-luxury" alt="TVS Jupiter Scooter Daman" />
            <div className="specialty-content-luxury">
              <span className="specialty-badge-tag">TWO WHEELER • DAMAN ONLY</span>
              <h3 className="card-title-serif">TVS Jupiter (Scooter)</h3>
              <p className="card-desc">
                Comfortable 110cc automatic scooter available <strong>ONLY FOR DAMAN RENTALS</strong>. Free doorstep delivery to Miramar, Devka, or any hotel in Daman.
              </p>
              <ul className="luxury-features-list">
                <li><i className="fas fa-check gold-check"></i> 2 Clean Sanitized Helmets Included</li>
                <li><i className="fas fa-check gold-check"></i> Free Hotel & Resort Delivery in Daman</li>
                <li><i className="fas fa-check gold-check"></i> Unlimited Kilometers</li>
                <li><i className="fas fa-shield-alt gold-check"></i> Valid DL & Aadhar Verification</li>
              </ul>
              <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                <button className="btn btn-gold-luxury btn-sm" onClick={() => onSelectVehicleForCalc('tvs-jupiter')}>
                  <i className="fas fa-calculator"></i> Rate Estimator
                </button>
                <button className="btn dark-whatsapp-btn btn-sm" onClick={() => onOpenBookingModal('TVS Jupiter Daman (Scooter)', '₹450/day')}>
                  <i className="fab fa-whatsapp"></i> Reserve Scooter
                </button>
              </div>
            </div>
          </div>

          {/* Ertiga Specialty Card */}
          <div className="specialty-card-luxury">
            <div className="card-badge-gold">FAMILY FRIENDLY</div>
            <img src="/assets/images/ertiga_real.png" className="specialty-img-luxury" alt="Maruti Suzuki Ertiga Car All Over India" />
            <div className="specialty-content-luxury">
              <span className="specialty-badge-tag gold-badge">7-SEATER CAR • ALL OVER INDIA</span>
              <h3 className="card-title-serif">Maruti Suzuki Ertiga</h3>
              <p className="card-desc">
                Spacious 7-seater MPV car available for outstation tours & pilgrimages <strong>ALL OVER INDIA</strong>. Driven by professional uniform drivers.
              </p>
              <ul className="luxury-features-list">
                <li><i className="fas fa-user-tie gold-check"></i> <strong>With Professional Driver Only</strong></li>
                <li><i className="fas fa-check gold-check"></i> All India Tourist Permit</li>
                <li><i className="fas fa-check gold-check"></i> Clean AC 7-Seater Cabin</li>
                <li><i className="fas fa-check gold-check"></i> Flexible Daily & Km Outstation Packages</li>
              </ul>
              <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                <button className="btn btn-gold-luxury btn-sm" onClick={() => onSelectVehicleForCalc('maruti-ertiga')}>
                  <i className="fas fa-calculator"></i> Rate Estimator
                </button>
                <button className="btn dark-whatsapp-btn btn-sm" onClick={() => onOpenBookingModal('Maruti Ertiga (All Over India Car)', '₹12/km')}>
                  <i className="fab fa-whatsapp"></i> Reserve Ertiga
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
