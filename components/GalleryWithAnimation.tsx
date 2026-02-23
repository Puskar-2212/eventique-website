'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function GalleryWithAnimation() {
  const [localScrollY, setLocalScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress within this section
        if (sectionTop < windowHeight && sectionTop > -rect.height) {
          const progress = Math.max(0, windowHeight - sectionTop);
          setLocalScrollY(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Slower animation - requires more scroll to fully expand
  const animationProgress = Math.min(localScrollY / 1000, 1); // Changed from 500 to 1000 for slower animation
  const expandRadius = animationProgress * 350; // Larger radius for bigger spread

  const portfolioImages = [
    { src: '/images/int1.jpg', title: 'Elegant Wedding' },
    { src: '/images/int2.jpeg', title: 'Corporate Gala' },
    { src: '/images/int3.jpeg', title: 'Baby Shower' },
    { src: '/images/int4.webp', title: 'Beach Wedding' },
    { src: '/images/int1.jpg', title: 'Grand Reception' },
    { src: '/images/int2.jpeg', title: 'Outdoor Event' },
    { src: '/images/int3.jpeg', title: 'Intimate Gathering' },
    { src: '/images/int4.webp', title: 'Celebration' },
  ];

  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  return (
    <section 
      ref={sectionRef}
      className="min-h-[200vh] bg-[#f5f3f0] relative overflow-hidden py-20"
    >
      {/* Title Section */}
      <motion.div
        style={{ opacity: titleOpacity, y: titleY }}
        className="text-center mb-10 relative z-30"
      >
        <h3 className="text-sm tracking-[0.3em] text-[#5a6f5f] mb-4 uppercase">Portfolio</h3>
        <h2 className="text-5xl md:text-6xl font-bold text-[#2d2d2d] mb-6">
          OUR <span className="italic font-light">SIGNATURE EVENTS</span>
        </h2>
        <p className="text-[#5a6f5f] text-lg mb-4">Scroll down to explore our work</p>
      </motion.div>

      {/* Sticky Animation Container */}
      <div className="h-screen flex items-center justify-center p-8 sticky top-0">
        <div className="relative">
          <div
            className={`w-[400px] md:w-[600px] lg:w-[700px] h-[400px] md:h-[600px] lg:h-[700px] rounded-full flex items-center justify-center transition-all duration-700 ${
              localScrollY > 600 ? 'border-2 border-[#8b9d8a]' : ''
            }`}
          >
            <div
              className={`w-[350px] md:w-[520px] lg:w-[620px] h-[350px] md:h-[520px] lg:h-[620px] rounded-full flex items-center justify-center relative transition-all duration-700 ${
                localScrollY > 300 ? 'border-2 border-[#5a6f5f]/30' : ''
              }`}
            >
              <div className="w-[300px] md:w-[450px] lg:w-[550px] h-[300px] md:h-[450px] lg:h-[550px] rounded-full bg-gradient-to-r from-[#5a6f5f] via-[#8b9d8a] to-[#5a6f5f] p-0.5 flex items-center justify-center relative">
                <div className="w-full h-full rounded-full bg-[#f5f3f0] flex items-center justify-center relative">
                  {/* Expanding Images */}
                  {portfolioImages.map((item, index) => {
                    const angle = (index * 2 * Math.PI) / portfolioImages.length;
                    return (
                      <div
                        key={index}
                        className="absolute w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-2xl overflow-hidden border-4 border-white shadow-2xl transition-all duration-700 ease-out z-0 hover:scale-110 hover:z-10 hover:shadow-[0_20px_60px_rgba(90,111,95,0.4)]"
                        style={{
                          transform: `translate(${expandRadius * Math.cos(angle)}px, ${
                            expandRadius * Math.sin(angle)
                          }px) scale(${animationProgress > 0.1 ? 1 : 0.8})`,
                          opacity: animationProgress > 0.05 ? 1 : 0.3,
                        }}
                      >
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    );
                  })}

                  {/* Center Text */}
                  <div
                    className={`flex flex-col items-center justify-center relative z-20 transition-all duration-700 px-4`}
                    style={{
                      opacity: animationProgress > 0.7 ? 1 : 0,
                      transform: `scale(${animationProgress > 0.7 ? 1 : 0.8})`,
                    }}
                  >
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2d2d2d] text-center mb-2">
                      Creating
                    </h1>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2d2d2d] text-center mb-4">
                      Unforgettable Moments
                    </h1>
                    <p className="text-[#5a6f5f] text-center max-w-xs text-sm md:text-base">
                      From intimate gatherings to grand celebrations, we bring your vision to life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
