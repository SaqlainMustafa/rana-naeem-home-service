'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { services, contactInfo } from '@/data/services';

// Icon mapping for Lucide React icons
const iconMap: { [key: string]: any } = {
  Zap: require('lucide-react').Zap,
  Wrench: require('lucide-react').Wrench,
  Square: require('lucide-react').Square,
  Shield: require('lucide-react').Shield,
  Box: require('lucide-react').Box,
  Palette: require('lucide-react').Palette,
  Hammer: require('lucide-react').Hammer,
  Layers: require('lucide-react').Layers,
  Grid3X3: require('lucide-react').Grid3X3,
  Layout: require('lucide-react').Layout,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our Professional Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive technical services for all your maintenance and construction needs. 
              Quality workmanship with reliable service across Dubai and UAE.
            </p>
            <a 
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <Phone size={20} />
              <span>Call Now: {contactInfo.phone}</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={`/services/${service.id}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                      {/* Icon */}
                      <div className="bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                        {IconComponent && (
                          <IconComponent 
                            size={40} 
                            className="text-blue-600 group-hover:text-white transition-colors duration-300" 
                          />
                        )}
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features preview */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                          {service.features.length > 3 && (
                            <li className="text-blue-600 font-medium">
                              +{service.features.length - 3} more features
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Learn more link */}
                      <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                        <span>View Details</span>
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today for a free consultation and quote. We're here to help with all your technical service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Call: {contactInfo.phone}</span>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
