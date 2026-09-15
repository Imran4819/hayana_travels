import React from 'react';

export default function Footer({ onOpenBookingModal }) {
  const justdialUrl = "https://www.justdial.com/Daman/HANAYA-TOUR-AND-TRAVELS-Miramar-Hotel-Devka/9999PX260-X260-260309125211-H2S6_BZDET";
  const whatsappUrl = "https://wa.me/919309820905";

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <a href="#" className="brand-logo" style={{ marginBottom: '16px' }}>
              <img src="/logo.png" alt="Hayana Travels Logo" className="brand-logo-img" />
            </a>

            <p style={{ fontSize: '0.88rem', color: '#a8a29e', marginBottom: '16px', lineHeight: 1.6 }}>
              TVS Jupiter two-wheeler rentals <strong>ONLY FOR DAMAN</strong> & Maruti Suzuki Ertiga 7-seater car with professional driver <strong>ALL OVER INDIA</strong>. Verified & trusted travel partner.
            </p>

            <div style={{ padding: '12px 16px', background: 'rgba(212, 175, 55, 0.06)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)', marginBottom: '18px' }}>
              <span style={{ fontSize: '0.75rem', color: '#a8a29e', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, display: 'block' }}>Proprietor / Owner</span>
              <strong style={{ fontSize: '1rem', color: '#ffffff' }}><i className="fas fa-user-tie" style={{ color: 'var(--gold-primary)', marginRight: '6px' }}></i> Santosh Abhale</strong>
            </div>
            
            {/* SOCIAL MEDIA & JUSTDIAL LINKS */}
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center', fontSize: '1.3rem', flexWrap: 'wrap' }}>
              <a 
                href={justdialUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Verified on JustDial" 
                style={{ 
                  color: 'var(--gold-primary)', 
                  background: 'rgba(212, 175, 55, 0.1)', 
                  padding: '8px 12px', 
                  borderRadius: '10px', 
                  fontSize: '0.85rem', 
                  fontWeight: 800, 
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  border: '1px solid rgba(212, 175, 55, 0.3)'
                }}
              >
                <i className="fas fa-store"></i> JustDial Verified Listing
              </a>
              <a 
                href="https://www.instagram.com/hayana_travels_daman" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#e1306c' }} 
                title="Follow us on Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://www.facebook.com/hayanatravelsdaman" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#1877f2' }} 
                title="Follow us on Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Daman Bike Rentals</h4>
            <ul className="footer-links">
              <li><a href="#specialties">TVS Jupiter (Only for Daman)</a></li>
              <li><a href="#offers">Daman Weekend Scooter Pass</a></li>
              <li><a href="#specialties">Free Doorstep Delivery</a></li>
              <li><a href="#specialties">Devka & Jampore Beach Ride</a></li>
              <li><a href="#reviews">Verified Customer Reviews</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>All-India Ertiga Cars</h4>
            <ul className="footer-links">
              <li><a href="#specialties">Maruti Suzuki Ertiga (7-Seater)</a></li>
              <li><a href="#specialties">With Professional Driver Only</a></li>
              <li><a href="#offers">Outstation All-India Tour Special</a></li>
              <li><a href="#specialties">Pilgrimage & Inter-State Tour</a></li>
              <li><a href="#calculator">Live Rental Fare Calculator</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Office & Booking</h4>
            <p style={{ fontSize: '0.88rem', color: '#a8a29e', marginBottom: '10px', lineHeight: 1.5 }}>
              <i className="fas fa-map-marker-alt" style={{ color: 'var(--gold-primary)', marginRight: '6px' }}></i> 
              Near Miramar Hotel, Devka Beach Road, Daman - 396210
            </p>
            <p style={{ fontSize: '0.88rem', color: '#a8a29e', marginBottom: '10px' }}>
              <i className="fas fa-phone-alt" style={{ color: 'var(--gold-primary)', marginRight: '6px' }}></i> Direct Call: 
              <a href="tel:+919309820905" style={{ color: '#ffffff', textDecoration: 'none', marginLeft: '6px', fontWeight: 700 }}>+91 93098 20905</a>
            </p>
            <p style={{ fontSize: '0.88rem', color: '#a8a29e', marginBottom: '16px' }}>
              <i className="fab fa-whatsapp" style={{ color: '#10b981', marginRight: '6px' }}></i> WhatsApp: 
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', marginLeft: '6px', fontWeight: 700 }}>+91 93098 20905</a>
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button 
                className="btn dark-whatsapp-btn btn-sm"
                style={{ width: '100%' }}
                onClick={() => onOpenBookingModal('Footer Direct WhatsApp Inquiry', '')}
              >
                <i className="fab fa-whatsapp"></i> Chat on WhatsApp (+91 93098 20905)
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Hanaya Tour & Travels. Owned & Managed by Santosh Abhale. Near Miramar Hotel, Devka, Daman. Call / WhatsApp: +91 93098 20905.</p>
        </div>
      </div>
    </footer>
  );
}
