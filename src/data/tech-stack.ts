// ─── Technical Skills Stack Data ─────────────────────────────
// Derived directly from Mohit Rajendra Gorhe's CV.

export interface TechCategory {
  id: string;
  label: string;
  icon: string;
  skills: string[];
  description?: string;
}

export const techCategories: TechCategory[] = [
  {
    id: 'ai-cv',
    label: 'AI / ML & Computer Vision',
    icon: 'Eye',
    skills: [
      'Python',
      'OpenCV',
      'YOLO',
      'CNNs',
      'Object Detection',
      'Pose Estimation',
      'Image Processing',
      'Scikit-learn',
      'NumPy & Pandas',
      'TensorFlow (Basic)',
    ],
    description: 'Real-time perception, object tracking, activity classification, and deep neural nets.',
  },
  {
    id: 'genai',
    label: 'GenAI & LLM Systems',
    icon: 'Brain',
    skills: [
      'LangChain',
      'RAG Architectures',
      'Google Gemini API',
      'FAISS Vector Search',
      'Prompt Engineering',
      'LLM App Development',
      'Hugging Face (Learning)',
    ],
    description: 'Document Q&A, contextual chunking, embeddings, and grounded generation.',
  },
  {
    id: 'uav-hardware',
    label: 'UAS, Flight Systems & Hardware',
    icon: 'Plane',
    skills: [
      'Flight Controller Calibration',
      'MCU Firmware & Bootloader Updates',
      'Ground Control Station (GCS)',
      'Payload Release Integration',
      'Telemetry Analysis',
      'INAV & Betaflight Tuning',
      'MAVLink Communication',
    ],
    description: 'Tactical UAV configuration, mission planning, sensor integration, and field testing.',
  },
  {
    id: 'edge-embedded',
    label: 'Edge AI & Embedded Systems',
    icon: 'Cpu',
    skills: [
      'Raspberry Pi (Edge AI)',
      'Arduino Uno',
      'Real-Time Onboard Inference',
      'Load Cell & HX711 ADCs',
      'LDR & Servo Actuators',
      'GPIO Hardware Interfaces',
    ],
    description: 'Deploying quantized deep learning models on constrained silicon and robotics.',
  },
  {
    id: 'backend-tools',
    label: 'Backend, Web & Engineering Tools',
    icon: 'Terminal',
    skills: [
      'C++',
      'Flask & Django',
      'Streamlit',
      'SQL (PostgreSQL / MySQL / SQLite)',
      'Linux & CLI',
      'Git & GitHub',
      'VS Code & Jupyter',
    ],
    description: 'Software development, automated scripts, databases, and version control.',
  },
];

// ─── Engineering Domains (Monochrome Technical Map) ──────────
export interface EngineeringDomain {
  id: string;
  label: string;
  description: string;
  icon: string;
  connections: string[];
}

export const engineeringDomains: EngineeringDomain[] = [
  {
    id: 'cv',
    label: 'Computer Vision',
    description: 'Real-time YOLO detection, pose estimation, and OpenCV pipelines',
    icon: 'Eye',
    connections: ['edge-ai', 'uas', 'ai-ml'],
  },
  {
    id: 'uas',
    label: 'UAS & Flight Systems',
    description: 'Platform calibration, payload drops, GCS mission control, and field deployments',
    icon: 'Plane',
    connections: ['cv', 'edge-ai', 'embedded'],
  },
  {
    id: 'edge-ai',
    label: 'Edge AI Deployment',
    description: 'Deploying neural vision and tracking models directly onto Raspberry Pi',
    icon: 'Cpu',
    connections: ['cv', 'uas', 'embedded'],
  },
  {
    id: 'genai',
    label: 'Generative AI & RAG',
    description: 'LangChain pipelines, FAISS vector search, and grounded LLM architectures',
    icon: 'Brain',
    connections: ['ai-ml', 'backend'],
  },
  {
    id: 'embedded',
    label: 'Embedded & IoT Systems',
    description: 'Arduino, sensor arrays, motor thrust measurement, and solar tracking',
    icon: 'CircuitBoard',
    connections: ['uas', 'edge-ai', 'agriculture'],
  },
  {
    id: 'agriculture',
    label: 'Agriculture Automation',
    description: 'Sensing clusters, smart irrigation, and field diagnostic intelligence',
    icon: 'Sprout',
    connections: ['embedded', 'cv', 'edge-ai'],
  },
];
