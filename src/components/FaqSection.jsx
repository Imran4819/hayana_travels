import React, { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What are the Self Drive rates & deposit rules in Daman (1st Section)?',
      a: 'Self Drive rates: TVS Jupiter Scooter @ ₹600/day (Advance Deposit ₹1,000), Swift Dzire Sedan @ ₹2,200/8h (Advance Deposit ₹3,000), and Ertiga VXI 7-Seater @ ₹2,800/8h (Advance Deposit ₹4,000). A valid original Driving License (DL) is COMPULSORY. Fuel is NOT included (customer pays fuel). The advance security deposit is fully refunded when you drop the vehicle back.'
    },
    {
      q: 'When is the advance security deposit refunded?',
      a: 'The advance security deposit (₹1,000 for Jupiter, ₹3,000 for Dzire, ₹4,000 for Ertiga) is returned immediately to your UPI/bank/cash upon vehicle handover/drop after checking the vehicle.'
    },
    {
      q: 'What are the Fixed Drop rates for Vapi, Surat & Mumbai (3rd Section)?',
      a: 'Fixed Drop rates: Swift Dzire Sedan: Daman Local ₹500, Vapi Station Drop ₹700, Surat Drop ₹3,000, Mumbai Drop ₹4,200. Maruti Ertiga VXI 7-Seater: Daman Local ₹600, Vapi Station Drop ₹900, Surat Drop ₹3,500, Mumbai Drop ₹5,500.'
    },
    {
      q: 'What are the All-India Outstation Per-KM rates (4th Section)?',
      a: 'Outstation rates: Swift Dzire @ ₹13 / km and Maruti Ertiga 7-Seater @ ₹15 / km. Minimum running limit is 300 km / day. Toll tax and parking charges are extra as per actual receipts.'
    },
    {
      q: 'How do I book with Hayana Travels?',
      a: 'Call or WhatsApp Santosh Abhale directly at +91 93098 20905 to reserve your vehicle in 2 minutes. Doorstep delivery is available across Devka Beach, Jampore Beach, and all hotels in Daman.'
    }
  ];

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">CLEAR RENTAL RULES & ANSWERS</span>
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
