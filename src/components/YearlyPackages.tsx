'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Clock, Shield, X, Phone, Mail } from 'lucide-react';
import { contactInfo } from '@/data/services';

export default function YearlyPackages() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  const packages = [
    {
      name: 'Basic Maintenance',
      description: 'Essential maintenance services for small properties',
      features: [
        'Monthly inspection',
        'Basic electrical checks',
        'Plumbing maintenance',
        'Emergency call support',
        'Quarterly reports'
      ],
      popular: false,
      icon: Shield
    },
    {
      name: 'Premium Care',
      description: 'Comprehensive maintenance for medium properties',
      features: [
        'Bi-weekly inspection',
        'Full electrical maintenance',
        'Complete plumbing service',
        '24/7 emergency support',
        'Monthly detailed reports',
        'Priority service booking',
        'Annual deep cleaning'
      ],
      popular: true,
      icon: Star
    },
    {
      name: 'Enterprise Solution',
      description: 'Complete maintenance solution for large properties',
      features: [
        'Weekly inspection',
        'Full property maintenance',
        'All services included',
        '24/7 dedicated support',
        'Weekly detailed reports',
        'Priority booking',
        'Annual deep cleaning',
        'Custom maintenance plans',
        'Dedicated account manager'
      ],
      popular: false,
      icon: Clock
    }
  ];

  const handleChoosePlan = (packageName: string) => {
    setSelectedPackage(packageName);
    setShowContactModal(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Yearly Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect maintenance package for your property. 
            All packages include professional service and peace of mind.
          </p>
        </motion.div>

        {/* Packages grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  pkg.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Package header */}
                  <div className="text-center mb-8">
                    <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent size={32} className="text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {pkg.description}
                    </p>
                    <div className="text-center">
                      <span className="text-lg font-semibold text-blue-600">
                        Contact for Pricing
                      </span>
                    </div>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <Check size={20} className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleChoosePlan(pkg.name)}
                    className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors ${
                      pkg.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Choose Plan
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Need a custom package? Contact us for a personalized quote.
          </p>
          <button 
            onClick={() => handleChoosePlan('Custom Package')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get Custom Quote
          </button>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowContactModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowContactModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Modal content */}
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone size={32} className="text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Interested in {selectedPackage}?
                </h3>
                
                <p className="text-gray-600 mb-8">
                  Contact us now to get a personalized quote and learn more about this package.
                </p>

                {/* Contact options */}
                <div className="space-y-4">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <Phone size={20} />
                    <span>Call: {contactInfo.phone}</span>
                  </a>
                  
                  <a
                    href={`mailto:${contactInfo.email}?subject=Inquiry about ${selectedPackage}`}
                    className="flex items-center justify-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <Mail size={20} />
                    <span>Email Us</span>
                  </a>
                  
                  <a
                    href="/contact"
                    className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Visit Contact Page
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
