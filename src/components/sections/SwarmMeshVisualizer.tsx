'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Radio, Server, Activity } from 'lucide-react';

interface DroneNode {
  id: string;
  name: string;
  x: number;
  y: number;
  ip: string;
  role: string;
  signal: string;
  status: 'online' | 'routing' | 'relay';
}

const initialNodes: DroneNode[] = [
  { id: 'node-a', name: 'DRONE ALPHA', x: 50, y: 15, ip: '10.42.0.1', role: 'Active Gateway / Node', signal: '-48 dBm', status: 'online' },
  { id: 'node-b', name: 'DRONE BRAVO', x: 20, y: 75, ip: '10.42.0.2', role: 'Mesh Relay', signal: '-56 dBm', status: 'relay' },
  { id: 'node-c', name: 'DRONE CHARLIE', x: 50, y: 80, ip: '10.42.0.3', role: 'Perception Node', signal: '-52 dBm', status: 'online' },
  { id: 'node-d', name: 'DRONE DELTA', x: 80, y: 75, ip: '10.42.0.4', role: 'Telemetry Node', signal: '-61 dBm', status: 'relay' },
];

export default function SwarmMeshVisualizer() {
  const [selectedNode, setSelectedNode] = useState<DroneNode>(initialNodes[0]);
  const [transmitting, setTransmitting] = useState(false);

  const triggerPacket = () => {
    setTransmitting(true);
    setTimeout(() => setTransmitting(false), 1200);
  };

  return (
    <div className="mt-6 rounded-xl border border-border-primary bg-bg-primary/80 p-5 sm:p-6 overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border-subtle mb-4">
        <div className="flex items-center gap-2">
          <Activity size={16} className="text-accent-cyan" />
          <span className="font-mono text-xs font-semibold text-text-primary uppercase tracking-wider">
            Interactive Mesh Topology (BATMAN-adv L2)
          </span>
        </div>

        <button
          onClick={triggerPacket}
          disabled={transmitting}
          className="font-mono text-xs px-3 py-1 rounded bg-accent-cyan/10 hover:bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan transition-colors"
        >
          {transmitting ? 'BROADCASTING PACKET...' : 'SIMULATE P2P PACKET'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Topology SVG Canvas (7 cols) */}
        <div className="md:col-span-7 relative h-64 sm:h-72 w-full rounded-lg border border-border-subtle bg-bg-secondary/60 flex items-center justify-center p-2">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Mesh Links */}
            <line x1="50" y1="20" x2="20" y2="75" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="2,2" />
            <line x1="50" y1="20" x2="50" y2="80" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="2,2" />
            <line x1="50" y1="20" x2="80" y2="75" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="2,2" />
            <line x1="20" y1="75" x2="50" y2="80" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="2,2" />
            <line x1="50" y1="80" x2="80" y2="75" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="2,2" />

            {/* Active transmitting waves */}
            {transmitting && (
              <>
                <motion.line
                  x1="50"
                  y1="20"
                  x2="20"
                  y2="75"
                  stroke="#00d4ff"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.line
                  x1="50"
                  y1="20"
                  x2="50"
                  y2="80"
                  stroke="#00d4ff"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                />
                <motion.line
                  x1="50"
                  y1="20"
                  x2="80"
                  y2="75"
                  stroke="#00d4ff"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </>
            )}

            {/* Mesh Center Router Badge */}
            <rect x="36" y="44" width="28" height="12" rx="2" fill="#111827" stroke="#00d4ff30" strokeWidth="0.5" />
            <text x="50" y="52" fill="#94a3b8" fontSize="3" fontFamily="monospace" textAnchor="middle">
              BATMAN-adv
            </text>
          </svg>

          {/* HTML Nodes positioned over SVG */}
          {initialNodes.map((node) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node)}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-lg border font-mono text-[10px] sm:text-xs flex items-center gap-1.5 transition-all ${
                  isSelected
                    ? 'border-accent-cyan bg-bg-surface text-accent-cyan shadow-[0_0_15px_rgba(0,212,255,0.3)] z-10'
                    : 'border-border-primary bg-bg-primary text-text-secondary hover:border-text-muted z-0'
                }`}
                title={`Click to inspect ${node.name}`}
              >
                <Wifi size={12} className={isSelected ? 'text-accent-cyan' : 'text-text-muted'} />
                <span>{node.name.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Node Telemetry (5 cols) */}
        <div className="md:col-span-5 p-4 rounded-lg border border-border-subtle bg-bg-secondary/40 font-mono text-xs space-y-3">
          <div className="flex items-center justify-between text-text-muted pb-2 border-b border-border-subtle">
            <span>PEER TELEMETRY</span>
            <span className="text-accent-cyan">{selectedNode.name}</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-text-muted">IPV4 ADDR:</span>
              <span className="text-text-primary">{selectedNode.ip}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-muted">MESH ROLE:</span>
              <span className="text-text-secondary">{selectedNode.role}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-muted">SIGNAL STRENGTH:</span>
              <span className="text-accent-green">{selectedNode.signal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-muted">NODE STATUS:</span>
              <span className="text-text-primary uppercase">{selectedNode.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-muted">PROTOCOL:</span>
              <span className="text-text-muted">BATMAN-adv IV / L2</span>
            </div>
          </div>

          <div className="pt-2 border-t border-border-subtle text-[11px] text-text-muted leading-relaxed">
            Click nodes to inspect routing metrics. Broadcast packets traverse dynamic peer links
            without a centralized server.
          </div>
        </div>
      </div>
    </div>
  );
}
