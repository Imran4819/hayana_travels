import React from 'react';

export default function TourPackages({ onOpenBookingModal }) {
  const packages = [
    {
      id: 1,
      tag: '2 DAYS / 1 NIGHT • DAMAN SCOOTER SPECIAL',
      title: 'Daman Beach & Heritage Fort Getaway',
      places: 'Devka Beach, Jampore Beach, Moti Daman Fort & St. Jerome Fort',
      desc: 'Includes 2-Day TVS Jupiter Two-Wheeler rental (Only For Daman) + 2 Helmets + Free Hotel Delivery.',
      price: '₹1,200 / Group',
      image: '/assets/images/jupiter_real.png'
    },
    {
      id: 2,
      tag: '3 DAYS / 2 NIGHTS • DAMAN EXPLORER',
      title: 'Daman Coastal Promenade & Sunset Tour',
      places: 'Jampore Water Sports, Moti Daman Lighthouse, Devka Promenade & Local Markets',
      desc: 'Includes 3-Day TVS Jupiter Two-Wheeler rental + 2 Helmets + Hotel Delivery + Daman Beach Map.',
      price: '₹1,800 / Group',
      image: '/assets/images/jupiter_real.png'
    },
    {
      id: 3,
      tag: '6 DAYS / 5 NIGHTS • ALL INDIA ERTIGA SPECIAL',
      title: 'All Over India Outstation Family Circuit',
      places: 'Custom Outstation Routes Across All States in India with Commercial Tourist Permit',
      desc: 'Includes 7-Seater Maruti Suzuki Ertiga Car with experienced driver, AC comfort, and inter-state permits.',
      price: '₹18,500 / Group',
      image: '/assets/images/ertiga_real.png'
    }
  ];

  return (
    <section className="section light-luxury-section" id="packages">
      <div className="container">
        <div className="section-header">
          <div className="hero-gold-tag" style={{ justifyContent: 'center' }}>
            <span className="gold-line"></span> POPULAR TOUR ITINERARIES
          </div>
          <h2 className="section-title-serif">Explore Daman & All-India Tour Packages</h2>
          <p className="section-desc-serif" style={{ margin: '0 auto' }}>
            Combine your TVS Jupiter Two-Wheeler rental in Daman or Maruti Ertiga Car for All-India tours.
          </p>
        </div>

        <div className="specialty-grid">
          {packages.map(pkg => (
            <div key={pkg.id} className="specialty-card-luxury">
              <div style={{ position: 'relative', height: '220px', width: '100%', overflow: 'hidden' }}>
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              
              <div className="specialty-content-luxury">
                <span className="specialty-badge-tag">
                  {pkg.tag}
                </span>
                
                <h3 className="card-title-serif" style={{ fontSize: '1.4rem', margin: '8px 0 10px' }}>
                  {pkg.title}
                </h3>
                
                <p style={{ fontSize: '0.88rem', color: 'var(--text-dark)', marginBottom: '12px', lineHeight: 1.5, fontWeight: 600 }}>
                  <i className="fas fa-map-pin" style={{ color: 'var(--gold-dark)', marginRight: '6px' }}></i>
                  {pkg.places}
                </p>
                
                <p className="card-desc" style={{ marginBottom: '20px' }}>
                  {pkg.desc}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-cream)' }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted-dark)' }}>Package Price</span>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--gold-dark)' }}>{pkg.price}</div>
                  </div>
                  <button 
                    className="btn dark-whatsapp-btn btn-sm"
                    onClick={() => onOpenBookingModal(`Tour Package: ${pkg.title}`, pkg.price)}
                  >
                    <i className="fab fa-whatsapp"></i> Book Tour
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
