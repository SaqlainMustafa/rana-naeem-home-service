'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { contactInfo } from '@/data/services';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Professional
                <span className="block text-blue-200">Technical Services</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Expert maintenance and construction services for all your needs. 
                Quality workmanship with reliable 24/7 service across Dubai and UAE.
              </p>
            </div>

            {/* Contact highlights */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
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
                href="/services"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>Our Services</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-center">Our Services Include:</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Electrical',
                  'Plumbing', 
                  'Tiles',
                  'Glass Fixing',
                  'Aluminium Works',
                  'Painting',
                  'Tabook',
                  'Plaster',
                  'Gypsum',
                  'False Ceiling'
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-white/20 rounded-lg p-3 text-center text-sm font-medium"
                  >
                    {service}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
