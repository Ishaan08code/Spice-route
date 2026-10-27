export const inr = (n) => '₹' + n.toLocaleString('en-IN')

export const categories = ['All', 'Whole', 'Ground', 'Blends']

// price is per 100 g
export const products = [
  { id: 1, name: 'Turmeric Powder', cat: 'Ground', price: 90, origin: 'Erode, Tamil Nadu', color: '#e5a512', note: 'Deep gold with a high curcumin content. Earthy, warm and slightly bitter.' },
  { id: 2, name: 'Kashmiri Red Chilli', cat: 'Ground', price: 140, origin: 'Kashmir', color: '#b3261e', note: 'Brilliant red colour with mild heat. Gives curries colour without the burn.' },
  { id: 3, name: 'Cumin Seeds', cat: 'Whole', price: 75, origin: 'Unjha, Gujarat', color: '#8a6a3b', note: 'Nutty and smoky. Dry roast the seeds before tempering for best flavour.' },
  { id: 4, name: 'Coriander Seeds', cat: 'Whole', price: 55, origin: 'Kota, Rajasthan', color: '#b99a4c', note: 'Citrusy and sweet. Crush just before cooking to release the oils.' },
  { id: 5, name: 'Green Cardamom', cat: 'Whole', price: 380, origin: 'Idukki, Kerala', color: '#6c8f4e', note: 'Bold, floral pods for chai, kheer and biryani.' },
  { id: 6, name: 'Black Pepper', cat: 'Whole', price: 160, origin: 'Wayanad, Kerala', color: '#2f2a28', note: 'Sharp, aromatic peppercorns picked at full maturity.' },
  { id: 7, name: 'Cloves', cat: 'Whole', price: 210, origin: 'Kanyakumari', color: '#5b3a29', note: 'Intensely fragrant buds. A little goes a long way.' },
  { id: 8, name: 'Cinnamon Sticks', cat: 'Whole', price: 120, origin: 'Kerala', color: '#a55a2a', note: 'Soft, sweet bark that rolls into thin layers.' },
  { id: 9, name: 'Garam Masala', cat: 'Blends', price: 150, origin: 'Blended in Mumbai', color: '#7b4a2e', note: 'Ten spices ground fresh in small batches for finishing dishes.' },
  { id: 10, name: 'Chaat Masala', cat: 'Blends', price: 95, origin: 'Blended in Mumbai', color: '#c77d3a', note: 'Tangy with amchur and black salt. Sprinkle on fruit and street snacks.' },
  { id: 11, name: 'Mustard Seeds', cat: 'Whole', price: 45, origin: 'Bharatpur, Rajasthan', color: '#3d3427', note: 'Pop them in hot oil for a sharp, nutty base to dals and pickles.' },
  { id: 12, name: 'Star Anise', cat: 'Whole', price: 260, origin: 'Arunachal Pradesh', color: '#74422a', note: 'Liquorice-sweet stars for broths, biryani and masala chai.' },
]
