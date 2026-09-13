export interface Service {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  icon: 'globe' | 'cpu' | 'bot' | 'box' | 'sparkles' | 'layers';
}

export const services: Service[] = [
  {
    id: 'web-design-dev',
    number: '01',
    title: 'WEB DESIGN & DEVELOPMENT',
    category: 'Engineering & Craft',
    description: 'Bespoke, high-performance websites built with cutting-edge front-end technologies, silky smooth 60fps animations, and flawless responsiveness.',
    highlights: ['Interactive 3D Web', 'React / Next.js Architecture', 'Micro-interactions & Motion', 'Performance & CWV Optimization'],
    icon: 'globe'
  },
  {
    id: 'ai-integration',
    number: '02',
    title: 'AI INTEGRATION',
    category: 'Artificial Intelligence',
    description: 'Embedding state-of-the-art LLMs, multimodal AI agents, and intelligent spatial features directly into consumer and enterprise products.',
    highlights: ['Autonomous Agent Workflows', 'Custom RAG Architectures', 'Real-time AI Features', 'API Integration & Fine-tuning'],
    icon: 'cpu'
  },
  {
    id: 'ai-automation',
    number: '03',
    title: 'AI AUTOMATION',
    category: 'Intelligent Systems',
    description: 'Transforming manual business bottlenecks into zero-touch autonomous pipelines with end-to-end webhook architecture and intelligence loops.',
    highlights: ['Business Workflow Automation', 'Multi-System Synchronization', 'Data Extraction & Synthesis', 'Scalable Cloud Triggering'],
    icon: 'bot'
  },
  {
    id: '3d-visual-design',
    number: '04',
    title: '3D & VISUAL DESIGN',
    category: 'Spatial & Motion',
    description: 'Immersive 3D environments, WebGL scenes, interactive product viewports, and futuristic aesthetic assets that captivate audiences.',
    highlights: ['Three.js / WebGL Development', 'Blender Asset Pipeline', 'Cinematic Particle Systems', 'Spatial Product Showcases'],
    icon: 'box'
  },
  {
    id: 'creative-advertising',
    number: '05',
    title: 'CREATIVE ADVERTISING',
    category: 'Brand Storytelling',
    description: 'High-concept creative direction, visual storytelling, and viral digital campaign experiences designed to dominate modern attention spans.',
    highlights: ['High-Impact Landing Pages', 'Cinematic Motion Design', 'Brand Storytelling', 'Campaign Architecture'],
    icon: 'sparkles'
  },
  {
    id: 'ux-ui',
    number: '06',
    title: 'UX/UI DESIGN',
    category: 'Product Strategy',
    description: 'Intuitive, conversion-engineered digital products designed with uncompromising attention to typography, spacing, tactile feedback, and hierarchy.',
    highlights: ['Design Systems & Tokens', 'Conversion Flow Engineering', 'Prototyping & User Testing', 'Frictionless Usability'],
    icon: 'layers'
  }
];

