import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight, Package, Shield, Truck, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import QuoteModal from '../components/common/QuoteModal';
import katashi from "../assets/brands/katashi.png";
import aipl from "../assets/brands/aipl.png";
import ralliwolf from "../assets/brands/ralliwolf.png";
import crc from "../assets/brands/crc.png";
import makita from "../assets/brands/makita.png";
import uflow from "../assets/brands/uflow.png";
import home_image from "../assets/brands/home_image.png"

const HomePage: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = React.useState(false);

  const featuredBrands = [
    {
      name: 'KATASHI',
      description: 'affordable pneumatic and electric tools for industrial applications, including impact wrenches, screwdrivers, drills, grinders, and hammers',
      image: katashi,
      link: '/products/katashi',
    },
    {
      name: 'UFLOW',
      description: 'Advanced pneumatic solutions for industrial automation and control systems with precision engineering',
      image: uflow,
      link: '/uflow-products',
    },
    {
      name: 'CRC INDUSTRIES',
      description: 'A service offered to CRC end-users and distributors as a means to automate the task of updating Technical Data',
      image: crc,
      link: '/products/crc_industries',
    },
    {
      name: 'RALLI WOLF',
      description: 'Power Tools I Welding Equipment I Air Tools I Motors I Farm Equipment ',
      image: ralliwolf,
      link: '/products/ralliWolf',
    },
    {
      name: 'AIPL ABRO',
      description: 'Advanced pneumatic solutions for industrial automation and control systems',
      image: aipl,
      link: '/products/aiplabro',
    },
    {
      name: 'MAKITA',
      description: 'All type of industrial tools like Grinder , Drill and safety jackets also .',
      image: makita,
      link: '/products/makita',
    },
    {
      name: 'MAKITA',
      description: 'Protective packaging solutions for electronics and fragile items',
      image: 'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/products/mankita',
    },
  ];
  

  return (
    <>
      <Helmet>
        <title>Garv Enterprises - Trusted Industrial Tools Supplier</title>
        <meta
          name="description"
          content="Garv Enterprises is a leading industrial tools and equipment supplier in India. Offering a wide range of hand tools, power tools, and precision instruments trusted by industries nationwide."
        />
        <meta
          name="keywords"
          content="industrial tools supplier India, buy hand tools online, power tools manufacturer, precision instruments, industrial hardware supplier, Garv Enterprises tools"
        />
        <meta name="author" content="Garv Enterprises" />

        {/* Open Graph */}
        <meta property="og:title" content="Garv Enterprises - Trusted Industrial Tools Supplier" />
        <meta
          property="og:description"
          content="Garv Enterprises offers a complete range of industrial tools, hand tools, and machinery accessories with trusted quality and performance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://garventerprises.co.in" />
        <meta property="og:image" content="https://garventerprises.co.in/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Garv Enterprises - Trusted Industrial Tools Supplier" />
        <meta
          name="twitter:description"
          content="Buy high-quality industrial tools, equipment, and accessories from Garv Enterprises — India's trusted name in industrial solutions."
        />
        <meta name="twitter:image" content="https://garventerprises.co.in/twitter-image.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://garventerprises.co.in" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Garv Enterprises",
            "url": "https://garventerprises.co.in",
            "logo": "https://garventerprises.co.in/logo.png",
            "description":
              "Garv Enterprises is a leading Indian supplier of industrial tools, hand tools, power tools, and machinery accessories trusted by professionals and industries.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Industrial Area, Sector 25",
              "addressLocality": "Gurgaon",
              "addressRegion": "Haryana",
              "postalCode": "122001",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-98765-43210",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://www.facebook.com/garventerprises",
              "https://www.linkedin.com/company/garventerprises"
            ]
          })}
        </script>
      </Helmet>


      {/* Hero Section with Wave Design */}
     <section className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
  {/* Wave Background */}
  <div className="absolute inset-0">
    <svg 
      className="absolute w-full h-full" 
      viewBox="0 0 1440 800" 
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#FF6B6B', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#A855F7', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#7C3AED', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Top Wave - Orange to Purple gradient */}
      <path 
        fill="url(#gradient1)" 
        d="M0,400 C300,320 450,350 750,280 C1050,220 1250,260 1440,200 L1440,0 L0,0 Z"
        opacity="0.9"
      />

      {/* Second Wave - Purple */}
      <path 
        fill="#A855F7" 
        d="M0,520 C300,440 500,480 850,420 C1200,360 1350,400 1440,340 L1440,0 L0,0 Z"
        opacity="0.7"
      />
      
      {/* Bottom decorative wave - Light purple */}
      <path 
        fill="#DDD6FE" 
        d="M0,800 C360,720 600,760 960,740 C1320,720 1400,780 1440,760 L1440,800 L0,800 Z"
        opacity="0.5"
      />
    </svg>
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      {/* Left Content - 40% */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4 sm:space-y-6 lg:col-span-5 relative pt-24 sm:pt-32 lg:pt-0"
      >
        {/* Mobile Image - Top Right Corner */}
        <div className="lg:hidden absolute -top-16 right-2 sm:-top-8 sm:right-4 w-64 sm:w-80 z-20">
          <img 
            src={home_image}
            alt="Industrial teamwork illustration"
            className="w-full h-auto drop-shadow-lg opacity-80"
          />
        </div>

        <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
          GARV
          <br />
          <span className="text-orange-500">ENTERPRISES</span>
        </h1>
        <h4>          
<span className="text-base sm:text-lg md:text-xl">Yes You Can Trust Us!</span>
</h4>
        
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-xl">
          We are a professionally organized trading company based in Bhiwadi and Alwar in operation since
          last 14+ Years. Being a team of dedicated technically qualified personnel our focus is on Customer
          Satisfaction
        </p>

        <div className="flex flex-row gap-2 sm:gap-4 pt-2 sm:pt-4">
          <Link 
            to="/products"
            className="bg-orange-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg text-sm sm:text-base font-medium flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg"
          >
            <span className="hidden sm:inline">Explore Products</span>
            <span className="sm:hidden">Products</span>
            <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
          
          <Link 
            to="/contact"
            className="border-2 border-gray-800 text-gray-800 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg text-sm sm:text-base font-medium text-center hover:bg-gray-800 hover:text-white transition-colors"
          >
            <span className="hidden sm:inline">Get Custom Quote</span>
            <span className="sm:hidden">Quote</span>
          </Link>
        </div>

        {/* Trust Indicators */}
       
      </motion.div>

      {/* Right Image Area - 60% - Hidden on mobile, visible on large screens */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:flex items-center justify-center lg:col-span-7"
      >
        <div className="relative w-full max-w-4xl -mt-14">
          <img 
            src={home_image}
            alt="Industrial teamwork illustration"
            className="w-full h-auto drop-shadow-2xl"
          />
          
          {/* Decorative gear elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-16 h-16 opacity-30"
          >
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="#7C3AED" opacity="0.5" />
              <circle cx="50" cy="50" r="25" fill="white" />
            </svg>
          </motion.div>
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-10 w-20 h-20 opacity-20"
          >
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="35" fill="#FF6B6B" opacity="0.6" />
              <circle cx="50" cy="50" r="20" fill="white" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

    </div>
  </div>
</section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Our Brands
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of specialized brands, each designed to meet specific industry needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredBrands.slice(0, 6).map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-36 object-contain bg-gray-50 p-4"
                  />
                  <div className="absolute top-2 right-2 bg-primary-blue text-white px-2 py-1 rounded text-xs font-medium flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    {brand.productCount} Products
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold text-primary-dark mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {brand.description}
                  </p>
                  <Link 
                    to={brand.link}
                    className="inline-flex items-center text-primary-blue font-medium text-sm"
                  >
                    View Products
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
};

export default HomePage;