'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const titleRotateY = useTransform(scrollYProgress, [0, 0.3, 0.7], [-20, 0, 20]);
  const titleScale = useTransform(scrollYProgress, [0, 0.3, 0.7], [0.7, 1, 0.7]);

  return (
    <section ref={ref} className="py-32 px-6 bg-[#5a6f5f] relative overflow-hidden" style={{ perspective: '1500px' }}>
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
          <p className="text-[#d4c5b9] max-w-2xl mx-auto text-lg leading-relaxed">
            Eventique is your premier destination for seamless event coordination and stunning design.
            With a passionate team dedicated to bringing your vision to life, we handle every aspect of
            your event with care and expertise.
          </p>
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
