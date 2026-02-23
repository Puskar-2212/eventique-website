'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const services = [
  {
    title: 'Weddings',
    description: 'Create unforgettable moments with our bespoke wedding planning services.',
  },
  {
    title: 'Corporate Events',
    description: 'Elevate your brand with sophisticated corporate gatherings and conferences.',
  },
  {
    title: 'Baby Showers',
    description: 'Celebrate new beginnings with charming and memorable baby shower experiences.',
  },
  {
    title: 'International Events',
    description: 'Seamless coordination for destination events across the globe.',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.5, 1], index % 2 === 0 ? [-5, 0, 5] : [5, 0, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateZ,
        scale,
        opacity,
        transformStyle: 'preserve-3d',
      }}
      className="bg-white/10 backdrop-blur-sm p-8 rounded-sm border border-white/20 h-full shadow-2xl"
    >
      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
      <p className="text-[#d4c5b9] leading-relaxed">{service.description}</p>
    </motion.div>
  );
}

export default function ServicesWithSpider() {
  const ref = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isInView, setIsInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const titleRotateY = useTransform(scrollYProgress, [0, 0.3, 0.7], [-20, 0, 20]);
  const titleScale = useTransform(scrollYProgress, [0, 0.3, 0.7], [0.7, 1, 0.7]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView || !canvasRef.current) return;

    const canvas = canvasRef.current;
    let w: number, h: number;
    const ctx = canvas.getContext('2d')!;
    const { sin, cos, PI, hypot, min, max } = Math;

    function spawn() {
      const pts = many(333, () => {
        return {
          x: rnd(canvas.width),
          y: rnd(canvas.height),
          len: 0,
          r: 0,
          t: 0,
        };
      });

      const pts2 = many(9, (i) => {
        return {
          x: cos((i / 9) * PI * 2),
          y: sin((i / 9) * PI * 2),
        };
      });

      const seed = rnd(100);
      let tx = rnd(canvas.width);
      let ty = rnd(canvas.height);
      let x = rnd(canvas.width);
      let y = rnd(canvas.height);
      const kx = rnd(0.5, 0.5);
      const ky = rnd(0.5, 0.5);
      const walkRadius = pt(rnd(50, 50), rnd(50, 50));
      const r = canvas.width / rnd(100, 150);

      function paintPt(pt: any) {
        pts2.forEach((pt2) => {
          if (!pt.len) return;
          drawLine(
            lerp(x + pt2.x * r, pt.x, pt.len * pt.len),
            lerp(y + pt2.y * r, pt.y, pt.len * pt.len),
            x + pt2.x * r,
            y + pt2.y * r
          );
        });
        drawCircle(pt.x, pt.y, pt.r);
      }

      return {
        follow(x: number, y: number) {
          tx = x;
          ty = y;
        },
        tick(t: number) {
          const selfMoveX = cos(t * kx + seed) * walkRadius.x;
          const selfMoveY = sin(t * ky + seed) * walkRadius.y;
          const fx = tx + selfMoveX;
          const fy = ty + selfMoveY;
          x += min(canvas.width / 100, (fx - x) / 10);
          y += min(canvas.width / 100, (fy - y) / 10);

          let i = 0;
          pts.forEach((pt) => {
            const dx = pt.x - x,
              dy = pt.y - y;
            const len = hypot(dx, dy);
            let r = min(2, canvas.width / len / 5);
            pt.t = 0;
            const increasing = len < canvas.width / 10 && i++ < 8;
            const dir = increasing ? 0.1 : -0.1;
            if (increasing) {
              r *= 1.5;
            }
            pt.r = r;
            pt.len = max(0, min(pt.len + dir, 1));
            paintPt(pt);
          });
        },
      };
    }

    const spiders = many(2, spawn);

    const handlePointerMove = (e: PointerEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spiders.forEach((spider) => {
        spider.follow(x, y);
      });
    };

    let animationId: number;

    function anim(t: number) {
      if (w !== canvas.width) w = canvas.width = canvas.offsetWidth;
      if (h !== canvas.height) h = canvas.height = canvas.offsetHeight;

      // Sage green background instead of black
      ctx.fillStyle = '#5a6f5f';
      drawCircle(0, 0, w * 10);
      
      // Light sage for the spider web
      ctx.fillStyle = ctx.strokeStyle = '#d4c5b9';

      t /= 1000;
      spiders.forEach((spider) => spider.tick(t));

      animationId = requestAnimationFrame(anim);
    }

    function rnd(x = 1, dx = 0) {
      return Math.random() * x + dx;
    }

    function drawCircle(x: number, y: number, r: number) {
      ctx.beginPath();
      ctx.ellipse(x, y, r, r, 0, 0, PI * 2);
      ctx.fill();
    }

    function drawLine(x0: number, y0: number, x1: number, y1: number) {
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      many(100, (i) => {
        i = (i + 1) / 100;
        const x = lerp(x0, x1, i);
        const y = lerp(y0, y1, i);
        const k = noise(x / 5 + x0, y / 5 + y0) * 2;
        ctx.lineTo(x + k, y + k);
      });
      ctx.stroke();
    }

    function many<T>(n: number, f: (i: number) => T): T[] {
      return [...Array(n)].map((_, i) => f(i));
    }

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function noise(x: number, y: number, t = 101) {
      const w0 = sin(0.3 * x + 1.4 * t + 2.0 + 2.5 * sin(0.4 * y + -1.3 * t + 1.0));
      const w1 = sin(0.2 * y + 1.5 * t + 2.8 + 2.3 * sin(0.5 * x + -1.2 * t + 0.5));
      return w0 + w1;
    }

    function pt(x: number, y: number) {
      return { x, y };
    }

    canvas.addEventListener('pointermove', handlePointerMove);
    animationId = requestAnimationFrame(anim);

    return () => {
      canvas.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animationId);
    };
  }, [isInView]);

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden" style={{ perspective: '1500px' }}>
      {/* Spider Cursor Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: 'block' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          style={{
            rotateY: titleRotateY,
            scale: titleScale,
            transformStyle: 'preserve-3d',
          }}
          className="text-center mb-20"
        >
          <h3 className="text-sm tracking-[0.3em] text-[#d4c5b9] mb-4 uppercase">About Us</h3>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            ELEVATE YOUR <span className="italic font-light">EVENTS</span>
          </h2>
          <p className="text-[#d4c5b9] max-w-2xl mx-auto text-lg leading-relaxed mb-6">
            Eventique is your premier destination for seamless event coordination and stunning design.
            With a passionate team dedicated to bringing your vision to life, we handle every aspect of
            your event with care and expertise.
          </p>
          <div className="mt-8 pt-8 border-t border-white/20 max-w-2xl mx-auto">
            <p className="text-[#d4c5b9]/80 text-base leading-relaxed mb-4">
              Founded by <span className="text-white font-semibold">Puskar Koirala</span>, this platform was crafted 
              with modern web technologies including Next.js, React, and advanced animations to create an immersive 
              digital experience. Every element, from the interactive spider web to the scroll-based animations, 
              was designed to showcase the elegance and sophistication that Eventique brings to every event.
            </p>
            <p className="text-[#8b9d8a]/60 text-sm italic">
              Note: This website is a demonstration project created for testing and showcasing advanced web animations 
              and interactive design techniques.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: '1500px' }}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-12 py-4 border-2 border-white text-white text-sm tracking-widest uppercase rounded-sm hover:bg-white hover:text-[#5a6f5f] transition-all duration-300">
            More About Us
          </button>
        </div>
      </div>
    </section>
  );
}
