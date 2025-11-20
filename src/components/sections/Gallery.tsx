import React, { useState } from 'react';
import { X, ZoomIn, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import coming_soon from "../../assets/under_review.png"

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="min-h-screen py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center"
        >
          {/* Image Container */}
         <motion.div
  initial={{ scale: 0.75, opacity: 0 }}   // slightly smaller initial size
  animate={{ scale: 0.9, opacity: 1 }}    // reduced final size
  transition={{ duration: 0.8, delay: 0.2 }}
  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-6 sm:mb-8 md:mb-10 -mt-4"
>
  <img 
    src={coming_soon}
    alt="Coming Soon - Website under construction"
    className="w-full h-auto drop-shadow-2xl"
  />
</motion.div>


          {/* Coming Soon Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Coming Soon
            </h1>
            
            <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="text-sm sm:text-base md:text-lg text-gray-600 max-w-md sm:max-w-lg md:max-w-xl mx-auto px-4"
>
  We're working hard to bring you an amazing gallery experience. Stay tuned!
</motion.p>


            {/* Animated dots */}
            <motion.div 
              className="flex justify-center gap-2 sm:gap-3 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;

// import React, { useState } from 'react';
// import { X, ZoomIn, ArrowLeft, ArrowRight } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Gallery: React.FC = () => {
//   const [selectedImage, setSelectedImage] = useState<number | null>(null);
//   const [activeFilter, setActiveFilter] = useState('all');

//   const galleryItems = [
//     {
//       id: 1,
//       category: 'products',
//       title: 'Premium Polybags Collection',
//       image: 'https://images.pexels.com/photos/4226922/pexels-photo-4226922.jpeg?auto=compress&cs=tinysrgb&w=600',
//       description: 'High-quality polybags in various sizes and specifications'
//     },
//     {
//       id: 2,
//       category: 'manufacturing',
//       title: 'Modern Manufacturing Unit',
//       image: 'https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=600',
//       description: 'State-of-the-art packaging material manufacturing facility'
//     },
//     {
//       id: 3,
//       category: 'products',
//       title: 'Bubble Wrap Production',
//       image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600',
//       description: 'Premium air bubble packaging materials for protection'
//     },
//     {
//       id: 4,
//       category: 'warehouse',
//       title: 'Packaging Warehouse',
//       image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=600',
//       description: 'Large-scale storage and distribution facility'
//     },
//     {
//       id: 5,
//       category: 'products',
//       title: 'Custom Packaging Solutions',
//       image: 'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=600',
//       description: 'Tailored packaging materials for specific business needs'
//     },
//     {
//       id: 6,
//       category: 'manufacturing',
//       title: 'Quality Control Process',
//       image: 'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=600',
//       description: 'Rigorous quality testing of packaging materials'
//     },
//     {
//       id: 7,
//       category: 'products',
//       title: 'Industrial Packaging Range',
//       image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=600',
//       description: 'Heavy-duty packaging solutions for industrial applications'
//     },
//     {
//       id: 8,
//       category: 'warehouse',
//       title: 'Logistics & Distribution',
//       image: 'https://images.pexels.com/photos/4246280/pexels-photo-4246280.jpeg?auto=compress&cs=tinysrgb&w=600',
//       description: 'Efficient packaging material distribution across India'
//     },
//     {
//       id: 9,
//       category: 'products',
//       title: 'Eco-Friendly Packaging',
//       image: 'https://images.pexels.com/photos/5029857/pexels-photo-5029857.jpeg?auto=compress&cs=tinysrgb&w=600',
//       description: 'Sustainable and biodegradable packaging options'
//     }
//   ];

//   const filters = [
//     { id: 'all', name: 'All Images' },
//     { id: 'products', name: 'Products' },
//     { id: 'manufacturing', name: 'Manufacturing' },
//     { id: 'warehouse', name: 'Warehouse' }
//   ];

//   const filteredItems = activeFilter === 'all' 
//     ? galleryItems 
//     : galleryItems.filter(item => item.category === activeFilter);

//   const openLightbox = (index: number) => {
//     setSelectedImage(index);
//   };

//   const closeLightbox = () => {
//     setSelectedImage(null);
//   };

//   const navigateImage = (direction: 'prev' | 'next') => {
//     if (selectedImage === null) return;
    
//     const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
//     let newIndex;
    
//     if (direction === 'prev') {
//       newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
//     } else {
//       newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
//     }
    
//     setSelectedImage(filteredItems[newIndex].id);
//   };

//   const selectedItem = selectedImage ? filteredItems.find(item => item.id === selectedImage) : null;

//   return (
//     <section id="gallery" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
//             OUR GALLERY
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Explore our manufacturing facilities, product range, and packaging solutions through our comprehensive gallery
//           </p>
//         </motion.div>

//         {/* Filter Buttons */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-4 mb-12"
//         >
//           {filters.map((filter) => (
//             <button
//               key={filter.id}
//               onClick={() => setActiveFilter(filter.id)}
//               className={`px-6 py-3 rounded font-medium ${
//                 activeFilter === filter.id
//                   ? 'bg-primary-orange text-white'
//                   : 'bg-white text-gray-600'
//               }`}
//             >
//               {filter.name}
//             </button>
//           ))}
//         </motion.div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredItems.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
//               onClick={() => openLightbox(item.id)}
//             >
//               <div className="aspect-w-4 aspect-h-3">
//                 <img 
//                   src={item.image}
//                   alt={`${item.title} - PackagePro packaging materials gallery`}
//                   className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//               </div>
              
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-4 left-4 right-4 text-white">
//                   <h3 className="text-lg font-bold mb-2">{item.title}</h3>
//                   <p className="text-sm text-gray-200">{item.description}</p>
//                 </div>
                
//                 <div className="absolute top-4 right-4">
//                   <ZoomIn className="h-6 w-6 text-white" />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Lightbox Modal */}
//         <AnimatePresence>
//           {selectedImage && selectedItem && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
//               onClick={closeLightbox}
//             >
//               <div className="relative max-w-4xl max-h-full">
//                 {/* Close Button */}
//                 <button
//                   onClick={closeLightbox}
//                   className="absolute -top-12 right-0 text-white hover:text-accent-coral transition-colors"
//                 >
//                   <X className="h-8 w-8" />
//                 </button>

//                 {/* Navigation Buttons */}
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     navigateImage('prev');
//                   }}
//                   className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent-coral transition-colors p-2"
//                 >
//                   <ArrowLeft className="h-8 w-8" />
//                 </button>
                
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     navigateImage('next');
//                   }}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent-coral transition-colors p-2"
//                 >
//                   <ArrowRight className="h-8 w-8" />
//                 </button>

//                 {/* Image */}
//                 <motion.div
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   exit={{ scale: 0.8, opacity: 0 }}
//                   className="bg-white rounded-lg overflow-hidden"
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   <img 
//                     src={selectedItem.image}
//                     alt={selectedItem.title}
//                     className="w-full h-auto max-h-[70vh] object-contain"
//                   />
                  
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-primary-dark mb-2">
//                       {selectedItem.title}
//                     </h3>
//                     <p className="text-gray-600">
//                       {selectedItem.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

       
//       </div>
//     </section>
//   );
// };

// export default Gallery;