import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Package className="h-8 w-8 text-primary-orange" />
              <span className="text-2xl font-bold">Garv Enterprises</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Leading with multiple material brands, we specialize in providing high-quality products .</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary-orange transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-primary-orange transition-colors">Products</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-primary-orange transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products/katashi" className="text-gray-300 hover:text-primary-orange transition-colors">Katashi</Link></li>
              <li><Link to="/products/ralliWolf" className="text-gray-300 hover:text-primary-orange transition-colors">Ralliwolf</Link></li>
              <li><Link to="/products/milestone" className="text-gray-300 hover:text-primary-orange transition-colors">Milestone</Link></li>
              <li><Link to="/products/kovax" className="text-gray-300 hover:text-primary-orange transition-colors">Kovax</Link></li>
              <li><Link to="/products/makita" className="text-gray-300 hover:text-primary-orange transition-colors">Makita</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-orange mt-0.5" />
                <p className="text-gray-300">
                  J1264F RIICO INDUSTRIAL AREA, PHASE 5 BHIWADI, RAJASTHAN 301019
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-orange" />
                <p className="text-gray-300">+91 773-7525-127</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-orange" />
                <p className="text-gray-300">garventerprise@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Garv Enterprises. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-primary-orange text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-primary-orange text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-primary-orange text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;