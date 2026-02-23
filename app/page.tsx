'use client';

import Navbar from '@/components/Navbar';
import EventiqueScrollHero from '@/components/EventiqueScrollHero';
import ServicesWithSpider from '@/components/ServicesWithSpider';
import GalleryWithAnimation from '@/components/GalleryWithAnimation';
import ContactWithShader from '@/components/ContactWithShader';
import ScrollProgress from '@/components/ScrollProgress';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="overflow-x-hidden relative bg-gradient-to-b from-[#2d2d2d] via-[#3d3d3d] to-[#2d2d2d]">
      {/* Demo Notice Badge */}
      <div className="fixed top-20 right-4 z-50 bg-[#5a6f5f]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs tracking-wider shadow-lg">
        DEMO PROJECT
      </div>

      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          unoptimized
          onError={(e) => {
            // Hide image if it fails to load
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d2d2d]/60 via-[#2d2d2d]/40 to-[#2d2d2d]/60" />
      </div>

      <ScrollProgress />
      <div className="relative z-10">
        <Navbar />
        <EventiqueScrollHero />
        <ServicesWithSpider />
        <GalleryWithAnimation />
        <ContactWithShader />
      </div>
    </main>
  );
}
