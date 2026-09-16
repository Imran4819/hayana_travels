import React, { useState } from 'react';
import { specialOffers } from '../data/fleetData';

const getTodayDateString = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

export default function BookingModal({ isOpen, onClose, vehicleName, rate, currentUser, onOpenLoginModal }) {
  const [name, setName] = useState(currentUser?.name || '');
  const [phone, setPhone] = useState(currentUser?.phone || '');
  const [pickupCity, setPickupCity] = useState('');
  const [dropCity, setDropCity] = useState('');
  const [date, setDate] = useState(getTodayDateString());
  const [days, setDays] = useState('2');
  const [notes, setNotes] = useState('');

  // Reward / Coupon State
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');

  if (!isOpen) return null;

  // Check if owner has added active coupons to the website
  const hasCouponsAvailable = specialOffers && specialOffers.length > 0;

  const handlePhoneChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(digitsOnly);
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');

    // Require login to apply coupon
    if (!currentUser) {
      setCouponError('Please login to apply your coupon code.');
      if (onOpenLoginModal) {
        onClose();
        onOpenLoginModal();
      }
      return;
    }

    const cleanCode = couponCode.trim().toUpperCase();

    if (!cleanCode) {
      setCouponError('Please enter a coupon code.');
      return;
    }

    // Match against active offers or predefined codes
    const matchedOffer = specialOffers.find(o => o.code.toUpperCase() === cleanCode);

    if (matchedOffer) {
      setAppliedCoupon({ code: matchedOffer.code, discountText: matchedOffer.tag || matchedOffer.title });
    } else if (cleanCode === 'DAMAN10') {
      setAppliedCoupon({ code: 'DAMAN10', discountText: '10% OFF Special Discount Applied!' });
    } else if (cleanCode === 'WELCOME500') {
      setAppliedCoupon({ code: 'WELCOME500', discountText: 'Flat ₹500 OFF Reward Applied!' });
    } else if (cleanCode === 'HELMETFREE') {
      setAppliedCoupon({ code: 'HELMETFREE', discountText: 'Free Helmet & ₹100 OFF Applied!' });
    } else {
      setAppliedCoupon({ code: cleanCode, discountText: `Coupon '${cleanCode}' Applied!` });
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let text = `*New Booking Inquiry - Hayana Travels*%0A%0A` +
      `*Vehicle / Request:* ${vehicleName || 'General Inquiry'} ${rate ? '(' + rate + ')' : ''}%0A` +
      `*Customer Name:* ${name}%0A` +
      `*Contact:* ${phone}%0A` +
      `*Pickup Location:* ${pickupCity}%0A` +
      `*Drop Location:* ${dropCity}%0A` +
      `*Start Date:* ${date}%0A` +
      `*Duration:* ${days} Days%0A`;

    if (appliedCoupon) {
      text += `*Reward Coupon:* ${appliedCoupon.code} (${appliedCoupon.discountText})%0A`;
    }

    text += `*Notes:* ${notes || 'N/A'}`;

    const whatsappNumber = '919309820905';
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="modal-overlay active">
      <div className="modal-card">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fas fa-times"></i>
        </button>
        
        <div style={{ textAlign: 'center', marginBottom: '18px', paddingRight: '20px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--gold-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            INSTANT RESERVATION
          </span>
          <h3 className="modal-title">
            {vehicleName ? `${vehicleName} ${rate ? '(' + rate + ')' : ''}` : 'Book Your Ride'}
          </h3>
          <p className="modal-subtitle">
            Fill details &amp; connect directly with Hayana Travels on WhatsApp (+91 93098 20905)
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div className="input-group" style={{ marginBottom: '12px' }}>
            <label>Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group" style={{ marginBottom: '12px' }}>
            <label>Phone / WhatsApp Number</label>
            <input 
              type="tel" 
              placeholder="10-digit mobile number" 
              value={phone} 
              onChange={handlePhoneChange} 
              maxLength={10}
              minLength={10}
              pattern="[0-9]{10}"
              inputMode="numeric"
              required 
            />
          </div>

          {/* PICKUP & DROP LOCATIONS */}
          <div className="modal-grid-row" style={{ marginBottom: '12px' }}>
            <div className="input-group">
              <label>Pickup Location / Hotel</label>
              <input 
                type="text" 
                placeholder="e.g. Devka Beach, Daman" 
                value={pickupCity} 
                onChange={(e) => setPickupCity(e.target.value)} 
                required 
              />
            </div>
            <div className="input-group">
              <label>Drop Location / Hotel</label>
              <input 
                type="text" 
                placeholder="e.g. Devka Beach / Surat" 
                value={dropCity} 
                onChange={(e) => setDropCity(e.target.value)} 
                required 
              />
            </div>
          </div>

          <div className="modal-grid-row" style={{ marginBottom: '14px' }}>
            <div className="input-group">
              <label>Start Date</label>
              <input 
                type="date" 
                value={date} 
                min={getTodayDateString()}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Duration (Days)</label>
              <input 
                type="number" 
                value={days} 
                onChange={(e) => setDays(e.target.value)} 
                min="1" 
                required 
              />
            </div>
          </div>

          {/* REWARD / PROMO COUPON SECTION - RENDERED ONLY WHEN OWNER HAS ADDED COUPONS */}
          {hasCouponsAvailable && (
            <div style={{
              background: '#faf8f5',
              padding: '14px',
              borderRadius: '12px',
              border: '1px dashed var(--gold-dark)',
              marginBottom: '16px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--gold-dark)' }}>
                  <i className="fas fa-ticket-alt"></i> REWARD / PROMO COUPON
                </label>
                {currentUser ? (
                  <span style={{ fontSize: '0.72rem', background: 'rgba(16,185,129,0.1)', color: '#059669', padding: '2px 8px', borderRadius: '10px', fontWeight: 700 }}>
                    <i className="fas fa-user-check"></i> LOGGED IN
                  </span>
                ) : (
                  <span 
                    onClick={() => { onClose(); if (onOpenLoginModal) onOpenLoginModal(); }}
                    style={{ fontSize: '0.72rem', background: 'rgba(217,119,6,0.15)', color: '#b45309', padding: '2px 8px', borderRadius: '10px', fontWeight: 700, cursor: 'pointer' }}
                  >
                    <i className="fas fa-lock"></i> LOGIN TO APPLY
                  </span>
                )}
              </div>

              {appliedCoupon ? (
                <div style={{
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center',
                  background: 'rgba(16, 185, 129, 0.1)',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid rgba(16, 185, 129, 0.3)'
                }}>
                  <div>
                    <strong style={{ color: '#059669', fontSize: '0.85rem' }}>🎉 {appliedCoupon.code} APPLIED!</strong>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dark)' }}>{appliedCoupon.discountText}</div>
                  </div>
                  <button
                    type="button"
                    onClick={handleRemoveCoupon}
                    style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700 }}
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input 
                    type="text" 
                    placeholder="Enter Coupon (e.g. WELCOME500)" 
                    value={couponCode} 
                    onChange={(e) => setCouponCode(e.target.value)}
                    style={{ textTransform: 'uppercase' }}
                  />
                  <button 
                    type="button" 
                    className="btn btn-gold-luxury btn-sm"
                    onClick={handleApplyCoupon}
                  >
                    Apply Coupon
                  </button>
                </div>
              )}

              {couponError && (
                <div style={{ color: '#dc2626', fontSize: '0.76rem', marginTop: '6px', fontWeight: 600 }}>
                  {couponError}
                </div>
              )}
            </div>
          )}

          <div className="input-group" style={{ marginBottom: '18px' }}>
            <label>Special Requests / Notes</label>
            <input 
              type="text" 
              placeholder="e.g. Need hotel delivery at 10 AM, 2 helmets" 
              value={notes} 
              onChange={(e) => setNotes(e.target.value)} 
            />
          </div>

          <button type="submit" className="btn btn-whatsapp modal-submit-btn">
            <i className="fab fa-whatsapp"></i> Send Booking Inquiry on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
