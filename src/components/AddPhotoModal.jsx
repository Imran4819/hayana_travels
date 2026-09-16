import React, { useState } from 'react';

export default function AddPhotoModal({ isOpen, onClose, onAddPhoto }) {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('daman-beach');
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [previewSrc, setPreviewSrc] = useState('');

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc(reader.result);
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlChange = (e) => {
    const url = e.target.value;
    setImageUrl(url);
    setPreviewSrc(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !imageUrl) {
      alert('Please provide a photo title and select an image file or URL.');
      return;
    }

    const newPhoto = {
      id: 'gallery-' + Date.now(),
      title: title.trim(),
      location: location.trim() || 'Daman, India',
      category: category,
      image: imageUrl,
      caption: caption.trim() || title.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    };

    onAddPhoto(newPhoto);
    onClose();

    // Reset inputs
    setTitle('');
    setLocation('');
    setCategory('daman-beach');
    setImageUrl('');
    setCaption('');
    setPreviewSrc('');
  };

  return (
    <div className="modal-overlay active" style={{ zIndex: 99999 }}>
      <div className="modal-card" style={{ maxWidth: '520px' }}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fas fa-times"></i>
        </button>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #d97706, #ea580c)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px',
            color: '#ffffff',
            fontSize: '1.5rem',
            boxShadow: '0 8px 20px rgba(217,119,6,0.3)'
          }}>
            <i className="fas fa-camera-retro"></i>
          </div>

          <h3 className="modal-title" style={{ fontSize: '1.5rem' }}>
            Add Travel Gallery Photo
          </h3>
          <p className="modal-subtitle">
            Upload &amp; publish a customer travel memory picture
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group" style={{ marginBottom: '14px' }}>
            <label>Photo Title</label>
            <input 
              type="text" 
              placeholder="e.g. Miramar Beach Sunset Ride" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
            />
          </div>

          <div className="modal-grid-row" style={{ marginBottom: '14px' }}>
            <div className="input-group">
              <label>Location</label>
              <input 
                type="text" 
                placeholder="e.g. Devka Beach, Daman" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
              />
            </div>
            <div className="input-group">
              <label>Category</label>
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-cream)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  background: '#ffffff'
                }}
              >
                <option value="daman-beach">Daman Beach Tours</option>
                <option value="self-drive">Self Drive Memories</option>
                <option value="outstation">Outstation Trips</option>
              </select>
            </div>
          </div>

          {/* FILE UPLOAD & IMAGE URL OPTION */}
          <div className="input-group" style={{ marginBottom: '14px' }}>
            <label>Upload Image File</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={handleFileChange} 
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '10px',
                border: '1.5px dashed #cbd5e1',
                background: '#f8fafc',
                cursor: 'pointer'
              }}
            />
          </div>

          <div className="input-group" style={{ marginBottom: '14px' }}>
            <label>OR Image URL</label>
            <input 
              type="url" 
              placeholder="https://example.com/photo.jpg" 
              value={imageUrl.startsWith('data:') ? '' : imageUrl} 
              onChange={handleUrlChange} 
            />
          </div>

          {/* PREVIEW IMAGE */}
          {previewSrc && (
            <div style={{ marginBottom: '14px', textAlign: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                IMAGE PREVIEW:
              </span>
              <img 
                src={previewSrc} 
                alt="Preview" 
                style={{ maxHeight: '140px', borderRadius: '12px', border: '2px solid #d97706', objectFit: 'cover' }} 
              />
            </div>
          )}

          <div className="input-group" style={{ marginBottom: '20px' }}>
            <label>Caption / Short Story</label>
            <textarea 
              placeholder="e.g. Amazing sunset scooter ride along Devka beach promenade with Hayana Travels Jupiter!" 
              value={caption} 
              onChange={(e) => setCaption(e.target.value)} 
              rows={2}
              style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-cream)', fontFamily: 'inherit' }}
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-gold-luxury modal-submit-btn" 
            style={{ width: '100%' }}
          >
            <span><i className="fas fa-upload"></i> Publish Travel Photo</span>
          </button>
        </form>
      </div>
    </div>
  );
}
