import React, { useState } from 'react';

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [statusMsg, setStatusMsg] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/[^\d]/g, '').slice(0, 10);
    setPhone(val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg('');
    setLoading(true);

    if (phone.length < 10) {
      setStatusMsg('Please enter a valid 10-digit mobile number.');
      setLoading(false);
      return;
    }

    try {
      // CALL LIVE BACKEND LOGIN API
      const response = await fetch('https://business-management-ji66.onrender.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone,
          password
        })
      });

      const data = await response.json();

      if (response.ok && (data.token || data.user)) {
        const userObj = {
          id: data.user?.id || 'user_id',
          name: data.user?.name || 'Customer',
          phone: data.user?.phone || phone,
          email: data.user?.email || '',
          role: data.user?.role || 'user',
          token: data.token
        };

        localStorage.setItem('hayana_user', JSON.stringify(userObj));
        localStorage.setItem('hayana_token', data.token);

        setStatusMsg(`Login Successful! Welcome, ${userObj.name}`);
        setTimeout(() => {
          onLoginSuccess(userObj);
          onClose();
          setStatusMsg('');
          setPhone('');
          setPassword('');
        }, 800);
      } else {
        setStatusMsg(data.message || 'Invalid mobile number or password.');
      }
    } catch (err) {
      console.error('Login API error:', err);
      setStatusMsg('Network connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay active">
      <div className="modal-card" style={{ maxWidth: '420px' }}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fas fa-times"></i>
        </button>

        <div style={{ textAlign: 'center', marginBottom: '22px' }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'var(--gold-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px',
            color: '#121210',
            fontSize: '1.5rem'
          }}>
            <i className="fas fa-user-lock"></i>
          </div>

          <h3 className="modal-title">
            Login to Hayana Travels
          </h3>
          <p className="modal-subtitle">
            Enter your phone number &amp; password to unlock reward coupons
          </p>
        </div>

        {statusMsg && (
          <div style={{
            padding: '10px 14px',
            borderRadius: '10px',
            marginBottom: '16px',
            fontSize: '0.85rem',
            fontWeight: 700,
            background: statusMsg.includes('Successful') ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
            color: statusMsg.includes('Successful') ? '#059669' : '#dc2626',
            border: statusMsg.includes('Successful') ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)'
          }}>
            {statusMsg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="input-group" style={{ marginBottom: '14px' }}>
            <label>Mobile Number (Phone)</label>
            <input 
              type="tel" 
              placeholder="Enter 10-digit phone number" 
              value={phone} 
              onChange={handlePhoneChange} 
              maxLength={10}
              minLength={10}
              required 
            />
          </div>

          <div className="input-group" style={{ marginBottom: '20px' }}>
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-gold-luxury modal-submit-btn" 
            style={{ width: '100%' }}
            disabled={loading}
          >
            {loading ? (
              <span><i className="fas fa-spinner fa-spin"></i> Authenticating...</span>
            ) : (
              <span><i className="fas fa-sign-in-alt"></i> Login &amp; Unlock Coupons</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
