import React, { useState, useEffect } from 'react';

export default function Testimonials({ onOpenBookingModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const reviewsData = [
    {
      id: 1,
      category: 'jupiter',
      name: 'Rohan & Neha Patel',
      location: 'Mumbai ➔ Daman Trip',
      vehicle: 'TVS Jupiter Two-Wheeler (Only For Daman)',
      rating: 5,
      date: 'September 2026',
      badge: 'VERIFIED DAMAN RENT',
      avatar: 'RP',
      avatarBg: '#d4af37',
      text: 'Rented TVS Jupiter for 3 days in Daman to explore Devka and Jampore beaches. The scooter was delivered directly to our hotel within 20 minutes! Extremely smooth ride, top mileage, and two sanitized helmets were provided. Best two-wheeler service in Daman!'
    },
    {
      id: 2,
      category: 'ertiga',
      name: 'Ankit Sharma & Family',
      location: 'Surat ➔ All Over India Tour',
      vehicle: 'Maruti Suzuki Ertiga (With Driver All Over India)',
      rating: 5,
      date: 'August 2026',
      badge: 'VERIFIED INDIA TOUR',
      avatar: 'AS',
      avatarBg: '#b8860b',
      text: 'We booked Maruti Suzuki Ertiga with driver for a 6-day family pilgrimage trip covering Surat, Diu, Gir, and Somnath. The 7-seater space was super comfortable for 6 adults + luggage bags. Driver Ramesh was polite, punctual, and safe across all state highways. Highly recommended!'
    },
    {
      id: 3,
      category: 'jupiter',
      name: 'Meera & Dhruv Joshi',
      location: 'Ahmedabad ➔ Daman Getaway',
      vehicle: 'TVS Jupiter Two-Wheeler (Only For Daman)',
      rating: 5,
      date: 'August 2026',
      badge: 'VERIFIED DAMAN RENT',
      avatar: 'MJ',
      avatarBg: '#10b981',
      text: 'Exploring Daman beach promenade on TVS Jupiter was the best part of our weekend! Zero hassle paperwork—just showed DL and Aadhar. The weekend promo code DAMAN399 saved us extra money. Truly reliable service!'
    },
    {
      id: 4,
      category: 'ertiga',
      name: 'Vikramaditya Singh',
      location: 'Vapi ➔ Outstation India Tour',
      vehicle: 'Maruti Suzuki Ertiga (With Driver All Over India)',
      rating: 5,
      date: 'July 2026',
      badge: 'VERIFIED INDIA TOUR',
      avatar: 'VS',
      avatarBg: '#2563eb',
      text: 'Hired Maruti Ertiga with professional driver for our outstation road trip. Clean interiors, cold AC, and valid All-India commercial permit made crossing state borders smooth and completely stress-free. Excellent service!'
    }
  ];

  // Auto-scroll carousel every 3.5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % reviewsData.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, reviewsData.length]);

  const currentReview = reviewsData[currentIndex] || reviewsData[0];

  return (
    <section className="section light-luxury-section" id="reviews">
      <div className="container">
        
        {/* RATING HEADER BANNER */}
        <div className="rating-header-banner">
          <div className="rating-header-left">
            <div className="hero-gold-tag">
              <span className="gold-line"></span> VERIFIED CUSTOMER TESTIMONIALS
            </div>
            <h2 className="section-title-serif" style={{ textAlign: 'left', marginBottom: '8px' }}>
              Customer Reviews & Ratings
            </h2>
            <p className="section-desc-serif" style={{ textAlign: 'left', margin: 0 }}>
              Real experiences from customers who rented TVS Jupiter in Daman or Maruti Ertiga across India.
            </p>
          </div>

          <div className="rating-badge-card" style={{ background: '#faf8f5', border: '1px solid var(--border-cream)' }}>
            <div style={{ fontSize: '2.6rem', fontWeight: 800, color: 'var(--gold-dark)', lineHeight: 1 }}>
              4.9 <span style={{ fontSize: '1.4rem', color: 'var(--gold-primary)' }}>★★★★★</span>
            </div>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-dark)', marginTop: '6px' }}>
              EXCELLENT CUSTOMER TRUST
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted-dark)', marginTop: '2px' }}>
              1,480+ Verified Customer Rentals
            </div>
          </div>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div 
          className="carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="specialty-card-luxury carousel-card-active">
            {/* CARD HEADER: AVATAR + NAME + BADGE */}
            <div className="testimonial-card-header">
              <div className="testimonial-user-info">
                <div 
                  className="review-avatar-circle"
                  style={{ background: currentReview.avatarBg }}
                >
                  {currentReview.avatar}
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <h4 className="card-title-serif" style={{ fontSize: '1.15rem', margin: 0, wordBreak: 'break-word' }}>
                    {currentReview.name}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted-dark)', margin: 0, wordBreak: 'break-word' }}>
                    {currentReview.location} • {currentReview.date}
                  </p>
                </div>
              </div>

              <span className="testimonial-badge">
                <i className="fas fa-check-circle"></i> {currentReview.badge}
              </span>
            </div>

            {/* STAR RATING */}
            <div style={{ color: 'var(--gold-primary)', fontSize: '1.1rem', letterSpacing: '2px', marginBottom: '14px' }}>
              {'★'.repeat(currentReview.rating)}
            </div>

            {/* QUOTE TEXT */}
            <p className="carousel-text">
              <i className="fas fa-quote-left" style={{ color: 'var(--gold-primary)', marginRight: '8px', fontSize: '1rem' }}></i>
              {currentReview.text}
            </p>

            {/* VEHICLE RENTED BADGE */}
            <div style={{ padding: '10px 14px', background: '#faf8f5', borderRadius: '10px', border: '1px solid var(--border-cream)', fontSize: '0.85rem', color: 'var(--text-dark)', wordBreak: 'break-word' }}>
              <i className="fas fa-key" style={{ color: 'var(--gold-dark)', marginRight: '6px' }}></i> Rented: <strong>{currentReview.vehicle}</strong>
            </div>
          </div>
        </div>

        {/* CAROUSEL DOT INDICATORS */}
        <div className="carousel-dots" style={{ marginTop: '24px' }}>
          {reviewsData.map((_, idx) => (
            <button 
              key={idx} 
              className={`dot ${currentIndex === idx ? 'active' : ''}`} 
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* SHARE EXPERIENCE CALL-TO-ACTION */}
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <button 
            className="btn dark-whatsapp-btn btn-lg"
            onClick={() => onOpenBookingModal('Customer Review Submission', '')}
          >
            <i className="fab fa-whatsapp"></i> Rented with us? Share Your Feedback on WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}


