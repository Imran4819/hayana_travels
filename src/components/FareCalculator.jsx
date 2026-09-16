import React, { useState, useEffect } from 'react';

// City distance matrix (One-way road distances in KM)
const CITY_DISTANCES = {
  daman: {
    vapi: 20,
    silvassa: 30,
    valsad: 45,
    navsari: 85,
    saputara: 110,
    surat: 120,
    nashik: 150,
    mumbai: 175,
    shirdi: 220,
    vadodara: 250,
    kevadia: 280,
    pune: 300,
    ahmedabad: 360
  },
  vapi: { daman: 20, silvassa: 18, surat: 105, mumbai: 160, nashik: 140 },
  surat: { daman: 120, vapi: 105, mumbai: 280, vadodara: 140, ahmedabad: 260 },
  mumbai: { daman: 175, vapi: 160, surat: 280, pune: 150, nashik: 165 },
  silvassa: { daman: 30, vapi: 18, surat: 130, mumbai: 170 }
};

const getAutoDistance = (start, end, roundTrip) => {
  const s = (start || '').toLowerCase();
  const e = (end || '').toLowerCase();
  if (!s || !e) return 0;

  for (const [fromCity, targets] of Object.entries(CITY_DISTANCES)) {
    if (s.includes(fromCity)) {
      for (const [toCity, dist] of Object.entries(targets)) {
        if (e.includes(toCity)) {
          return roundTrip ? dist * 2 : dist;
        }
      }
    }
  }

  for (const [fromCity, targets] of Object.entries(CITY_DISTANCES)) {
    if (e.includes(fromCity)) {
      for (const [toCity, dist] of Object.entries(targets)) {
        if (s.includes(toCity)) {
          return roundTrip ? dist * 2 : dist;
        }
      }
    }
  }

  if (e.includes('vapi')) return roundTrip ? 40 : 20;
  if (e.includes('surat')) return roundTrip ? 240 : 120;
  if (e.includes('mumbai')) return roundTrip ? 350 : 175;
  if (e.includes('nashik')) return roundTrip ? 300 : 150;
  if (e.includes('vadodara')) return roundTrip ? 500 : 250;
  if (e.includes('pune')) return roundTrip ? 600 : 300;
  if (e.includes('ahmedabad')) return roundTrip ? 720 : 360;

  return 0;
};

export default function FareCalculator({ onOpenBookingModal, preselectedVehicle, selectedVehicleId }) {
  const [vehicle, setVehicle] = useState('jupiter');
  const [serviceType, setServiceType] = useState('self-drive');
  const [startLocation, setStartLocation] = useState('Daman (Devka / Jampore)');
  const [endLocation, setEndLocation] = useState('Daman Local');
  const [days, setDays] = useState(1);
  const [estimatedKm, setEstimatedKm] = useState(300);
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [detectedRoadKm, setDetectedRoadKm] = useState(0);

  // Sync selected vehicle and category when triggered from Estimator buttons
  useEffect(() => {
    const target = selectedVehicleId || preselectedVehicle;
    if (target) {
      const val = typeof target === 'string' ? target : JSON.stringify(target);
      if (val.includes('jupiter')) setVehicle('jupiter');
      else if (val.includes('dzire')) setVehicle('dzire');
      else if (val.includes('ertiga')) setVehicle('ertiga');

      if (val.includes('self-drive') || val.includes('self_drive')) setServiceType('self-drive');
      else if (val.includes('with-driver') || val.includes('chauffeur')) setServiceType('with-driver');
      else if (val.includes('fixed-drop') || val.includes('fixed_drop')) setServiceType('fixed-drop');
      else if (val.includes('outstation')) setServiceType('outstation');
    }
  }, [preselectedVehicle, selectedVehicleId]);

  // Auto distance calculation
  useEffect(() => {
    const autoKm = getAutoDistance(startLocation, endLocation, isRoundTrip);
    const minRequired = days * 300;
    setDetectedRoadKm(autoKm);
    
    if (autoKm > 0) {
      setEstimatedKm(Math.max(autoKm, minRequired));
    } else {
      setEstimatedKm(minRequired);
    }
  }, [startLocation, endLocation, isRoundTrip, days]);

  const handleVehicleChange = (e) => {
    const val = e.target.value;
    setVehicle(val);
    if (val === 'jupiter' && serviceType !== 'self-drive') {
      setServiceType('self-drive');
    }
  };

  const handleServiceTypeChange = (e) => {
    const val = e.target.value;
    setServiceType(val);
    if (val !== 'self-drive' && vehicle === 'jupiter') {
      setVehicle('dzire');
    }
  };

  // Calculations
  let calculatedFare = 0;
  let fareFormula = '';
  let conditionsList = [];
  let depositAmount = 0;

  if (serviceType === 'self-drive') {
    if (vehicle === 'jupiter') {
      calculatedFare = 600 * days;
      depositAmount = 1000;
      fareFormula = `₹600 / day × ${days} Day(s) (Daman Local Only)`;
    } else if (vehicle === 'dzire') {
      calculatedFare = 2200 * days;
      depositAmount = 3000;
      fareFormula = `₹2,200 / 8h × ${days} Day(s) (Self Drive Sedan)`;
    } else if (vehicle === 'ertiga') {
      calculatedFare = 2800 * days;
      depositAmount = 4000;
      fareFormula = `₹2,800 / 8h × ${days} Day(s) (Self Drive 7-Seater)`;
    }
    conditionsList = [
      `Refundable Advance Deposit: ₹${depositAmount.toLocaleString('en-IN')} (Returned on handover)`,
      'Valid Driving License (DL) compulsory',
      'Fuel not included (Customer pays fuel)',
      'Clean sanitized vehicle delivered in Daman'
    ];
  } else if (serviceType === 'with-driver') {
    if (vehicle === 'dzire') {
      calculatedFare = 2200 * days;
      fareFormula = `₹2,200 / 8 Hours × ${days} Day(s) (All Inclusive)`;
    } else {
      calculatedFare = 3000 * days;
      fareFormula = `₹3,000 / 8 Hours × ${days} Day(s) (All Inclusive)`;
    }
    conditionsList = [
      'Transparent billing. Professional commercial driver included',
      'Fuel & driver allowance included',
      'Local Daman sightseeing & corporate packages',
      'Zero advance deposit required'
    ];
  } else if (serviceType === 'fixed-drop') {
    const isErtiga = (vehicle === 'ertiga');
    const lowerEnd = endLocation.toLowerCase();

    if (lowerEnd.includes('vapi')) {
      calculatedFare = isErtiga ? 900 : 700;
    } else if (lowerEnd.includes('surat')) {
      calculatedFare = isErtiga ? 3500 : 3000;
    } else if (lowerEnd.includes('mumbai')) {
      calculatedFare = isErtiga ? 5500 : 4200;
    } else if (lowerEnd.includes('daman')) {
      calculatedFare = isErtiga ? 600 : 500;
    } else {
      calculatedFare = isErtiga ? 900 : 700;
    }
    fareFormula = `Fixed Flat Fare: ${startLocation} ➔ ${endLocation}`;
    conditionsList = [
      'Flat transparent fare. Courteous driver included',
      `Doorstep pickup from ${startLocation}`,
      `Direct drop to ${endLocation}`,
      'No hidden kilometer charges'
    ];
  } else if (serviceType === 'outstation') {
    const minKmRequired = days * 300;
    const actualKm = Math.max(estimatedKm, minKmRequired);
    const kmRate = (vehicle === 'ertiga') ? 15 : 13;
    calculatedFare = actualKm * kmRate;
    fareFormula = `₹${kmRate}/km × ${actualKm} km (${days} Day${days > 1 ? 's' : ''}, Min 300km/day)`;
    conditionsList = [
      'All India Commercial Tourist Permit valid for all states',
      `Minimum running limit: 300 km / day (${minKmRequired} km for ${days} days)`,
      'Toll Tax + Parking extra as per actual receipts',
      'Uniform driver with GPS track navigation'
    ];
  }

  return (
    <section className="section light-luxury-section" id="calculator">
      <div className="container">
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          padding: '36px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
          border: '1px solid #e2e8f0'
        }}>
          {/* Header */}
          <div style={{ marginBottom: '28px' }}>
            <div className="hero-gold-tag">
              <span className="gold-line"></span> INSTANT ESTIMATOR
            </div>
            <h2 className="card-title-serif" style={{ fontSize: '2.2rem', margin: '8px 0' }}>
              Live Rental Fare Calculator
            </h2>
            <p className="card-desc" style={{ fontSize: '0.95rem', color: '#475569' }}>
              Select your vehicle model and trip type to calculate instant transparent estimates with guaranteed rates.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'start'
          }}>
            {/* Left Column: Input Form Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* 1. SELECT VEHICLE MODEL */}
              <div className="input-group">
                <label style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px', display: 'block' }}>
                  1. SELECT VEHICLE MODEL
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setVehicle('jupiter');
                      if (serviceType !== 'self-drive') setServiceType('self-drive');
                    }}
                    style={{
                      padding: '11px 12px',
                      borderRadius: '12px',
                      border: vehicle === 'jupiter' ? '2px solid #d97706' : '1.5px solid #cbd5e1',
                      background: vehicle === 'jupiter' ? '#fff7ed' : '#f8fafc',
                      color: vehicle === 'jupiter' ? '#c2410c' : '#334155',
                      fontWeight: 700,
                      fontSize: '0.84rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      boxShadow: vehicle === 'jupiter' ? '0 4px 12px rgba(217,119,6,0.15)' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <i className="fas fa-motorcycle" style={{ color: vehicle === 'jupiter' ? '#d97706' : '#64748b' }}></i> TVS Jupiter (Scooter)
                  </button>

                  <button
                    type="button"
                    onClick={() => setVehicle('dzire')}
                    style={{
                      padding: '11px 12px',
                      borderRadius: '12px',
                      border: vehicle === 'dzire' ? '2px solid #d97706' : '1.5px solid #cbd5e1',
                      background: vehicle === 'dzire' ? '#fff7ed' : '#f8fafc',
                      color: vehicle === 'dzire' ? '#c2410c' : '#334155',
                      fontWeight: 700,
                      fontSize: '0.84rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      boxShadow: vehicle === 'dzire' ? '0 4px 12px rgba(217,119,6,0.15)' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <i className="fas fa-car" style={{ color: vehicle === 'dzire' ? '#d97706' : '#64748b' }}></i> Swift Dzire (Sedan)
                  </button>

                  <button
                    type="button"
                    onClick={() => setVehicle('ertiga')}
                    style={{
                      padding: '11px 12px',
                      borderRadius: '12px',
                      border: vehicle === 'ertiga' ? '2px solid #d97706' : '1.5px solid #cbd5e1',
                      background: vehicle === 'ertiga' ? '#fff7ed' : '#f8fafc',
                      color: vehicle === 'ertiga' ? '#c2410c' : '#334155',
                      fontWeight: 700,
                      fontSize: '0.84rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      boxShadow: vehicle === 'ertiga' ? '0 4px 12px rgba(217,119,6,0.15)' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <i className="fas fa-shuttle-van" style={{ color: vehicle === 'ertiga' ? '#d97706' : '#64748b' }}></i> Maruti Ertiga VXI
                  </button>
                </div>
              </div>

              {/* 2. RENTAL SERVICE CATEGORY */}
              <div className="input-group">
                <label style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px', display: 'block' }}>
                  2. RENTAL SERVICE CATEGORY
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setServiceType('self-drive')}
                    style={{
                      padding: '11px 14px',
                      borderRadius: '12px',
                      border: serviceType === 'self-drive' ? '2px solid #d97706' : '1.5px solid #cbd5e1',
                      background: serviceType === 'self-drive' ? 'linear-gradient(135deg, #d97706, #ea580c)' : '#f8fafc',
                      color: serviceType === 'self-drive' ? '#ffffff' : '#334155',
                      fontWeight: 700,
                      fontSize: '0.84rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      boxShadow: serviceType === 'self-drive' ? '0 4px 12px rgba(217,119,6,0.3)' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <i className="fas fa-key"></i> 1st: Self Drive
                  </button>

                  <button
                    type="button"
                    disabled={vehicle === 'jupiter'}
                    onClick={() => {
                      setServiceType('with-driver');
                      if (vehicle === 'jupiter') setVehicle('dzire');
                    }}
                    style={{
                      padding: '11px 14px',
                      borderRadius: '12px',
                      border: serviceType === 'with-driver' ? '2px solid #d97706' : '1.5px solid #cbd5e1',
                      background: serviceType === 'with-driver' ? 'linear-gradient(135deg, #d97706, #ea580c)' : '#f8fafc',
                      color: serviceType === 'with-driver' ? '#ffffff' : (vehicle === 'jupiter' ? '#94a3b8' : '#334155'),
                      fontWeight: 700,
                      fontSize: '0.84rem',
                      cursor: vehicle === 'jupiter' ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      opacity: vehicle === 'jupiter' ? 0.5 : 1,
                      boxShadow: serviceType === 'with-driver' ? '0 4px 12px rgba(217,119,6,0.3)' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <i className="fas fa-user-tie"></i> 2nd: With Driver
                  </button>

                  <button
                    type="button"
                    disabled={vehicle === 'jupiter'}
                    onClick={() => {
                      setServiceType('fixed-drop');
                      if (vehicle === 'jupiter') setVehicle('dzire');
                    }}
                    style={{
                      padding: '11px 14px',
                      borderRadius: '12px',
                      border: serviceType === 'fixed-drop' ? '2px solid #059669' : '1.5px solid #cbd5e1',
                      background: serviceType === 'fixed-drop' ? 'linear-gradient(135deg, #059669, #10b981)' : '#f8fafc',
                      color: serviceType === 'fixed-drop' ? '#ffffff' : (vehicle === 'jupiter' ? '#94a3b8' : '#334155'),
                      fontWeight: 700,
                      fontSize: '0.84rem',
                      cursor: vehicle === 'jupiter' ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      opacity: vehicle === 'jupiter' ? 0.5 : 1,
                      boxShadow: serviceType === 'fixed-drop' ? '0 4px 12px rgba(5,150,105,0.3)' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <i className="fas fa-route"></i> 3rd: Fixed Drops
                  </button>

                  <button
                    type="button"
                    disabled={vehicle === 'jupiter'}
                    onClick={() => {
                      setServiceType('outstation');
                      if (vehicle === 'jupiter') setVehicle('dzire');
                    }}
                    style={{
                      padding: '11px 14px',
                      borderRadius: '12px',
                      border: serviceType === 'outstation' ? '2px solid #1e293b' : '1.5px solid #cbd5e1',
                      background: serviceType === 'outstation' ? 'linear-gradient(135deg, #1e293b, #0f172a)' : '#f8fafc',
                      color: serviceType === 'outstation' ? '#ffffff' : (vehicle === 'jupiter' ? '#94a3b8' : '#334155'),
                      fontWeight: 700,
                      fontSize: '0.84rem',
                      cursor: vehicle === 'jupiter' ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      opacity: vehicle === 'jupiter' ? 0.5 : 1,
                      boxShadow: serviceType === 'outstation' ? '0 4px 12px rgba(15,23,42,0.3)' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <i className="fas fa-globe"></i> 4th: Outstation (KM)
                  </button>
                </div>
              </div>

              {/* 3. PICKUP & DROP LOCATIONS */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
                <div className="input-group">
                  <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '6px', display: 'block' }}>
                    <i className="fas fa-map-marker-alt" style={{ color: '#d97706', marginRight: '4px' }}></i> PICKUP LOCATION
                  </label>
                  <input 
                    type="text" 
                    value={startLocation} 
                    onChange={(e) => setStartLocation(e.target.value)}
                    placeholder="e.g. Daman (Devka / Jampore)"
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1.5px solid #cbd5e1',
                      background: '#ffffff',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div className="input-group">
                  <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '6px', display: 'block' }}>
                    <i className="fas fa-flag-checkered" style={{ color: '#d97706', marginRight: '4px' }}></i> DROP LOCATION
                  </label>
                  <input 
                    type="text" 
                    value={endLocation} 
                    onChange={(e) => setEndLocation(e.target.value)}
                    placeholder="e.g. Vapi Station / Surat / Mumbai"
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1.5px solid #cbd5e1',
                      background: '#ffffff',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
              </div>

              {/* 4. DURATION & DISTANCE */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
                <div className="input-group">
                  <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '6px', display: 'block' }}>
                    DURATION (DAYS)
                  </label>
                  <input 
                    type="number" 
                    value={days} 
                    onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))} 
                    min="1" 
                    max="30"
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1.5px solid #cbd5e1',
                      background: '#ffffff',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                {serviceType === 'outstation' && (
                  <div className="input-group">
                    <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '6px', display: 'block' }}>
                      ESTIMATED DISTANCE (KM)
                    </label>
                    <input 
                      type="number" 
                      value={estimatedKm} 
                      onChange={(e) => setEstimatedKm(Math.max(0, parseInt(e.target.value) || 0))}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        background: '#ffffff',
                        fontSize: '0.9rem'
                      }}
                    />
                    {detectedRoadKm > 0 && (
                      <div style={{ fontSize: '0.74rem', color: '#059669', marginTop: '4px', fontWeight: 700 }}>
                        <i className="fas fa-magic"></i> Auto-Calculated Distance: <strong>{detectedRoadKm} km</strong>
                      </div>
                    )}
                  </div>
                )}
              </div>

            </div>

            {/* Right Column: Estimated Fare & Conditions Result Card (matching Image 3) */}
            <div style={{
              background: '#faf8f5',
              borderRadius: '20px',
              padding: '28px',
              border: '1.5px solid #f1f5f9',
              boxShadow: '0 8px 24px rgba(0,0,0,0.02)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ color: '#d97706', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center', marginBottom: '8px' }}>
                  ESTIMATED FARE
                </div>
                
                {/* Big Price Display */}
                <div style={{ fontSize: '3rem', fontWeight: 900, color: '#d97706', textAlign: 'center', margin: '4px 0 6px', fontFamily: 'Playfair Display, serif' }}>
                  ₹{calculatedFare.toLocaleString('en-IN')}
                </div>

                {/* Formula line */}
                <div style={{ fontSize: '0.86rem', color: '#64748b', textAlign: 'center', fontWeight: 600, marginBottom: '20px' }}>
                  {fareFormula}
                </div>

                {/* WhatsApp Action Button */}
                <button 
                  className="btn" 
                  style={{
                    background: '#059669',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    width: '100%',
                    padding: '14px',
                    borderRadius: '14px',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    boxShadow: '0 8px 20px rgba(5, 150, 105, 0.25)',
                    marginBottom: '16px'
                  }}
                  onClick={() => onOpenBookingModal(
                    `Fare Quote: ${vehicle.toUpperCase()} (${serviceType.toUpperCase()})`,
                    `Route: ${startLocation} ➔ ${endLocation} | Est. Fare: ₹${calculatedFare.toLocaleString('en-IN')}`
                  )}
                >
                  <i className="fab fa-whatsapp" style={{ fontSize: '1.2rem' }}></i> Lock Fare on WhatsApp
                </button>
              </div>

              {/* Conditions & Terms List */}
              <div style={{
                background: '#ffffff',
                padding: '14px 16px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                fontSize: '0.8rem',
                color: '#334155'
              }}>
                <div style={{ fontWeight: 800, color: '#0f172a', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <i className="fas fa-shield-alt" style={{ color: '#059669' }}></i> Transparent billing. Driver included.
                </div>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {conditionsList.map((cond, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                      <span style={{ color: '#059669', fontWeight: 800 }}>•</span>
                      <span>{cond}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
