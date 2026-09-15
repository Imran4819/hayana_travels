import React from 'react';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <div className="top-bar-info">
          <span className="top-bar-item"><i className="fas fa-motorcycle"></i> Two Wheeler (Jupiter): <strong>ONLY FOR DAMAN</strong></span>
          <span className="top-bar-item"><i className="fas fa-car"></i> Ertiga Car (With Driver): <strong>ALL OVER INDIA</strong></span>
          <a 
            href="https://www.justdial.com/Daman/HANAYA-TOUR-AND-TRAVELS-Miramar-Hotel-Devka/9999PX260-X260-260309125211-H2S6_BZDET" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="top-bar-item"
            style={{ color: '#fbbf24', textDecoration: 'none' }}
          >
            <i className="fas fa-check-circle"></i> <strong>Verified on JustDial ★ 4.9</strong>
          </a>
        </div>
        <div className="top-bar-info">
          <span className="top-bar-item"><i className="fas fa-phone-alt"></i> Call: +91 98765 43210</span>
          <span className="top-bar-item"><i className="fab fa-whatsapp"></i> WhatsApp Booking Available 24x7</span>
        </div>
      </div>
    </div>
  );
}
