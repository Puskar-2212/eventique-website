"use client"

import { useEffect, useState } from "react"

export function ScrollingPortfolio() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const animationProgress = Math.min(scrollY / 500, 1)
  const expandRadius = animationProgress * 300

  // Using your uploaded event images
  const portfolioImages = [
    "/images/int1.jpg",
    "/images/int2.jpeg",
    "/images/int3.jpeg",
    "/images/int4.webp",
    "/images/int1.jpg",
    "/images/int2.jpeg",
    "/images/int3.jpeg",
    "/images/int4.webp",
  ]

  return (
    <div className="min-h-[200vh] bg-[#f5f3f0]">
      <div className="h-screen flex items-center justify-center p-8 sticky top-0">
        <div className="relative">
          <div
            className={`w-[600px] h-[600px] rounded-full flex items-center justify-center transition-all duration-500 ${
              scrollY > 300 ? "border-2 border-[#8b9d8a]" : ""
            }`}
          >
            <div
              className={`w-[500px] h-[500px] rounded-full flex items-center justify-center relative transition-all duration-500 ${
                scrollY > 100 ? "border-2 border-[#5a6f5f]/30" : ""
              }`}
            >
              <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#5a6f5f] via-[#8b9d8a] to-[#5a6f5f] p-0.5 flex items-center justify-center relative">
                <div className="w-full h-full rounded-full bg-[#f5f3f0] flex items-center justify-center relative">
                  {portfolioImages.map((img, index) => {
                    const angle = (index * 2 * Math.PI) / portfolioImages.length
                    return (
                      <div
                        key={index}
                        className="absolute w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 ease-out z-0"
                        style={{
                          transform: `translate(${expandRadius * Math.cos(angle)}px, ${
                            expandRadius * Math.sin(angle)
                          }px)`,
                        }}
                      >
                        <img
                          src={img}
                          alt={`Event ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )
                  })}

                  <div
                    className={`flex flex-col items-center justify-center relative z-20 transition-opacity duration-500 ${
                      scrollY > 250 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h1 className="text-4xl font-bold text-[#2d2d2d] text-center mb-2">
                      Creating
                    </h1>
                    <h1 className="text-4xl font-bold text-[#2d2d2d] text-center mb-4">
                      Unforgettable Moments
                    </h1>
                    <p className="text-[#5a6f5f] text-center max-w-xs">
                      From intimate gatherings to grand celebrations, we bring your vision to life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
