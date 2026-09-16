import React, { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What documents are required to rent a bike in Daman or Diu?',
      a: 'You need a valid original Driving License (DL) and a government photo ID (Aadhar Card, Passport, or Voter ID). We verify your documents in 2 minutes and hand over the keys.'
    },
    {
      q: 'What are the outstation rates for Maruti Ertiga and Swift Dzire?',
      a: 'Our outstation charges are: Maruti Ertiga 7-Seater @ ₹15/km, and Swift Dzire Sedan @ ₹13/km. Both cars require a minimum running limit of 300 km / day. Toll tax and parking charges are extra as per actual receipts. Drivers are polite and experienced for All-India interstate travel.'
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
