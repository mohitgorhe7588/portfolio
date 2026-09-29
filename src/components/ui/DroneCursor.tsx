'use client';
import { useEffect, useRef, useState } from 'react';

export default function DroneCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -200, y: -200 });
  const smoothPosRef = useRef({ x: -200, y: -200 });
  const velRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const [isHovering, setIsHovering] = useState(false);
  const [showShockwave, setShowShockwave] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const onMove = (e: MouseEvent) => { posRef.current = { x: e.clientX, y: e.clientY }; };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setIsHovering(!!t.closest('a, button, [role="button"]'));
    };
    const onClick = () => {
      setShowShockwave(true);
      setTimeout(() => setShowShockwave(false), 700);
    };

    let tiltX = 0, tiltY = 0;

    const loop = () => {
      const sp = smoothPosRef.current;
      const tp = posRef.current;
      const lerpFactor = 0.18;
      sp.x += (tp.x - sp.x) * lerpFactor;
      sp.y += (tp.y - sp.y) * lerpFactor;

      velRef.current = { x: tp.x - sp.x, y: tp.y - sp.y };
      const tX = Math.max(-14, Math.min(14, velRef.current.y * 2));
      const tY = Math.max(-14, Math.min(14, -velRef.current.x * 2));
      tiltX += (tX - tiltX) * 0.12;
      tiltY += (tY - tiltY) * 0.12;

      const el = cursorRef.current;
      if (el) {
        el.style.transform = `translate(${sp.x - 28}px, ${sp.y - 28}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    window.addEventListener('click', onClick);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('click', onClick);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile]);

  if (isMobile) return null;

  const size = isHovering ? 62 : 56;

  return (
    <>
      <style>{`
        * { cursor: none !important; }

        @keyframes prop-cw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes prop-ccw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes sw-expand {
          0%   { transform: translate(-50%,-50%) scale(0.2); opacity: 0.55; }
          100% { transform: translate(-50%,-50%) scale(2.8); opacity: 0; }
        }
        @keyframes cursor-pulse {
          0%,100% { filter: drop-shadow(0 0 3px rgba(0,0,0,0.35)); }
          50%      { filter: drop-shadow(0 0 8px rgba(0,0,0,0.55)); }
        }

        .drone-svg { animation: cursor-pulse 2.4s ease-in-out infinite; }

        .p-cw-fast  { animation: prop-cw  0.12s linear infinite; transform-origin: center; }
        .p-ccw-fast { animation: prop-ccw 0.12s linear infinite; transform-origin: center; }
        .p-cw-slow  { animation: prop-cw  0.22s linear infinite; transform-origin: center; }
        .p-ccw-slow { animation: prop-ccw 0.22s linear infinite; transform-origin: center; }

        .sw-ring {
          position: fixed;
          width: 56px; height: 56px;
          border: 1.5px solid #000;
          border-radius: 50%;
          pointer-events: none;
          z-index: 99998;
          animation: sw-expand 0.7s ease-out forwards;
          transform-origin: center;
        }
      `}</style>

      {showShockwave && (
        <div className="sw-ring" style={{ left: posRef.current.x, top: posRef.current.y }} />
      )}

      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: size, height: size,
          pointerEvents: 'none',
          zIndex: 99999,
          transformStyle: 'preserve-3d',
          transition: 'width 0.2s ease, height 0.2s ease',
        }}
      >
        {/* Realistic FPV top-down drone SVG */}
        <svg
          className="drone-svg"
          width={size} height={size}
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ── Arms ── */}
          <line x1="28" y1="28" x2="10" y2="10" stroke="#111" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1="28" y1="28" x2="46" y2="10" stroke="#111" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1="28" y1="28" x2="10" y2="46" stroke="#111" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1="28" y1="28" x2="46" y2="46" stroke="#111" strokeWidth="2.2" strokeLinecap="round"/>

          {/* ── Motor mounts (circles at arm ends) ── */}
          <circle cx="10" cy="10" r="4" fill="#222" stroke="#555" strokeWidth="1"/>
          <circle cx="46" cy="10" r="4" fill="#222" stroke="#555" strokeWidth="1"/>
          <circle cx="10" cy="46" r="4" fill="#222" stroke="#555" strokeWidth="1"/>
          <circle cx="46" cy="46" r="4" fill="#222" stroke="#555" strokeWidth="1"/>

          {/* ── Propellers (spinning) ── */}
          {/* TL — CW */}
          <g style={{ transformOrigin: '10px 10px' }} className={isHovering ? 'p-cw-fast' : 'p-cw-slow'}>
            <ellipse cx="10" cy="10" rx="8.5" ry="2.2" fill="rgba(0,0,0,0.18)" stroke="#222" strokeWidth="0.9"/>
          </g>
          {/* TR — CCW */}
          <g style={{ transformOrigin: '46px 10px' }} className={isHovering ? 'p-ccw-fast' : 'p-ccw-slow'}>
            <ellipse cx="46" cy="10" rx="8.5" ry="2.2" fill="rgba(0,0,0,0.18)" stroke="#222" strokeWidth="0.9"/>
          </g>
          {/* BL — CCW */}
          <g style={{ transformOrigin: '10px 46px' }} className={isHovering ? 'p-ccw-fast' : 'p-ccw-slow'}>
            <ellipse cx="10" cy="46" rx="8.5" ry="2.2" fill="rgba(0,0,0,0.18)" stroke="#222" strokeWidth="0.9"/>
          </g>
          {/* BR — CW */}
          <g style={{ transformOrigin: '46px 46px' }} className={isHovering ? 'p-cw-fast' : 'p-cw-slow'}>
            <ellipse cx="46" cy="46" rx="8.5" ry="2.2" fill="rgba(0,0,0,0.18)" stroke="#222" strokeWidth="0.9"/>
          </g>

          {/* ── Body frame — center plate ── */}
          <rect x="20" y="20" width="16" height="16" rx="2" fill="#111" stroke="#444" strokeWidth="0.8"/>

          {/* ── FC board lines (detail) ── */}
          <line x1="23" y1="28" x2="33" y2="28" stroke="#555" strokeWidth="0.7"/>
          <line x1="28" y1="23" x2="28" y2="33" stroke="#555" strokeWidth="0.7"/>

          {/* ── Camera module (front-facing pod) ── */}
          <rect x="24" y="18" width="8" height="5" rx="1" fill="#333" stroke="#555" strokeWidth="0.7"/>
          <circle cx="28" cy="20.5" r="2" fill="#000" stroke="#777" strokeWidth="0.6"/>
          <circle cx="28" cy="20.5" r="0.8" fill="#fff" opacity="0.7"/>

          {/* ── LED dots (corner accent) ── */}
          <circle cx="10" cy="10" r="1.2" fill={isHovering ? '#fff' : '#aaa'} opacity="0.9"/>
          <circle cx="46" cy="10" r="1.2" fill={isHovering ? '#fff' : '#aaa'} opacity="0.9"/>
          <circle cx="10" cy="46" r="1.2" fill="#888" opacity="0.7"/>
          <circle cx="46" cy="46" r="1.2" fill="#888" opacity="0.7"/>
        </svg>
      </div>
    </>
  );
}
