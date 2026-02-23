'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ShaderBackground from '@/components/ui/shader-background';

export default function ContactWithShader() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [25, 0, -25]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 1, 0.5]);

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden min-h-screen flex items-center" style={{ perspective: '1500px' }}>
      {/* Shader Background - Only visible in this section */}
      <div className="absolute inset-0 z-0">
        <ShaderBackground />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <motion.div 
        style={{
          rotateX,
          scale,
          opacity,
          transformStyle: 'preserve-3d',
        }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h3 className="text-sm tracking-[0.3em] text-[#8b9d8a] mb-4 uppercase">Get In Touch</h3>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
          LET'S CREATE <span className="italic font-light">MAGIC TOGETHER</span>
        </h2>
        <p className="text-[#d4c5b9] text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
          Ready to turn your dream event into reality? Contact us today and let our expert team
          craft an unforgettable experience tailored just for you.
        </p>

        <button className="px-16 py-5 bg-[#5a6f5f] text-white text-sm tracking-widest uppercase rounded-sm hover:bg-[#6a7f6f] transition-colors duration-300 shadow-2xl hover:shadow-[0_20px_60px_rgba(90,111,95,0.6)]">
          Start Planning
        </button>

        <div className="mt-20 pt-20 border-t border-white/10">
          <p className="text-[#8b9d8a] text-sm tracking-wider mb-2">
            © 2026 EVENTIQUE. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[#8b9d8a]/60 text-xs tracking-wide">
            Designed & Developed by Puskar Koirala
          </p>
        </div>
      </motion.div>
    </section>
  );
}
