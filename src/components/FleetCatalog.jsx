import React from 'react';
import { fleetData } from '../data/fleetData';

export default function FleetCatalog({ onOpenBookingModal, onSelectVehicleForCalc }) {
  return (
    <section className="section light-luxury-section" id="fleet">
      <div className="container">
        <div className="section-header">
          <div className="hero-gold-tag" style={{ justifyContent: 'center' }}>
            <span className="gold-line"></span> OUR OFFICIAL FLEET
          </div>
          <h2 className="section-title-serif">Verified Vehicles Available for Rent</h2>
          <p className="section-desc-serif" style={{ margin: '0 auto' }}>
            Choose between our TVS Jupiter (Two Wheeler - Only for Daman) or Maruti Ertiga 7-Seater Car (All Over India).
          </p>
        </div>

        <div className="specialty-grid">
          {fleetData.map(item => (
            <div key={item.id} className="specialty-card-luxury">
              <div style={{ position: 'relative', height: '240px', width: '100%', overflow: 'hidden' }}>
                <img src={item.image} alt={item.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <span className="card-badge-gold">{item.badge}</span>
              </div>
              
              <div className="specialty-content-luxury">
                <span className="specialty-badge-tag">{item.location}</span>
                <h3 className="card-title-serif" style={{ fontSize: '1.5rem', margin: '6px 0' }}>{item.name}</h3>
                <p className="card-desc" style={{ marginBottom: '16px' }}>{item.type} • ₹{item.rateDay} {item.rateUnit}</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', padding: '10px 14px', background: '#faf8f5', borderRadius: '12px', border: '1px solid var(--border-cream)', marginBottom: '18px', fontSize: '0.85rem' }}>
                  <div style={{ color: 'var(--text-dark)' }}><i className="fas fa-users" style={{ color: 'var(--gold-dark)', marginRight: '6px' }}></i> {item.seats}</div>
                  <div style={{ color: 'var(--text-dark)' }}><i className="fas fa-gas-pump" style={{ color: 'var(--gold-dark)', marginRight: '6px' }}></i> {item.fuel}</div>
                  <div style={{ color: 'var(--text-dark)' }}><i className="fas fa-cog" style={{ color: 'var(--gold-dark)', marginRight: '6px' }}></i> {item.transmission}</div>
                  <div style={{ color: 'var(--text-dark)' }}><i className="fas fa-suitcase" style={{ color: 'var(--gold-dark)', marginRight: '6px' }}></i> {item.luggage}</div>
                </div>
                
                <ul className="luxury-features-list">
                  {item.features.map((feat, idx) => (
                    <li key={idx}><i className="fas fa-check gold-check"></i> {feat}</li>
                  ))}
                </ul>

                <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                  <button 
                    className="btn btn-gold-luxury btn-sm" 
                    onClick={() => onSelectVehicleForCalc(item.id)}
                  >
                    <i className="fas fa-calculator"></i> Fare Estimator
                  </button>
                  <button 
                    className="btn dark-whatsapp-btn btn-sm" 
                    onClick={() => onOpenBookingModal(item.name, `₹${item.rateDay}/Day`)}
                  >
                    <i className="fab fa-whatsapp"></i> Reserve Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
