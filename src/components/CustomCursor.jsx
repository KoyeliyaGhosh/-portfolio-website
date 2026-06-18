import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const trailRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef();
  const ringRef = useRef();

  useEffect(() => {
    // Enable only on non-touch devices
    const checkDevice = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(isTouch);
    };
    checkDevice();

    if (isMobile) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    // Track hovered elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.card') ||
        target.closest('.tech-card') ||
        target.style.cursor === 'pointer'
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  // Smooth trail effect
  useEffect(() => {
    if (isMobile) return;

    const updateTrail = () => {
      const speed = 0.18; // interpolation factor
      
      const dx = position.x - trailRef.current.x;
      const dy = position.y - trailRef.current.y;
      
      trailRef.current.x += dx * speed;
      trailRef.current.y += dy * speed;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${trailRef.current.x - 18}px, ${trailRef.current.y - 18}px, 0) scale(${hovered ? 1.4 : clicked ? 0.8 : 1})`;
      }
      
      requestRef.current = requestAnimationFrame(updateTrail);
    };

    requestRef.current = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(requestRef.current);
  }, [position, clicked, hovered, isMobile]);

  if (isMobile || hidden) return null;

  return (
    <>
      {/* Outer Circle Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: hovered ? '2px solid #ec4899' : '2.5px solid #f3c623',
          boxShadow: hovered ? '0 0 15px rgba(236,72,153,0.45)' : '0 0 10px rgba(243,198,35,0.25)',
          pointerEvents: 'none',
          zIndex: 10000,
          transition: 'border-color 0.2s, box-shadow 0.2s, background-color 0.2s',
          backgroundColor: hovered ? 'rgba(236,72,153,0.06)' : 'transparent',
        }}
      />
      {/* Inner Dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: hovered ? '#ec4899' : '#ffffff',
          pointerEvents: 'none',
          zIndex: 10001,
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
        }}
      />
    </>
  );
}
