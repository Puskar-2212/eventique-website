'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Text3DProps {
  children: React.ReactNode;
  className?: string;
}

export default function Text3D({ children, className = '' }: Text3DProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 5;
    const y = (e.clientY / window.innerHeight - 0.5) * 5;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      style={{
        transform: `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
        textShadow: `
          ${mousePosition.x * 0.5}px ${mousePosition.y * 0.5}px 10px rgba(90, 111, 95, 0.3)
        `,
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
