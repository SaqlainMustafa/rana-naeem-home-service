'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight,
  Zap, 
  Wrench, 
  Square, 
  Shield, 
  Box, 
  Palette, 
  Hammer, 
  Layers, 
  Grid3X3, 
  Layout 
} from 'lucide-react';
import { services } from '@/data/services';

// Icon mapping for Lucide React icons
const iconMap: { [key: string]: any } = {
  Zap,
  Wrench,
  Square,
  Shield,
  Box,
  Palette,
  Hammer,
  Layers,
  Grid3X3,
  Layout,
};

interface HeroSliderProps {
  onServiceSelect?: (serviceId: string) => void;
}

export default function HeroSlider({ onServiceSelect }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleServiceClick = (serviceId: string) => {
    if (onServiceSelect) {
      onServiceSelect(serviceId);
    }
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${services[currentSlide].image || '/api/placeholder/1920/1080'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Service Info */}
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white"
            >
              <div className="flex items-center space-x-4 mb-6">
                {iconMap[services[currentSlide].icon] && (
                  <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center">
                    {React.createElement(iconMap[services[currentSlide].icon], {
                      size: 32,
                      className: "text-white"
                    })}
                  </div>
                )}
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold mb-2">
                    {services[currentSlide].name}
                  </h1>
                  <p className="text-xl text-gray-200">
                    {services[currentSlide].shortDescription}
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {services[currentSlide].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleServiceClick(services[currentSlide].id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Learn More
                </button>
                <button
                  onClick={() => handleServiceClick(services[currentSlide].id)}
                  className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors backdrop-blur-sm"
                >
                  Get Quote
                </button>
              </div>
            </motion.div>

            {/* Service Features Preview */}
            <motion.div
              key={`features-${currentSlide}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  What We Offer:
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {services[currentSlide].features.slice(0, 4).map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-3 text-white"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-200">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-colors z-20"
        onMouseEnter={() => setIsAutoPlaying(false)}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-colors z-20"
        onMouseEnter={() => setIsAutoPlaying(false)}
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onMouseEnter={() => setIsAutoPlaying(false)}
          />
        ))}
      </div>

      {/* Service Thumbnails */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
        <div className="container mx-auto">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <button
                  key={service.id}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    index === currentSlide
                      ? 'bg-white/20 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/15 hover:text-white'
                  }`}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                >
                  {IconComponent && (
                    <IconComponent size={20} />
                  )}
                  <span className="text-sm font-medium whitespace-nowrap">
                    {service.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
