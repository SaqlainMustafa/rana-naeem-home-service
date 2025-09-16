import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfo, services } from '@/data/services';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">RTS Services</h3>
            <p className="text-gray-300 mb-4">
              Professional technical services for all your maintenance and construction needs. 
              Quality workmanship with reliable service.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin size={16} />
              <span>{contactInfo.address}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.id}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors font-semibold"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-blue-400" />
                <span className="text-gray-300">24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 RTS Services. All rights reserved. | Professional Technical Services
          </p>
        </div>
      </div>
    </footer>
  );
}
