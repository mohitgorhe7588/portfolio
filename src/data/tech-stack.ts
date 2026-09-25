// ─── Technology Stack Data ───────────────────────────────────
// Only technologies supported by actual project content.

export interface TechCategory {
  id: string;
  label: string;
  icon: string; // Lucide icon name
  technologies: string[];
  accentColor: 'cyan' | 'amber' | 'green';
}

export const techCategories: TechCategory[] = [
  {
    id: 'ai-ml',
    label: 'AI / ML',
    icon: 'Brain',
    technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'PyTorch', 'OpenCV', 'YOLO', 'TensorFlow'],
    accentColor: 'cyan',
  },
  {
    id: 'ai-engineering',
    label: 'AI Engineering',
    icon: 'Cpu',
    technologies: ['LLMs', 'RAG', 'LangChain', 'LlamaIndex', 'FastAPI'],
    accentColor: 'cyan',
  },
  {
    id: 'systems',
    label: 'Systems',
    icon: 'Terminal',
    technologies: ['Linux', 'Docker', 'Git', 'GitHub', 'Networking', 'Distributed Systems'],
    accentColor: 'green',
  },
  {
    id: 'robotics-uas',
    label: 'Robotics / UAS',
    icon: 'Plane',
    technologies: ['ArduPilot', 'Pixhawk', 'Flight Controllers', 'Telemetry', 'Sensors', 'Embedded Systems'],
    accentColor: 'amber',
  },
  {
    id: 'iot',
    label: 'IoT',
    icon: 'Wifi',
    technologies: ['Microcontrollers', 'Sensors', 'IoT Communication', 'Automation', 'Edge Systems'],
    accentColor: 'green',
  },
];

// ─── Engineering Domains ─────────────────────────────────────
export interface EngineeringDomain {
  id: string;
  label: string;
  description: string;
  icon: string;
  connections: string[]; // IDs of connected domains
}

export const engineeringDomains: EngineeringDomain[] = [
  {
    id: 'ai-ml',
    label: 'AI / ML',
    description: 'Machine learning, deep learning, model development',
    icon: 'Brain',
    connections: ['cv', 'autonomous', 'agriculture'],
  },
  {
    id: 'cv',
    label: 'Computer Vision',
    description: 'Object detection, image processing, visual intelligence',
    icon: 'Eye',
    connections: ['ai-ml', 'uas', 'autonomous'],
  },
  {
    id: 'autonomous',
    label: 'Autonomous Systems',
    description: 'Self-governing systems, decision-making, control',
    icon: 'Zap',
    connections: ['ai-ml', 'cv', 'uas', 'distributed'],
  },
  {
    id: 'uas',
    label: 'UAS / Robotics',
    description: 'Unmanned aerial systems, flight systems, robotics',
    icon: 'Plane',
    connections: ['autonomous', 'cv', 'embedded'],
  },
  {
    id: 'iot',
    label: 'IoT',
    description: 'Connected devices, sensor networks, edge computing',
    icon: 'Wifi',
    connections: ['embedded', 'agriculture', 'distributed'],
  },
  {
    id: 'distributed',
    label: 'Distributed Systems',
    description: 'Mesh networks, P2P, distributed computing',
    icon: 'Network',
    connections: ['autonomous', 'iot', 'uas'],
  },
  {
    id: 'embedded',
    label: 'Embedded Systems',
    description: 'Microcontrollers, firmware, hardware interfaces',
    icon: 'CircuitBoard',
    connections: ['uas', 'iot', 'agriculture'],
  },
  {
    id: 'agriculture',
    label: 'Agriculture Automation',
    description: 'Smart farming, precision agriculture, crop intelligence',
    icon: 'Sprout',
    connections: ['ai-ml', 'iot', 'embedded'],
  },
];
