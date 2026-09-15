import React, { useState } from 'react';

const getTodayDateString = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

export default function BookingModal({ isOpen, onClose, vehicleName, rate }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupCity, setPickupCity] = useState('');
  const [dropCity, setDropCity] = useState('');
  const [date, setDate] = useState(getTodayDateString());
  const [days, setDays] = useState('2');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handlePhoneChange = (e) => {
    // Keep digits only (0-9) and strictly limit length to max 10 digits
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(digitsOnly);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `*New Booking Inquiry - Hayana Travels*%0A%0A` +
      `*Vehicle / Request:* ${vehicleName || 'General Inquiry'} ${rate ? '(' + rate + ')' : ''}%0A` +
      `*Customer Name:* ${name}%0A` +
      `*Contact:* ${phone}%0A` +
      `*Pickup Location:* ${pickupCity}%0A` +
      `*Drop Location:* ${dropCity}%0A` +
      `*Start Date:* ${date}%0A` +
      `*Duration:* ${days} Days%0A` +
      `*Notes:* ${notes || 'N/A'}`;

    const whatsappNumber = '919309820905';
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="modal-overlay active">
      <div className="modal-card">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fas fa-times"></i>
        </button>
        
        <div style={{ textAlign: 'center', marginBottom: '18px', paddingRight: '20px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            INSTANT RESERVATION
          </span>
          <h3 className="modal-title">
            {vehicleName ? `${vehicleName} ${rate ? '(' + rate + ')' : ''}` : 'Book Your Ride'}
          </h3>
          <p className="modal-subtitle">
            Fill details to connect directly with Hayana Travels on WhatsApp (+91 93098 20905)
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div className="input-group" style={{ marginBottom: '12px' }}>
            <label>Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group" style={{ marginBottom: '12px' }}>
            <label>Phone / WhatsApp Number</label>
            <input 
              type="tel" 
              placeholder="10-digit mobile number" 
              value={phone} 
              onChange={handlePhoneChange} 
              maxLength={10}
              minLength={10}
              pattern="[0-9]{10}"
              inputMode="numeric"
              title="Please enter a valid 10-digit phone number"
              required 
            />
          </div>

          {/* SEPARATE PICKUP AND DROP LOCATIONS */}
          <div className="modal-grid-row" style={{ marginBottom: '12px' }}>
            <div className="input-group">
              <label>Pickup Location / Hotel</label>
              <input 
                type="text" 
                placeholder="e.g. Devka Beach, Daman" 
                value={pickupCity} 
                onChange={(e) => setPickupCity(e.target.value)} 
                required 
              />
            </div>
            <div className="input-group">
              <label>Drop Location / Hotel</label>
              <input 
                type="text" 
                placeholder="e.g. Devka Beach / Surat" 
                value={dropCity} 
                onChange={(e) => setDropCity(e.target.value)} 
                required 
              />
            </div>
          </div>

          <div className="modal-grid-row" style={{ marginBottom: '12px' }}>
            <div className="input-group">
              <label>Start Date</label>
              <input 
                type="date" 
                value={date} 
                min={getTodayDateString()}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Duration (Days)</label>
              <input 
                type="number" 
                value={days} 
                onChange={(e) => setDays(e.target.value)} 
                min="1" 
                required 
              />
            </div>
          </div>


          <div className="input-group" style={{ marginBottom: '18px' }}>
            <label>Special Requests / Preferred Pickup Time</label>
            <input 
              type="text" 
              placeholder="e.g. Need hotel delivery at 10 AM, 2 helmets" 
              value={notes} 
              onChange={(e) => setNotes(e.target.value)} 
            />
          </div>

          <button type="submit" className="btn btn-whatsapp modal-submit-btn">
            <i className="fab fa-whatsapp"></i> Send Booking Inquiry on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
