import React, { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How do I book bike rental in Daman or car rental in Daman with Hayana Travels?',
      a: 'Simply call or WhatsApp Santosh Abhale at +91 93098 20905. You can reserve a TVS Jupiter bike in Daman starting at ₹400/day, Swift Dzire sedan, or Maruti Ertiga 7-seater car. We deliver directly to your hotel in Devka Beach, Jampore Beach, and Daman City.'
    },
    {
      q: 'Which travels agency is best for bike in Daman and car in Daman?',
      a: 'Hayana Travels (located near Miramar Hotel, Devka Beach Road, Daman) is the top 5.0-star rated travel agency in Daman for two-wheeler bike rentals, local taxi drops, and All-India outstation tours.'
    },
    {
      q: 'What documents are required to rent a bike in Daman?',
      a: 'You need a valid original Driving License (DL) and a government photo ID (Aadhar Card, Passport, or Voter ID). Document verification takes 2 minutes.'
    },
    {
      q: 'What are the outstation rates for Maruti Ertiga and Swift Dzire car in Daman?',
      a: 'Our outstation charges are: Maruti Ertiga 7-Seater @ ₹15/km, and Swift Dzire Sedan @ ₹13/km. Both cars require a minimum running limit of 300 km / day. Toll tax and parking charges are extra as per actual receipts.'
    },
    {
      q: 'Are helmets provided with bike rentals in Daman?',
      a: 'Yes, we provide 2 sanitized helmets (1 rider + 1 pillion) complimentary with every TVS Jupiter scooter rental in Daman.'
    },
    {
      q: 'How does hotel doorstep delivery work for bike in Daman?',
      a: 'Simply share your hotel or resort address in Daman during booking on WhatsApp (+91 93098 20905). Our executive delivers the vehicle directly to your location at your preferred time.'
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
