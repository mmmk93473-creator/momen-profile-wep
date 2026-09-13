export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Foundation & Strategic Clarity',
    description: 'Understand the business, audience and objective. We define your competitive edge, brand voice, technical requirements, and core KPIs before touching a line of code.',
    deliverables: ['Brand & Product Strategy', 'Technical Feasibility Analysis', 'Target Audience Persona', 'Information Architecture']
  },
  {
    step: '02',
    title: 'DESIGN',
    subtitle: 'Aesthetic Direction & UX Systems',
    description: 'Create the visual direction and UX/UI. Crafting custom design systems, cinematic typography hierarchies, 3D mockups, and tactile high-fidelity prototypes.',
    deliverables: ['Creative Art Direction', 'Figma Design System & Tokens', 'Interactive Prototype', 'Motion & Spatial Guidelines']
  },
  {
    step: '03',
    title: 'BUILD',
    subtitle: 'Precision Development & AI Integration',
    description: 'Develop the website, digital experience or automation. Engineering clean, modular, ultra-responsive code with 60fps animations, Three.js scenes, and robust APIs.',
    deliverables: ['Modern React / Next.js Stack', 'Three.js & WebGL Shaders', 'Autonomous AI Pipelines', 'Cross-browser & Device Matrix']
  },
  {
    step: '04',
    title: 'REFINE',
    subtitle: 'Optimization, Polish & Global Launch',
    description: 'Test, optimize and polish. Stress-testing micro-interactions, Core Web Vitals, accessibility, SEO metadata, and silky smooth deployment.',
    deliverables: ['Lighthouse & CWV 99+ Scores', 'A11y & Keyboard Compliance', 'Analytics & Event Tracking', 'Ongoing Support & Scalability']
  }
];

