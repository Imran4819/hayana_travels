import React, { useState, useEffect } from 'react';
import { fleetData } from '../data/fleetData';

export default function FareCalculator({ selectedVehicleId, onOpenBookingModal }) {
  const [vehicleId, setVehicleId] = useState(selectedVehicleId || fleetData[0].id);
  const [days, setDays] = useState(1);
  const [region, setRegion] = useState('daman');
  const [includeDriver, setIncludeDriver] = useState(false);
  const [includeDelivery, setIncludeDelivery] = useState(true);

  useEffect(() => {
    if (selectedVehicleId) {
      setVehicleId(selectedVehicleId);
    }
  }, [selectedVehicleId]);

  const selectedVehicle = fleetData.find(v => v.id === vehicleId) || fleetData[0];
  
  const baseTotal = selectedVehicle.rateDay * days;
  const driverCost = includeDriver ? (500 * days) : 0;
  const deliveryCost = includeDelivery ? 200 : 0;
  const grandTotal = baseTotal + driverCost + deliveryCost;

  return (
    <section className="section light-luxury-section" id="calculator">
      <div className="container">
        <div className="calculator-box">
          <div className="calc-grid">
            <div className="calc-controls">
              <div className="hero-gold-tag">
                <span className="gold-line"></span> INSTANT ESTIMATOR
              </div>
              <h2 className="card-title-serif" style={{ fontSize: '2rem', marginBottom: '12px' }}>
                Live Rental Fare Calculator
              </h2>
              <p className="card-desc" style={{ marginBottom: '20px' }}>
                Select your preferred bike or car, choose your rental duration, and calculate transparent costs instantly.
              </p>

              <div className="input-group">
                <label>Select Vehicle Model</label>
                <select value={vehicleId} onChange={(e) => setVehicleId(e.target.value)}>
                  {fleetData.map(v => (
                    <option key={v.id} value={v.id}>
                      {v.name} (₹{v.rateDay}/day)
                    </option>
                  ))}
                </select>
              </div>

              <div className="calc-row">
                <div className="input-group">
                  <label>Duration (Days)</label>
                  <input 
                    type="number" 
                    value={days} 
                    onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))} 
                    min="1" 
                    max="30"
                  />
                </div>

                <div className="input-group">
                  <label>Pickup / Delivery Region</label>
                  <select value={region} onChange={(e) => setRegion(e.target.value)}>
                    <option value="daman">Daman City / Beach Hotel</option>
                    <option value="diu">Diu Island / Airport</option>
                    <option value="outstation">All India Outstation</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', cursor: 'pointer', color: 'var(--text-dark)' }}>
                  <input 
                    type="checkbox" 
                    checked={includeDriver} 
                    onChange={(e) => setIncludeDriver(e.target.checked)}
                  /> 
                  Add Driver Allowance (+₹500/day for cars)
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', cursor: 'pointer', color: 'var(--text-dark)' }}>
                  <input 
                    type="checkbox" 
                    checked={includeDelivery} 
                    onChange={(e) => setIncludeDelivery(e.target.checked)}
                  /> 
                  Doorstep Hotel Delivery (+₹200)
                </label>
              </div>
            </div>

            <div className="calc-result-card">
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--gold-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                ESTIMATED TOTAL FARE
              </span>
              <div className="calc-price-amount">₹{grandTotal.toLocaleString('en-IN')}</div>
              <div className="calc-price-period" style={{ fontSize: '0.85rem', color: 'var(--text-muted-dark)', marginBottom: '16px' }}>
                Base: ₹{baseTotal} ({days} Days) {driverCost ? `+ Driver ₹${driverCost}` : ''} {deliveryCost ? `+ Delivery ₹${deliveryCost}` : ''}
              </div>
              
              <button 
                className="btn dark-whatsapp-btn btn-lg" 
                style={{ width: '100%' }}
                onClick={() => onOpenBookingModal(`${selectedVehicle.name} (Calculated Fare)`, `₹${grandTotal.toLocaleString('en-IN')}`)}
              >
                <i className="fab fa-whatsapp"></i> Lock This Fare on WhatsApp
              </button>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted-dark)', marginTop: '12px' }}>
                <i className="fas fa-lock"></i> Guaranteed rates. No hidden surge charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
