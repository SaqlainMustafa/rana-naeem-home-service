'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { contactInfo } from '@/data/services';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or email service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      description: 'Available 24/7 for emergency services',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      description: 'Get a detailed quote via email',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: contactInfo.address,
      href: '#',
      description: 'Serving Dubai and surrounding areas',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: '24/7 Emergency Service',
      href: `tel:${contactInfo.phone}`,
      description: 'Regular hours: 8 AM - 6 PM',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600'
    }
  ];

  const services = [
    'Electrical Services',
    'Plumbing Services',
    'Tile Installation',
    'Glass Fixing',
    'Aluminium Works',
    'Painting Services',
    'Tabook Services',
    'Plastering Services',
    'Gypsum Works',
    'False Ceiling',
    'Other'
  ];

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
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Ready to start your project? Get in touch with us today for a free consultation and quote.
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

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred way to contact us. We're here to help with all your technical service needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              
              return (
                <motion.a
                  key={method.title}
                  href={method.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                    {/* Icon */}
                    <div className={`${method.color} ${method.hoverColor} transition-colors duration-300 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <IconComponent size={32} className="text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-900 font-medium mb-2">
                      {method.value}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {method.description}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h3>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                    <h4 className="text-2xl font-semibold text-gray-900 mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-gray-600">
                      Thank you for your message. We'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="+971 XX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Needed
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
                    >
                      <Send size={20} />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Why Choose RTS Services?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span>Professional and experienced technicians</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span>24/7 emergency service available</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span>Quality workmanship guaranteed</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span>Competitive pricing and free quotes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span>Fully licensed and insured</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Emergency Service
                </h3>
                <p className="text-gray-300 mb-6">
                  Need immediate assistance? We provide 24/7 emergency services for urgent repairs and maintenance.
                </p>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Phone size={20} />
                  <span>Emergency: {contactInfo.phone}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
