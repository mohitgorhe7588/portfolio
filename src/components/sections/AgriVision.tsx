'use client';

import FadeInUp, { StaggerContainer, StaggerItem } from '@/components/ui/FadeInUp';

const layers = [
  {
    number: '04',
    title: 'Farmer interface',
    summary: 'Accessible control points built for rural operators, supporting regional languages and low-bandwidth connections.',
    items: ['Regional language interface', 'Soil moisture overview', 'Actionable alert dispatch', 'Manual & scheduled pump controls'],
  },
  {
    number: '03',
    title: 'Vision & decision pipeline',
    summary: 'Edge computer vision and heuristics translating sensor data and imagery into irrigation recommendations.',
    items: ['Crop health and disease classification', 'Irrigation schedule optimizer', 'Soil moisture depletion curves'],
  },
  {
    number: '02',
    title: 'Field automation & actuators',
    summary: 'Solenoid valves, relay switches, and pump power management with built-in hardware fail-safes.',
    items: ['Automated solenoid valves', 'Fail-safe timeout circuits', 'Pump & power relay control'],
  },
  {
    number: '01',
    title: 'IoT sensing nodes',
    summary: 'Low-power sensor clusters measuring soil and microclimate variables under harsh outdoor weather.',
    items: ['Volumetric soil moisture probes', 'Ambient temperature & humidity', 'Battery & solar power monitoring'],
  },
];

export default function AgriVision() {
  return (
    <section id="agri-vision" className="py-24 sm:py-36" aria-label="Agricultural automation">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
            <FadeInUp>
              <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">
                Agricultural automation
              </h2>
              <p className="text-base text-zinc-600 leading-relaxed font-light">
                An engineering architecture designed to connect physical field sensing, computer vision, and automated valve control directly to farmers.
              </p>
              <div className="pt-4 text-xs font-mono text-zinc-500">
                Field-first rule: Hardware durability in dusty, high-heat farmland takes priority over complex abstraction.
              </div>
            </FadeInUp>
          </div>

          <div className="lg:col-span-8 lg:max-h-[70vh] scroll-panel space-y-10">
            <StaggerContainer>
              {layers.map((layer) => (
                <StaggerItem key={layer.number}>
                  <div className="space-y-3 group pb-8 border-b border-zinc-100 last:border-0">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-zinc-400">{layer.number}</span>
                      <h3 className="text-xl font-medium text-zinc-900 group-hover:text-black transition-colors">
                        {layer.title}
                      </h3>
                    </div>
                    <p className="text-sm text-zinc-600 leading-relaxed max-w-2xl">
                      {layer.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-0.5 text-xs font-mono text-zinc-700 bg-zinc-100 hover:bg-zinc-200 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
