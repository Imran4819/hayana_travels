import React, { useState, useEffect } from 'react';
import { fleetData } from '../data/fleetData';

export default function FareCalculator({ selectedVehicleId, onOpenBookingModal }) {
  const [vehicleId, setVehicleId] = useState(selectedVehicleId || fleetData[0].id);
  const [tripType, setTripType] = useState('local'); // 'local' or 'outstation'
  const [days, setDays] = useState(1);
  const [estimatedKm, setEstimatedKm] = useState(300);

  useEffect(() => {
    if (selectedVehicleId) {
      setVehicleId(selectedVehicleId);
    }
  }, [selectedVehicleId]);

  // Adjust tripType default based on vehicle
  useEffect(() => {
    if (vehicleId === 'tvs-jupiter') {
      setTripType('local');
    }
  }, [vehicleId]);

  const selectedVehicle = fleetData.find(v => v.id === vehicleId) || fleetData[0];
  const isCar = selectedVehicle.id !== 'tvs-jupiter';

  // Minimum required KM for outstation = 300 km * days
  const minRequiredKm = days * 300;
  const effectiveKm = Math.max(estimatedKm, minRequiredKm);

  let calculatedFare = 0;
  let calculationNote = '';

  if (selectedVehicle.id === 'tvs-jupiter') {
    calculatedFare = 400 * days;
    calculationNote = `₹400 / day × ${days} Days (Daman Local Only)`;
  } else if (tripType === 'local') {
    calculatedFare = selectedVehicle.rateDay * days;
    calculationNote = `₹${selectedVehicle.rateDay.toLocaleString('en-IN')} / 8 Hours Local × ${days} Days (All Included)`;
  } else {
    // Outstation per KM calculation
    const ratePerKm = selectedVehicle.ratePerKm || (selectedVehicle.id === 'swift-dzire' ? 13 : 15);
    calculatedFare = effectiveKm * ratePerKm;
    calculationNote = `${effectiveKm} km @ ₹${ratePerKm}/km (Min. 300 km/day limit applied)`;
  }

  return (
    <section className="section light-luxury-section" id="calculator">
      <div className="container">
        <div className="calculator-box">
          <div className="calc-grid">
            <div className="calc-controls">
              <div className="hero-gold-tag">
                <span className="gold-line"></span> INSTANT ESTIMATOR
              </div>
              <h2 className="card-title-serif" style={{ fontSize: '2rem', marginBottom: '8px' }}>
                Live Rental Fare Calculator
              </h2>
              <p className="card-desc" style={{ marginBottom: '18px' }}>
                Select your vehicle model and trip type to calculate instant transparent estimates with guaranteed rates.
              </p>

              <div className="input-group">
                <label>1. Select Vehicle Model</label>
                <select value={vehicleId} onChange={(e) => setVehicleId(e.target.value)}>
                  {fleetData.map(v => (
                    <option key={v.id} value={v.id}>
                      {v.name} {v.ratePerKm ? `(Outstation ₹${v.ratePerKm}/km • Min 300km/day)` : `(₹${v.rateDay}/day)`}
                    </option>
                  ))}
                </select>
              </div>

              {isCar && (
                <div className="input-group" style={{ marginTop: '12px' }}>
                  <label>2. Select Trip Category</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <button
                      type="button"
                      className={`btn btn-sm ${tripType === 'local' ? 'btn-gold-luxury' : 'btn-dark-luxury'}`}
                      style={{ borderRadius: '10px', justifyContent: 'center' }}
                      onClick={() => setTripType('local')}
                    >
                      <i className="fas fa-city"></i> Local (8 Hours Package)
                    </button>
                    <button
                      type="button"
                      className={`btn btn-sm ${tripType === 'outstation' ? 'btn-gold-luxury' : 'btn-dark-luxury'}`}
                      style={{ borderRadius: '10px', justifyContent: 'center' }}
                      onClick={() => setTripType('outstation')}
                    >
                      <i className="fas fa-route"></i> Outstation (Per KM)
                    </button>
                  </div>
                </div>
              )}

              <div className="calc-row" style={{ marginTop: '14px' }}>
                <div className="input-group">
                  <label>Duration (Days)</label>
                  <input 
                    type="number" 
                    value={days} 
                    onChange={(e) => {
                      const d = Math.max(1, parseInt(e.target.value) || 1);
                      setDays(d);
                      if (d * 300 > estimatedKm) {
                        setEstimatedKm(d * 300);
                      }
                    }} 
                    min="1" 
                    max="30"
                  />
                </div>

                {isCar && tripType === 'outstation' ? (
                  <div className="input-group">
                    <label>Estimated Total Distance (KM)</label>
                    <input 
                      type="number" 
                      value={estimatedKm} 
                      onChange={(e) => setEstimatedKm(Math.max(0, parseInt(e.target.value) || 0))}
                      placeholder={`Min ${minRequiredKm} km`} 
                      min={minRequiredKm}
                    />
                    <span style={{ fontSize: '0.72rem', color: 'var(--gold-dark)', marginTop: '2px', fontWeight: 600 }}>
                      *Min. running limit: 300 km / day ({minRequiredKm} km total)
                    </span>
                  </div>
                ) : (
                  <div className="input-group">
                    <label>Service Area</label>
                    <select defaultValue="daman">
                      <option value="daman">Daman City & Resort Delivery</option>
                      <option value="vapi">Vapi Station Transfer</option>
                      <option value="surat">Surat & Near Cities</option>
                    </select>
                  </div>
                )}
              </div>
            </div>

            <div className="calc-result-card">
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--gold-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                ESTIMATED FARE
              </span>
              <div className="calc-price-amount">₹{calculatedFare.toLocaleString('en-IN')}</div>
              
              <div className="calc-price-period" style={{ fontSize: '0.82rem', color: 'var(--text-muted-dark)', marginBottom: '12px', fontWeight: 600 }}>
                {calculationNote}
              </div>

              {isCar && tripType === 'outstation' && (
                <div style={{ background: '#ffffff', padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--border-gold)', marginBottom: '16px', fontSize: '0.78rem', color: 'var(--text-dark)', textAlign: 'left', width: '100%' }}>
                  <div style={{ fontWeight: 700, color: 'var(--gold-dark)', marginBottom: '4px' }}>
                    <i className="fas fa-info-circle"></i> Outstation Pricing Terms:
                  </div>
                  <div>• Rate: <strong>₹{selectedVehicle.ratePerKm || (selectedVehicle.id === 'swift-dzire' ? 13 : 15)} / km</strong></div>
                  <div>• Min. limit: <strong>300 km / day</strong></div>
                  <div>• <strong>Toll Tax & Parking extra</strong> as per actual receipt</div>
                </div>
              )}
              
              <button 
                className="btn dark-whatsapp-btn btn-lg" 
                style={{ width: '100%' }}
                onClick={() => onOpenBookingModal(`${selectedVehicle.name} (${tripType.toUpperCase()} - Fare Est.)`, `₹${calculatedFare.toLocaleString('en-IN')}`)}
              >
                <i className="fab fa-whatsapp"></i> Lock Fare on WhatsApp
              </button>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted-dark)', marginTop: '10px' }}>
                <i className="fas fa-shield-alt"></i> Transparent billing. Driver included.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

