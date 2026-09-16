import React from 'react';
import { fleetData } from '../data/fleetData';

export default function FleetCatalog({ onOpenBookingModal, onSelectVehicleForCalc }) {
  return (
    <section className="section light-luxury-section" id="fleet">
      <div className="container">
        <div className="section-header">
          <div className="hero-gold-tag" style={{ justifyContent: 'center' }}>
            <span className="gold-line"></span> OUR OFFICIAL FLEET & RATE CARD
          </div>
          <h2 className="section-title-serif">Bike Rental & Car Rental Rates in Daman</h2>
          <p className="section-desc-serif" style={{ margin: '0 auto' }}>
            Official rates for TVS Jupiter Bike in Daman (scooter), Swift Dzire Sedan, and Maruti Ertiga 7-Seater Car in Daman.
          </p>
        </div>

        <div className="specialty-grid">
          {fleetData.map(item => (
            <div key={item.id} className="specialty-card-luxury">
              <div style={{ position: 'relative', height: '220px', width: '100%', overflow: 'hidden' }}>
                <img src={item.image} alt={item.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <span className="card-badge-gold">{item.badge}</span>
              </div>
              
              <div className="specialty-content-luxury">
                <span className="specialty-badge-tag">{item.location}</span>
                <h3 className="card-title-serif" style={{ fontSize: '1.4rem', margin: '6px 0' }}>{item.name}</h3>
                <p className="card-desc" style={{ marginBottom: '14px', fontWeight: 600, color: 'var(--blue-dark)' }}>
                  {item.type} • ₹{item.rateDay.toLocaleString('en-IN')} {item.rateUnit}
                </p>

                {/* RATE CARD BREAKDOWN */}
                {item.ratesList && item.ratesList.length > 0 && (
                  <div style={{ marginBottom: '14px', padding: '10px 14px', background: 'rgba(2, 132, 199, 0.05)', borderRadius: '12px', border: '1px solid rgba(2, 132, 199, 0.2)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--blue-dark)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                      <i className="fas fa-tags" style={{ marginRight: '6px', color: 'var(--gold-dark)' }}></i> Rate Card Breakdown:
                    </div>
                    {item.ratesList.map((r, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', padding: '3px 0', borderBottom: idx < item.ratesList.length - 1 ? '1px dashed var(--border-cream)' : 'none' }}>
                        <span style={{ color: 'var(--text-dark)', fontWeight: 500 }}>{r.route}</span>
                        <strong style={{ color: 'var(--gold-dark)' }}>{r.price}</strong>
                      </div>
                    ))}
                  </div>
                )}
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', padding: '10px 14px', background: '#faf8f5', borderRadius: '12px', border: '1px solid var(--border-cream)', marginBottom: '16px', fontSize: '0.83rem' }}>
                  <div style={{ color: 'var(--text-dark)' }}><i className="fas fa-users" style={{ color: 'var(--gold-dark)', marginRight: '6px' }}></i> {item.seats}</div>
                  <div style={{ color: 'var(--text-dark)' }}><i className="fas fa-gas-pump" style={{ color: 'var(--gold-dark)', marginRight: '6px' }}></i> {item.fuel}</div>
                  <div style={{ color: 'var(--text-dark)' }}><i className="fas fa-cog" style={{ color: 'var(--gold-dark)', marginRight: '6px' }}></i> {item.transmission}</div>
                  <div style={{ color: 'var(--text-dark)' }}><i className="fas fa-suitcase" style={{ color: 'var(--gold-dark)', marginRight: '6px' }}></i> {item.luggage}</div>
                </div>
                
                <ul className="luxury-features-list" style={{ marginBottom: '18px' }}>
                  {item.features.map((feat, idx) => (
                    <li key={idx}><i className="fas fa-check gold-check"></i> {feat}</li>
                  ))}
                </ul>

                <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                  <button 
                    className="btn btn-gold-luxury btn-sm" 
                    onClick={() => onSelectVehicleForCalc(item.id)}
                  >
                    <i className="fas fa-calculator"></i> Estimator
                  </button>
                  <button 
                    className="btn dark-whatsapp-btn btn-sm" 
                    onClick={() => onOpenBookingModal(item.name, `₹${item.rateDay.toLocaleString('en-IN')}`)}
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

