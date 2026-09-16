import React, { useState } from 'react';

export default function PaymentMethods() {
  const [copiedField, setCopiedField] = useState('');

  const upiId = '9309820905@ybl';
  const phoneNum = '9309820905';
  
  const bankDetails = {
    accountName: 'Hayana Travels (Santosh Abhale)',
    accountNumber: '41920001002345',
    ifscCode: 'SBIN0001234',
    bankName: 'State Bank of India (SBI)',
    branch: 'Devka Beach Branch, Daman'
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField('');
    }, 2500);
  };

  const handleOpenPaymentApp = (appScheme, fallbackText) => {
    // Attempt to launch the deep link
    window.location.href = appScheme;

    // Set a timeout to copy UPI ID if app does not open on desktop
    setTimeout(() => {
      handleCopy(upiId, fallbackText);
    }, 800);
  };

  const upiPayLink = `upi://pay?pa=${upiId}&pn=Hayana%20Travels&cu=INR`;
  const phonepeLink = `phonepe://pay?pa=${upiId}&pn=Hayana%20Travels&cu=INR`;
  const paytmLink = `paytmmp://pay?pa=${upiId}&pn=Hayana%20Travels&cu=INR`;

  return (
    <section className="section light-luxury-section" id="payment-methods">
      <div className="container">
        <div className="section-header">
          <div className="hero-gold-tag" style={{ justifyContent: 'center' }}>
            <span className="gold-line"></span> 100% SECURE & EASY PAYMENTS
          </div>
          <h2 className="section-title-serif">Accepted Payment Modes & Bank Transfer</h2>
          <p className="section-desc-serif" style={{ margin: '0 auto' }}>
            Click on any payment app below to open it instantly on your mobile device, or transfer directly via Net Banking & Cash on handover.
          </p>
        </div>

        {/* TOAST COPY NOTIFICATION */}
        {copiedField && (
          <div style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            background: 'var(--bg-dark)',
            color: 'var(--gold-primary)',
            padding: '14px 22px',
            borderRadius: '14px',
            border: '1px solid var(--border-gold)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '0.92rem',
            fontWeight: 700
          }}>
            <i className="fas fa-check-circle" style={{ fontSize: '1.2rem', color: '#10b981' }}></i>
            {copiedField} copied to clipboard!
          </div>
        )}

        {/* PAYMENT APPS GRID */}
        <div className="payment-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '16px',
          marginBottom: '40px'
        }}>
          {/* PhonePe */}
          <div 
            onClick={() => handleOpenPaymentApp(phonepeLink, 'PhonePe / UPI ID')}
            style={{
              background: '#ffffff',
              border: '1.5px solid var(--border-cream)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px 16px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'var(--transition)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
            }}
            className="payment-card-hover"
          >
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #5f259f, #391168)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px',
              color: '#ffffff',
              fontSize: '1.5rem',
              fontWeight: 800
            }}>
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-dark)', fontWeight: 700, marginBottom: '4px' }}>PhonePe</h4>
            <span style={{ fontSize: '0.78rem', color: '#5f259f', fontWeight: 800 }}>Tap to Open App</span>
          </div>

          {/* Google Pay */}
          <div 
            onClick={() => handleOpenPaymentApp(upiPayLink, 'Google Pay / UPI ID')}
            style={{
              background: '#ffffff',
              border: '1.5px solid var(--border-cream)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px 16px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'var(--transition)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
            }}
            className="payment-card-hover"
          >
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #4285f4, #34a853)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px',
              color: '#ffffff',
              fontSize: '1.4rem'
            }}>
              <i className="fab fa-google-pay"></i>
            </div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-dark)', fontWeight: 700, marginBottom: '4px' }}>Google Pay</h4>
            <span style={{ fontSize: '0.78rem', color: '#0284c7', fontWeight: 800 }}>Tap to Open App</span>
          </div>

          {/* Paytm */}
          <div 
            onClick={() => handleOpenPaymentApp(paytmLink, 'Paytm / UPI ID')}
            style={{
              background: '#ffffff',
              border: '1.5px solid var(--border-cream)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px 16px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'var(--transition)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
            }}
            className="payment-card-hover"
          >
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00baf2, #002e6e)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px',
              color: '#ffffff',
              fontSize: '1.4rem',
              fontWeight: 800
            }}>
              <i className="fas fa-wallet"></i>
            </div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-dark)', fontWeight: 700, marginBottom: '4px' }}>Paytm</h4>
            <span style={{ fontSize: '0.78rem', color: '#00baf2', fontWeight: 800 }}>Tap to Open App</span>
          </div>

          {/* Credit & Debit Cards */}
          <div 
            onClick={() => handleCopy('Cards Accepted: Visa, Mastercard, RuPay at Handover', 'Cards Info')}
            style={{
              background: '#ffffff',
              border: '1.5px solid var(--border-cream)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px 16px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'var(--transition)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
            }}
            className="payment-card-hover"
          >
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #d97706, #b45309)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px',
              color: '#ffffff',
              fontSize: '1.4rem'
            }}>
              <i className="fas fa-credit-card"></i>
            </div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-dark)', fontWeight: 700, marginBottom: '4px' }}>Cards Accepted</h4>
            <span style={{ fontSize: '0.78rem', color: 'var(--gold-dark)', fontWeight: 800 }}>Credit & Debit Cards</span>
          </div>

          {/* Net Banking */}
          <div 
            onClick={() => handleCopy(bankDetails.accountNumber, 'Bank Account Details')}
            style={{
              background: '#ffffff',
              border: '1.5px solid var(--border-cream)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px 16px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'var(--transition)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
            }}
            className="payment-card-hover"
          >
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0284c7, #0369a1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px',
              color: '#ffffff',
              fontSize: '1.4rem'
            }}>
              <i className="fas fa-university"></i>
            </div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-dark)', fontWeight: 700, marginBottom: '4px' }}>Net Banking</h4>
            <span style={{ fontSize: '0.78rem', color: 'var(--blue-dark)', fontWeight: 800 }}>IMPS / NEFT / RTGS</span>
          </div>

          {/* Cash */}
          <div 
            onClick={() => handleCopy('Cash Accepted on Handover / Hotel Delivery', 'Cash Payment Option')}
            style={{
              background: '#ffffff',
              border: '1.5px solid var(--border-cream)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px 16px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'var(--transition)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
            }}
            className="payment-card-hover"
          >
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10b981, #047857)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px',
              color: '#ffffff',
              fontSize: '1.4rem'
            }}>
              <i className="fas fa-money-bill-wave"></i>
            </div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-dark)', fontWeight: 700, marginBottom: '4px' }}>Cash Accepted</h4>
            <span style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 800 }}>Pay at Handover</span>
          </div>
        </div>

        {/* UPI DETAILS BOX */}
        <div style={{
          background: '#faf8f5',
          border: '1px dashed var(--gold-primary)',
          borderRadius: 'var(--radius-xl)',
          padding: '28px 24px',
          textAlign: 'center',
          maxWidth: '640px',
          margin: '0 auto'
        }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--gold-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            INSTANT UPI PAYMENT ID
          </span>

          <div style={{ margin: '14px 0', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-dark)' }}>
            {upiId}
          </div>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
            <button 
              onClick={() => handleCopy(upiId, 'UPI ID')}
              className="btn btn-gold-luxury btn-sm"
            >
              <i className="fas fa-copy"></i> Copy UPI ID
            </button>
            <a 
              href={upiPayLink}
              className="btn dark-whatsapp-btn btn-sm"
              style={{ background: 'linear-gradient(135deg, #0284c7, #0369a1) !important' }}
            >
              <i className="fas fa-bolt"></i> Pay via Any UPI App
            </a>
          </div>

          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted-dark)', lineHeight: 1.5 }}>
            <i className="fas fa-shield-alt" style={{ color: '#10b981', marginRight: '4px' }}></i>
            Supports PhonePe, GPay, Paytm, BHIM, Amazon Pay, & Net Banking. Instant payment confirmation on WhatsApp!
          </p>
        </div>
      </div>
    </section>
  );
}
