'use client';

import { motion } from 'framer-motion';
import { Phone, MessageSquare, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Contact Us',
      description: 'Reach out to us via phone, email, or our contact form. We\'ll respond within 24 hours.',
      icon: Phone,
      color: 'bg-blue-500',
      details: [
        'Call us at +971 50 157 4612',
        'Email us at njannaeemangel@gmail.com',
        'Fill out our online contact form',
        'We respond within 24 hours'
      ]
    },
    {
      step: '02',
      title: 'Free Consultation',
      description: 'We schedule a free consultation to understand your needs and assess your property.',
      icon: MessageSquare,
      color: 'bg-green-500',
      details: [
        'Schedule a convenient time',
        'Property assessment visit',
        'Detailed needs analysis',
        'Custom solution discussion'
      ]
    },
    {
      step: '03',
      title: 'Get Your Quote',
      description: 'Receive a detailed, transparent quote with no hidden costs or surprises.',
      icon: CheckCircle,
      color: 'bg-purple-500',
      details: [
        'Detailed cost breakdown',
        'Timeline for completion',
        'Materials and labor included',
        'No hidden fees'
      ]
    },
    {
      step: '04',
      title: 'Work Begins',
      description: 'Our skilled professionals start the work with regular updates and quality checks.',
      icon: Wrench,
      color: 'bg-orange-500',
      details: [
        'Professional team deployment',
        'Regular progress updates',
        'Quality control checks',
        'Clean and safe work environment'
      ]
    }
  ];

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
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with our professional technical services is simple. 
            Follow these four easy steps to transform your property.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-12 mb-16 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-2xl p-8 h-full">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Step {step.step}</span>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-lg">
                      {step.description}
                    </p>

                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <motion.li
                          key={detailIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + detailIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-1 flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className={`${step.color} w-64 h-64 rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                      <IconComponent size={80} className="text-white" />
                      
                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
                      <div className="absolute top-1/2 left-4 w-4 h-4 bg-white/20 rounded-full"></div>
                    </div>
                    
                    {/* Step number badge */}
                    <div className="absolute -top-4 -right-4 bg-white border-4 border-gray-100 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-gray-900">{step.step}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today and let&apos;s begin the first step of your project. 
              We're here to make your vision a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+971501574612"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
              <a 
                href="/contact"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>Get Quote</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
