export const fleetData = [
  {
    id: 'tvs-jupiter',
    name: 'TVS Jupiter (Two Wheeler)',
    category: 'two-wheeler-daman',
    type: 'Automatic Scooter / Two Wheeler (110cc)',
    location: 'ONLY FOR DAMAN (Hotel & Resort Pickup)',
    rateDay: 450,
    rateUnit: '/ Day (Unlimited KM in Daman)',
    image: '/assets/images/jupiter_real.png',
    seats: '2 Passengers',
    fuel: 'Petrol (High Mileage)',
    transmission: 'Automatic CVT (Self-Ride)',
    luggage: 'Underseat Storage & Front Hook',
    badge: 'ONLY FOR DAMAN',
    badgeClass: 'badge-daman',
    features: [
      'Available ONLY FOR DAMAN Location',
      '2 Clean Sanitized Helmets Included',
      'Free Doorstep Hotel Delivery in Daman',
      'Quick 2-Minute Paperwork (DL & Aadhar)'
    ]
  },
  {
    id: 'maruti-ertiga',
    name: 'Maruti Suzuki Ertiga (7-Seater Car)',
    category: 'car-india',
    type: '7 Passenger Premium MPV Car',
    location: 'ALL OVER INDIA (Outstation & City Travel)',
    rateDay: 2400,
    rateUnit: '/ Day (With Professional Driver Included)',
    image: '/assets/images/ertiga_real.png',
    seats: '7 Passengers',
    fuel: 'Petrol / CNG',
    transmission: 'With Driver (No Self-Drive)',
    luggage: '3 Large Suitcases + Roof Luggage Option',
    badge: 'ALL OVER INDIA • WITH DRIVER ONLY',
    badgeClass: 'badge-india',
    features: [
      'Available ALL OVER INDIA Across All States',
      'Driven by Experienced Professional Driver (No Self-Drive)',
      'Spacious 7-Seater AC Family Comfort',
      'Outstation Tours, Family Trips & Airport Drops'
    ]
  }
];

export const specialOffers = [
  {
    id: 'offer-jupiter-weekend',
    tag: 'ONLY FOR DAMAN',
    title: 'Daman Two-Wheeler Weekend Deal',
    subtitle: 'Rent TVS Jupiter Two-Wheeler for 3+ Days ONLY IN DAMAN and get special discounted rate of ₹399/day + Free Hotel Delivery!',
    badge: 'DAMAN EXCLUSIVE',
    code: 'DAMAN399',
    vehicleId: 'tvs-jupiter',
    rate: '₹399/day'
  },
  {
    id: 'offer-ertiga-outstation',
    tag: 'ALL OVER INDIA • WITH DRIVER',
    title: 'Ertiga Car All Over India Tour Special',
    subtitle: 'Flat 10% OFF on Maruti Ertiga 7-Seater Car with professional driver for 5+ Days outstation tours ALL OVER INDIA.',
    badge: 'ALL INDIA 10% OFF',
    code: 'ERTIGAINDIA',
    vehicleId: 'maruti-ertiga',
    rate: '₹2,160/day'
  },
  {
    id: 'offer-pilgrim-circuit',
    tag: 'ALL OVER INDIA • WITH DRIVER',
    title: 'Outstation Family Car Package',
    subtitle: 'Special family tour rate with Maruti Ertiga car and experienced driver across any state in India.',
    badge: 'FAMILY PACKAGE',
    code: 'FAMILY500',
    vehicleId: 'maruti-ertiga',
    rate: 'Special Package'
  }
];
