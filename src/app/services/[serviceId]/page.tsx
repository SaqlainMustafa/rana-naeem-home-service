'use client';

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  CheckCircle, 
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
import { services, contactInfo } from '@/data/services';
import DynamicHero from '@/components/DynamicHero';

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

interface ServicePageProps {
  params: {
    serviceId: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.id === params.serviceId);

  if (!service) {
    notFound();
  }


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dynamic Hero Section */}
      <div className="relative">
        <DynamicHero selectedServiceId={service.id} />
        {/* Back button overlay */}
        <div className="absolute top-8 left-8 z-20">
          <Link 
            href="/services"
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Services</span>
          </Link>
        </div>
      </div>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About {service.name}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Our {service.name} Services Include:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                    >
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
                  >
                    <div className="bg-green-500 p-2 rounded-lg group-hover:bg-green-600 transition-colors">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Call Us</p>
                      <p className="text-green-600 font-medium">{contactInfo.phone}</p>
                    </div>
                  </a>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <div className="bg-blue-500 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email Us</p>
                      <p className="text-blue-600">{contactInfo.email}</p>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Other Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Other Services
                </h3>
                <div className="space-y-3">
                  {services
                    .filter(s => s.id !== service.id)
                    .slice(0, 5)
                    .map((otherService) => (
                      <Link
                        key={otherService.id}
                        href={`/services/${otherService.id}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                          {otherService.name}
                        </span>
                        <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </Link>
                    ))}
                </div>
                <Link 
                  href="/services"
                  className="block text-center mt-4 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  View All Services
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started with {service.name}?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a free consultation and quote. We provide professional, 
              reliable service with quality workmanship.
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
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors backdrop-blur-sm"
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
