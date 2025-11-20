import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Package, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import katashi from "../assets/brands/katashi.png";
import aipl from "../assets/brands/aipl.png";
import ralliwolf from "../assets/brands/ralliwolf.png";
import crc from "../assets/brands/crc.png";
import makita from "../assets/brands/makita.png";
import uflow from "../assets/brands/uflow.png";
import milestone from "../assets/brands/milestone.png";
import kovax_logo from "../assets/brands/kovax_logo.png";
import bipico from "../assets/brands/bipico.png";

const ProductsPage: React.FC = () => {
  const brands = [
    {
      name: 'KATASHI',
      slug: 'katashi',
      image: katashi,
      isDirectRoute: false,
    },
    {
      name: 'MILES',
      slug: 'miles',
      image: milestone,
      isDirectRoute: false,
    },
    {
      name: 'KOVAX',
      slug: 'kovax',
      image: kovax_logo,
      isDirectRoute: false,
    },
    {
      name: 'UFLOW',
      slug: 'uflow-products',
      image: uflow,
      isDirectRoute: true,
    },
    {
      name: 'RALLI WOLF',
      slug: 'ralliWolf',
      image: ralliwolf,
      isDirectRoute: false,
    },
    {
      name: 'MAKITA',
      slug: 'makita',
      image: makita,
      isDirectRoute: false,
    },
    {
      name: 'BIPICO',
      slug: 'bipico-products',
      image: bipico,
      isDirectRoute: true,
    },
    {
      name: 'CRC INDUSTRIES',
      slug: 'crc_industries',
      image: crc,
      isDirectRoute: false,
    },
    {
      name: 'AIPL ABRO',
      slug: 'aiplabro',
      image: aipl,
      isDirectRoute: false,
    }
  ];

  return (
    <>
      <Helmet>
        <title>Garv Enterprises - You can Trust US</title>
        <title>Industrial tool -| Garv Enterprises</title>
        <meta name="description" content="Buy premium industrial tools in your favourite brand like makita , ralliwolf , uflow etc. " />
        <meta name="keywords" content="buy polybags online, packaging materials India, bubble wrap manufacturer, corrugated boxes supplier, industrial packaging solutions, custom packaging materials" />
        <link rel="canonical" href="https://garventerprises.in/products" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Premium Packaging Products - Buy Online | Garv Enterprises" />
        <meta property="og:description" content="Buy premium industrial tools in your favourite brand like makita , ralliwolf , uflow etc." />
        <meta property="og:url" content="https://garventerprises.co.in/products" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Industrial Tools",
            "description": "Premium industrial tools including lubricants, adhesives, and maintenance products.",
            "url": "https://garventerprises.in/products",
            "provider": {
              "@type": "Organization",
              "name": "Garv Enterprises"
            }
          })}
        </script>
      </Helmet>

      <div className="pt-20">
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-3 sm:px-4">
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-16"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark mb-3 md:mb-4">
                OUR PRODUCT BRANDS
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
                Choose from our specialized brands, each designed to meet specific industrial tools
              </p>
            </motion.div>

            {/* Brands Grid - 2 columns on mobile, 2 on small tablets, 3 on medium, 4 on large */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg md:rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:border-primary-orange transition-all duration-300 transform hover:-translate-y-2 h-52 sm:h-64 md:h-80"
                >
                  {/* Brand Image */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 h-28 sm:h-36 md:h-48">
                    <img 
                      src={brand.image}
                      alt={`${brand.name} packaging products`}
                      className="w-full h-full object-contain p-2 sm:p-3 md:p-4 hover:scale-105 transition-transform duration-300"
                    />
                    {brand.productCount && (
                      <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-gradient-to-r from-primary-orange to-orange-600 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium shadow-lg">
                        {brand.productCount} Products
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Brand Content */}
                  <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-b from-white to-gray-50/50 h-24 sm:h-28 md:h-32 flex flex-col justify-between">
                    <div className="flex items-center mb-2 md:mb-4">
                      <div className="p-1 md:p-2 bg-primary-orange/10 rounded-lg mr-2 md:mr-3">
                        <Package className="h-3 w-3 md:h-4 md:w-4 text-primary-orange" />
                      </div>
                      <h3 className="text-xs sm:text-sm md:text-lg font-bold text-primary-dark leading-tight">
                        {brand.name}
                      </h3>
                    </div>

                    {/* CTA Button */}
                    <Link 
                      to={brand.isDirectRoute ? `/${brand.slug}` : `/products/${brand.slug}`}
                      className="w-full bg-gradient-to-r from-primary-orange to-orange-600 text-white py-1.5 sm:py-2 px-2 sm:px-3 md:px-4 rounded-md md:rounded-lg font-medium flex items-center justify-center hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-xs md:text-sm"
                    >
                      <span className="hidden sm:inline">View Products</span>
                      <span className="inline sm:hidden">View</span>
                      <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 ml-1 sm:ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-8 md:mt-16"
            >
              
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductsPage;