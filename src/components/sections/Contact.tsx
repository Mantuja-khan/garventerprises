import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ExternalLink, MessageCircle, X, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleActionClick = (actionType, index) => {
    switch (actionType) {
      case 'Get Directions':
        const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=GARV+ENTERPRISES,J1264F+RICCO+INDUSTRIAL+AREA,PHASE+5+BHIWADI,RAJASTHAN+301019`;
        window.open(directionsUrl, '_blank');
        break;
      case 'Call Now':
        setShowPhoneOptions(true);
        setShowEmailOptions(false);
        break;
      case 'Send Email':
        setShowEmailOptions(true);
        setShowPhoneOptions(false);
        break;
      case 'View Schedule':
        alert('Business Hours:\nMonday - Saturday: 9:00 AM - 7:00 PM\nSunday: Closed');
        break;
      default:
        break;
    }
  };

  const handlePhoneCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, '_self');
    setShowPhoneOptions(false);
  };

  const handleEmailSend = (email) => {
    window.open(`mailto:${email}?subject=Inquiry from Website&body=Hello, I would like to inquire about your services.`, '_self');
    setShowEmailOptions(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '917737525127';
    const message = encodeURIComponent('Hello, I would like to inquire about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email address');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Please enter your message');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('http://localhost:3001/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        })
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: ''
          });
        }, 3000);
      } else {
        setError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['J1264F RIICO INDUSTRIAL AREA, PHASE 5 BHIWADI, RAJASTHAN 301019'],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 773-7525-127'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['garventerprise@yahoo.com'],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: Closed'],
      action: 'View Schedule'
    }
  ];

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.8947362886856!2d76.86807217461946!3d28.198247075908444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3797758e15c9%3A0xda004df11f698044!2sGARV%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1722162000000!5m2!1sen!2sin";

  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Ready to discuss your required material needs? Contact us today for a custom quote or any inquiries you may have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8 opacity-0 animate-[fadeInLeft_0.6s_ease-out_forwards] [animation-delay:0.2s]">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
                CONTACT INFORMATION
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
                Get in touch with Us for any custom material requirements or inquiries. Our team is here to assist you with all your Industrial needs.
              </p>
            </div>

            {/* Phone Options Modal */}
            {showPhoneOptions && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowPhoneOptions(false)}>
                <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-gray-800">Call Us</h3>
                    <button 
                      onClick={() => setShowPhoneOptions(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    <button
                      onClick={() => handlePhoneCall('+917737525127')}
                      className="w-full p-4 bg-gray-50 hover:bg-green-50 rounded-lg text-left transition-all group border border-gray-200 hover:border-green-300"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">+91 773-7525-127</p>
                          <p className="text-xs text-gray-500 mt-1">Primary Contact</p>
                        </div>
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <Phone className="h-5 w-5 text-green-600" />
                        </div>
                      </div>
                    </button>
                    
                    <button
                      onClick={() => handlePhoneCall('+919828388188')}
                      className="w-full p-4 bg-gray-50 hover:bg-green-50 rounded-lg text-left transition-all group border border-gray-200 hover:border-green-300"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">+91 982-8388-188</p>
                          <p className="text-xs text-gray-500 mt-1">Secondary Contact</p>
                        </div>
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <Phone className="h-5 w-5 text-green-600" />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Email Options Modal */}
            {showEmailOptions && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowEmailOptions(false)}>
                <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-gray-800">Email Us</h3>
                    <button 
                      onClick={() => setShowEmailOptions(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    <button
                      onClick={() => handleEmailSend('garventerprise@yahoo.com')}
                      className="w-full p-4 bg-gray-50 hover:bg-blue-50 rounded-lg text-left transition-all group border border-gray-200 hover:border-blue-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0 mr-3">
                          <p className="font-semibold text-gray-800 text-sm truncate">garventerprise@yahoo.com</p>
                          <p className="text-xs text-gray-500 mt-1">Primary Email</p>
                        </div>
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors flex-shrink-0">
                          <Mail className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                    </button>
                    
                    <button
                      onClick={() => handleEmailSend('garventerprises6@gmail.com')}
                      className="w-full p-4 bg-gray-50 hover:bg-blue-50 rounded-lg text-left transition-all group border border-gray-200 hover:border-blue-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0 mr-3">
                          <p className="font-semibold text-gray-800 text-sm truncate">garventerprises6@gmail.com</p>
                          <p className="text-xs text-gray-500 mt-1">Secondary Email</p>
                        </div>
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors flex-shrink-0">
                          <Mail className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="p-2 md:p-3 bg-orange-100 rounded-full flex-shrink-0">
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">
                        {info.title}
                      </h4>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-xs md:text-sm break-words">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <button 
                        onClick={() => handleActionClick(info.action, index)}
                        className="text-orange-500 text-xs md:text-sm font-medium mt-2 hover:text-orange-600 transition-colors flex items-center group"
                      >
                        {info.action}
                        <ExternalLink className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden shadow-lg opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] [animation-delay:0.7s]">
              <div className="relative h-64 md:h-80">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GARV ENTERPRISES Location"
                  className="rounded-xl"
                ></iframe>
                
                <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4">
                  <a
                    href="https://www.google.com/maps/place/GARV+ENTERPRISES/@28.1982205,76.870284,3a,75y,84.01h,90t/data=!3m7!1e1!3m5!1sqnoMuFfXGkldgTPC79MR3g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DqnoMuFfXGkldgTPC79MR3g%26yaw%3D84.01252!7i13312!8i6656!4m14!1m7!3m6!1s0x390d3797758e15c9:0xda004df11f698044!2sGARV+ENTERPRISES!8m2!3d28.198247!4d76.8705531!16s%2Fg%2F11g22z8xdg!3m5!1s0x390d3797758e15c9:0xda004df11f698044!8m2!3d28.198247!4d76.8705531!16s%2Fg%2F11g22z8xdg?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 text-white px-2 md:px-3 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-orange-600 transition-colors shadow-lg"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="opacity-0 animate-[fadeInRight_0.6s_ease-out_forwards] [animation-delay:0.4s]">
            <div className="bg-gray-50 p-5 md:p-8 rounded-2xl w-full">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-5 md:mb-6">
                Send Us a Message
              </h3>
              
              {/* Error Message */}
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              <div className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-800 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-800 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-gray-800 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-xs md:text-sm font-medium text-gray-800 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-800 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none bg-white"
                    placeholder="Tell us about your industrial needs, quantity needed, or any questions you have..."
                  ></textarea>
                </div>
                
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-3 md:py-4 text-sm md:text-base rounded-lg font-medium flex items-center justify-center transition-all ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : isSubmitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-orange-500 text-white hover:bg-orange-600'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                      Message Sent Successfully!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 md:mt-6 p-3 md:p-4 bg-white/70 rounded-lg">
                <p className="text-xs md:text-sm text-gray-600">
                  <strong>Quick Response Guarantee:</strong> We respond to all inquiries within 2 hours during business hours. 
                  For urgent packaging requirements, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us on WhatsApp
        </span>
      </button>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;