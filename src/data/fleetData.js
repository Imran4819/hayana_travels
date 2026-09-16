export const selfDriveFleet = [
  {
    id: 'tvs-jupiter-self',
    name: 'TVS Jupiter (Scooter)',
    category: 'Self Drive (Daman Only)',
    rentPrice: 600,
    deposit: 1000,
    image: '/assets/images/jupiter_real.png',
    fuelPolicy: 'Fuel Not Included',
    dlPolicy: 'DL Compulsory',
    badge: 'SELF DRIVE • DAMAN ONLY',
    badgeClass: 'badge-daman',
    desc: 'Rent ₹600/day + ₹1,000 Refundable Advance Deposit. DL Compulsory, Fuel Not Included.',
    features: [
      'Daily Rent: ₹600 / Day',
      'Refundable Deposit: ₹1,000 (Returned on Drop)',
      'DL Compulsory • 2 Helmets Provided'
    ]
  },
  {
    id: 'swift-dzire-self',
    name: 'Swift Dzire (Sedan - Self Drive)',
    category: 'Self Drive (Daman Only)',
    rentPrice: 2200,
    deposit: 3000,
    image: '/assets/images/swift_dzire_real.png',
    fuelPolicy: 'Fuel Not Included',
    dlPolicy: 'DL Compulsory',
    badge: 'SELF DRIVE • 8 HOURS',
    badgeClass: 'badge-india',
    desc: 'Rent ₹2,200 for 8 Hours + ₹3,000 Refundable Advance Deposit.',
    features: [
      'Rent (8 Hours): ₹2,200',
      'Refundable Deposit: ₹3,000 (Returned on Drop)',
      'DL Compulsory • Fuel Extra'
    ]
  },
  {
    id: 'ertiga-vxi-self',
    name: 'Ertiga VXI (7-Seater - Self Drive)',
    category: 'Self Drive (Daman Only)',
    rentPrice: 2800,
    deposit: 4000,
    image: '/assets/images/ertiga_real.png',
    fuelPolicy: 'Fuel Not Included',
    dlPolicy: 'DL Compulsory',
    badge: 'SELF DRIVE • 7-SEATER',
    badgeClass: 'badge-india',
    desc: 'Rent ₹2,800 for 8 Hours + ₹4,000 Refundable Advance Deposit.',
    features: [
      'Rent (8 Hours): ₹2,800',
      'Refundable Deposit: ₹4,000 (Returned on Drop)',
      '7-Seater AC Family Self Drive'
    ]
  }
];

export const fixedRouteDrops = [
  {
    vehicle: 'Swift Dzire (Sedan)',
    id: 'swift-dzire',
    image: '/assets/images/swift_dzire_real.png',
    routes: [
      { route: 'Daman to Daman (Local)', price: '₹500' },
      { route: 'Daman to Vapi Station Drop', price: '₹700' },
      { route: 'Daman to Surat Drop', price: '₹3,000' },
      { route: 'Daman to Mumbai Drop', price: '₹4,200' }
    ]
  },
  {
    vehicle: 'Maruti Ertiga VXI (7-Seater)',
    id: 'ertiga-vxi',
    image: '/assets/images/ertiga_real.png',
    routes: [
      { route: 'Daman to Daman (Local)', price: '₹600' },
      { route: 'Daman to Vapi Station Drop', price: '₹900' },
      { route: 'Daman to Surat Drop', price: '₹3,500' },
      { route: 'Daman to Mumbai Drop', price: '₹5,500' }
    ]
  }
];

export const outstationPerKm = [
  {
    vehicle: 'Swift Dzire (Sedan)',
    id: 'swift-dzire',
    ratePerKm: 13,
    minKmPerDay: 300,
    image: '/assets/images/swift_dzire_real.png',
    desc: '₹13 / km + Toll Tax + Parking (Min 300 km / day running)'
  },
  {
    vehicle: 'Maruti Ertiga VXI (7-Seater)',
    id: 'ertiga-vxi',
    ratePerKm: 15,
    minKmPerDay: 300,
    image: '/assets/images/ertiga_real.png',
    desc: '₹15 / km + Toll Tax + Parking (Min 300 km / day running)'
  }
];

export const fleetData = [
  {
    id: 'tvs-jupiter',
    name: 'TVS Jupiter (Scooter)',
    category: 'two-wheeler-daman',
    type: 'Self Drive Scooter (110cc)',
    location: 'DAMAN ONLY',
    rateDay: 600,
    deposit: 1000,
    rateUnit: '/ Day (Self Drive)',
    image: '/assets/images/jupiter_real.png',
    seats: '2 Passengers',
    fuel: 'Fuel Extra',
    transmission: 'DL Compulsory',
    luggage: 'Underseat Storage',
    badge: 'SELF DRIVE • DAMAN',
    badgeClass: 'badge-daman',
    features: [
      'Self Drive Rent: ₹600 / Day (Deposit ₹1,000)',
      '2 Clean Sanitized Helmets Provided Free',
      'Free Hotel & Resort Delivery in Daman'
    ]
  },
  {
    id: 'swift-dzire',
    name: 'Swift Dzire (Sedan)',
    category: 'car-india',
    type: '5-Seater AC Sedan',
    location: 'SELF DRIVE & CHAUFFEUR',
    rateDay: 2200,
    ratePerKm: 13,
    minKmPerDay: 300,
    rateUnit: 'for 8H (Deposit ₹3,000)',
    image: '/assets/images/swift_dzire_real.png',
    seats: '5 Passengers',
    fuel: 'Fuel Extra / Toll + Parking',
    transmission: 'Self Drive or Driver',
    luggage: '2 Large Suitcases',
    badge: 'SEDAN • ALL INDIA',
    badgeClass: 'badge-india',
    features: [
      'Self Drive 8H: ₹2,200 (Deposit ₹3,000)',
      'Fixed Drops: Vapi ₹700 | Surat ₹3,000 | Mumbai ₹4,200',
      'Outstation All India: ₹13 / km (Min 300 km/day)'
    ]
  },
  {
    id: 'ertiga-vxi',
    name: 'Maruti Ertiga VXI (7-Seater)',
    category: 'car-india',
    type: '7-Seater Premium MPV',
    location: 'SELF DRIVE & CHAUFFEUR',
    rateDay: 2800,
    ratePerKm: 15,
    minKmPerDay: 300,
    rateUnit: 'for 8H (Deposit ₹4,000)',
    image: '/assets/images/ertiga_real.png',
    seats: '7 Passengers',
    fuel: 'Fuel Extra / Toll + Parking',
    transmission: 'Self Drive or Driver',
    luggage: '3 Large Suitcases',
    badge: '7-SEATER • ALL INDIA',
    badgeClass: 'badge-india',
    features: [
      'Self Drive 8H: ₹2,800 (Deposit ₹4,000)',
      'Fixed Drops: Vapi ₹900 | Surat ₹3,500 | Mumbai ₹5,500',
      'Outstation All India: ₹15 / km (Min 300 km/day)'
    ]
  }
];

export const specialOffers = [];
