import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="pt-20 min-h-screen flex items-center relative"
      style={{
        background: 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 50%, #F3F4F6 100%)'
      }}
    >
      {/* Mobile Background Image */}
      <div className="absolute inset-0 lg:hidden">
        <img 
          src="https://images.pexels.com/photos/4226922/pexels-photo-4226922.jpeg?auto=compress&cs=tinysrgb&w=800" 
          alt="Premium packaging materials and industrial packaging solutions"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-white/60"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 relative z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark leading-tight">
              Premium
              <span className="text-primary-orange"> Packaging</span>
              <br />Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              India's trusted packaging material manufacturer. From polybags to industrial packaging solutions, 
              we deliver quality products that protect your goods and enhance your brand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('products')}
                className="bg-primary-orange text-white px-8 py-4 rounded font-medium flex items-center justify-center"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-primary-dark text-primary-dark px-8 py-4 rounded font-medium"
              >
                Get Custom Quote
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <ShieldCheck className="h-8 w-8 text-primary-orange mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-600">ISO Certified</p>
              </div>
              <div className="text-center">
                <Truck className="h-8 w-8 text-primary-orange mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-600">Fast Delivery</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-primary-orange mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-600">14+ Years Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
         <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Desktop Image */}
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/4226922/pexels-photo-4226922.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Premium packaging materials and industrial packaging solutions"
                className="rounded-2xl shadow-2xl w-full h-[600px] lg:h-[700px] object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-orange/10 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-blue/10 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;