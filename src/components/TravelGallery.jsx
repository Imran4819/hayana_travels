import React, { useState, useEffect } from 'react';
import AddPhotoModal from './AddPhotoModal';

const INITIAL_PHOTOS = [
  {
    id: 'gal-1',
    title: 'Coastal Highway Scenic Drive',
    location: 'Daman Devka Road',
    category: 'daman-beach',
    image: '/assets/images/gallery_1.png',
    caption: 'Cruising along Daman palm-lined coastal road with Hayana Travels Swift Dzire sedan.',
    date: 'Sep 2026'
  },
  {
    id: 'gal-2',
    title: 'Golden Hour Scooter Ride',
    location: 'Devka Promenade, Daman',
    category: 'self-drive',
    image: '/assets/images/gallery_2.png',
    caption: 'Unforgettable sunset scooter ride along Devka beach promenade on TVS Jupiter.',
    date: 'Sep 2026'
  },
  {
    id: 'gal-3',
    title: 'Outstation Family Highway Tour',
    location: 'Mumbai - Surat Highway',
    category: 'outstation',
    image: '/assets/images/gallery_3.png',
    caption: 'Spacious 7-seater Maruti Ertiga VXI outstation trip across lush green highways.',
    date: 'Aug 2026'
  },
  {
    id: 'gal-4',
    title: 'TVS Jupiter Beach Handover',
    location: 'Jampore Beach, Daman',
    category: 'self-drive',
    image: '/assets/images/jupiter_real.png',
    caption: 'Free hotel delivery and quick 2-minute paperwork at Jampore beach resort.',
    date: 'Aug 2026'
  },
  {
    id: 'gal-5',
    title: 'Swift Dzire Sedan Station Drop',
    location: 'Vapi Railway Station',
    category: 'daman-beach',
    image: '/assets/images/swift_dzire_real.png',
    caption: 'Punctual & courteous chauffeur drop service between Daman and Vapi Station.',
    date: 'Jul 2026'
  },
  {
    id: 'gal-6',
    title: 'Maruti Ertiga All-India Permitted MPV',
    location: 'Saputara Hill Station',
    category: 'outstation',
    image: '/assets/images/ertiga_real.png',
    caption: 'Comfortable family vacation outstation package to Saputara hills.',
    date: 'Jul 2026'
  }
];

export default function TravelGallery({ currentUser }) {
  const [photos, setPhotos] = useState(() => {
    const saved = localStorage.getItem('hayana_gallery_photos');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return [...parsed, ...INITIAL_PHOTOS.filter(ip => !parsed.some(p => p.id === ip.id))];
      } catch (e) {
        console.error('Failed to parse saved gallery photos:', e);
      }
    }
    return INITIAL_PHOTOS;
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('hayana_gallery_photos', JSON.stringify(photos));
  }, [photos]);

  const handleAddPhoto = (newPhoto) => {
    setPhotos(prev => [newPhoto, ...prev]);
  };

  const handleDeletePhoto = (photoId, title, e) => {
    e.stopPropagation();
    if (window.confirm(`Are you sure you want to delete photo "${title}"?`)) {
      setPhotos(prev => prev.filter(p => p.id !== photoId));
      if (lightboxIndex !== null) setLightboxIndex(null);
    }
  };

  const filteredPhotos = activeFilter === 'all' 
    ? photos 
    : photos.filter(p => p.category === activeFilter);

  const activeLightboxPhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev > 0 ? prev - 1 : filteredPhotos.length - 1));
    }
  };

  const handleNextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev < filteredPhotos.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section className="section light-luxury-section" id="gallery">
      <div className="container">
        {/* SECTION HEADER */}
        <div className="section-header" style={{ position: 'relative' }}>
          <div className="hero-gold-tag" style={{ justifyContent: 'center' }}>
            <span className="gold-line"></span> CUSTOMER MEMORIES &amp; JOURNEYS
          </div>
          <h2 className="section-title-serif">Travel Photo Gallery</h2>
          <p className="section-desc-serif" style={{ margin: '0 auto 20px' }}>
            Explore real moments, scenic coastal rides, and outstation trips enjoyed by our happy rental guests in Daman &amp; across India.
          </p>

          {/* FILTER CATEGORY TABS */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
            {[
              { id: 'all', label: 'All Travel Photos', icon: 'fa-images' },
              { id: 'daman-beach', label: 'Daman Beach Tours', icon: 'fa-umbrella-beach' },
              { id: 'self-drive', label: 'Self Drive Memories', icon: 'fa-motorcycle' },
              { id: 'outstation', label: 'Outstation Trips', icon: 'fa-route' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                style={{
                  padding: '9px 16px',
                  borderRadius: '12px',
                  border: activeFilter === tab.id ? '2px solid #d97706' : '1.5px solid #cbd5e1',
                  background: activeFilter === tab.id ? 'linear-gradient(135deg, #d97706, #ea580c)' : '#ffffff',
                  color: activeFilter === tab.id ? '#ffffff' : '#334155',
                  fontWeight: 700,
                  fontSize: '0.84rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: activeFilter === tab.id ? '0 4px 12px rgba(217,119,6,0.25)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <i className={`fas ${tab.icon}`}></i> {tab.label}
              </button>
            ))}

            {/* ADD PHOTO BUTTON (VISIBLE ONLY WHEN LOGGED IN) */}
            {currentUser && (
              <button
                type="button"
                className="btn btn-gold-luxury btn-sm"
                onClick={() => setIsAddModalOpen(true)}
                style={{ padding: '9px 16px', borderRadius: '12px' }}
              >
                <i className="fas fa-plus-circle"></i> Add Travel Photo
              </button>
            )}
          </div>
        </div>

        {/* PHOTO GALLERY GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="specialty-card-luxury"
              onClick={() => setLightboxIndex(index)}
              style={{
                cursor: 'pointer',
                padding: 0,
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              <div style={{ position: 'relative', height: '240px', width: '100%', overflow: 'hidden' }}>
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                />
                <span className="card-badge-gold" style={{ top: '12px', right: '12px', fontSize: '0.74rem' }}>
                  <i className="fas fa-map-marker-alt" style={{ marginRight: '4px' }}></i> {photo.location}
                </span>

                {/* DELETE BUTTON FOR LOGGED IN USERS */}
                {currentUser && (
                  <button
                    type="button"
                    onClick={(e) => handleDeletePhoto(photo.id, photo.title, e)}
                    title="Delete Photo"
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: '#ef4444',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '6px 10px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      zIndex: 5
                    }}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                )}
              </div>

              <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span className="specialty-badge-tag gold-badge" style={{ fontSize: '0.72rem' }}>
                    {photo.category.toUpperCase().replace('-', ' ')}
                  </span>
                  <span style={{ fontSize: '0.76rem', color: '#64748b', fontWeight: 600 }}>
                    <i className="far fa-calendar-alt" style={{ marginRight: '4px' }}></i> {photo.date}
                  </span>
                </div>

                <h3 className="card-title-serif" style={{ fontSize: '1.25rem', margin: '4px 0 8px', color: '#0f172a' }}>
                  {photo.title}
                </h3>
                <p className="card-desc" style={{ fontSize: '0.84rem', color: '#475569', margin: 0, lineHeight: '1.45' }}>
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX MODAL FULLSCREEN VIEW */}
        {activeLightboxPhoto && (
          <div
            className="modal-overlay active"
            onClick={() => setLightboxIndex(null)}
            style={{
              zIndex: 99999,
              background: 'rgba(15, 23, 42, 0.92)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                maxWidth: '750px',
                width: '100%',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                position: 'relative'
              }}
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close Lightbox"
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10
                }}
              >
                <i className="fas fa-times"></i>
              </button>

              <div style={{ position: 'relative', height: '380px', width: '100%', background: '#0f172a' }}>
                <img
                  src={activeLightboxPhoto.image}
                  alt={activeLightboxPhoto.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />

                {/* PREV / NEXT BUTTONS */}
                <button
                  type="button"
                  onClick={handlePrevLightbox}
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255,255,255,0.85)',
                    color: '#0f172a',
                    border: 'none',
                    borderRadius: '50%',
                    width: '42px',
                    height: '42px',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                  }}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>

                <button
                  type="button"
                  onClick={handleNextLightbox}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255,255,255,0.85)',
                    color: '#0f172a',
                    border: 'none',
                    borderRadius: '50%',
                    width: '42px',
                    height: '42px',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                  }}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>

              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ color: '#d97706', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    <i className="fas fa-map-marker-alt" style={{ marginRight: '6px' }}></i> {activeLightboxPhoto.location}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                    {activeLightboxPhoto.date}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', margin: '0 0 10px', color: '#0f172a', fontWeight: 700 }}>
                  {activeLightboxPhoto.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.92rem', margin: 0, lineHeight: '1.5' }}>
                  {activeLightboxPhoto.caption}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ADD PHOTO MODAL */}
        <AddPhotoModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAddPhoto={handleAddPhoto}
        />
      </div>
    </section>
  );
}
