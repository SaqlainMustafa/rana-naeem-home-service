'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { contactInfo } from '@/data/services';

export default function ContactHighlights() {
  const contactItems = [
    {
      icon: Phone,
      title: 'Call Us Now',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      icon: Clock,
      title: '24/7 Service',
      value: 'Emergency Available',
      href: `tel:${contactInfo.phone}`,
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: contactInfo.address,
      href: '#',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item, index) => {
            const IconComponent = item.icon;
            
            return (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group block"
              >
                <div className="bg-gray-50 hover:bg-gray-100 rounded-2xl p-8 text-center transition-all duration-300 group-hover:shadow-lg h-full">
                  {/* Icon */}
                  <div className={`${item.color} ${item.hoverColor} transition-colors duration-300 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Emergency contact banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Emergency Service Available</h3>
            <p className="text-red-100 mb-6">
              Need immediate assistance? We provide 24/7 emergency services for urgent repairs.
            </p>
            <a 
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center space-x-2 bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              <Phone size={20} />
              <span>Call Emergency: {contactInfo.phone}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
