export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  tags: string[];
  ctaText: string;
  link?: string;
  image: string;
  mockupDesktop?: string;
  mockupMobile?: string;
  status: 'featured' | 'coming-soon';
  metrics?: { label: string; value: string }[];
  deliverables?: string[];
}

export const projects: Project[] = [
  {
    id: 'bella-liveaboard',
    title: 'Bella Liveaboard',
    subtitle: 'Premium Website Redesign & Digital Experience',
    description: 'A modern redesign concept for Bella Liveaboard, showcasing luxury yachts, dive safari itineraries, and a refined responsive booking experience.',
    longDescription: 'Created a cutting-edge web presence for premier Red Sea diving safaris. Designed with a luxury maritime aesthetic, interactive deck plan explorers, high-definition yacht tours, itinerary timeline visualizers, and a streamlined high-conversion reservation flow.',
    tags: ['Website Redesign', 'UX/UI', 'Yacht Pages', 'Travel & Marine'],
    ctaText: 'View Project',
    image: '/assets/bella_showcase.jpg',
    mockupDesktop: '/assets/bella_device_mockup.jpg',
    status: 'featured',
    metrics: [
      { label: 'Conversion Lift', value: '+42%' },
      { label: 'Booking Flow Time', value: '-65%' },
      { label: 'Mobile Engagement', value: '+88%' }
    ],
    deliverables: [
      'Interactive Yacht Tour & Deckplan UI',
      'Dynamic Red Sea Route Map & Itinerary Visualizer',
      'Luxury Dark/Oceanic Design System & Typography',
      'High-Speed Headless Booking Architecture'
    ]
  },
  {
    id: 'project-future-ai',
    title: 'AI Spatial Canvas',
    subtitle: 'Next-Gen Generative Interface',
    description: 'An autonomous multi-agent canvas orchestrating real-time 3D generation and spatial intelligence workflows.',
    tags: ['AI Agents', 'Spatial UI', 'Three.js', 'Automation'],
    ctaText: 'Coming Soon',
    image: '/assets/hero_portrait_comp.jpg',
    status: 'coming-soon'
  }
];

