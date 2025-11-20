// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import loading from "../../assets/loading.webm"

// const LoadingAnimation: React.FC = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Hide animation after 1.5 seconds
//     const timer = setTimeout(() => setIsLoading(false), 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   if (!isLoading) return null;
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black z-50 flex items-center justify-center"
//     >
//       <video
//         src={loading}
//         autoPlay
//         muted
//         playsInline
//         className="w-full h-full object-cover"
//       />
//     </motion.div>
//   );
// };

// export default LoadingAnimation;
