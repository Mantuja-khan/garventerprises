import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import BrandProductsPage from './pages/BrandProductsPage';
// import LoadingAnimation from './components/common/LoadingAnimation';
import AuthorizedPage from './pages/AuthorizedPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import BipicoProductsPage from './pages/BipicoProductsPage';
import BipicoProductDetailPage from './pages/BipicoProductDetailPage';
import UflowProductsPage from './pages/UflowProductsPage';
import UflowProductDetailPage from './pages/UflowProductDetailPage';

const AppContent: React.FC = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* <AnimatePresence mode="wait">
        {isLoading && <LoadingAnimation key="loading" />}
      </AnimatePresence> */}
      
      <div className="App">
        <ScrollToTop />
        <Header />
        
        <main>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
             <Route path="/products/:brand" element={<BrandProductsPage />} />
            <Route path="/products/:category/:product" element={<ProductDetailPage />} />
            <Route path="/bipico-products" element={<BipicoProductsPage />} />
            <Route path="/bipico-products/:productId" element={<BipicoProductDetailPage />} />
            <Route path="/uflow-products" element={<UflowProductsPage />} />
            <Route path="/uflow-products/:productId" element={<UflowProductDetailPage />} />
            <Route path="/authorized" element={<AuthorizedPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;


