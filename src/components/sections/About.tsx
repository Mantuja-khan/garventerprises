import React from 'react';
import { Target, Eye, Calendar, Users, Factory, Globe, Shield, Award, Clock, Headphones, Leaf, Download, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import about_image from "../../assets/about.png"

// Import product images
import product1 from "../../assets/brands/katashi.png"
import product2 from "../../assets/brands/aipl.png"
import product3 from "../../assets/brands/ralliwolf.png"
import product4 from "../../assets/brands/crc.png"
import product5 from "../../assets/brands/makita.png"
import product6 from "../../assets/brands/uflow.png"
import product7 from "../../assets/brands/milestone.png"
import product8 from "../../assets/brands/kovax_logo.png"
import product9 from "../../assets/brands/bipico.png"

// Import product catalogs (PDF files)
import catalog1 from "../../assets/catalogue/katashi.pdf"
import catalog2 from "../../assets/catalogue/aipl.pdf"
import catalog3 from "../../assets/catalogue/ralliwolf.pdf"
import catalog4 from "../../assets/catalogue/crc_industires.pdf"
import catalog5 from "../../assets/catalogue/makita.pdf"
import catalog6 from "../../assets/catalogue/uflow.pdf"
import catalog7 from "../../assets/catalogue/miles.pdf"
import catalog8 from "../../assets/catalogue/kovax.pdf"
import catalog9 from "../../assets/catalogue/bipico.pdf"


const About: React.FC = () => {
  const whyChooseUsPoints = [
    "Trusted quality - products from top international and Indian brands with guaranteed reliability and performance",
    "14+ Years of industry expertise serving automation and manufacturing industries with specialized knowledge",
    "Fast delivery with efficient logistics ensuring your operations never stop",
    "Sustainable solutions with eco-friendly products and practices",
    "Comprehensive range of industrial tools and pneumatic equipment under one roof",
    "Competitive pricing with flexible payment options for bulk orders",
    "Expert technical support and consultation for product selection",
    "Strong after-sales service and warranty support",
    "Customized solutions tailored to specific industry requirements",
    "Regular stock availability ensuring no production delays",
    "Pan-India delivery network with reliable shipping partners"
  ];

  const products = [
    {
      id: 1,
      name: "KATASHI",
      image: product1,
      catalog: catalog1,
      description: "High-performance pneumatic tools for industrial applications"
    },
    {
      id: 2,
      name: "AIPL ABRO ",
      image: product2,
      catalog: catalog2,
      description: "Heavy-duty drilling solutions for manufacturing"
    },
    {
      id: 3,
      name: "RALLIWOLF",
      image: product3,
      catalog: catalog3,
      description: "Precision grinding tools for metal fabrication"
    },
    {
      id: 4,
      name: "CRC INDUSTRIES",
      image: product4,
      catalog: catalog4,
      description: "Powerful impact tools for assembly operations"
    },
    {
      id: 5,
      name: "MAKITA",
      image: product5,
      catalog: catalog5,
      description: "Reliable compressed air solutions"
    },
    {
      id: 6,
      name: "UFLOW",
      image: product6,
      catalog: catalog6,
      description: "High-pressure hydraulic equipment"
    },
    {
      id: 7,
      name: "MILES ",
      image: product7,
      catalog: catalog7,
      description: "Precision cutting solutions for various materials"
    },
    {
      id: 8,
      name: "KOVAX",
      image: product8,
      catalog: catalog8,
      description: "Professional surface finishing equipment"
    },
    {
      id: 9,
      name: "BIPICO",
      image: product9,
      catalog: catalog9,
      description: "Industrial safety gear and protective equipment"
    },
   
  ];

  const handleDownload = (catalogUrl: string, productName: string) => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = catalogUrl;
    link.download = `${productName.replace(/\s+/g, '_')}_Catalog.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
       
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-primary-dark">
              Yes You Can Trust Us!
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              Garv Enterprises is a trusted name in the world of industrial tool , pneumatic tools, serving businesses with unmatehed quality and reliability since our inception.
              Located at RIICO Industrial Area , Bhiwadi, We are leading distributor and channel partner for top international and indian brands
            </p>

            <p className="text-gray-600 leading-relaxed">
              From automation to supplying industries , we provide tailored procurement industries,
              we provide tailored procurement solutions for every requirement-delivering both products and performance. 
            </p>

         
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={about_image}
              alt="Modern Industrial Solution Provider"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>

        {/* Why Choose Us Section - Updated to Points Format */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              WHY CHOOSE GARV ENTERPRISES?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes us the preferred choice for industrial solutions across India
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyChooseUsPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle className="h-5 w-5 text-primary-orange flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-700 text-sm leading-relaxed group-hover:text-primary-dark transition-colors duration-300">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Product Catalog Section - Updated to Show 4 Cards Per Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              OUR PRODUCT CATALOGS
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download detailed catalogs for our premium industrial tools and equipment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-orange/20 overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative h-40 overflow-hidden bg-white p-4 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  <h4 className="text-base font-bold text-primary-dark text-center group-hover:text-primary-orange transition-colors duration-300 min-h-[48px] flex items-center justify-center">
                    {product.name}
                  </h4>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(product.catalog, product.name)}
                    className="w-full flex items-center justify-center gap-2 bg-primary-orange hover:bg-primary-orange/90 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:shadow-lg text-sm"
                  >
                    <Download className="h-4 w-4" />
                    Catalog
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;