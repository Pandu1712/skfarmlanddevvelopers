import { StatItem, ProjectItem, GalleryItem } from './types';

export const statsData: StatItem[] = [
  { icon: 'Map', label: 'Acres Developed', value: '700+' },
  { icon: 'Users', label: 'Happy Customers', value: '1,000+' },
  { icon: 'Leaf', label: 'Premium Projects', value: '8+' },
  { icon: 'Home', label: 'Plots Under Management', value: '1,000+' },
  { icon: 'Award', label: 'Years of Trust', value: '5+' },
];

export const trustHighlights = [
  '100% Clear Title Deeds & Legal Verification',
  'Legally Verified Documents & Seamless Registration',
  'Excellent Road Connectivity to Key Highways',
  'Borewell & Electricity Facilities Fully Equipped',
  'Plantation-Ready Fertile Farmland with Water Grid',
  'Ideal for Long-Term Investment, Farming & Weekend Living',
  'Highly Appreciating Projects Near Bengaluru & Pondicherry',
  'Site Visit Assistance for complete transparency and satisfaction',
];

export const projectLocations = [
  'Anekal Thalli Road (Towards Hoganekkal Road)',
  'Electronic City (Proximity Corridor)',
  'Jigani Industrial & Green Belt',
  'Chandapur-Anekal Corridor',
  'Bannerghatta Road Extn',
  'Kanakapura Road Extn',
  'Hosur (High-growth peaceful belt)',
];

export const projectList: ProjectItem[] = [
  {
    id: 'sk-green-acres',
    name: 'SK Green Acres',
    location: 'Anekal Thalli Road, Near Bengaluru',
    distance: '35 mins from Electronic City',
    price: '₹499 - ₹649 per sq.ft',
    size: 'Starts from 0.25 Acre (Quarter Acre)',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    type: 'Managed',
    status: 'Ongoing',
    features: [
      '35 Fruit Plants with Drip Irrigation',
      '24/7 Security & CCTV Monitoring',
      'Individual Borewell Water Grid Connection',
      'Picket Fencing & Gate for Each Plot',
    ],
  },
  {
    id: 'sk-tamarind-valley',
    name: 'SK Tamarind Valley',
    location: 'Hosur - Hoganekkal Road',
    distance: '45 mins from Bannerghatta Road',
    price: '₹599 - ₹749 per sq.ft',
    size: '0.25, 0.5 & 1-2 Acres',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    type: 'Premium',
    status: 'Ongoing',
    features: [
      'Grand Wood-Paneled Entrance Gateway',
      'Cement Concrete Internal Access Roads',
      'Solar Street Lighting Grid',
      'Perfect for Eco-Friendly Farmhouse & Airbnb Stay',
    ],
  },
  {
    id: 'sk-nature-retreat',
    name: 'SK Nature Retreat',
    location: 'Kanakapura Road Extension',
    distance: '50 mins from Kanakapura Road Metro',
    price: '₹699 - ₹849 per sq.ft',
    size: 'Starts from 0.5 Acre',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    type: 'Managed',
    status: 'Completed',
    features: [
      '100% Ready for Cultivation (Mango & Guava)',
      'Hassle-Free Basic Maintenance & Upkeep Handled',
      'Stunning Mountain View and Clean Air',
      'Private Weekend Living with Easy Connectivity',
    ],
  },
  {
    id: 'sk-heritage-orchards',
    name: 'SK Heritage Orchards',
    location: 'Pondicherry Highway Corridor',
    distance: 'Premium Scenic Location',
    price: '₹499 - ₹599 per sq.ft',
    size: '0.5 Acre & 1 Acre Plots',
    image: 'https://images.unsplash.com/photo-1557800636-534a24216f24?auto=format&fit=crop&w=1200&q=80',
    type: 'Plain',
    status: 'Upcoming',
    features: [
      'Budget-Friendly Plain Farmland Options',
      'Freedom to Develop Layout as Per Your Choice',
      'Fitted with Grid Power & Primary Borewell',
      'Ideal for Long-Term Land Value Appreciation',
    ],
  },
  {
    id: 'sk-banyan-echoes',
    name: 'SK Banyan Echoes',
    location: 'Sikkanapalli, Near Bangalore',
    distance: '40 mins from Electronic City',
    price: '₹549 - ₹699 per sq.ft',
    size: 'Starts from 0.25 Acre',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    type: 'Premium',
    status: 'Upcoming',
    features: [
      'Serene Miyawaki Forest Community',
      'Wooden Picket Fenced Plot Borders',
      '24/7 Security & CCTV Network',
      'Access CC Roads & Solar Illumination',
    ],
  },
  {
    id: 'sk-misty-heights',
    name: 'SK Misty Heights',
    location: 'Bannerghatta Corridor, Bengaluru',
    distance: '30 mins from Bannerghatta Main Gate',
    price: '₹649 - ₹799 per sq.ft',
    size: 'Starts from 0.5 Acre',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    type: 'Managed',
    status: 'Ongoing',
    features: [
      'Misty Hilltop Panoramic Vistas',
      'Complimentary Fruit plantation Drip Network',
      'Individual Borewell Water Outlets',
      'Fully Guarded Gated Community Security',
    ],
  },
];

export const managedFarmlandFeatures = [
  {
    title: 'Hassle-Free Maintenance',
    desc: 'Complete maintenance, plantation upkeep, and seasonal security managed by our in-house agronomy and security teams, so you do not have to worry about daily operations.',
  },
  {
    title: 'Drip Irrigation & Plantation',
    desc: 'Each plot is allocated 35 premium saplings (Mango, Guava, Sapota, etc.) supported by a high-efficiency drip irrigation network.',
  },
  {
    title: 'Water Grid Access',
    desc: 'Individual high-pressure water grid connection mapped directly to your boundary, backed by high-capacity community borewells.',
  },
  {
    title: 'Elegantly Fenced Plotting',
    desc: 'A premium picket compound fence with dedicated gates is installed at the frontage of each plot, providing an orderly and beautiful layout view.',
  },
  {
    title: '24/7 Security & CCTV',
    desc: 'Continuous patrolling and surveillance across the community boundary to ensure your asset and farm retreats are safe and peaceful.',
  },
  {
    title: 'Infrastructure Ready',
    desc: 'Equipped with wide internal access roads, Cement Concrete (CC) road sections, and solar-powered street lamps lining the pathways.',
  },
];

export const incomeGenerators = [
  {
    title: 'Build Your Dream Farmhouse',
    desc: 'Construct a stunning rustic or modern farmhouse tailored to your exact style and budget. We provide assistance in sourcing trusted architects and contractors.',
    icon: 'Home',
  },
  {
    title: 'Airbnb & Farm Stay Revenue',
    desc: 'Register your nature retreat on platforms like Airbnb or StayVista. Capitalize on the exploding trend of urban professionals searching for tranquil weekend getaways near Bengaluru.',
    icon: 'TrendingUp',
  },
  {
    title: 'Agronomic Yield & Crops',
    desc: 'Grow high-yield crops like Mango, Papaya, Guava, or seasonal grains. Supported by fertile soil and ample water supply, turn your acreage into a productive green asset.',
    icon: 'Leaf',
  },
  {
    title: 'Sustained Capital Growth',
    desc: 'Farmland in proximity to key corridors like Anekal-Thalli, Electronic City, and Kanakapura Road is appreciating rapidly. Land is the safest long-term hedge.',
    icon: 'DollarSign',
  },
];

export const galleryData: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Grand Entrance Gate',
    category: 'Entrance',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    description: 'The elegant modern wood-paneled community entrance gate, illuminated beautifully at night.',
  },
  {
    id: 'g-2',
    title: 'Scenic Farmhouse Cottage',
    category: 'Farmhouse',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    description: 'A cozy double-story weekend farmhouse nestled amidst lush green lawns and stone pathways.',
  },
  {
    id: 'g-3',
    title: 'Mango & Fruit Orchards',
    category: 'Crops',
    image: 'https://images.unsplash.com/photo-1557800636-534a24216f24?auto=format&fit=crop&w=800&q=80',
    description: 'Lush golden mango trees growing under scientific organic drip-irrigation management.',
  },
  {
    id: 'g-4',
    title: 'Manicured Stone Pathway',
    category: 'Land',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    description: 'Winding stone-paved walk paths traversing the manicured gardens of our premium projects.',
  },
  {
    id: 'g-5',
    title: 'High-Yield Farming Grid',
    category: 'Crops',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=800&q=80',
    description: 'Organic farming grids ready for seasonal vegetables, banana, and papaya cultivation.',
  },
  {
    id: 'g-6',
    title: 'Dusk at Tamarind Valley',
    category: 'Land',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    description: 'The sprawling, peaceful, and clean farmland landscapes near Hosur at dusk.',
  },
];
