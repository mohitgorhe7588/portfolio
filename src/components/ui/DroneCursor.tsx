'use client';
import { useEffect, useRef, useState } from 'react';

export default function DroneCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const velRef = useRef({ x: 0, y: 0 });
  const prevPosRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [showShockwave, setShowShockwave] = useState(false);
  const [propSpeed, setPropSpeed] = useState(0.4);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"]');
      setIsHoveringInteractive(!!isInteractive);
      setPropSpeed(isInteractive ? 0.15 : 0.4);
    };

    const handleClick = () => {
      setShowShockwave(true);
      setTimeout(() => setShowShockwave(false), 600);
    };

    let tiltX = 0;
    let tiltY = 0;

    const animate = () => {
      const el = cursorRef.current;
      if (!el) { rafRef.current = requestAnimationFrame(animate); return; }

      velRef.current = {
        x: posRef.current.x - prevPosRef.current.x,
        y: posRef.current.y - prevPosRef.current.y,
      };
      prevPosRef.current = { ...posRef.current };

      const targetTiltX = Math.max(-12, Math.min(12, velRef.current.y * 1.5));
      const targetTiltY = Math.max(-12, Math.min(12, -velRef.current.x * 1.5));
      tiltX += (targetTiltX - tiltX) * 0.15;
      tiltY += (targetTiltY - tiltY) * 0.15;

      el.style.transform = `translate(${posRef.current.x - 20}px, ${posRef.current.y - 20}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${isHoveringInteractive ? 1.4 : 1})`;
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('click', handleClick);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile, isHoveringInteractive]);

  if (isMobile) return null;

  return (
    <>
      <style>{`
        * { cursor: none !important; }
        @keyframes spin-prop { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes shockwave { 0% { transform: translate(-50%, -50%) scale(0); opacity: 0.6; } 100% { transform: translate(-50%, -50%) scale(3); opacity: 0; } }
        .prop-spin { animation: spin-prop var(--prop-speed, 0.4s) linear infinite; transform-origin: center; }
        .shockwave-ring { position: fixed; width: 40px; height: 40px; border-radius: 50%; border: 1.5px solid #000; animation: shockwave 0.6s ease-out forwards; pointer-events: none; z-index: 9999; }
      `}</style>

      {/* Shockwave */}
      {showShockwave && (
        <div
          className="shockwave-ring"
          style={{ left: posRef.current.x, top: posRef.current.y }}
        />
      )}

      {/* Drone cursor */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          pointerEvents: 'none',
          zIndex: 99999,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.05s linear',
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Center body */}
          <rect x="17" y="17" width="6" height="6" rx="1" fill="black" />
          {/* Arms */}
          <line x1="20" y1="20" x2="8" y2="8" stroke="black" strokeWidth="1.5" />
          <line x1="20" y1="20" x2="32" y2="8" stroke="black" strokeWidth="1.5" />
          <line x1="20" y1="20" x2="8" y2="32" stroke="black" strokeWidth="1.5" />
          <line x1="20" y1="20" x2="32" y2="32" stroke="black" strokeWidth="1.5" />

          {/* Propeller circles - top-left */}
          <g style={{ '--prop-speed': propSpeed + 's' } as React.CSSProperties}>
            <g className="prop-spin" style={{ transformOrigin: '8px 8px' }}>
              <ellipse cx="8" cy="8" rx="5" ry="2" fill="none" stroke="black" strokeWidth="1.2" />
            </g>
          </g>
          {/* top-right */}
          <g style={{ '--prop-speed': propSpeed + 's' } as React.CSSProperties}>
            <g className="prop-spin" style={{ transformOrigin: '32px 8px', animationDirection: 'reverse' }}>
              <ellipse cx="32" cy="8" rx="5" ry="2" fill="none" stroke="black" strokeWidth="1.2" />
            </g>
          </g>
          {/* bottom-left */}
          <g style={{ '--prop-speed': propSpeed + 's' } as React.CSSProperties}>
            <g className="prop-spin" style={{ transformOrigin: '8px 32px', animationDirection: 'reverse' }}>
              <ellipse cx="8" cy="32" rx="5" ry="2" fill="none" stroke="black" strokeWidth="1.2" />
            </g>
          </g>
          {/* bottom-right */}
          <g style={{ '--prop-speed': propSpeed + 's' } as React.CSSProperties}>
            <g className="prop-spin" style={{ transformOrigin: '32px 32px' }}>
              <ellipse cx="32" cy="32" rx="5" ry="2" fill="none" stroke="black" strokeWidth="1.2" />
            </g>
          </g>

          {/* Camera dot */}
          <circle cx="20" cy="20" r="1.5" fill="white" />
        </svg>
      </div>
    </>
  );
}
