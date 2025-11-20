import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Package, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../../assets/garv_enterprises.png"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileBrand, setActiveMobileBrand] = useState<string | null>(null);
  const location = useLocation();

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state
      setIsScrolled(currentScrollY > 20);
      
      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveMobileBrand(null);
  };

  const brands = {
    'KATASHI': [
      { name: 'IMPACT WRENCHERS', slug: 'impact-wrenches' },
      { name: 'SCREW DRIVERS', slug: 'screw-drivers' },
      { name: 'DRILL', slug: 'drill' },
      { name: 'DIE GRINDERS', slug: 'die-grinders' },
      { name: 'ANGLE GRINDERS', slug: 'angle-grinders' },
      { name: 'AIR HAMMERS', slug: 'air-hammers' },
      { name: 'RIVETERS', slug: 'riveters' },
      { name: 'ELECTRIC SCREW DRIVERS', slug: 'electric-screw-drivers' },
      { name: 'SANDERS & POLISHERS', slug: 'sanders-polishers' },
      { name: 'RATCHETS', slug: 'ratchets' }
    ],
    'CRC INDUSTRIES': [
      { name: 'CLEANER', slug: 'cleaner' },
      { name: 'CLEANER HEAVY DUTY', slug: 'cleaner-heavy-duty' },
      { name: 'CLEANER WATER BASED', slug: 'cleaner-water-based' },
      { name: 'HAND CLEANER', slug: 'hand-cleaner' },
      { name: 'LUBRICANTS', slug: 'lubricant-cutting-fluid' },
      { name: 'LUBRICANT-OILS', slug: 'lubricant-oils' },
      { name: 'LUBRICANT-GREASE', slug: 'lubricant-grease' },
      { name: 'ANTI-CORROSION', slug: 'anti-corrosion' },
      { name: 'LUBRICANT PASTE', slug: 'lubricant-paste' },
    ],
    'RALLI WOLF': [
      { name: 'DRILL', slug: 'compact-drill' },
      { name: 'GRINDER', slug: 'grinder' },
      { name: 'MARBLE CUTTER', slug: 'marble-cutter' },
      { name: 'WOOD WORKING', slug: 'wood-working' },
      { name: 'MAGNETIC CORE DRILL', slug: 'magnetic-core-drill' },
      { name: 'WELDING EQUIPMENT', slug: 'welding-equipment' },
      { name: 'PNEUMATIC TOOLS', slug: 'pneumatic-tools' },
      { name: 'FARM EQUIPMENT', slug: 'farm-equipment' },
      { name: 'INDUSTRIAL TOOLS', slug: 'industrial-tools' },
    ],
    'MAKITA': [
      { name: 'CORDLESS DRIVER DRILL', slug: 'cordless-driver-drill' },
      { name: 'CORDLESS CUTTER', slug: 'cordless-cutter' },
      { name: 'CORDLESS WRENCH', slug: 'cordless-wrench' },
      { name: 'CORDLESS GRINDER', slug: 'cordless-grinder' },
      { name: 'CORDLESS SAW', slug: 'cordless-saw' },
      { name: 'CORDLESS JACKET', slug: 'cordless-jacket' },
      { name: 'CORDLESS SANDER', slug: 'cordless-sander' },
    ],
    'KOVAX': [
      { name: 'MAXCUT', slug: 'maxcut' },
      { name: 'MAXFILM', slug: 'maxfilm' },
      { name: 'TRI-PRO', slug: 'tri-pro' },
      { name: 'BUFLEX', slug: 'buflex' },
      { name: 'FINISHING SYSTEM', slug: 'finishing-system' },
      { name: 'WATER PROOF PAPER', slug: 'water-proof-paper' },
      { name: 'FILLER AND PUTTY', slug: 'filler-and-putty' },
      { name: 'MASKING PRODUCT', slug: 'masking-product' },
      { name: 'COMPONENT AND ACCESSORIES', slug: 'component-and-accessories' }
    ],
    'MILESTONE': [
      { name: 'CUTTER KNIVES', slug: 'cutter-knives' },
      { name: 'MANUAL TOOLS', slug: 'manual-tools' },
      { name: 'PNEUMATIC TOOLS', slug: 'm-pneumatic-tools' },
      { name: 'FASTENERS', slug: 'fasteners' },
      { name: 'STITCH WIRE', slug: 'stitch-wire' },
    ],
    'UFLOW': [
      { name: 'PNEUMATIC VALVE SERIES', slug: 'pneumatic-valve' },
      { name: 'AIR FILTER', slug: 'air-filter' },
      { name: 'ONE TOUCH FITTING', slug: 'one-touch-fitting' },
      { name: 'PLASTIC TUBING', slug: 'plastic-tubing' },
      { name: 'POPPET VALVE', slug: 'poppet-valve' },
      { name: 'SOLENOID VALVE', slug: 'solenoid-valve' },
      { name: 'ANGLE SEAT VALVE', slug: 'angle-seat-valve' },
      { name: '3-WAY CONTROL VALVE', slug: '3-way-control-valve' },
      { name: 'BALL VALVE', slug: 'ball-valve' },
      { name: 'BUTTERFLY VALVE', slug: 'butterfly-valve' },
    ],
    'AIPL ABRO': [
      { name: 'NARROW BELTS', slug: 'narrow-belts' },
      { name: 'WIDE BELTS', slug: 'wide-belts' },
      { name: 'CLOTH ROLL', slug: 'cloth-roll' },
      { name: 'ABRASIVE PAPER', slug: 'abrasive-paper' },
      { name: 'GRIC DISC', slug: 'gric-disc' },
      { name: 'PSA DISC', slug: 'psa-disc' },
    ],
    'BIPICO': [
      { name: 'BIPICO HOLE SAW', slug: 'bipico-hole-saw' },
      { name: 'PATA', slug: 'pata-high-speed-steel' },
      { name: 'ABRASIVE CUTTING DISC', slug: 'abrasives-cutting-grinding-disc' },
      { name: 'FLAP DISC', slug: 'flap-disc-oxide' },
      { name: 'FLAP WHEEL ON SHAFT', slug: 'flap-wheel-shaft' },
      { name: 'ALUMINIUM OXIDE VELCRO DISC', slug: 'aluminium-velcro-disc' },
      { name: 'RESIN METAL CLOTH BELT', slug: 'resin-felt-cloth-belt' },
      { name: 'NON WOVEN POLISHING DISC', slug: 'non-woven-polishing-disc' },
      { name: 'DIAMOND SAW BLADE', slug: 'diamond-saw-blade' },
      { name: 'TCT CIRCULAR SAW', slug: 'tct-circular-saw' },
    ]
  };
  
  // Helper function to generate product link based on brand
  const getProductLink = (brand: string, slug: string) => {
    if (brand === 'UFLOW') {
      return `/uflow-products/${slug}`;
    }
    if (brand === 'BIPICO') {
      return `/bipico-products/${slug}`;
    }
    return `/products/${brand.toLowerCase()}/${slug}`;
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Determine text color based on page and scroll state
  const getTextColor = () => {
    if (isHomePage && !isScrolled) {
      return 'text-white';
    }
    return 'text-primary-dark';
  };

  // Determine background based on page and scroll state
  const getBackground = () => {
    if (isHomePage && !isScrolled) {
      return 'bg-transparent';
    }
    return 'bg-white shadow-lg';
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        getBackground()
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Garv Enterprises Logo"
                className="h-12 w-20 sm:w-28 lg:w-36 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/"
                className={`font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-primary-orange' 
                    : getTextColor()
                }`}
              >
                Home
              </Link>
              
              <Link 
                to="/about"
                className={`font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-primary-orange' 
                    : getTextColor()
                }`}
              >
                About
              </Link>
              
              {/* Products Dropdown */}
              <div 
                className="relative group static"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  to="/products"
                  className={`flex items-center font-medium transition-colors ${
                    isActive('/products') || location.pathname.startsWith('/products/') || location.pathname.startsWith('/uflow-products/') || location.pathname.startsWith('/bipico-products/')
                      ? 'text-primary-orange' 
                      : getTextColor()
                  }`}
                >
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                
                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-[60]"
                    >
                      {Object.entries(brands).map(([brand, items], index) => (
                        <div key={brand} className="relative group/sub">
                          <div className="w-full text-left px-4 py-2 hover:bg-gray-50 text-primary-dark font-medium flex items-center justify-between cursor-pointer">
                            {brand}
                            <ChevronRight className="h-4 w-4" />
                          </div>
                          
                          {/* Sub-dropdown with dynamic positioning */}
                          <div 
                            className={`absolute left-full ml-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-[70] ${
                              index > Object.entries(brands).length / 2 ? 'bottom-0' : 'top-0'
                            }`}
                            style={{
                              maxHeight: '400px',
                              overflowY: 'auto'
                            }}
                          >
                            {items.map((item) => (
                              <Link
                                key={item.slug}
                                to={getProductLink(brand, item.slug)}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/authorized"
                className={`font-medium transition-colors ${
                  isActive('/authorized') 
                    ? 'text-primary-orange' 
                    : getTextColor()
                }`}
              >
                Authorized By
              </Link>
              
              <Link 
                to="/gallery"
                className={`font-medium transition-colors ${
                  isActive('/gallery') 
                    ? 'text-primary-orange' 
                    : getTextColor()
                }`}
              >
                Gallery
              </Link>
              
              <Link 
                to="/contact"
                className={`font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-primary-orange' 
                    : getTextColor()
                }`}
              >
                Contact
              </Link>

              <Link 
                to="/contact"
                className="bg-primary-orange text-white px-6 py-2 rounded font-medium hover:bg-orange-600 transition-colors"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${getTextColor()}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Sidebar remains white with background */}
      <AnimatePresence> 
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              onClick={closeMenu}
            />
            
            {/* Mobile Menu Panel - Always has white background */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex-shrink-0 p-6 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Package className="h-6 w-6 text-primary-orange" />
                    <span className="text-lg font-bold text-primary-dark">Garv Enterprises</span>
                  </div>
                  <button 
                    onClick={closeMenu}
                    className="p-2 text-primary-dark hover:bg-gray-100 rounded-lg"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <div className="space-y-4">
                  <Link 
                    to="/"
                    onClick={closeMenu}
                    className="block text-primary-dark font-medium py-3 border-b border-gray-100"
                  >
                    Home
                  </Link>
                  
                  <Link 
                    to="/about"
                    onClick={closeMenu}
                    className="block text-primary-dark font-medium py-3 border-b border-gray-100"
                  >
                    About
                  </Link>
                  
                  {/* Mobile Brands Section with Arrow Button */}
                  <div className="border-b border-gray-100 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-primary-dark font-bold text-lg">Our Brands</h3>
                      <Link 
                        to="/products"
                        onClick={closeMenu}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="View all products"
                      >
                        <ChevronRight className="h-5 w-5 text-primary-orange" />
                      </Link>
                    </div>
                    <div className="space-y-2">
                      {Object.entries(brands).map(([brand, items]) => (
                        <div key={brand} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => setActiveMobileBrand(activeMobileBrand === brand ? null : brand)}
                            className="flex items-center justify-between w-full text-left bg-gray-50 hover:bg-gray-100 px-4 py-3 text-primary-dark font-medium transition-colors"
                          >
                            {brand}
                            <ChevronRight className={`h-4 w-4 transition-transform ${
                              activeMobileBrand === brand ? 'rotate-90' : ''
                            }`} />
                          </button>
                          
                          <AnimatePresence>
                            {activeMobileBrand === brand && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                className="overflow-hidden bg-white"
                              >
                                <div className="p-2 space-y-1">
                                  {items.map((item) => (
                                    <Link
                                      key={item.slug}
                                      to={getProductLink(brand, item.slug)}
                                      onClick={closeMenu}
                                      className="block text-gray-600 hover:text-primary-orange hover:bg-gray-50 py-2 px-3 text-sm rounded transition-colors"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to="/authorized"
                    onClick={closeMenu}
                    className="block text-primary-dark font-medium py-3 border-b border-gray-100"
                  >
                    Authorized By
                  </Link>
                  
                  <Link 
                    to="/gallery"
                    onClick={closeMenu}
                    className="block text-primary-dark font-medium py-3 border-b border-gray-100"
                  >
                    Gallery
                  </Link>
                  
                  <Link 
                    to="/contact"
                    onClick={closeMenu}
                    className="block text-primary-dark font-medium py-3 border-b border-gray-100"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="flex-shrink-0 p-6 border-t border-gray-100">
                <Link 
                  to="/contact"
                  onClick={closeMenu}
                  className="block w-full bg-primary-orange text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-orange-600 transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;