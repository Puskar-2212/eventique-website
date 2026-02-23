'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-[#f5f3f0]" style={{ perspective: '2000px' }}>
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ filter: `blur(${blur}px)` }}
      >
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute top-20 left-20 w-96 h-96 rounded-full bg-[#5a6f5f] blur-3xl"
        />
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[#8b9d8a] blur-3xl"
        />
      </motion.div>

      <motion.div 
        style={{
          rotateX,
          scale,
          opacity,
          y,
          transformStyle: 'preserve-3d',
        }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
          style={{ transform: 'translateZ(50px)' }}
        >
          <h1 className="text-7xl md:text-8xl font-bold text-[#2d2d2d] mb-4">
            EVENT PLANNING
          </h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-6xl md:text-7xl font-light italic text-[#5a6f5f]"
          >
            & DESIGN
          </motion.h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-lg md:text-xl text-[#6b6b6b] max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ transform: 'translateZ(30px)' }}
        >
          Eventique is your premier destination for seamless event coordination and stunning design.
          With a passionate team dedicated to bringing your vision to life, we handle every aspect of
          your event with care and expertise.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          whileHover={{ scale: 1.05, translateZ: 20 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 bg-[#5a6f5f] text-white text-sm tracking-widest uppercase rounded-sm hover:bg-[#4a5f4f] transition-colors duration-300"
          style={{ transform: 'translateZ(40px)' }}
        >
          Inquire Now
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-[#5a6f5f] rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-[#5a6f5f] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
