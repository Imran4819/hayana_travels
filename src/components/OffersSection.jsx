import React, { useState, useEffect } from 'react';
import AddOfferModal from './AddOfferModal';

export default function OffersSection({ onOpenBookingModal, onOpenLoginModal, currentUser }) {
  const [offersList, setOffersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState('');

  // Fetch coupons purely from backend API
  useEffect(() => {
    const fetchOffers = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://business-management-ji66.onrender.com/offers');
        if (res.ok) {
          const data = await res.json();
          const items = Array.isArray(data) ? data : (data.data || []);
          const mapped = items.map((item, idx) => ({
            id: item._id || item.id || `api-offer-${idx}`,
            tag: `REWARD COUPON • ${item.badge || 'SPECIAL OFFER'}`,
            title: item.offer_title || item.title || 'Special Coupon',
            subtitle: item.offer_description || item.subtitle || 'Special discount coupon',
            badge: item.badge || item.discount_value || 'DISCOUNT',
            code: item.coupon_code || item.code || `COUPON${idx}`,
            rate: item.discount_value || item.rate || 'Discount'
          }));
          setOffersList(mapped);
        }
      } catch (err) {
        console.warn('Could not fetch offers from backend API:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchOffers();
  }, []);

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

  const handleDeleteOffer = async (offerId, code) => {
    if (window.confirm(`Are you sure you want to delete coupon '${code}'?`)) {
      // Remove locally from state instantly
      setOffersList(prev => prev.filter(o => o.id !== offerId));

      // Issue DELETE call to API
      try {
        await fetch(`https://business-management-ji66.onrender.com/offers/${offerId}`, {
          method: 'DELETE'
        });
      } catch (err) {
        console.warn('API error deleting offer:', err);
      }
    }
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
            <span className="gold-line"></span> REWARD COUPONS &amp; OFFERS
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

        {/* LOADING INDICATOR */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--gold-dark)', fontWeight: 700 }}>
            <i className="fas fa-spinner fa-spin" style={{ fontSize: '2rem', marginBottom: '12px', display: 'block' }}></i>
            Fetching live coupons from API...
          </div>
        ) : offersList.length === 0 ? (
          /* EMPTY STATE */
          <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            background: '#ffffff',
            borderRadius: '20px',
            border: '1px dashed #cbd5e1',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <i className="fas fa-ticket-alt" style={{ fontSize: '2.5rem', color: '#cbd5e1', marginBottom: '12px', display: 'block' }}></i>
            <h4 style={{ color: '#0f172a', fontWeight: 700, margin: '0 0 8px' }}>No Active Coupons Found</h4>
            <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0 0 16px' }}>
              {currentUser 
                ? "Click the button above to add and publish your first discount coupon code!" 
                : "Check back soon for new special promotional coupons and travel discounts."}
            </p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {offersList.map(offer => (
              <div 
                key={offer.id} 
                className="specialty-card-luxury"
                style={{ padding: '28px', justifyContent: 'space-between', border: '1.5px solid var(--border-cream)', position: 'relative' }}
              >
                <div className="card-badge-gold">
                  {offer.badge}
                </div>

                {/* DELETE BUTTON FOR LOGGED IN USERS */}
                {currentUser && (
                  <button
                    type="button"
                    onClick={() => handleDeleteOffer(offer.id, offer.code)}
                    title="Delete Coupon"
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      background: '#ef4444',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '6px 12px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      boxShadow: '0 4px 10px rgba(239, 68, 68, 0.3)',
                      zIndex: 10
                    }}
                  >
                    <i className="fas fa-trash-alt"></i> Delete
                  </button>
                )}

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
                    justifyContent: 'space-between', 
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
        )}

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
