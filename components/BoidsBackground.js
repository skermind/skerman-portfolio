// This is not in use 

import { useEffect, useRef } from 'react';

export default function BoidsTestPage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const boids = [...Array(50)].map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 0.5) * 6,
      radius: 15,
      prevX: null,
      prevY: null,
    }));

    function animate() {
      // clear the canvas fully each frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      boids.forEach((b, i) => {
        if (b.prevX === null) {
          b.prevX = b.x;
          b.prevY = b.y;
        }

        // draw thin path line showing movement
        ctx.beginPath();
        ctx.moveTo(b.prevX, b.prevY);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = 'rgba(29, 185, 84, 0.9)';
        ctx.lineWidth = 1; // thin line
        ctx.stroke();

        b.prevX = b.x;
        b.prevY = b.y;

        b.x += b.vx;
        b.y += b.vy;

        // bounce off walls elastically
        if (b.x - b.radius < 0) { b.vx = Math.abs(b.vx); b.x = b.radius; }
        if (b.x + b.radius > canvas.width) { b.vx = -Math.abs(b.vx); b.x = canvas.width - b.radius; }
        if (b.y - b.radius < 0) { b.vy = Math.abs(b.vy); b.y = b.radius; }
        if (b.y + b.radius > canvas.height) { b.vy = -Math.abs(b.vy); b.y = canvas.height - b.radius; }

        // realistic collision with other boids
        boids.forEach((other, j) => {
          if (i !== j) {
            const dx = other.x - b.x;
            const dy = other.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const minDist = b.radius + other.radius;
            if (dist < minDist && dist > 0) {
              const nx = dx / dist;
              const ny = dy / dist;
              const p = 2 * ((b.vx - other.vx) * nx + (b.vy - other.vy) * ny) / 2;
              b.vx -= p * nx;
              b.vy -= p * ny;
              other.vx += p * nx;
              other.vy += p * ny;

              const overlap = minDist - dist;
              b.x -= nx * (overlap / 2);
              b.y -= ny * (overlap / 2);
              other.x += nx * (overlap / 2);
              other.y += ny * (overlap / 2);

              b.vx *= 0.98;
              b.vy *= 0.98;
              other.vx *= 0.98;
              other.vy *= 0.98;
            }
          }
        });

        // draw boid circle
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(29, 185, 84, 0.9)';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
}