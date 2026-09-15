import React from 'react';

export default function FeaturesBar() {
  const features = [
    { icon: 'fas fa-shield-alt', text: 'Insured Fleet' },
    { icon: 'fas fa-bolt', text: 'Instant Delivery' },
    { icon: 'fas fa-credit-card', text: 'UPI / Cash / Cards' },
    { icon: 'fas fa-phone-alt', text: '24 / 7 Support' },
    { icon: 'fas fa-id-card', text: 'Simple Documents' }
  ];

  return (
    <section className="features-bar-section">
      <div className="container">
        <div className="features-bar-grid">
          {features.map((item, idx) => (
            <div className="feature-bar-item" key={idx}>
              <i className={`${item.icon} feature-icon-accent`}></i>
              <span className="feature-item-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
