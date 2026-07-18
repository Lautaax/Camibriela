import { useEffect, useRef } from 'react';

export default function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    
    // Track mouse
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, active: false };

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      width = canvas.width = rect.width * window.devicePixelRatio;
      height = canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);

    // Particles configuration
    const particleCount = 25;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseRadius: number;
      color: string;
      pulseSpeed: number;
      pulseTime: number;
    }> = [];

    const colors = [
      'rgba(168, 85, 247, 0.15)', // Purple
      'rgba(139, 92, 246, 0.12)', // Vibrant
      'rgba(236, 72, 153, 0.08)',  // Pink
    ];

    for (let i = 0; i < particleCount; i++) {
      const baseRadius = Math.random() * 120 + 60;
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        baseRadius,
        radius: baseRadius,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: 0.003 + Math.random() * 0.005,
        pulseTime: Math.random() * Math.PI * 2,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    const render = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Fill background
      ctx.fillStyle = 'var(--color-dark-bg, #030206)';
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Smoothly interpolate mouse position
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Draw flowing background abstract blobs
      particles.forEach((p) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x < -p.radius) p.x = rect.width + p.radius;
        if (p.x > rect.width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = rect.height + p.radius;
        if (p.y > rect.height + p.radius) p.y = -p.radius;

        // Pulse size
        p.pulseTime += p.pulseSpeed;
        p.radius = p.baseRadius + Math.sin(p.pulseTime) * 20;

        // Mouse attraction
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 350) {
            const force = (350 - dist) / 350;
            p.x += (dx / dist) * force * 0.4;
            p.y += (dy / dist) * force * 0.4;
          }
        }

        // Draw radial gradient for each blob (creates the liquid mesh glow)
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, 'rgba(3, 2, 6, 0)');
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Render loop ends without drawing grid lines

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block"
      />
    </div>
  );
}
