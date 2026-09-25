// ─── Structured Project Data ─────────────────────────────────
// Single source of truth for all project information.
// Do NOT fabricate metrics, clients, or unverified capabilities.

export type ProjectTier = 'featured' | 'project' | 'experiment';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tier: ProjectTier;
  description: string;
  problem?: string;
  whyItMatters?: string;
  systemArchitecture?: string;
  implementation?: string;
  challenges?: string;
  learnings?: string;
  currentStatus?: string;
  futureDirection?: string;
  domains: string[];
  technologies: string[];
  statusLabel: string;
  accentColor?: 'cyan' | 'amber' | 'green';
}

export const projects: Project[] = [
  // ═══ FEATURED ═══════════════════════════════════════════════
  {
    id: 'p2p-drone-swarm',
    title: 'P2P Drone Swarm System',
    subtitle: 'Peer-to-peer communication and distributed drone networks',
    tier: 'featured',
    accentColor: 'cyan',
    description:
      'A research/engineering project exploring peer-to-peer communication and distributed drone systems. Investigates how multiple drones can communicate as a distributed network rather than depending on centralized architecture.',
    problem:
      'Traditional drone swarm systems rely on centralized ground control stations, creating single points of failure and range limitations. As drone count scales, centralized architectures become bottlenecks.',
    whyItMatters:
      'Distributed peer-to-peer communication enables resilient swarm behavior — drones maintain coordination even when individual nodes fail or move out of range.',
    systemArchitecture:
      'Each drone operates as an independent network node running a mesh networking stack. BATMAN-adv handles layer-2 mesh routing, allowing drones to dynamically form and reform network topologies. Docker containers isolate networking services from flight control.',
    implementation:
      'Built on Linux-based companion computers with BATMAN-adv for mesh networking. Docker containerizes the networking stack for isolation and reproducibility. Custom protocols handle drone-to-drone state sharing.',
    challenges:
      'Managing network topology changes during flight, handling packet loss in high-mobility scenarios, balancing mesh overhead with flight-critical communication latency.',
    learnings:
      'Deep understanding of mesh networking protocols, distributed systems design constraints in resource-limited environments, and the gap between simulation and physical RF behavior.',
    currentStatus: 'Research / Active Development',
    futureDirection:
      'Exploring consensus algorithms for swarm decision-making, testing with physical multi-drone setups, and investigating hybrid architectures.',
    domains: ['Distributed Systems', 'UAS', 'Networking', 'Autonomous Systems'],
    technologies: ['P2P Networking', 'BATMAN-adv', 'Mesh Networking', 'Linux', 'Docker', 'Distributed Systems'],
    statusLabel: 'Research / Active Development',
  },
  {
    id: 'rudra-uav-x',
    title: 'Rudra UAV X',
    subtitle: 'UAV system with computer vision and autonomous capabilities',
    tier: 'featured',
    accentColor: 'cyan',
    description:
      'An engineering/UAV project combining autonomous flight systems, computer vision (YOLO), robotics, and embedded systems into a cohesive UAV platform.',
    problem:
      'Building a UAV that operates autonomously requires integrating flight control, computer vision, embedded computing, and real-time decision-making into a reliable, field-deployable platform.',
    whyItMatters:
      'Autonomous UAVs that perceive and react to their environment have applications across agriculture, defense, infrastructure inspection, and disaster response.',
    systemArchitecture:
      'Flight controller handles stabilization and navigation. Companion computer runs computer vision pipeline (YOLO-based detection). Communication layer bridges vision outputs to flight decisions.',
    implementation:
      'Integrated flight control systems with onboard computer vision processing. YOLO models handle real-time object detection. Custom embedded systems bridge sensor data, flight control, and vision.',
    challenges:
      'Real-time processing on embedded hardware, reliable FC–companion communication, environmental variability in CV, and balancing payload weight with flight performance.',
    learnings:
      'End-to-end systems integration from low-level embedded to high-level AI. Understanding the gap between lab-tested CV models and field-deployed performance.',
    currentStatus: 'Engineering Project / In Development',
    domains: ['UAS', 'Computer Vision', 'Autonomous Systems', 'Robotics', 'Embedded Systems'],
    technologies: ['UAV Systems', 'YOLO', 'Computer Vision', 'Embedded Systems', 'Flight Controllers', 'Python', 'OpenCV'],
    statusLabel: 'Engineering Project',
  },
  {
    id: 'farmer-stack',
    title: 'AI + Agriculture Automation',
    subtitle: 'Integrated AI + IoT + automation platform for agriculture',
    tier: 'featured',
    accentColor: 'amber',
    description:
      'An evolving engineering initiative to build an integrated agriculture technology stack combining IoT sensor networks, automated irrigation, AI-driven crop analysis, and farmer-facing interfaces.',
    problem:
      'Farmers — especially smallholder farmers — lack access to integrated technology that combines field sensing, automated irrigation, and AI-driven recommendations into a single, accessible platform.',
    whyItMatters:
      'Agriculture is the backbone of food security. Intelligent automation can reduce water waste, detect crop diseases early, optimize resource use, and provide actionable insights to farmers in their own language.',
    systemArchitecture:
      'IoT Layer → Field sensors, soil moisture, environmental monitoring. Automation Layer → Automated irrigation, water management. AI Layer → Crop analysis, disease detection, predictive analytics. Interface Layer → Farmer-facing dashboard, alerts, regional-language support.',
    implementation:
      'Sensor networks collect field data. Automation controllers manage irrigation based on sensor thresholds and AI recommendations. Computer vision models analyze crop health.',
    challenges:
      'Deploying reliable IoT in rural environments with limited connectivity, building AI that generalizes across crop types, designing accessible interfaces, and integrating hardware automation with software intelligence.',
    learnings:
      'The importance of designing technology around real user needs rather than technical capabilities. Field reliability matters more than lab accuracy.',
    currentStatus: 'Evolving Engineering Initiative',
    futureDirection:
      'Expanding sensor coverage, improving AI models across crop varieties, building mobile-first regional-language interfaces, and piloting with farming communities.',
    domains: ['AI/ML', 'IoT', 'Agriculture', 'Automation', 'Computer Vision'],
    technologies: ['Python', 'Computer Vision', 'IoT Sensors', 'Microcontrollers', 'Machine Learning', 'Automated Irrigation', 'Sensor Networks', 'Edge Computing'],
    statusLabel: 'Evolving Initiative',
  },

  // ═══ PROJECTS ═══════════════════════════════════════════════
  {
    id: 'kisanx-ai',
    title: 'KisanX.ai',
    subtitle: 'Agriculture-focused AI and computer vision',
    tier: 'project',
    accentColor: 'amber',
    description: 'Agriculture-focused AI work involving machine learning, computer vision, and AI-assisted decision systems for agricultural applications.',
    domains: ['AI/ML', 'Agriculture', 'Computer Vision'],
    technologies: ['Machine Learning', 'Computer Vision', 'Python'],
    statusLabel: 'In Development',
  },
  {
    id: 'drone-tracker',
    title: 'Drone Tracker',
    subtitle: 'Real-time drone tracking with YOLO and MAVLink',
    tier: 'project',
    accentColor: 'cyan',
    description: 'A real-time drone detection and tracking system using YOLO object detection, MAVLink communication, and PID control for autonomous tracking behavior.',
    domains: ['Computer Vision', 'UAS', 'Autonomous Systems'],
    technologies: ['Python', 'YOLO', 'OpenCV', 'MAVLink', 'PID Control'],
    statusLabel: 'Built',
  },
  {
    id: 'freelance-iot',
    title: 'Freelance IoT & Automation',
    subtitle: 'Independent engineering — sensors, automation, control systems',
    tier: 'project',
    accentColor: 'green',
    description: 'Independent design and build of practical engineering systems including IoT projects, embedded systems, automation, sensor networks, agriculture monitoring, and control systems.',
    domains: ['IoT', 'Embedded Systems', 'Automation', 'Agriculture'],
    technologies: ['Microcontrollers', 'Sensors', 'IoT Communication', 'Automation', 'Edge Systems'],
    statusLabel: 'Ongoing',
  },

  // ═══ EXPERIMENTS ════════════════════════════════════════════
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    subtitle: 'AI-powered resume analysis tool',
    tier: 'experiment',
    description: 'An AI-powered tool for analyzing and evaluating resumes.',
    domains: ['AI/ML'],
    technologies: ['Python', 'AI', 'NLP'],
    statusLabel: 'Experiment',
  },
  {
    id: 'open-air-defense',
    title: 'Open Air Defense',
    subtitle: 'Open-source air defense concepts',
    tier: 'experiment',
    description: 'Exploring open-source approaches to air defense systems and detection.',
    domains: ['UAS', 'Autonomous Systems'],
    technologies: ['Python', 'Detection Systems'],
    statusLabel: 'Experiment',
  },
];

export const featuredProjects = projects.filter((p) => p.tier === 'featured');
export const otherProjects = projects.filter((p) => p.tier === 'project');
export const experiments = projects.filter((p) => p.tier === 'experiment');
