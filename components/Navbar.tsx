'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialIcons = [
    { name: 'instagram', icon: Instagram, link: '#' },
    { name: 'facebook', icon: Facebook, link: '#' },
    { name: 'youtube', icon: Youtube, link: '#' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-wider"
        >
          <span className={scrolled ? 'text-[#2d2d2d]' : 'text-[#2d2d2d]'}>EVENTIQUE</span>
          <span className={`text-xs font-normal ml-3 ${scrolled ? 'text-[#5a6f5f]' : 'text-[#5a6f5f]'}`}>
            by Puskar Koirala
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-10">
          {['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'BLOG', 'CONTACT'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className={`text-xs tracking-widest hover:text-[#5a6f5f] transition-colors ${
                scrolled ? 'text-[#2d2d2d]' : 'text-[#2d2d2d]'
              }`}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {socialIcons.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className={`w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer transition-colors ${
                  scrolled 
                    ? 'border-[#5a6f5f] text-[#5a6f5f] hover:bg-[#5a6f5f] hover:text-white' 
                    : 'border-[#5a6f5f] text-[#5a6f5f] hover:bg-[#5a6f5f] hover:text-white'
                }`}
              >
                <Icon size={16} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
