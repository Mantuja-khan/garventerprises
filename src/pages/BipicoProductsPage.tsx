import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Disc, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import QuoteModal from '../components/common/QuoteModal';

// Import BIPICO brand logo
import bipicoLogo from "../assets/brands/bipico.png"; // Add your BIPICO logo path

// Import product images
import abrasive_cutting from "../assets/bipico/abrasive_cutting.png";
import aluminium_oxide_flap_disc from "../assets/bipico/aluminium_oxide.png";
import bipico_hole_saw from "../assets/bipico/bipico_hole_saw.png";
import diamond_saw_blade from "../assets/bipico/diamond_saw_blade.png";
import flap_disc from "../assets/bipico/flap_disc.png";
import flap_wheel from "../assets/bipico/flap_wheel.png";
import non_woven_disc from "../assets/bipico/non_woven_disc.png";
import pata from "../assets/bipico/pata.png";
import resin_belt from "../assets/bipico/resin_belt.png";
import tct_circular_cutter from "../assets/bipico/tct_circular_saw.png";

const BipicoProductsPage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; image: string } | null>(null);

  const bipicoProducts = [
    {
      id: 'bipico-hole-saw',
      name: 'BIPICO HOLE SAW',
      image: bipico_hole_saw
    },
    {
      id: 'pata-high-speed-steel',
      name: 'PATA-HIGH SPEED STEEL',
      image: pata
    },
    {
      id: 'abrasives-cutting-grinding-disc',
      name: 'ABRASIVE CUTTING DISC & GRINDING DISC',
      image: abrasive_cutting
    },
    {
      id: 'flap-disc-oxide',
      name: 'FLAP DISC - OXIDE',
      image: flap_disc
    },
    {
      id: 'flap-wheel-shaft',
      name: 'FLAP WHEEL ON SHAFT',
      image: flap_wheel
    },
    {
      id: 'aluminium-velcro-disc',
      name: 'ALUMINIUM OXIDE VELCRO DISC',
      image: aluminium_oxide_flap_disc
    },
    {
      id: 'resin-felt-cloth-belt',
      name: 'RESIN FELT CLOTH BELT',
      image: resin_belt
    },
    {
      id: 'non-woven-polishing-disc',
      name: 'NON WOVEN POLISHING DISC',
      image: non_woven_disc
    },
    {
      id: 'tct-circular-saw',
      name: 'TCT CUTTER FOR WOOD',
      image: tct_circular_cutter
    },
    {
      id: 'diamond-saw-blade',
      name: 'MARBLE CUTTING BLADE',
      image: diamond_saw_blade
    }
  ];

  const handleQuoteClick = (product: typeof bipicoProducts[0]) => {
    setSelectedProduct({ name: product.name, image: product.image });
    setIsQuoteModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>BIPICO Products - Cutting & Grinding Solutions | Garv Enterprises</title>
        <meta name="description" content="Explore BIPICO's complete range of cutting, grinding, and polishing solutions for industrial applications." />
        <meta name="keywords" content="BIPICO, cutting disc, grinding disc, hole saw, abrasive tools, Garv Enterprises" />
        <link rel="canonical" href="https://garventerprises.in/bipico-products" />
      </Helmet>

      <div className="pt-16 sm:pt-20 md:pt-24 pb-12 md:pb-20">
        <div className="container mx-auto px-3 sm:px-4">
          {/* Brand Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-3 md:mb-4">
                <Package className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-orange-600 mr-2 md:mr-3" />
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-dark">
                  BIPICO
                </h1>
              </div>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                High-quality cutting, grinding, and polishing solutions for industrial applications. Professional-grade abrasive tools including cutting discs, grinding wheels, flap discs, hole saws, and specialized blades for metal, wood, and stone working.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-orange-600 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded font-medium text-xs sm:text-sm md:text-base text-center hover:bg-orange-700 transition-all"
                >
                  Get Custom Quote
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={bipicoLogo}
                alt="BIPICO Industrial Abrasive Products"
                className="w-full h-40 sm:h-48 md:h-64 lg:h-80 object-contain rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {bipicoProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={`${product.name} - BIPICO`}
                    className="w-full h-24 sm:h-28 md:h-36 lg:h-48 object-contain p-2 sm:p-2 md:p-3 lg:p-4"
                  />
                </div>

                {/* Product Content */}
                <div className="p-2 sm:p-2.5 md:p-3 lg:p-4">
                  <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-primary-dark mb-2 sm:mb-2.5 md:mb-3 line-clamp-2 min-h-[2rem] sm:min-h-[2.2rem] md:min-h-[2.5rem]">
                    {product.name}
                  </h3>

                  {/* Actions - Horizontal Buttons */}
                  <div className="flex gap-1.5 sm:gap-2 md:gap-2.5">
                    <Link
                      to={`/bipico-products/${product.id}`}
                      className="flex-1 bg-orange-600 text-white px-1.5 sm:px-2 md:px-3 py-1.5 sm:py-1.5 md:py-2 rounded text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-medium text-center flex items-center justify-center hover:bg-orange-700 transition-all"
                    >
                      <span>View</span>
                      <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 ml-0.5 sm:ml-1" />
                    </Link>
                    <button
                      onClick={() => handleQuoteClick(product)}
                      className="flex-1 border border-gray-300 text-gray-600 px-1.5 sm:px-2 md:px-3 py-1.5 sm:py-1.5 md:py-2 rounded text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-medium text-center hover:border-orange-600 hover:text-orange-600 transition-all"
                    >
                      Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => {
          setIsQuoteModalOpen(false);
          setSelectedProduct(null);
        }}
        productName={selectedProduct?.name}
        productCategory="BIPICO"
        productImage={selectedProduct?.image}
      />
    </>
  );
};

export default BipicoProductsPage;