import React, { useState, useEffect } from 'react';
import { X, Search, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import katashi from "../../assets/brands/katashi.png";
import makita from "../../assets/brands/makita.png";
import magnetic_core_drill from "../../assets/brands/magnetic_core_Drill.png";
import abrasive_paper from "../../assets/brands/abrasive_paper.png";
import air_hammers from "../../assets/brands/air_hammers.png";
import angle_grinder from "../../assets/brands/angle_grinders.png";
import cloth_roll from "../../assets/brands/cloth_roll.png";
import cordless_cutter from "../../assets/brands/cordless_cutter.png";
import cordless_driver_drill from "../../assets/brands/cordless_driver_drill.png";
import cordless_grinder from "../../assets/brands/cordless_grinder.png";
import cordless_jacket from "../../assets/brands/cordless_jacket.png";
import cordless_saw from "../../assets/brands/cordless_saw.png";
import cordless_wrench from "../../assets/brands/cordless_wrench.png";
import die_grinder from "../../assets/brands/die_grinders.png";
import drill from "../../assets/brands/drill.png";
import electric_screw_driver from "../../assets/brands/electric_screw_driver.png";
import impact_wrench from "../../assets/brands/impact_wrench.png";
import narrow_belt from "../../assets/brands/narrow_belts.png";
import pneumatic_tool from "../../assets/brands/pneumatic_tool.png";
import psa_disc from "../../assets/brands/psa_disc.png";
import ratchet from "../../assets/brands/ratchets.png";
import riveters from "../../assets/brands/riveters.png";
import sander_polisher from "../../assets/brands/sanders_polisher.png";
import screw_driver from "../../assets/brands/screw_driver.png";
import welding_equipments from "../../assets/brands/welding_equipment.png";
import wide_belt from "../../assets/brands/wide_belts.png";
import wood_working from "../../assets/brands/wood_working_tool.png";
import cordless_sander from "../../assets/brands/cordless_sander.png";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // All products data for search
  const allProducts = [
    // Katashi Products
    {
      id: 'impact-wrenches',
      name: 'Impact Wrenches',
      brand: 'KATASHI',
      brandSlug: 'katashi',
      image: impact_wrench,
      description: 'High-quality impact wrenches for various applications. Available in different sizes and torque ratings.',
      category: 'tools'
    },
    {
      id: 'screw-drivers',
      name: 'Screw Drivers',
      brand: 'KATASHI',
      brandSlug: 'katashi',
      image: screw_driver,
      description: 'High-quality screw drivers for various applications. Available in different sizes and torque ratings.',
      category: 'tools'
    },
    {
      id: 'drill',
      name: 'Drill',
      brand: 'KATASHI',
      brandSlug: 'katashi',
      image: drill,
      description: 'High-performance drills for various applications. Available in different sizes and power ratings.',
      category: 'tools'
    },
    {
      id: 'die-grinders',
      name: 'Die Grinders',
      brand: 'KATASHI',
      brandSlug: 'katashi',
      image: die_grinder,
      description: 'High-speed die grinders for precision machining and finishing.',
      category: 'tools'
    },
    {
      id: 'angle-grinders',
      name: 'Angle Grinders',
      brand: 'KATASHI',
      brandSlug: 'katashi',
      image: angle_grinder,
      description: 'High-performance angle grinders for various applications.',
      category: 'tools'
    },
    {
      id: 'air-hammers',
      name: 'Air Hammers',
      brand: 'KATASHI',
      brandSlug: 'katashi',
      image: air_hammers,
      description: 'High-quality hammers for various applications.',
      category: 'tools'
    },
    {
      id: 'riveters',
      name: 'Riveters',
      brand: 'KATASHI',
      brandSlug: 'katashi',
      image: riveters,
      description: 'High-speed riveters for precision fastening and assembly.',
      category: 'tools'
    },
    {
      id: 'electric-screw-drivers',
      name: 'Electric Screw Drivers',
      brand: 'KATASHI',
      brandSlug: 'katashi',
      image: electric_screw_driver,
      description: 'High-speed electric screw drivers for precision fastening and assembly.',
      category: 'tools'
    },
    {
      id: 'sanders-polishers',
      name: 'Sanders & Polishers',
      brand: 'KATASHI',
      brandSlug: 'katashi',
      image: sander_polisher,
      description: 'High-speed sanders and polishers for precision finishing.',
      category: 'tools'
    },
    {
      id: 'ratchets',
      name: 'Ratchets',
      brand: 'KATASHI',
      brandSlug: 'katashi',
      image: ratchet,
      description: 'High-speed ratchets for precision fastening and assembly.',
      category: 'tools'
    },
    // Makita Products
    {
      id: 'cordless-driver-drill',
      name: 'Cordless Driver Drill',
      brand: 'MAKITA',
      brandSlug: 'makita',
      image: cordless_driver_drill,
      description: 'High-quality cordless driver drill for precision drilling and fastening in tight spaces.',
      category: 'cordless'
    },
    {
      id: 'cordless-cutter',
      name: 'Cordless Cutter',
      brand: 'MAKITA',
      brandSlug: 'makita',
      image: cordless_cutter,
      description: 'Powerful grinder for cutting, grinding, and polishing various materials in automotive and industrial applications.',
      category: 'cordless'
    },
    {
      id: 'cordless-wrench',
      name: 'Cordless Wrench',
      brand: 'MAKITA',
      brandSlug: 'makita',
      image: cordless_wrench,
      description: 'High-performance cordless wrenches for various applications.',
      category: 'cordless'
    },
    {
      id: 'cordless-grinder',
      name: 'Cordless Grinder',
      brand: 'MAKITA',
      brandSlug: 'makita',
      image: cordless_grinder,
      description: 'Powerful cordless grinder for cutting, grinding, and polishing various materials in automotive and industrial applications.',
      category: 'cordless'
    },
    {
      id: 'cordless-saw',
      name: 'Cordless Saw',
      brand: 'MAKITA',
      brandSlug: 'makita',
      image: cordless_saw,
      description: 'High-performance cordless saw for various applications.',
      category: 'cordless'
    },
    {
      id: 'cordless-jacket',
      name: 'Cordless Jacket',
      brand: 'MAKITA',
      brandSlug: 'makita',
      image: cordless_jacket,
      description: 'Versatile industrial tools for various applications in metalworking and construction.',
      category: 'cordless'
    },
    {
      id: 'cordless-sander',
      name: 'Cordless Sander',
      brand: 'MAKITA',
      brandSlug: 'makita',
      image: cordless_sander,
      description: 'Versatile industrial tools for various applications in metalworking and construction.',
      category: 'cordless'
    },
    // UFLOW Products
    {
      id: 'pneumatic-dcc-services',
      name: 'Pneumatic DCC Services',
      brand: 'UFLOW',
      brandSlug: 'uflow',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Professional pneumatic system design, consultation, and commissioning services for industrial automation.',
      category: 'services'
    },
    {
      id: 'air-cylinder-mounting-bracket',
      name: 'Air Cylinder Mounting Bracket',
      brand: 'UFLOW',
      brandSlug: 'uflow',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Precision mounting brackets for secure air cylinder installation and positioning in industrial applications.',
      category: 'mounting'
    },
    {
      id: 'compact-cylinder',
      name: 'Compact Cylinder',
      brand: 'UFLOW',
      brandSlug: 'uflow',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Space-saving compact pneumatic cylinders designed for tight installation spaces with high force output.',
      category: 'cylinders'
    },
    {
      id: 'air-filter',
      name: 'Air Filter',
      brand: 'UFLOW',
      brandSlug: 'uflow',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'High-efficiency air filters for clean compressed air in pneumatic systems with auto drain function.',
      category: 'filtration'
    },
    {
      id: 'air-regulator',
      name: 'Air Regulator',
      brand: 'UFLOW',
      brandSlug: 'uflow',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Precision air pressure regulators for consistent pneumatic system performance with stable output.',
      category: 'regulation'
    }
  ];

  // Search function
  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay for better UX
    setTimeout(() => {
      const results = allProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      
      setSearchResults(results);
      setIsSearching(false);
    }, 300);
  };

  // Handle search input change
  useEffect(() => {
    performSearch(searchQuery);
  }, [searchQuery]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset search when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('');
      setSearchResults([]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.95 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-4 max-h-[80vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-primary-blue text-white p-6 flex items-center justify-between">
            <div className="flex items-center">
              <Search className="h-6 w-6 mr-3" />
              <h2 className="text-xl font-bold">Search Products</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-blue-200 transition-colors p-1"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Search Input */}
          <div className="p-6 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products, brands, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent text-lg"
                autoFocus
              />
            </div>
          </div>

          {/* Search Results */}
          <div className="flex-1 overflow-y-auto p-6" style={{ maxHeight: '60vh' }}>
            {isSearching ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-blue mr-3"></div>
                <span className="text-gray-600">Searching products...</span>
              </div>
            ) : searchQuery && searchResults.length === 0 ? (
              <div className="text-center py-12">
                <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                <p className="text-gray-500">Try searching with different keywords or brand names</p>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-primary-dark">
                    Found {searchResults.length} product{searchResults.length !== 1 ? 's' : ''}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {searchResults.map((product) => (
                    <Link
                      key={`${product.brandSlug}-${product.id}`}
                      to={product.brandSlug === 'uflow' 
                        ? `/uflow-products/${product.id}` 
                        : `/products/${product.brandSlug}/${product.id}`
                      }
                      onClick={onClose}
                      className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:border-primary-orange transition-all duration-300 group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-bold text-primary-dark group-hover:text-primary-orange transition-colors truncate">
                              {product.name}
                            </h4>
                            <span className="text-xs font-medium text-primary-blue bg-primary-blue/10 px-2 py-1 rounded-full flex-shrink-0 ml-2">
                              {product.brand}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                            {product.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500 capitalize">
                              Category: {product.category}
                            </span>
                            <span className="text-primary-orange text-sm font-medium group-hover:underline">
                              View Details →
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Search Our Products</h3>
                <p className="text-gray-500 mb-6">Find the perfect tools and equipment for your needs</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary-dark mb-2">Popular Searches</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• Impact Wrenches</div>
                      <div>• Cordless Drills</div>
                      <div>• Pneumatic Tools</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary-dark mb-2">Brands</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• KATASHI</div>
                      <div>• MAKITA</div>
                      <div>• UFLOW</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary-dark mb-2">Categories</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• Power Tools</div>
                      <div>• Cordless Tools</div>
                      <div>• Pneumatic Systems</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchModal;