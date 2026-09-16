import React, { useState } from 'react';
import { specialOffers } from '../data/fleetData';
import AddOfferModal from './AddOfferModal';

export default function OffersSection({ onOpenBookingModal, onOpenLoginModal, currentUser }) {
  const [offersList, setOffersList] = useState(specialOffers);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState('');

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode('');
    }, 2500);
  };

  const handleAddNewOffer = (newOffer) => {
    setOffersList(prev => [newOffer, ...prev]);
  };

  return (
    <section className="section light-luxury-section" id="offers">
      <div className="container">
        {/* TOAST NOTIFICATION */}
        {copiedCode && (
          <div style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            background: 'var(--bg-dark)',
            color: 'var(--gold-primary)',
            padding: '14px 22px',
            borderRadius: '14px',
            border: '1px solid var(--border-gold)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '0.92rem',
            fontWeight: 700
          }}>
            <i className="fas fa-check-circle" style={{ fontSize: '1.2rem', color: '#10b981' }}></i>
            Coupon code '{copiedCode}' copied to clipboard!
          </div>
        )}

        <div className="section-header" style={{ position: 'relative' }}>
          <div className="hero-gold-tag" style={{ justifyContent: 'center' }}>
            <span className="gold-line"></span> REWARD COUPONS & OFFERS
          </div>
          <h2 className="section-title-serif">Active Coupon Codes &amp; Special Deals</h2>
          <p className="section-desc-serif" style={{ margin: '0 auto 20px' }}>
            Copy coupon codes below and apply them during booking to get flat discounts &amp; free rewards on Hayana Travels.
          </p>

          {/* ADD OFFER BUTTON - VISIBLE ONLY WHEN LOGGED IN */}
          {currentUser && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '12px' }}>
              <button 
                className="btn btn-gold-luxury btn-md"
                onClick={() => setIsAddModalOpen(true)}
              >
                <i className="fas fa-plus-circle"></i> Add New Offer &amp; Coupon Code
              </button>
            </div>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {offersList.map(offer => (
            <div 
              key={offer.id} 
              className="specialty-card-luxury"
              style={{ padding: '28px', justifyContent: 'space-between', border: '1.5px solid var(--border-cream)' }}
            >
              <div className="card-badge-gold">
                {offer.badge}
              </div>

              <div style={{ marginTop: '24px' }}>
                <span className="specialty-badge-tag gold-badge">
                  <i className="fas fa-ticket-alt" style={{ marginRight: '4px' }}></i> {offer.tag}
                </span>
                <h3 className="card-title-serif" style={{ fontSize: '1.4rem', margin: '10px 0 12px' }}>
                  {offer.title}
                </h3>
                <p className="card-desc" style={{ marginBottom: '20px' }}>
                  {offer.subtitle}
                </p>
              </div>

              <div>
                {/* PROMO CODE DISPLAY & COPY BUTTON */}
                <div style={{ 
                  display: 'flex', 
                  justify: 'space-between', 
                  alignItems: 'center', 
                  padding: '12px 16px', 
                  background: '#faf8f5', 
                  borderRadius: '12px', 
                  marginBottom: '16px',
                  border: '1.5px dashed var(--gold-dark)'
                }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted-dark)', fontWeight: 700, display: 'block', textTransform: 'uppercase' }}>Coupon Code</span>
                    <strong style={{ color: 'var(--gold-dark)', fontSize: '1.2rem', letterSpacing: '1px' }}>{offer.code}</strong>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-gold-luxury"
                    onClick={() => handleCopyCode(offer.code)}
                    style={{ fontSize: '0.78rem', padding: '6px 12px' }}
                  >
                    <i className="fas fa-copy"></i> Copy Code
                  </button>
                </div>

                <button 
                  className="btn dark-whatsapp-btn" 
                  style={{ width: '100%' }}
                  onClick={() => {
                    if (!currentUser && onOpenLoginModal) {
                      onOpenLoginModal();
                    } else {
                      onOpenBookingModal(`Coupon Deal: ${offer.title} (${offer.code})`, offer.rate);
                    }
                  }}
                >
                  <i className="fas fa-ticket-alt"></i> Apply {offer.code} &amp; Book
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ADD OFFER MODAL DIALOG */}
        <AddOfferModal 
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAddOffer={handleAddNewOffer}
        />
      </div>
    </section>
  );
}
