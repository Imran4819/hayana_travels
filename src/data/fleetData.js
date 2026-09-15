export const fleetData = [
  {
    id: 'tvs-jupiter',
    name: 'TVS Jupiter (Two Wheeler)',
    category: 'two-wheeler-daman',
    type: 'Automatic Scooter / Two Wheeler (110cc)',
    location: 'ONLY FOR DAMAN (Hotel & Resort Pickup)',
    rateDay: 400,
    rateUnit: '/ Day (Daman Local)',
    image: '/assets/images/jupiter_real.png',
    seats: '2 Passengers',
    fuel: 'Petrol (High Mileage)',
    transmission: 'Automatic CVT (Self-Ride)',
    luggage: 'Underseat Storage & Front Hook',
    badge: 'ONLY FOR DAMAN',
    badgeClass: 'badge-daman',
    ratesList: [
      { route: 'Daman Local (Full Day)', price: '₹400 / day' }
    ],
    features: [
      'Available ONLY FOR DAMAN Location',
      '2 Clean Sanitized Helmets Included',
      'Free Doorstep Hotel Delivery in Daman',
      'Quick 2-Minute Paperwork (DL & Aadhar)'
    ]
  },
  {
    id: 'swift-dzire',
    name: 'Maruti Suzuki Swift Dzire (Sedan)',
    category: 'car-india',
    type: '5 Passenger Premium AC Sedan Car',
    location: 'DAMAN LOCAL & ALL INDIA DROPS (With Driver)',
    rateDay: 2200,
    rateUnit: 'for 8H Daman Local (All Incl.)',
    image: '/assets/images/ertiga_car.png',
    seats: '5 Passengers (4 + Driver)',
    fuel: 'Petrol / CNG',
    transmission: 'With Professional Driver',
    luggage: '2 Large Suitcases + Hand Luggage',
    badge: 'DAMAN & ALL INDIA DROPS',
    badgeClass: 'badge-india',
    ratesList: [
      { route: 'Daman Local (8 Hours All Incl.)', price: '₹2,200' },
      { route: 'Daman ➔ Vapi Station Drop', price: '₹700' },
      { route: 'Daman ➔ Surat Drop', price: '₹3,500' },
      { route: 'Daman ➔ Mumbai Airport Drop', price: '₹5,000' }
    ],
    features: [
      'Daman Local 8 Hours: ₹2,200 (All Included)',
      'Daman to Vapi Drop: ₹700',
      'Daman to Surat Drop: ₹3,500',
      'Daman to Mumbai Airport Drop: ₹5,000',
      'Driven by Polite Professional Driver'
    ]
  },
  {
    id: 'ertiga-vxi',
    name: 'Maruti Suzuki Ertiga VXI (7-Seater)',
    category: 'car-india',
    type: '7 Passenger Premium MPV Car',
    location: 'DAMAN LOCAL & ALL OVER INDIA (With Driver)',
    rateDay: 3000,
    rateUnit: 'for 8H Daman Local (All Incl.)',
    image: '/assets/images/ertiga_real.png',
    seats: '7 Passengers (6 + Driver)',
    fuel: 'Petrol / CNG',
    transmission: 'With Professional Driver Only',
    luggage: '3 Large Suitcases + Roof Luggage',
    badge: 'ALL OVER INDIA • WITH DRIVER ONLY',
    badgeClass: 'badge-india',
    ratesList: [
      { route: 'Daman Local (8 Hours All Incl.)', price: '₹3,000' },
      { route: 'Outstation Tours All Over India', price: 'From ₹12 / km' }
    ],
    features: [
      'Daman Local 8 Hours: ₹3,000 (All Included)',
      'Outstation All India Tours from ₹12/km',
      'Spacious 7-Seater AC Family Comfort',
      'Experienced Driver for Outstation & Airport Trips'
    ]
  }
];

export const specialOffers = [
  {
    id: 'offer-swift-dzire',
    tag: 'DAMAN & OUTSTATION DROPS',
    title: 'Swift Dzire Local & Outstation Drop',
    subtitle: 'Daman Local 8 Hours at ₹2,200 (All Included) or Daman to Vapi Station Drop for ₹700!',
    badge: 'BEST SEDAN VALUE',
    code: 'DZIRE700',
    vehicleId: 'swift-dzire',
    rate: '₹2,200 / 8H'
  },
  {
    id: 'offer-ertiga-local',
    tag: 'DAMAN 8H & ALL INDIA TOURS',
    title: 'Maruti Ertiga VXI 7-Seater Deal',
    subtitle: 'Daman Local 8 Hours at ₹3,000 (All Included) or Outstation All India Tours from ₹12/km with professional driver.',
    badge: '7-SEATER SPECIAL',
    code: 'ERTIGA3000',
    vehicleId: 'ertiga-vxi',
    rate: '₹3,000 / 8H'
  },
  {
    id: 'offer-jupiter-weekend',
    tag: 'ONLY FOR DAMAN',
    title: 'Daman Two-Wheeler Daily Scooter',
    subtitle: 'Rent TVS Jupiter Two-Wheeler ONLY IN DAMAN for ₹400/day + Free Doorstep Hotel Delivery + 2 Helmets!',
    badge: 'DAMAN EXCLUSIVE',
    code: 'DAMAN400',
    vehicleId: 'tvs-jupiter',
    rate: '₹400 / day'
  }
];

