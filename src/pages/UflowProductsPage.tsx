import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Package, ArrowRight, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import QuoteModal from '../components/common/QuoteModal';

// Import UFLOW brand logo
import uflowLogo from "../assets/brands/uflow.png"; // Add your UFLOW logo path

// Import product images
import way_wall from "../assets/uflow/3_way_wall.png"
import angle_seat_valve from "../assets/uflow/angle_seat_valve_1.png"
import ball_valve from "../assets/uflow/ball_valve.png"
import butterfly_valve from "../assets/uflow/butterfly.png"
import pneumatic_valve from "../assets/uflow/pneumatic_valve.png"
import poppet_valve from "../assets/uflow/poppet_valve.png"
import plastic_tubing from "../assets/uflow/plastic_tubing.png"
import air_filter from "../assets/uflow/air_filter.png"
import one_touch_fitting from "../assets/uflow/one_touch_fitting.png"
import solenoid_valve from "../assets/uflow/solenoid_valve.png"


const UflowProductsPage: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; image: string } | null>(null);

  const uflowProducts = [
    {
      id: 'pneumatic-valve',
      name: 'PNEUMATIC VALVE',
      description: 'Durable pneumatic valve designed for precise control of compressed air in automation systems.',
      image: pneumatic_valve,
      category: 'services',
      keyPoints: [
        'System Design & Consultation',
        'Installation Support',
        'Maintenance Services',
        'Technical Support'
      ]
    },
    {
      id: 'air-filter',
      name: 'AIR FILTER-PD SERIES',
      description: 'High-performance air filter ensuring clean, dry air for pneumatic systems.',
      image: air_filter,
      category: 'mounting',
      keyPoints: [
        'Multiple Size Options',
        'Corrosion Resistant',
        'Easy Installation',
        'Universal Compatibility'
      ]
    },
    {
      id: 'one-touch-fitting',
      name: 'ONE TOUCH FITTING',
      description: 'Quick-connect one-touch fittings for fast and secure pneumatic connections.',
      image: one_touch_fitting,
      category: 'cylinders',
      keyPoints: [
        'Space Efficient Design',
        'High Force Output',
        'Smooth Operation',
        'Long Service Life'
      ]
    },
    {
      id: 'plastic-tubing',
      name: 'PLASTIC TUBING',
      description: 'Flexible and durable plastic tubing for smooth air and fluid transfer.',
      image: plastic_tubing,
      category: 'filtration',
      keyPoints: [
        'High Filtration Efficiency',
        'Auto Drain Function',
        'Pressure Gauge Included',
        'Easy Maintenance'
      ]
    },
    {
      id: 'poppet-valve',
      name: 'POPPET VALVE',
      description: 'Compact poppet valve for quick and reliable air control.',
      image: poppet_valve,
      category: 'regulation',
      keyPoints: [
        'Precise Pressure Control',
        'Stable Output',
        'Built-in Gauge',
        'Reliable Performance'
      ]
    },
    {
      id: 'solenoid-valve',
      name: 'SOLENOID VALVE',
      description: 'Electrically controlled solenoid valve for precise automation control.',
      image: solenoid_valve,
      category: 'lubrication',
      keyPoints: [
        'Automatic Lubrication',
        'Adjustable Flow Rate',
        'Transparent Bowl',
        'Component Protection'
      ]
    },
    {
      id: 'angle-seat-valve',
      name: 'ANGLE SEAT VALVE',
      description: 'Stainless steel angle seat valve for high-pressure and high-temperature media.',
      image: angle_seat_valve,
      category: 'regulation',
      keyPoints: [
        'High Pressure Rating',
        'Robust Construction',
        'Safety Relief Valve',
        'Industrial Grade'
      ]
    },
    {
      id: '3-way-control-valve',
      name: '3 WAY CONTROL VALVE (NC / NO)',
      description: 'Multi-port 3-way control valve for directional air and fluid regulation.',
      image: way_wall,
      category: 'fittings',
      keyPoints: [
        'Quick Connect System',
        'Leak Proof Design',
        'Various Sizes Available',
        'Easy Installation'
      ]
    },
    {
      id: 'ball-valve',
      name: 'BALL VALVE',
      description: 'Heavy-duty ball valve for smooth and full-flow control.',
      image: ball_valve,
      category: 'tubing',
      keyPoints: [
        'Flexible Material',
        'Chemical Resistant',
        'Multiple Colors',
        'Durable Construction'
      ]
    },
    {
      id: 'butterfly-valve',
      name: 'BUTTERFLY VALVE',
      description: 'Lightweight butterfly valve for efficient flow regulation in pipelines.',
      image: butterfly_valve,
      category: 'valves',
      keyPoints: [
        'Dual Input Capability',
        'Automatic Selection',
        'Compact Design',
        'Maintenance Free'
      ]
    }
  ];

  const handleQuoteClick = (product: typeof uflowProducts[0]) => {
    setSelectedProduct({ name: product.name, image: product.image });
    setIsQuoteModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>UFLOW Products - Advanced Pneumatic Solutions | Garv Enterprises</title>
        <meta name="description" content="Explore UFLOW's complete range of pneumatic solutions including cylinders, regulators, filters, and automation components for industrial applications." />
        <meta name="keywords" content="UFLOW, pneumatic solutions, air cylinders, pressure regulators, industrial automation, Garv Enterprises" />
        <link rel="canonical" href="https://garventerprises.in/uflow-products" />
      </Helmet>

   <div className="pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-20">
  <div className="container mx-auto px-3 sm:px-4">

          {/* Brand Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-3 md:mb-4">
                <Package className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary-orange mr-2 md:mr-3" />
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-dark">
                  UFLOW
                </h1>
              </div>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Advanced pneumatic solutions for industrial automation and control systems. Precision-engineered components for reliable performance in demanding applications including valves, fittings, filters, and air preparation equipment.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-primary-orange text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded font-medium text-xs sm:text-sm md:text-base text-center hover:bg-opacity-90 transition-all"
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
                src={uflowLogo}
                alt="UFLOW Industrial Pneumatic Products"
                className="w-full h-40 sm:h-48 md:h-64 lg:h-80 object-contain rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {uflowProducts.map((product, index) => (
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
                    alt={`${product.name} - UFLOW`}
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
                      to={`/uflow-products/${product.id}`}
                      className="flex-1 bg-primary-orange text-white px-1.5 sm:px-2 md:px-3 py-1.5 sm:py-1.5 md:py-2 rounded text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-medium text-center flex items-center justify-center hover:bg-opacity-90 transition-all"
                    >
                      <span>View</span>
                      <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 ml-0.5 sm:ml-1" />
                    </Link>
                    <button
                      onClick={() => handleQuoteClick(product)}
                      className="flex-1 border border-gray-300 text-gray-600 px-1.5 sm:px-2 md:px-3 py-1.5 sm:py-1.5 md:py-2 rounded text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-medium text-center hover:border-primary-orange hover:text-primary-orange transition-all"
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
        productCategory="UFLOW"
        productImage={selectedProduct?.image}
      />
    </>
  );
};

export default UflowProductsPage;