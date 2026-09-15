import React from 'react';
import { specialOffers } from '../data/fleetData';

export default function OffersSection({ onOpenBookingModal }) {
  return (
    <section className="section light-luxury-section" id="offers">
      <div className="container">
        <div className="section-header">
          <div className="hero-gold-tag" style={{ justifyContent: 'center' }}>
            <span className="gold-line"></span> EXCLUSIVE SAVINGS
          </div>
          <h2 className="section-title-serif">Special Offers & Discount Packages</h2>
          <p className="section-desc-serif" style={{ margin: '0 auto' }}>
            Take advantage of our current seasonal deals on TVS Jupiter in Daman & Diu and Maruti Ertiga across India.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {specialOffers.map(offer => (
            <div 
              key={offer.id} 
              className="specialty-card-luxury"
              style={{ padding: '28px', justifyContent: 'space-between' }}
            >
              <div className="card-badge-gold">
                {offer.badge}
              </div>

              <div style={{ marginTop: '24px' }}>
                <span className="specialty-badge-tag">
                  {offer.tag}
                </span>
                <h3 className="card-title-serif" style={{ fontSize: '1.4rem', margin: '10px 0 12px' }}>
                  {offer.title}
                </h3>
                <p className="card-desc" style={{ marginBottom: '20px' }}>
                  {offer.subtitle}
                </p>
              </div>

              <div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  padding: '12px 16px', 
                  background: '#faf8f5', 
                  borderRadius: '12px', 
                  marginBottom: '18px',
                  border: '1px dashed var(--gold-primary)'
                }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted-dark)', fontWeight: 600 }}>Use Promo Code:</span>
                  <strong style={{ color: 'var(--gold-dark)', fontSize: '1rem', letterSpacing: '1px' }}>{offer.code}</strong>
                </div>

                <button 
                  className="btn dark-whatsapp-btn" 
                  style={{ width: '100%' }}
                  onClick={() => onOpenBookingModal(`Offer Deal: ${offer.title}`, offer.rate)}
                >
                  <i className="fab fa-whatsapp"></i> Claim Offer on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
