import React, { useState } from 'react';

const getTodayDateString = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

export default function QuickSearch({ onOpenBookingModal }) {
  const [tab, setTab] = useState('bikes');
  const [vehicle, setVehicle] = useState('jupiter');

  const handleTabChange = (newTab) => {
    setTab(newTab);
    if (newTab === 'bikes') {
      setVehicle('jupiter');
    } else if (newTab === 'dzire') {
      setVehicle('dzire');
    } else if (newTab === 'cars') {
      setVehicle('ertiga');
    } else if (newTab === 'tours') {
      setVehicle('ertiga');
    }
  };

  const handleVehicleChange = (e) => {
    const selectedVal = e.target.value;
    setVehicle(selectedVal);
    if (selectedVal === 'jupiter') {
      setTab('bikes');
    } else if (selectedVal === 'dzire') {
      setTab('dzire');
    } else if (selectedVal === 'ertiga') {
      setTab('cars');
    }
  };

  const handleSearchSubmit = () => {
    const vehicleLabels = {
      dzire: 'Maruti Swift Dzire (Sedan)',
      ertiga: 'Maruti Suzuki Ertiga VXI (7-Seater)',
      jupiter: 'TVS Jupiter (Two Wheeler)'
    };
    const selectedName = vehicleLabels[vehicle] || 'Quick Search Reservation';
    onOpenBookingModal(selectedName, '');
  };

  return (
    <div className="container">
      <div className="quick-search-box">
        <div className="search-tabs">
          <button 
            className={`tab-btn ${tab === 'bikes' ? 'active' : ''}`}
            onClick={() => handleTabChange('bikes')}
          >
            <i className="fas fa-motorcycle"></i> Two Wheeler (Daman Only)
          </button>
          <button 
            className={`tab-btn ${tab === 'dzire' ? 'active' : ''}`}
            onClick={() => handleTabChange('dzire')}
          >
            <i className="fas fa-car-side"></i> Swift Dzire (Daman & Drops)
          </button>
          <button 
            className={`tab-btn ${tab === 'cars' ? 'active' : ''}`}
            onClick={() => handleTabChange('cars')}
          >
            <i className="fas fa-car"></i> Ertiga Car (All Over India)
          </button>
          <button 
            className={`tab-btn ${tab === 'tours' ? 'active' : ''}`}
            onClick={() => handleTabChange('tours')}
          >
            <i className="fas fa-map-marked-alt"></i> Tour Packages
          </button>
        </div>

        <div className="search-grid">
          <div className="input-group">
            <label><i className="fas fa-location-dot"></i> Pickup Location</label>
            <select defaultValue="daman">
              <option value="daman">Daman City / Devka Beach / Hotel Delivery</option>
              <option value="surat">Surat Station / City</option>
              <option value="vapi">Vapi Station</option>
              <option value="all-india">All Over India Pickup</option>
            </select>
          </div>

          <div className="input-group">
            <label><i className="fas fa-layer-group"></i> Vehicle Required</label>
            <select value={vehicle} onChange={handleVehicleChange}>
              <option value="dzire">Maruti Swift Dzire (Sedan - Daman & Drops)</option>
              <option value="ertiga">Maruti Suzuki Ertiga VXI (7-Seater - All India)</option>
              <option value="jupiter">TVS Jupiter (Two Wheeler - Daman Only)</option>
            </select>
          </div>

          <div className="input-group">
            <label><i className="fas fa-calendar-alt"></i> Start Date</label>
            <input 
              type="date" 
              defaultValue={getTodayDateString()} 
              min={getTodayDateString()}
              required
            />
          </div>

          <div className="input-group">
            <label><i className="fas fa-clock"></i> Duration</label>
            <select defaultValue="2">
              <option value="1">1 Day</option>
              <option value="2">2 Days</option>
              <option value="3">3 Days</option>
              <option value="5">5 Days</option>
              <option value="7">7+ Days</option>
            </select>
          </div>

          <div className="input-group search-btn-group">
            <button 
              className="btn btn-primary search-submit-btn"
              onClick={handleSearchSubmit}
            >
              <i className="fas fa-search"></i> Check Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

