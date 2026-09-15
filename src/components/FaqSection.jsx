import React, { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What documents are required to rent a bike in Daman or Diu?',
      a: 'You need a valid original Driving License (DL) and a government photo ID (Aadhar Card, Passport, or Voter ID). We verify your documents in 2 minutes and hand over the keys.'
    },
    {
      q: 'Is the Maruti Suzuki Ertiga available for All-India outstation trips?',
      a: 'Yes! Our 7-seater Maruti Suzuki Ertiga cars come with commercial tourist permits valid for all states across India. You can hire it for self-drive or with a professional driver for inter-state family tours, wedding events, and airport pickups.'
    },
    {
      q: 'Are helmets provided with bike rentals in Daman & Diu?',
      a: 'Yes, we provide 2 sanitized helmets (1 rider + 1 pillion) complimentary with every scooter and bike rental to ensure your complete safety and compliance with traffic laws.'
    },
    {
      q: 'How does hotel doorstep delivery work in Daman & Diu?',
      a: 'Simply share your hotel or resort address in Daman or Diu during booking. Our executive will deliver the vehicle directly to your location at your preferred time.'
    },
    {
      q: 'What is the fuel policy?',
      a: 'Vehicles are provided with sufficient fuel to reach the nearest petrol pump. You return the vehicle with the same level of fuel as provided at handover.'
    }
  ];

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">GOT QUESTIONS?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-container">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`faq-item ${openIndex === idx ? 'open' : ''}`}
            >
              <div 
                className="faq-header"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <span>{faq.q}</span>
                <i className={`fas fa-chevron-${openIndex === idx ? 'up' : 'down'}`}></i>
              </div>
              {openIndex === idx && (
                <div className="faq-content">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
