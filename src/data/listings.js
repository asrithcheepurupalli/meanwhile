// Mock commercial spaces for the Meanwhile demo. Prices in ₹ / month.
// fullRent = the owner's target long-term rent. semiRent = temporary occupancy.

export const listings = [
  {
    id: "indira-nagar-corner",
    title: "Glass corner unit, 100ft Road",
    area: "Indiranagar, Bengaluru",
    type: "Retail",
    sqft: 1200,
    fullRent: 185000,
    semiRent: 92000,
    deposit: 184000,
    notice: 30,
    vacantDays: 86,
    facilities: ["Street frontage", "Mezzanine", "3-phase power", "Washroom", "Signage rights"],
    footfall: "High",
    floor: "Ground",
    blurb:
      "A double-height corner with wraparound glass on a street that never empties. Built out for retail, waiting on a flagship tenant.",
    tone: "#ff5a1f",
  },
  {
    id: "bkc-studio-office",
    title: "Studio office, G-Block",
    area: "Bandra Kurla Complex, Mumbai",
    type: "Office",
    sqft: 2400,
    fullRent: 420000,
    semiRent: 210000,
    deposit: 840000,
    notice: 45,
    vacantDays: 134,
    facilities: ["24×7 access", "Backup power", "12 parking", "Fibre", "Cafeteria"],
    footfall: "Corporate",
    floor: "7th",
    blurb:
      "A fitted-out floor in the country's most expensive postcode. The fit-out is done; the lights are off. They don't have to be.",
    tone: "#2f6df0",
  },
  {
    id: "khan-market-boutique",
    title: "Boutique frontage, Front Lane",
    area: "Khan Market, New Delhi",
    type: "Retail",
    sqft: 640,
    fullRent: 320000,
    semiRent: 160000,
    deposit: 640000,
    notice: 30,
    vacantDays: 41,
    facilities: ["Prime frontage", "Storage loft", "Heritage façade", "Footfall data"],
    footfall: "Very high",
    floor: "Ground",
    blurb:
      "One of the most expensive retail streets in the world by the square foot. A small door, an enormous address.",
    tone: "#b08a4f",
  },
  {
    id: "hitec-city-pop",
    title: "Pop-up shell, Cyber Towers atrium",
    area: "HITEC City, Hyderabad",
    type: "Pop-up",
    sqft: 380,
    fullRent: 95000,
    semiRent: 38000,
    deposit: 76000,
    notice: 15,
    vacantDays: 22,
    facilities: ["Atrium footfall", "Power + water", "Loading access", "Daily footfall 9k"],
    footfall: "High",
    floor: "Atrium",
    blurb:
      "An open shell in a tech-park atrium where 9,000 people walk past before lunch. Perfect to test a concept for a season.",
    tone: "#ff5a1f",
  },
  {
    id: "park-street-cafe",
    title: "Café-ready unit, Park Street",
    area: "Park Street, Kolkata",
    type: "F&B",
    sqft: 900,
    fullRent: 140000,
    semiRent: 70000,
    deposit: 280000,
    notice: 30,
    vacantDays: 58,
    facilities: ["Gas line", "Exhaust", "Outdoor seating", "Grease trap", "Liquor-license eligible"],
    footfall: "High",
    floor: "Ground",
    blurb:
      "Kitchen-plumbed, exhaust-fitted, seating outside. Everything a café needs except a café. The hardest part is already built.",
    tone: "#b08a4f",
  },
  {
    id: "koramangala-clinic",
    title: "Clinic-grade suite, 5th Block",
    area: "Koramangala, Bengaluru",
    type: "Services",
    sqft: 1100,
    fullRent: 165000,
    semiRent: 82000,
    deposit: 330000,
    notice: 45,
    vacantDays: 73,
    facilities: ["Plumbed rooms", "Lift access", "Backup power", "Reception built", "Parking"],
    footfall: "Residential",
    floor: "2nd",
    blurb:
      "Partitioned consulting rooms with plumbing roughed in, built for a clinic that never opened. Move in, see patients.",
    tone: "#2f6df0",
  },
];

export const getListing = (id) => listings.find((l) => l.id === id);

export const inr = (n) =>
  "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

export const inrShort = (n) => {
  if (n >= 10000000) return "₹" + (n / 10000000).toFixed(1).replace(/\.0$/, "") + "Cr";
  if (n >= 100000) return "₹" + (n / 100000).toFixed(1).replace(/\.0$/, "") + "L";
  if (n >= 1000) return "₹" + (n / 1000).toFixed(0) + "k";
  return "₹" + n;
};
