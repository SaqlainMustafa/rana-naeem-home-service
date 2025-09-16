'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  ArrowRight,
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
import { contactInfo, services } from '@/data/services';

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

interface DynamicHeroProps {
  selectedServiceId?: string;
}

export default function DynamicHero({ selectedServiceId }: DynamicHeroProps) {
  const [currentService, setCurrentService] = useState(services[0]);

  useEffect(() => {
    if (selectedServiceId) {
      const service = services.find(s => s.id === selectedServiceId);
      if (service) {
        setCurrentService(service);
      }
    }
  }, [selectedServiceId]);

  const IconComponent = iconMap[currentService.icon];

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentService.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${currentService.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Service Info */}
            <motion.div
              key={`content-${currentService.id}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white"
            >
              <div className="flex items-center space-x-6 mb-8">
                {IconComponent && (
                  <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center">
                    <IconComponent size={40} className="text-white" />
                  </div>
                )}
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold mb-2">
                    {currentService.name}
                  </h1>
                  <p className="text-xl text-blue-200">
                    {currentService.shortDescription}
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {currentService.description}
              </p>

              {/* Contact highlights */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4 mb-8">
                <h3 className="text-2xl font-semibold text-blue-200">Get In Touch</h3>
                <div className="space-y-3">
                  <a 
                    href={`tel:${contactInfo.phone}`} 
                    className="flex items-center space-x-3 text-lg hover:text-blue-200 transition-colors group"
                  >
                    <div className="bg-green-500 p-2 rounded-lg group-hover:bg-green-400 transition-colors">
                      <Phone size={20} />
                    </div>
                    <span className="font-semibold">{contactInfo.phone}</span>
                  </a>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="flex items-center space-x-3 text-lg hover:text-blue-200 transition-colors group"
                  >
                    <div className="bg-blue-500 p-2 rounded-lg group-hover:bg-blue-400 transition-colors">
                      <Mail size={20} />
                    </div>
                    <span>{contactInfo.email}</span>
                  </a>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
                <a 
                  href={`/services/${currentService.id}`}
                  className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2 backdrop-blur-sm"
                >
                  <span>Learn More</span>
                  <ArrowRight size={20} />
                </a>
              </div>
            </motion.div>

            {/* Service Features */}
            <motion.div
              key={`features-${currentService.id}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 space-y-6">
                <h3 className="text-2xl font-semibold text-center text-white">What We Offer:</h3>
                <div className="grid grid-cols-1 gap-4">
                  {currentService.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="bg-white/20 rounded-lg p-4 text-center text-sm font-medium text-white"
                    >
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
