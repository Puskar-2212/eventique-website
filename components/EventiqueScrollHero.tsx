'use client';

import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

export default function EventiqueScrollHero() {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="/images/int1.jpg"
      bgImageSrc="https://images.unsplash.com/photo-1519167758481-83f29da8c2b0?w=1920&q=80"
      title="EVENT PLANNING & DESIGN"
      date="Premium Events"
      scrollToExpand="Scroll to Explore"
      textBlend={true}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8 bg-[#f5f3f0] p-12 rounded-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-6">
          Welcome to <span className="text-[#5a6f5f]">Eventique</span>
        </h2>
        <p className="text-lg md:text-xl text-[#6b6b6b] leading-relaxed">
          Eventique is your premier destination for seamless event coordination and stunning design.
          With a passionate team dedicated to bringing your vision to life, we handle every aspect of
          your event with care and expertise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button className="px-12 py-4 bg-gradient-to-r from-[#5a6f5f] to-[#6a7f6f] hover:from-[#4a5f4f] hover:to-[#5a6f5f] text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-xl">
            Inquire Now
          </button>
          <button className="px-12 py-4 bg-[#5a6f5f]/10 hover:bg-[#5a6f5f]/20 border-2 border-[#5a6f5f] hover:border-[#4a5f4f] text-[#2d2d2d] rounded-full font-semibold text-lg transition-all duration-300">
            View Portfolio
          </button>
        </div>
      </div>
    </ScrollExpandMedia>
  );
}
