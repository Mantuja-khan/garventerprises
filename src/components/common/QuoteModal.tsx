import React, { useState } from 'react';
import { X, Send, CheckCircle, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  productCategory?: string;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, productName, productCategory }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '',
    specifications: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://garventerprises.onrender.com/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          productName,
          productCategory,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            quantity: '',
            specifications: '',
            message: ''
          });
          onClose();
        }, 3000);
      } else {
        throw new Error('Failed to send quote request');
      }
    } catch (err) {
      setError('Failed to send quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="bg-white rounded-lg w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header - Responsive spacing and text sizes */}
          <div className="bg-primary-blue text-white p-4 sm:p-6 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center min-w-0 flex-1">
                <Package className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg sm:text-xl font-bold truncate">Get Quote</h2>
                  {productName && (
                    <p className="text-blue-100 text-xs sm:text-sm truncate">
                      for {productName}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-blue-200 transition-colors ml-2 flex-shrink-0"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </div>

          {/* Content - Scrollable on small screens */}
          <div className="p-4 sm:p-6 overflow-y-auto flex-1">
            {isSubmitted ? (
              <div className="text-center py-6 sm:py-8">
                <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-primary-dark mb-2">
                  Quote Request Sent Successfully!
                </h3>
                <p className="text-gray-600 text-sm sm:text-base px-4">
                  We'll get back to you within 24 hours with a detailed quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded text-sm">
                    {error}
                  </div>
                )}

                {/* Always stack on mobile, grid on larger screens */}
                <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-dark mb-1 sm:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded text-sm sm:text-base focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-1 sm:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded text-sm sm:text-base focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary-dark mb-1 sm:mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded text-sm sm:text-base focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-primary-dark mb-1 sm:mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded text-sm sm:text-base focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-primary-dark mb-1 sm:mb-2">
                    Quantity Required *
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    required
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded text-sm sm:text-base focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  >
                    <option value="">Select quantity range</option>
                    <option value="1-100">1 - 100 pieces</option>
                    <option value="100-500">100 - 500 pieces</option>
                    <option value="500-1000">500 - 1,000 pieces</option>
                    <option value="1000-5000">1,000 - 5,000 pieces</option>
                    <option value="5000+">5,000+ pieces</option>
                    <option value="custom">Custom quantity</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="specifications" className="block text-sm font-medium text-primary-dark mb-1 sm:mb-2">
                    Specifications Required
                  </label>
                  <input
                    type="text"
                    id="specifications"
                    name="specifications"
                    value={formData.specifications}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded text-sm sm:text-base focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    placeholder="Size, thickness, color, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-dark mb-1 sm:mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded text-sm sm:text-base focus:ring-2 focus:ring-primary-blue focus:border-transparent resize-none"
                    placeholder="Any specific requirements, delivery timeline, or questions..."
                  ></textarea>
                </div>

                {/* Responsive button layout - Stack on mobile, side by side on larger screens */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full sm:flex-1 py-3 px-4 sm:px-6 rounded font-medium flex items-center justify-center text-sm sm:text-base transition-all ${
                      isSubmitting
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-primary-blue text-white hover:bg-primary-blue-dark active:transform active:scale-[0.98]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                        <span className="hidden xs:inline">Sending Quote Request...</span>
                        <span className="xs:hidden">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        <span className="hidden xs:inline">Send Quote Request</span>
                        <span className="xs:hidden">Send Quote</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:flex-1 border border-gray-300 text-gray-600 py-3 px-4 sm:px-6 rounded font-medium text-sm sm:text-base hover:bg-gray-50 active:transform active:scale-[0.98] transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuoteModal;
