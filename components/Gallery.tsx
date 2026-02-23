'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const galleryItems = [
  {
    id: 1,
    title: 'Elegant Garden Wedding',
    category: 'Wedding',
    image: '/images/int1.jpg',
  },
  {
    id: 2,
    title: 'Luxury Corporate Gala',
    category: 'Corporate Event',
    image: '/images/int2.jpeg',
  },
  {
    id: 3,
    title: 'Intimate Baby Shower',
    category: 'Baby Shower',
    image: '/images/int3.jpeg',
  },
  {
    id: 4,
    title: 'Destination Beach Wedding',
    category: 'Wedding',
    image: '/images/int4.webp',
  },
  {
    id: 5,
    title: 'Grand Ballroom Reception',
    category: 'Wedding',
    image: '/images/int1.jpg',
  },
  {
    id: 6,
    title: 'Outdoor Celebration',
    category: 'Corporate Event',
    image: '/images/int2.jpeg',
  },
];

function GalleryCard({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [25, 0, -25]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], index % 2 === 0 ? [-15, 0, 15] : [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        scale,
        opacity,
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
      }}
      className="relative h-80 rounded-sm overflow-hidden group cursor-pointer bg-gray-200 shadow-2xl"
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#5a6f5f] via-[#5a6f5f]/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
        <p className="text-xs tracking-widest text-white/80 mb-2 uppercase">{item.category}</p>
        <h4 className="text-2xl font-bold">{item.title}</h4>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const titleRotateX = useTransform(scrollYProgress, [0, 0.3, 0.7], [20, 0, -20]);
  const titleScale = useTransform(scrollYProgress, [0, 0.3, 0.7], [0.8, 1, 0.8]);

  return (
    <section ref={ref} className="py-32 px-6 bg-[#f5f3f0] relative overflow-hidden" style={{ perspective: '1500px' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          style={{
            rotateX: titleRotateX,
            scale: titleScale,
            transformStyle: 'preserve-3d',
          }}
          className="text-center mb-20"
        >
          <h3 className="text-sm tracking-[0.3em] text-[#5a6f5f] mb-4 uppercase">Portfolio</h3>
          <h2 className="text-5xl md:text-6xl font-bold text-[#2d2d2d] mb-6">
            OUR <span className="italic font-light">SIGNATURE EVENTS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1500px' }}>
          {galleryItems.map((item, index) => (
            <GalleryCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
