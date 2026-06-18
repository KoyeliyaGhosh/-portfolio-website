import { useEffect, useRef } from 'react';

/**
 * WaveBackground — Flowing colorful ribbon/wave animation
 * Mimics the Three.js wave effect from the reference site using 2D canvas
 */
export default function WaveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let t = 0;

    const waves = [
      { color: 'rgba(168,85,247,', amp: 35, freq: 0.008, speed: 0.012, yOff: 0.35, width: 2.5, alpha: 0.5 },
      { color: 'rgba(236,72,153,', amp: 40, freq: 0.006, speed: 0.015, yOff: 0.40, width: 2, alpha: 0.45 },
      { color: 'rgba(243,198,35,', amp: 30, freq: 0.01, speed: 0.018, yOff: 0.45, width: 2.5, alpha: 0.4 },
      { color: 'rgba(6,182,212,',  amp: 25, freq: 0.012, speed: 0.01, yOff: 0.50, width: 2, alpha: 0.35 },
      { color: 'rgba(168,85,247,', amp: 45, freq: 0.005, speed: 0.008, yOff: 0.55, width: 1.5, alpha: 0.3 },
      { color: 'rgba(236,72,153,', amp: 28, freq: 0.009, speed: 0.022, yOff: 0.60, width: 1.5, alpha: 0.25 },
      { color: 'rgba(59,130,246,', amp: 35, freq: 0.007, speed: 0.013, yOff: 0.65, width: 2, alpha: 0.3 },
    ];

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves.forEach(w => {
        ctx.beginPath();
        const baseY = canvas.height * w.yOff;

        for (let x = 0; x <= canvas.width; x += 2) {
          const y = baseY +
            Math.sin(x * w.freq + t * w.speed * 60) * w.amp +
            Math.sin(x * w.freq * 0.5 + t * w.speed * 30) * w.amp * 0.5 +
            Math.cos(x * w.freq * 0.3 + t * w.speed * 45) * w.amp * 0.3;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `${w.color}${w.alpha})`;
        ctx.lineWidth = w.width;
        ctx.stroke();

        // Draw a soft glow version
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 2) {
          const y = baseY +
            Math.sin(x * w.freq + t * w.speed * 60) * w.amp +
            Math.sin(x * w.freq * 0.5 + t * w.speed * 30) * w.amp * 0.5 +
            Math.cos(x * w.freq * 0.3 + t * w.speed * 45) * w.amp * 0.3;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `${w.color}${w.alpha * 0.3})`;
        ctx.lineWidth = w.width * 6;
        ctx.stroke();
      });

      t += 1;
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
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.6,
      }}
    />
  );
}
