'use client';

import { motion } from 'framer-motion';
import { Eye, Target, Award, Users, Clock, Shield } from 'lucide-react';

export default function VisionMission() {
  const visionMissionData = {
    vision: {
      title: 'Our Vision',
      description: 'To be the leading technical services provider in the UAE, setting the standard for excellence, innovation, and customer satisfaction in the maintenance and construction industry.',
      icon: Eye,
      color: 'bg-blue-500'
    },
    mission: {
      title: 'Our Mission',
      description: 'To deliver exceptional technical services with uncompromising quality, using cutting-edge technology and skilled professionals to exceed customer expectations and build lasting relationships.',
      icon: Target,
      color: 'bg-green-500'
    },
    goals: {
      title: 'Our Goals',
      description: 'To continuously improve our services, expand our capabilities, and maintain the highest standards of safety, quality, and customer satisfaction.',
      icon: Award,
      color: 'bg-purple-500'
    }
  };

  const values = [
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in all our services',
      icon: Shield
    },
    {
      title: 'Customer First',
      description: 'Your satisfaction is our top priority',
      icon: Users
    },
    {
      title: 'Timely Service',
      description: 'We deliver on time, every time',
      icon: Clock
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            Our Vision, Mission & Goals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to excellence and driven by our vision to provide 
            the best technical services in the UAE.
          </p>
        </motion.div>

        {/* Vision, Mission, Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {Object.entries(visionMissionData).map(([key, data], index) => {
            const IconComponent = data.icon;
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center">
                  <div className={`${data.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {data.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {data.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Our Core Values
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent size={40} className="text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-blue-600 rounded-2xl p-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Emergency Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
