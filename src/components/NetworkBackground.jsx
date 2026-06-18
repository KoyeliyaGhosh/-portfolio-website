import { useEffect, useRef } from 'react';

export default function NetworkBackground({ height = '100%' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let pts = [];
    let mouse = { x: -9999, y: -9999 };

    // Reference-style: vivid multicolor palette matching the screenshot
    const colors = [
      'rgba(139,92,246,',   // violet/purple
      'rgba(59,130,246,',   // blue
      'rgba(236,72,153,',   // pink/magenta
      'rgba(20,184,166,',   // teal
      'rgba(248,113,113,',  // red-rose
      'rgba(250,204,21,',   // yellow
      'rgba(167,139,250,',  // light purple
    ];

    const lineColors = [
      [139, 92, 246],  // violet
      [59, 130, 246],  // blue
      [236, 72, 153],  // pink
      [20, 184, 166],  // teal
    ];

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      build();
    }

    function build() {
      const density = 7000; // lower = more points
      const n = Math.min(Math.floor((canvas.width * canvas.height) / density), 120);
      pts = Array.from({ length: n }, () => ({
        x:  Math.random() * canvas.width,
        y:  Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r:  Math.random() * 2.5 + 1.2,
        c:  colors[Math.floor(Math.random() * colors.length)],
        lc: lineColors[Math.floor(Math.random() * lineColors.length)],
        o:  Math.random() * 0.6 + 0.4,
        pulse: Math.random() * Math.PI * 2, // phase offset
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const maxDist = 160;
      const t = Date.now() * 0.001;

      // Draw lines between close points
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.35;
            const [r, g, b] = pts[i].lc;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
            ctx.lineWidth = (1 - d / maxDist) * 1.2;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      pts.forEach(p => {
        const pulse = 0.85 + 0.15 * Math.sin(t * 1.5 + p.pulse);
        const radius = p.r * pulse;

        // Outer glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 3.5);
        grd.addColorStop(0, `${p.c}${p.o * 0.9})`);
        grd.addColorStop(1, `${p.c}0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Solid dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.c}${p.o})`;
        ctx.fill();

        // Mouse repulsion
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const md  = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 100) {
          const force = (100 - md) / 100;
          p.vx += (mdx / md) * force * 0.3;
          p.vy += (mdy / md) * force * 0.3;
        }

        // Dampen speed
        p.vx *= 0.99;
        p.vy *= 0.99;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -5 || p.x > canvas.width  + 5) p.vx *= -1;
        if (p.y < -5 || p.y > canvas.height + 5) p.vy *= -1;
      });

      raf = requestAnimationFrame(draw);
    }

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
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
        opacity: 0.85,
      }}
    />
  );
}
