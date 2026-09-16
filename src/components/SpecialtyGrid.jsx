import React from 'react';

export default function SpecialtyGrid({ onOpenBookingModal, onSelectVehicleForCalc }) {
  return (
    <section className="section light-luxury-section" id="specialties">
      <div className="container">
        <div className="section-header text-left-header">
          <div className="hero-gold-tag" style={{ justifyContent: 'center' }}>
            <span className="gold-line"></span> DAMAN & ALL OVER INDIA
          </div>
          <h2 className="section-title-serif">Featured Vehicle Rentals</h2>
          <p className="section-desc-serif">
            Rent TVS Jupiter Scooters in Daman, Swift Dzire Sedans for Local & Outstation drops, or Maruti Ertiga VXI 7-Seater MPVs for All-India tours.
          </p>
        </div>

        <div className="specialty-grid">
          {/* TVS Jupiter Specialty Card */}
          <div className="specialty-card-luxury">
            <div className="card-badge-gold">DAMAN SCOOTER</div>
            <img src="/assets/images/jupiter_real.png" className="specialty-img-luxury" alt="TVS Jupiter Scooter Daman" />
            <div className="specialty-content-luxury">
              <span className="specialty-badge-tag">TWO WHEELER • DAMAN ONLY</span>
              <h3 className="card-title-serif">TVS Jupiter (Scooter)</h3>
              <p className="card-desc" style={{ color: 'var(--blue-dark)', fontWeight: 700 }}>
                ₹400 / Day • Unlimited KM in Daman
              </p>
              <ul className="luxury-features-list">
                <li><i className="fas fa-check gold-check"></i> 2 Clean Sanitized Helmets Included</li>
                <li><i className="fas fa-check gold-check"></i> Free Hotel & Resort Delivery in Daman</li>
                <li><i className="fas fa-check gold-check"></i> Quick 2-Min Paperwork (DL & Aadhar)</li>
              </ul>
              <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                <button className="btn btn-gold-luxury btn-sm" onClick={() => onSelectVehicleForCalc('tvs-jupiter')}>
                  <i className="fas fa-calculator"></i> Estimator
                </button>
                <button className="btn dark-whatsapp-btn btn-sm" onClick={() => onOpenBookingModal('TVS Jupiter Daman (Scooter)', '₹400/day')}>
                  <i className="fab fa-whatsapp"></i> Reserve
                </button>
              </div>
            </div>
          </div>

          {/* Swift Dzire Specialty Card */}
          <div className="specialty-card-luxury">
            <div className="card-badge-gold">SEDAN DROPS</div>
            <img src="/assets/images/swift_dzire_real.png" className="specialty-img-luxury" alt="Swift Dzire Sedan Car" />
            <div className="specialty-content-luxury">
              <span className="specialty-badge-tag gold-badge">SEDAN • WITH DRIVER</span>
              <h3 className="card-title-serif">Swift Dzire (Sedan)</h3>
              <p className="card-desc" style={{ color: 'var(--blue-dark)', fontWeight: 700 }}>
                8H Local ₹2,200 • Outstation ₹13 / km
              </p>
              <ul className="luxury-features-list">
                <li><i className="fas fa-check gold-check"></i> Outstation Rate: <strong>₹13 / km</strong> (Min 300 km/day)</li>
                <li><i className="fas fa-receipt gold-check"></i> <strong>Toll Tax & Parking extra</strong> as per actuals</li>
                <li><i className="fas fa-check gold-check"></i> Local 8H: ₹2,200 | Vapi Station Drop: <strong>₹700</strong></li>
              </ul>
              <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                <button className="btn btn-gold-luxury btn-sm" onClick={() => onSelectVehicleForCalc('swift-dzire')}>
                  <i className="fas fa-calculator"></i> Estimator
                </button>
                <button className="btn dark-whatsapp-btn btn-sm" onClick={() => onOpenBookingModal('Swift Dzire (Sedan)', '₹13/km')}>
                  <i className="fab fa-whatsapp"></i> Reserve
                </button>
              </div>
            </div>
          </div>

          {/* Ertiga Specialty Card */}
          <div className="specialty-card-luxury">
            <div className="card-badge-gold">7-SEATER MPV</div>
            <img src="/assets/images/ertiga_real.png" className="specialty-img-luxury" alt="Maruti Suzuki Ertiga Car All Over India" />
            <div className="specialty-content-luxury">
              <span className="specialty-badge-tag gold-badge">7-SEATER • ALL OVER INDIA</span>
              <h3 className="card-title-serif">Maruti Ertiga VXI</h3>
              <p className="card-desc" style={{ color: 'var(--blue-dark)', fontWeight: 700 }}>
                8H Local ₹3,000 • Outstation ₹15 / km
              </p>
              <ul className="luxury-features-list">
                <li><i className="fas fa-check gold-check"></i> Outstation Rate: <strong>₹15 / km</strong> (Min 300 km/day)</li>
                <li><i className="fas fa-receipt gold-check"></i> <strong>Toll Tax & Parking extra</strong> as per actuals</li>
                <li><i className="fas fa-user-tie gold-check"></i> 7-Seater AC Comfort with Driver</li>
              </ul>
              <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                <button className="btn btn-gold-luxury btn-sm" onClick={() => onSelectVehicleForCalc('ertiga-vxi')}>
                  <i className="fas fa-calculator"></i> Estimator
                </button>
                <button className="btn dark-whatsapp-btn btn-sm" onClick={() => onOpenBookingModal('Maruti Ertiga VXI (7-Seater)', '₹15/km')}>
                  <i className="fab fa-whatsapp"></i> Reserve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

