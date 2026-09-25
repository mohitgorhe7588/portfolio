// ─── Experience Data ─────────────────────────────────────────
// No fabricated dates, metrics, or responsibilities.

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  status: 'current' | 'previous' | 'ongoing';
  description: string;
  focusAreas: string[];
  accentColor: 'cyan' | 'amber' | 'green';
}

export const experiences: Experience[] = [
  {
    id: 'eulerian-bots',
    company: 'Eulerian Bots',
    role: 'UAS Integration Engineer',
    period: 'Current',
    status: 'current',
    description:
      'Working on UAS integration, UAV systems, hardware/software integration, system-level engineering, subsystem integration, testing, and troubleshooting.',
    focusAreas: [
      'UAS Integration',
      'UAV Systems',
      'Hardware/Software Integration',
      'System-Level Engineering',
      'Subsystem Integration',
      'Testing & Troubleshooting',
    ],
    accentColor: 'cyan',
  },
  {
    id: 'xrone-tech',
    company: 'Xrone Tech',
    role: 'UAS / Drone Engineering',
    period: 'Previous',
    status: 'previous',
    description:
      'Engineering work across agriculture UAV systems, drone engineering, flight controllers, embedded systems, flight testing, payload mechanisms, hardware/software integration, autonomous systems, and defense-oriented prototypes.',
    focusAreas: [
      'Agriculture UAV Systems',
      'Drone Engineering',
      'Flight Controllers',
      'Embedded Systems',
      'Flight Testing',
      'Payload Mechanisms',
      'Autonomous Systems',
      'Defense Prototypes',
    ],
    accentColor: 'amber',
  },
  {
    id: 'freelance',
    company: 'Freelance Engineering',
    role: 'IoT / Automation / Engineering',
    period: 'Ongoing',
    status: 'ongoing',
    description:
      'Independent design and build of practical engineering systems including IoT, embedded systems, automation, sensor systems, agriculture automation, monitoring, and control systems.',
    focusAreas: [
      'IoT Projects',
      'Embedded Systems',
      'Automation',
      'Sensor Systems',
      'Agriculture Automation',
      'Monitoring Systems',
      'Control Systems',
    ],
    accentColor: 'green',
  },
];
