import React from 'react';

export default function WhyChooseUs() {
  const items = [
    { icon: 'fas fa-shield-virus', title: '100% Sanitized & Serviced', desc: 'Every bike, scooter, and car is deep sanitized, safety inspected, and test-driven before handover.' },
    { icon: 'fas fa-truck-pickup', title: 'Doorstep Hotel Delivery', desc: 'We deliver your rental bike directly to your hotel or resort in Daman within 30 minutes.' },
    { icon: 'fas fa-file-contract', title: 'Instant Documentation', desc: 'Quick 2-minute booking with minimal paperwork. Valid driving license and Aadhar card are all you need.' },
    { icon: 'fas fa-headset', title: '24/7 Roadside Assistance', desc: 'On-call support team ready to assist with tire replacement, breakdown help, or route assistance anytime.' }
  ];

  return (
    <section className="section light-luxury-section" id="why-us">
      <div className="container">
        <div className="section-header">
          <div className="hero-gold-tag" style={{ justifyContent: 'center' }}>
            <span className="gold-line"></span> THE HAYANA ADVANTAGE
          </div>
          <h2 className="section-title-serif">Why Thousands Choose Hayana Travels</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {items.map((box, idx) => (
            <div key={idx} className="specialty-card-luxury" style={{ padding: '24px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#faf8f5', border: '1px solid var(--border-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'var(--gold-dark)', marginBottom: '16px' }}>
                <i className={box.icon}></i>
              </div>
              <h3 className="card-title-serif" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{box.title}</h3>
              <p className="card-desc" style={{ marginBottom: 0 }}>{box.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
