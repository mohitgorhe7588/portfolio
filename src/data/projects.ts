// ─── Structured Project Data ─────────────────────────────────
// Directly reflects Mohit Rajendra Gorhe's verified CV and engineering work.
// P2P swarm project has been removed per explicit instruction.

export type ProjectTier = 'featured' | 'project' | 'build';

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
  keyPoints?: string[];
  domains: string[];
  technologies: string[];
  statusLabel: string;
}

export const projects: Project[] = [
  // ═══ FEATURED CASE STUDIES ══════════════════════════════════
  {
    id: 'rudra-uav-x',
    title: 'RudraUAV: AI-Based Target Detection & Payload Delivery System',
    subtitle: 'Real-time YOLO + CSRT tracking & autonomous payload engagement on Raspberry Pi',
    tier: 'featured',
    description:
      'Developed an AI-assisted UAV system capable of detecting and tracking ground targets in real time using YOLO and OpenCV, featuring continuous CSRT target lock and an automated payload release mechanism.',
    problem:
      'Aerial target engagement workflows traditionally require manual optical piloting, which is prone to operator latency and high cognitive load during rapid maneuvering.',
    whyItMatters:
      'Combining autonomous vision-based target verification with precision electromechanical payload drop mechanisms provides reliable, repeatable field performance in defense and precision delivery scenarios.',
    systemArchitecture:
      'Airframe & Flight Control: Custom quadcopter platform with flight controller telemetry. Edge Compute: Raspberry Pi companion computer running onboard YOLO inference and CSRT visual tracker. Actuation: GPIO-driven servo release mechanism triggering payload drop upon target lock confirmation.',
    implementation:
      'Trained and quantized YOLO models for low-latency target classification. Integrated OpenCV CSRT tracker to maintain continuous tracking even when detection frames drop. Built closed-loop control scripts interfacing vision coordinates with UAV guidance routines.',
    challenges:
      'Balancing inference frame-rates on resource-constrained Raspberry Pi hardware while maintaining flight stability, minimizing camera vibration artifacts, and ensuring zero false-positive drops.',
    learnings:
      'Hands-on experience in coupling edge deep learning pipelines with hardware actuators, managing thermal throttling on companion computers, and field-testing under variable outdoor lighting.',
    currentStatus: 'Engineered & Flight Tested',
    futureDirection:
      'Integrating optical flow for GPS-denied terminal descent and migrating to TensorRT on NVIDIA Jetson architectures.',
    keyPoints: [
      'Developed real-time ground target detection and tracking using YOLO & OpenCV.',
      'Implemented CSRT tracking to maintain continuous target lock after initial detection.',
      'Designed and integrated automated payload release mechanism triggered upon verification.',
      'Deployed vision pipeline directly on Raspberry Pi for edge AI inference.',
      'Combined Computer Vision with UAV control logic for autonomous target engagement.',
    ],
    domains: ['UAS', 'Computer Vision', 'Edge AI', 'Robotics', 'Embedded Systems'],
    technologies: ['Python', 'YOLO', 'OpenCV', 'CSRT Tracker', 'Raspberry Pi', 'Flight Controllers'],
    statusLabel: 'Field Tested Project',
  },
  {
    id: 'aerial-surveillance',
    title: 'AI-Based Aerial Surveillance System',
    subtitle: 'Pose estimation, human activity analysis & rule-based threat detection with real-time SMS alerts',
    tier: 'featured',
    description:
      'Developed a real-time Computer Vision system for aerial surveillance using Python, OpenCV, and YOLO, featuring pose estimation, loitering/intrusion detection, and Raspberry Pi edge deployment.',
    problem:
      'Monitoring vast perimeter areas or agricultural perimeters via live aerial feeds requires automated event detection to eliminate the fatigue and latency of manual monitoring.',
    whyItMatters:
      'Automated aerial surveillance allows immediate identification of perimeter breaches, abnormal crowd gatherings, and restricted area intrusions with instant alert dispatch.',
    systemArchitecture:
      'Video Pipeline: High-resolution aerial camera stream ingest. Analysis Engine: YOLO-based human/object detection + pose estimation pipelines. Rule Engine: Spatial boundary polygons, dwell-time timers for loitering, and crowd density estimators. Alert Dispatcher: Edge-triggered SMS and telemetry warning protocol.',
    implementation:
      'Engineered rule-based event detection modules tracking movement vectors and restricted-zone intrusions. Optimized deep neural networks for edge execution on Raspberry Pi with asynchronous alert handlers.',
    challenges:
      'Processing high-resolution aerial perspectives with severe scale variance and perspective distortion, balancing inference latency with battery draw on edge hardware.',
    learnings:
      'Techniques for video stream stabilization, geometric spatial boundary calculations from overhead vantage points, and robust notification pipelines under unstable networks.',
    currentStatus: 'Completed & Field Validated',
    keyPoints: [
      'Real-time Computer Vision system for aerial surveillance using Python, OpenCV, YOLO.',
      'Implemented object detection, pose estimation, and human activity analysis from live video.',
      'Designed rule-based detection for loitering, restricted-area intrusion, and crowd formation.',
      'Optimized for Raspberry Pi edge deployment with real-time SMS alerts.',
      'Balanced inference speed with computational constraints on high-resolution aerial imagery.',
    ],
    domains: ['Computer Vision', 'Edge AI', 'Security Systems', 'UAS'],
    technologies: ['Python', 'OpenCV', 'YOLO', 'Raspberry Pi', 'Pose Estimation', 'Twilio/SMS API'],
    statusLabel: 'Completed Project',
  },
  {
    id: 'document-qa-chatbot',
    title: 'Document Q&A Chatbot (RAG-Based)',
    subtitle: 'Context-grounded LLM pipeline using LangChain, FAISS vector search & Google Gemini API',
    tier: 'featured',
    description:
      'Built a Retrieval-Augmented Generation (RAG) system to query uploaded documents with zero hallucinations, utilizing LangChain, FAISS vector search, and Google Gemini API within an interactive Streamlit UI.',
    problem:
      'Standard LLM generation suffers from factual hallucination and lacks access to proprietary technical documentation, manuals, or research papers.',
    whyItMatters:
      'RAG architectures ground language models strictly in verified source materials, enabling engineers and operators to extract precise answers from dense technical literature.',
    systemArchitecture:
      'Document Pipeline: Ingestion, chunking, and embedding generation. Vector Store: FAISS index for high-speed similarity search. LLM Orchestration: LangChain prompt chain strictly constraining context. Frontend: Real-time Streamlit interface for drag-and-drop document upload and multi-turn Q&A.',
    implementation:
      'Implemented recursive character chunking with strategic token overlaps to preserve semantic continuity. Integrated Google Gemini API with strict temperature control and source citation prompts.',
    challenges:
      'Fine-tuning chunk size and overlap parameters to maintain semantic context without exceeding token budgets, optimizing vector retrieval recall for dense technical tables.',
    learnings:
      'Vector indexing principles, prompt engineering techniques for strict factual grounding, and end-to-end GenAI application orchestration with LangChain.',
    currentStatus: 'Built & Deployed',
    keyPoints: [
      'Built RAG system to answer queries from uploaded documents using LangChain and FAISS.',
      'Implemented document chunking and embedding pipeline for accurate, context-grounded retrieval.',
      'Integrated Google Gemini API to generate responses strictly from retrieved document chunks.',
      'Deployed interactive Streamlit interface for real-time document upload and interactive Q&A.',
    ],
    domains: ['GenAI', 'NLP', 'Data Science', 'Backend'],
    technologies: ['Python', 'LangChain', 'FAISS', 'Gemini API', 'Streamlit', 'Vector Search'],
    statusLabel: 'Deployed System',
  },
  {
    id: 'farmer-stack',
    title: 'AI + Agriculture Automation / Farmer Stack',
    subtitle: 'Integrated AI, IoT sensing and closed-loop irrigation platform for farmers',
    tier: 'featured',
    description:
      'An evolving engineering initiative combining distributed field soil sensors, automated irrigation valves, computer-vision-based crop disease diagnosis, and regional language interfaces.',
    problem:
      'Smallholder farmers face fragmented solutions — separated sensors, manual valve switches, and inaccessible advisory apps that ignore real connectivity and linguistic barriers.',
    whyItMatters:
      'Unifying low-power sensing, physical automation, and accessible AI into a cohesive stack directly boosts water efficiency and crop yields in real agricultural conditions.',
    systemArchitecture:
      'Layer 01: Low-power IoT sensing clusters (soil moisture, microclimate). Layer 02: Closed-loop field automation (solenoid valves, pumps). Layer 03: Decision & AI models (crop disease detection, moisture decay estimation). Layer 04: Regional language farmer dashboard.',
    implementation:
      'Developing modular embedded nodes communicating with central controllers, coupled with lightweight vision models for crop health inspection.',
    challenges:
      'Field reliability in extreme heat and moisture, erratic rural power supplies, and designing interfaces intuitive for non-technical users.',
    learnings:
      'Field durability and intuitive physical feedback matter far more than theoretical algorithm complexity.',
    currentStatus: 'Evolving Engineering Initiative',
    domains: ['Agriculture Automation', 'IoT', 'Computer Vision', 'Embedded Systems'],
    technologies: ['Python', 'Computer Vision', 'IoT Sensors', 'Microcontrollers', 'Automation', 'Edge AI'],
    statusLabel: 'Platform Vision',
  },

  // ═══ OTHER PRACTICAL ENGINEERING PROJECTS ══════════════════
  {
    id: 'solar-array-tracking',
    title: 'Solar Array Tracking System',
    subtitle: 'Automated single-axis sun tracking with dual LDR sensors & servo actuation',
    tier: 'project',
    description:
      'Designed and programmed an automated solar tracking system using Arduino Uno, 2 LDR light sensors, and a servo motor to continuously align solar panels toward the maximum light angle throughout the day.',
    domains: ['IoT', 'Embedded Systems', 'Automation'],
    technologies: ['Arduino Uno', 'LDR Sensors', 'Servo Motor', 'C++', 'IoT'],
    statusLabel: 'Built & Validated',
    keyPoints: [
      'Automated solar tracking system using Arduino Uno and 2 LDR sensors.',
      'Programmed comparison logic to drive servo toward maximum illumination.',
      'Single-axis tracking to significantly improve energy capture over static panels.',
    ],
  },
  {
    id: 'motor-thrust-measurement',
    title: 'Motor Thrust Measurement & Performance Analysis',
    subtitle: 'UAV propulsion characterization bench using load cell & HX711',
    tier: 'project',
    description:
      'Designed and developed a hardware testbench to evaluate UAV motor and propeller propulsion performance using an Arduino Uno, load cell, and HX711 instrumentation amplifier.',
    domains: ['UAS', 'Embedded Systems', 'Hardware Engineering'],
    technologies: ['Arduino Uno', 'C++', 'Load Cell', 'HX711', 'Data Acquisition'],
    statusLabel: 'Built & Calibrated',
    keyPoints: [
      'Designed and fabricated a thrust measurement bench for UAV propulsion systems.',
      'Calibrated HX711 amplifier with strain gauge load cell for precision gram-level thrust readings.',
      'Evaluated thrust-to-weight ratios across different motor-propeller combinations.',
    ],
  },
  {
    id: 'fpv-payload-drone',
    title: 'FPV Payload-Capable Drone',
    subtitle: 'High-speed manual FPV quadcopter with INAV / Betaflight configuration',
    tier: 'project',
    description:
      'Designed, built, and flight-tested a manual FPV quadcopter optimized for high-speed precision maneuvering, low-latency analog/digital video transmission, and payload carriage.',
    domains: ['UAS', 'Robotics', 'Hardware Engineering'],
    technologies: ['INAV', 'Betaflight', 'CLI', 'C++', 'Flight Hardware', 'FPV RF'],
    statusLabel: 'Built & Flight Tested',
    keyPoints: [
      'Designed and built high-speed manual FPV quadcopter.',
      'Integrated low-latency FPV camera and video transmission link.',
      'Configured and tuned PID parameters via CLI for aggressive maneuvering stability.',
      'Extensive flight testing validating pilot response and payload dynamics.',
    ],
  },
  {
    id: 'drone-tracker',
    title: 'Drone Tracker System',
    subtitle: 'Real-time drone detection and optical tracking with MAVLink & PID control',
    tier: 'project',
    description:
      'Real-time drone detection and tracking system utilizing YOLO models, OpenCV video ingest, MAVLink communication, and a PID controller for autonomous gimbal/camera tracking.',
    domains: ['Computer Vision', 'UAS', 'Autonomous Systems'],
    technologies: ['Python', 'YOLO', 'OpenCV', 'MAVLink', 'PID Control'],
    statusLabel: 'Built',
  },
  {
    id: 'kisanx-ai',
    title: 'KisanX.ai',
    subtitle: 'Agricultural AI & Computer Vision decision support',
    tier: 'project',
    description:
      'Applied machine learning and computer vision pipelines for crop health diagnostic models and field advisory decision support.',
    domains: ['AI/ML', 'Agriculture', 'Computer Vision'],
    technologies: ['Machine Learning', 'Computer Vision', 'Python'],
    statusLabel: 'In Development',
  },
  {
    id: 'freelance-iot',
    title: 'Freelance IoT & Automation',
    subtitle: 'Custom sensors, embedded firmware, and environmental automation systems',
    tier: 'project',
    description:
      'Independent design and build of practical engineering systems including sensor arrays, embedded controllers, agricultural automation, and telemetry monitoring.',
    domains: ['IoT', 'Embedded Systems', 'Automation'],
    technologies: ['Microcontrollers', 'Sensors', 'Automation', 'C++', 'Python'],
    statusLabel: 'Ongoing',
  },

  // ═══ EXPERIMENTAL BUILDS ════════════════════════════════════
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    subtitle: 'NLP-based resume parsing and evaluation tool',
    tier: 'build',
    description: 'Natural language processing tool evaluating resume structure and skill alignment.',
    domains: ['AI/ML', 'NLP'],
    technologies: ['Python', 'NLP', 'Streamlit'],
    statusLabel: 'Experiment',
  },
  {
    id: 'open-air-defense',
    title: 'Open Air Defense Concepts',
    subtitle: 'Exploration of open-source aerial detection methodologies',
    tier: 'build',
    description: 'Experimental study into sensor-driven airspace awareness and detection systems.',
    domains: ['UAS', 'Autonomous Systems'],
    technologies: ['Python', 'Detection Systems'],
    statusLabel: 'Experiment',
  },
];

export const featuredProjects = projects.filter((p) => p.tier === 'featured');
export const otherProjects = projects.filter((p) => p.tier === 'project');
export const experiments = projects.filter((p) => p.tier === 'build');
