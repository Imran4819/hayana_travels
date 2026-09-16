import React, { useState } from 'react';

// Ratings API endpoint
const BASE_URL = import.meta.env.VITE_API_URL || 'https://business-management-ji66.onrender.com';
export const REVIEWS_API_URL = `${BASE_URL}/ratings`;

export default function AddReviewModal({ isOpen, onClose, onAddReview }) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [vehicle, setVehicle] = useState('TVS Jupiter (Scooter - Daman Only)');
  const [location, setLocation] = useState('Daman Trip');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const initials = name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase() || 'U';

    const newReview = {
      id: Date.now(),
      name,
      rating,
      vehicle,
      location,
      text: comment,
      date: 'Just Now',
      badge: 'VERIFIED CUSTOMER',
      avatar: initials,
      avatarBg: '#d97706'
    };

    // POST to Ratings API
    try {
      const apiPayload = {
        name,
        rating,
        vehicle,
        location,
        text: comment,
        badge: 'VERIFIED CUSTOMER',
        avatar: initials,
        avatar_bg: '#d97706',
      };
      await fetch(REVIEWS_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(apiPayload)
      });
    } catch (err) {
      console.warn('API error (review saved locally only):', err);
    }

    onAddReview(newReview);
    setIsSubmitting(false);
    setSuccessMsg(true);

    setTimeout(() => {
      setSuccessMsg(false);
      setName('');
      setComment('');
      onClose();
    }, 1800);
  };

  return (
    <div className="modal-overlay active">
      <div className="modal-card" style={{ maxWidth: '500px' }}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fas fa-times"></i>
        </button>

        <div style={{ textAlign: 'center', marginBottom: '18px', paddingRight: '20px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--gold-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            CUSTOMER FEEDBACK
          </span>
          <h3 className="modal-title">Rate Your Experience</h3>
          <p className="modal-subtitle">
            Share your rating and review with Hayana Travels
          </p>
        </div>

        {successMsg ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <i className="fas fa-check-circle" style={{ fontSize: '3rem', color: '#10b981', marginBottom: '12px' }}></i>
            <h4 style={{ fontSize: '1.3rem', color: 'var(--text-dark)', fontWeight: 700 }}>Thank You for Your Review!</h4>
            <p style={{ color: 'var(--text-muted-dark)', marginTop: '6px' }}>Your 5-star rating has been added successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            {/* STAR RATING SELECTOR */}
            <div className="input-group" style={{ marginBottom: '16px', textAlign: 'center' }}>
              <label style={{ display: 'block', marginBottom: '8px' }}>Select Rating</label>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', fontSize: '2rem', cursor: 'pointer' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    style={{
                      color: (hoverRating || rating) >= star ? 'var(--gold-primary)' : '#e2e8f0',
                      transition: 'color 0.2s'
                    }}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span style={{ fontSize: '0.82rem', color: 'var(--gold-dark)', fontWeight: 700, marginTop: '4px', display: 'block' }}>
                {rating === 5 && '★★★★★ Excellent (5/5)'}
                {rating === 4 && '★★★★☆ Very Good (4/5)'}
                {rating === 3 && '★★★☆☆ Good (3/5)'}
                {rating === 2 && '★★☆☆☆ Fair (2/5)'}
                {rating === 1 && '★☆☆☆☆ Poor (1/5)'}
              </span>
            </div>

            <div className="input-group" style={{ marginBottom: '12px' }}>
              <label>Your Name</label>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>

            <div className="modal-grid-row" style={{ marginBottom: '12px' }}>
              <div className="input-group">
                <label>Vehicle Rented</label>
                <select value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                  <option value="TVS Jupiter (Scooter - Daman Only)">TVS Jupiter (Scooter)</option>
                  <option value="Swift Dzire (Sedan Car)">Swift Dzire (Sedan)</option>
                  <option value="Maruti Suzuki Ertiga (7-Seater)">Maruti Ertiga (7-Seater)</option>
                </select>
              </div>

              <div className="input-group">
                <label>Trip Location</label>
                <input 
                  type="text" 
                  placeholder="e.g. Daman Beach Trip" 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)} 
                />
              </div>
            </div>

            <div className="input-group" style={{ marginBottom: '18px' }}>
              <label>Your Review / Experience</label>
              <textarea 
                rows="3"
                placeholder="Tell us about vehicle condition, driver politeness, delivery timing..." 
                value={comment} 
                onChange={(e) => setComment(e.target.value)} 
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-gold-luxury modal-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span><i className="fas fa-spinner fa-spin"></i> Submitting Review...</span>
              ) : (
                <span><i className="fas fa-paper-plane"></i> Submit Rating & Review</span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
