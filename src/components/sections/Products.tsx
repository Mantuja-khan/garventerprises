import React, { useState } from 'react';
import { Package, Shield, Recycle, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const productCategories = [
    { id: 'all', name: 'All Products', icon: Package },
    { id: 'plastic', name: 'Plastic Packaging', icon: Package },
    { id: 'paper', name: 'Paper Packaging', icon: Package },
    { id: 'industrial', name: 'Industrial Solutions', icon: Package }
  ];
  const products = [
    {
      id: 1,
      category: 'plastic',
      name: 'Premium Polybags',
      image: 'https://images.pexels.com/photos/4226922/pexels-photo-4226922.jpeg?auto=compress&cs=tinysrgb&w=400',
      popular: true
    },
    {
      id: 2,
      category: 'plastic',
      name: 'Air Bubble Wraps',
      description: 'Superior protection bubble wrap for fragile items. Excellent cushioning properties.',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Anti-Static Options', 'Perforated Sheets', 'Custom Printing']
    },
    {
      id: 3,
      category: 'paper',
      name: 'Corrugated Boxes',
      description: 'Sturdy corrugated boxes for shipping and storage. Eco-friendly and recyclable.',
      image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Various Strengths', 'Custom Printing', 'Eco-Friendly'],
      popular: true
    },
    {
      id: 4,
      category: 'paper',
      name: 'Paper Bags',
      description: 'Sustainable paper bags for retail and shopping. Biodegradable and brand-friendly.',
      image: 'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Biodegradable', 'Custom Branding', 'Various Sizes']
    },
    {
      id: 5,
      category: 'industrial',
      name: 'FIBC Bulk Bags',
      description: 'Heavy-duty bulk bags for industrial applications. Safe for handling large quantities.',
      image: 'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['High Load Capacity', 'UV Resistant', 'Food Grade Options']
    },
    {
      id: 6,
      category: 'industrial',

      name: 'Stretch Films',
      description: 'Industrial stretch films for pallet wrapping and cargo protection.',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['High Strength', 'Cling Properties', 'Bulk Supply'],
      popular: true
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Our Premium Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of packaging materials designed to meet all your business needs
          </p>
        </motion.div>
        {/* Category Filter */}
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {productCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded font-medium ${
                  activeCategory === category.id
                    ? 'bg-primary-orange text-white'
                    : 'bg-white text-gray-600'
                }`}
              >
                <Icon className="h-5 w-5 mr-2" />
                {category.name}
              </button>
            );
          })}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={`${product.name} - Premium packaging material manufacturer`}
                  className="w-full h-48 object-cover"
                />
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-primary-orange text-white px-3 py-1 rounded text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Popular
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-dark mb-2">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <Shield className="h-4 w-4 text-primary-orange mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-primary-orange text-white px-4 py-2 rounded font-medium flex items-center justify-center">
                    Get Quote
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-600 px-4 py-2 rounded font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary-dark rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Custom Industry tool?
            </h3>
           
            <button className="bg-primary-orange text-white px-8 py-3 rounded font-medium">
              Contact Our Experts
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;