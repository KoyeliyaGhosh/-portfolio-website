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
      { color: 'rgba(168,85,247,', amp: 40, freq: 0.005, speed: 0.0015, yOff: 0.35, width: 3, alpha: 0.6 },
      { color: 'rgba(236,72,153,', amp: 45, freq: 0.004, speed: 0.002, yOff: 0.40, width: 2.5, alpha: 0.55 },
      { color: 'rgba(243,198,35,', amp: 35, freq: 0.007, speed: 0.0025, yOff: 0.45, width: 3, alpha: 0.5 },
      { color: 'rgba(6,182,212,',  amp: 30, freq: 0.008, speed: 0.0012, yOff: 0.50, width: 2.5, alpha: 0.45 },
      { color: 'rgba(168,85,247,', amp: 50, freq: 0.003, speed: 0.001, yOff: 0.55, width: 2, alpha: 0.4 },
      { color: 'rgba(236,72,153,', amp: 32, freq: 0.006, speed: 0.003, yOff: 0.60, width: 2, alpha: 0.35 },
      { color: 'rgba(59,130,246,', amp: 40, freq: 0.005, speed: 0.0018, yOff: 0.65, width: 2.5, alpha: 0.4 },
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

        for (let x = 0; x <= canvas.width; x += 4) {
          const y = baseY +
            Math.sin(x * w.freq + t * w.speed * 15) * w.amp +
            Math.sin(x * w.freq * 0.5 + t * w.speed * 8) * w.amp * 0.5 +
            Math.cos(x * w.freq * 0.3 + t * w.speed * 10) * w.amp * 0.3;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `${w.color}${w.alpha})`;
        ctx.lineWidth = w.width;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `${w.color}0.85)`;
        ctx.stroke();

        // Draw an outer soft ambient glow layer
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 4) {
          const y = baseY +
            Math.sin(x * w.freq + t * w.speed * 15) * w.amp +
            Math.sin(x * w.freq * 0.5 + t * w.speed * 8) * w.amp * 0.5 +
            Math.cos(x * w.freq * 0.3 + t * w.speed * 10) * w.amp * 0.3;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `${w.color}${w.alpha * 0.25})`;
        ctx.lineWidth = w.width * 5;
        ctx.shadowBlur = 24;
        ctx.shadowColor = `${w.color}0.5)`;
        ctx.stroke();

        // Reset shadow
        ctx.shadowBlur = 0;
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
