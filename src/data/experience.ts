// ─── Experience & Education Data ─────────────────────────────
// Derived directly from Mohit Rajendra Gorhe's verified CV.

export interface Experience {
  id: string;
  company: string;
  location?: string;
  role: string;
  period: string;
  status: 'current' | 'previous' | 'ongoing';
  summary: string;
  bullets: string[];
  focusAreas: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  score: string;
}

export const experiences: Experience[] = [
  {
    id: 'eulerian-bots',
    company: 'Eulerian Bots',
    location: 'Field Deployments: Leh, Jaipur & Base',
    role: 'UAS Integration Engineer',
    period: 'Current',
    status: 'current',
    summary:
      'Integrating, configuring, and field-testing agricultural and defence UAV platforms. Hands-on flight controller calibration, MCU firmware updates, payload integration, and GCS mission planning, with direct field deployments with defence personnel.',
    bullets: [
      'Configured and calibrated flight controllers, telemetry links, and multi-sensor payloads on tactical and agricultural UAV airframes.',
      'Conducted live field deployments in high-altitude and harsh conditions (including Leh and Jaipur) directly with defence personnel to validate operational requirements.',
      'Performed MCU firmware and bootloader updates, diagnosing hardware/software interface failures on companion computing units.',
      'Executed Ground Control Station (GCS) mission planning, automated fail-safe validation, and real-time telemetry analysis.',
      'Collaborated on subsystem integration, balancing power distribution, RF link resilience, and payload release mechanics.',
    ],
    focusAreas: [
      'UAS Integration',
      'Flight Controller Calibration',
      'Defence Field Testing (Leh, Jaipur)',
      'GCS Mission Planning',
      'Firmware & Bootloader Updates',
      'Hardware/Software Debugging',
    ],
  },
  {
    id: 'xrone-tech',
    company: 'Xrone Tech Pvt. Ltd.',
    location: 'Nashik, Maharashtra',
    role: 'AI & Edge AI Engineer',
    period: 'UAS & Edge Intelligence',
    status: 'previous',
    summary:
      'Developed and integrated Python-based software workflows for UAV data processing, diagnostics, and testing. Built Edge AI perception and computer vision pipelines deployed on onboard Raspberry Pi companion computers.',
    bullets: [
      'Developed and integrated Python-based software workflows for UAV data processing, system diagnostics, testing, and automation.',
      'Worked on Edge AI and onboard computing systems using Raspberry Pi for real-time processing, sensor integration, peripheral communication, and autonomous applications.',
      'Implemented and tested computer vision workflows using Python and OpenCV for image processing, object detection, tracking, and vision-based UAV applications.',
      'Integrated cameras, sensors, telemetry, and onboard computing hardware to build real-time edge-processing pipelines for UAV systems.',
      'Worked with AI/ML inference workflows for mission-specific perception and monitoring applications on resource-constrained edge devices.',
      'Developed scripts and utilities for data collection, preprocessing, analysis, and system-level testing to evaluate UAV and onboard-computing performance.',
      'Worked with MAVLink, telemetry systems, and Ground Control Station software for real-time communication, monitoring, diagnostics, and autonomous mission workflows.',
      'Performed software-hardware integration and debugging across embedded systems, communication interfaces, sensors, flight controllers, and edge-computing platforms.',
      'Conducted field testing and performance analysis of autonomous and AI-enabled UAV systems, identifying software and integration issues and improving overall system reliability.',
      'Collaborated on defence and agricultural UAV projects involving computer vision, autonomous systems, onboard intelligence, and real-time edge processing.',
    ],
    focusAreas: [
      'Edge AI (Raspberry Pi)',
      'Computer Vision & OpenCV',
      'MAVLink & Telemetry',
      'UAV Testing & Automation',
      'Sensor & Hardware Integration',
      'Agricultural & Defence UAVs',
    ],
  },
  {
    id: 'freelance-engineering',
    company: 'Freelance Engineering',
    location: 'Remote / Independent',
    role: 'IoT, Automation & Embedded Systems',
    period: 'Ongoing',
    status: 'ongoing',
    summary:
      'Independent design and construction of practical embedded devices, sensor networks, agricultural tracking systems, and automation testbenches.',
    bullets: [
      'Designed and assembled single-axis automated solar tracking systems with Arduino Uno, LDR arrays, and servo actuation.',
      'Engineered UAV motor thrust measurement testbench integrating strain gauge load cells and HX711 ADCs for propulsion characterization.',
      'Designed, built, and tuned manual high-speed FPV quadcopters using INAV and Betaflight firmware.',
      'Constructed environmental telemetry nodes for localized field monitoring and smart agricultural controls.',
    ],
    focusAreas: [
      'Arduino & Microcontrollers',
      'Propulsion Analysis',
      'Solar Tracking Systems',
      'FPV Quadcopter Tuning',
      'Environmental Telemetry',
    ],
  },
];

export const education: Education = {
  degree: 'Bachelor of Engineering (B.E.)',
  field: 'Artificial Intelligence & Data Science',
  institution: "SNJB's Late Sau Kantabai Bhavarlalji Jain College of Engineering",
  location: 'Chandwad, Nashik',
  period: '2022 – 2026',
  score: 'CGPA: 7.65',
};
