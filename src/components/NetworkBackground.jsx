import { useEffect, useRef } from 'react';

export default function NetworkBackground({ height = '100%' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let pts = [];

    const colors = ['rgba(96,165,250,', 'rgba(52,211,153,', 'rgba(255,255,255,'];

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      build();
    }

    function build() {
      const n = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 90);
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.8,
        c: colors[Math.floor(Math.random() * colors.length)],
        o: Math.random() * 0.5 + 0.3,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const maxDist = 130;

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(99,155,245,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      pts.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.c}${p.o})`;
        ctx.fill();

        p.x += p.vx; p.y += p.vy;
        if (p.x < -5 || p.x > canvas.width  + 5) p.vx *= -1;
        if (p.y < -5 || p.y > canvas.height + 5) p.vy *= -1;
      });

      raf = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height,
        pointerEvents: 'none', zIndex: 0,
        opacity: 0.7,
      }}
    />
  );
}
