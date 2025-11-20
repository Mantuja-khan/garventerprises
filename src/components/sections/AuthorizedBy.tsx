import React, { useState } from 'react';
import { Award, ShieldCheck, Globe, CheckCircle, X, Pause, Play } from 'lucide-react';

// Import statements (keep your original imports)
import maruti from "../../assets/maruti_logo.png"
import baxy from "../../assets/baxy_logo.png"
import hero from "../../assets/hero_log.png"
import relaxo from "../../assets/relaxo_logo.png"
import saint_gobain from "../../assets/saint_gobain.png"
import bestex from "../../assets/bestex_logo.png"
import bkt from "../../assets/bkt_logo.png"
import hanon from "../../assets/hanon_logo.png"
import hindware from "../../assets/hindware_logo.png"
import hone from "../../assets/hone_logo.png"
import inox from "../../assets/inox_logo.png"
import jaquar from "../../assets/jaquar_logo.png"
import lifelong from "../../assets/lifelong_logo.png"
import ppap from "../../assets/ppap_logo.png"
import prayag from "../../assets/prayag_logo.png"
import roca from "../../assets/roca_logo.png"
import use_boral from "../../assets/usg_boral_logo.png"
import katashi from "../../assets/certificate/katashi.png"
import bipico from "../../assets/certificate/bipicos.png"
import kovax from "../../assets/certificate/kovax.png"
import uflow from "../../assets/certificate/uflow.png"

const AuthorizedBy = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isScrollPaused, setIsScrollPaused] = useState(false);

  const certifications = [
    {
      logo: katashi,
      verified: true,
      name: 'AUTHORIZED DEALER '
    },
    {
      logo: bipico,
      verified: true,
      name: 'AUTHORIZED CHANNEL PARTNER 2025-26'
    },
    {
      logo: kovax,
      verified: true,
      name: 'AUTHORIZEDDEALER'
    },
    {
      logo: uflow,
      verified: true,
      name: 'AUTHORIZED DEALER'
    },
  ];

  const partners = [
    {
      name: 'Maruti Suzuki',
      logo: maruti,
    },
    {
      name: 'Baxy',
      logo: baxy,
    },
    {
      name: 'Hero MotoCorp',
      logo: hero,
    },
    {
      name: 'Relaxo',
      logo: relaxo,
    },
    {
      name: 'Saint Gobain',
      logo: saint_gobain,
    },
    {
      name: 'Bestex',
      logo: bestex,
    },
    {
      name: 'BKT',
      logo: bkt,
    },
    {
      name: 'Hanon Systems',
      logo: hanon,
    },
    {
      name: 'Hindware',
      logo: hindware,
    },
    {
      name: 'Hone',
      logo: hone,
    },
    {
      name: 'Inox',
      logo: inox,
    },
    {
      name: 'Jaquar',
      logo: jaquar,
    },
    {
      name: 'Lifelong',
      logo: lifelong,
    },
    {
      name: 'PPAP Automotive',
      logo: ppap,
    },
    {
      name: 'Prayag',
      logo: prayag,
    },
    {
      name: 'Roca',
      logo: roca,
    },
    {
      name: 'Use Boral',
      logo: use_boral,
    }
  ];

  // Duplicate partners for infinite scroll
  const allPartners = [...partners, ...partners];

  const openCertificateModal = (cert) => {
    setSelectedCertificate(cert);
  }; 

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  const toggleScroll = () => {
    setIsScrollPaused(!isScrollPaused);
  };

  return (
    <section id="authorized" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 opacity-0 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 md:mb-4">
            CERTIFICATIONS & AUTHORIZATIONS
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Our commitment to quality is recognized by leading certification bodies and trusted by major corporations
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
          <div className="text-center p-4 md:p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors duration-300">
            <Award className="h-10 w-10 md:h-12 md:w-12 text-orange-500 mx-auto mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Quality Certified</h3>
            <p className="text-sm md:text-base text-gray-600">
              All our products meet international quality standards and are regularly audited
            </p>
          </div>
          <div className="text-center p-4 md:p-6 bg-orange-50 rounded-2xl border border-orange-100 hover:bg-orange-100 transition-colors duration-300">
            <ShieldCheck className="h-10 w-10 md:h-12 md:w-12 text-orange-500 mx-auto mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Safety Compliant</h3>
            <p className="text-sm md:text-base text-gray-600">
              Food-grade materials and safe manufacturing processes ensure product safety
            </p>
          </div>

          <div className="text-center p-4 md:p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors duration-300">
            <Globe className="h-10 w-10 md:h-12 md:w-12 text-orange-500 mx-auto mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Export Ready</h3>
            <p className="text-sm md:text-base text-gray-600">
              Licensed for international trade with packaging materials exported globally
            </p>
          </div>
        </div>

        {/* Certifications Grid - Responsive sizes */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-blue-900 text-center mb-6 md:mb-8">
            OUR CERTIFICATIONS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-4 md:p-8 hover:shadow-2xl transition-all duration-300 group relative transform hover:scale-105 cursor-pointer"
                onClick={() => openCertificateModal(cert)}
              >
                {cert.verified && (
                  <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-green-500 text-white rounded-full p-1.5 md:p-2 shadow-lg">
                    <CheckCircle className="h-4 w-4 md:h-6 md:w-6" />
                  </div>
                )}
                
                <div className="text-center">
                  <div className="w-full h-32 md:h-48 bg-gray-50 rounded-lg mx-auto mb-3 md:mb-4 flex items-center justify-center overflow-hidden p-2 md:p-4 border border-gray-100">
                    <img 
                      src={cert.logo}
                      alt={`${cert.name} certification`}
                      className="max-w-full max-h-full object-contain rounded hover:scale-110 transition-transform duration-300"
                      style={{
                        width: 'auto',
                        height: 'auto',
                        maxWidth: '100%',
                        maxHeight: '100%'
                      }}
                    />
                  </div>
                  <p className="font-semibold text-gray-700 text-xs md:text-base mt-2">
                    {cert.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted Partners with Infinite Scroll */}
        <div className="bg-gray-50 rounded-2xl p-4 md:p-8 lg:p-12">
          <h3 className="text-xl md:text-2xl font-bold text-blue-900 text-center mb-6 md:mb-8">
            TRUSTED BY LEADING COMPANIES
          </h3>
          
          <div className="overflow-hidden relative">
            <div className={`flex ${isScrollPaused ? '' : 'animate-scroll-left'}`}>
              {allPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white p-4 md:p-6 rounded-lg text-center hover:shadow-md transition-all duration-300 transform hover:scale-105 mx-2 md:mx-3"
                  style={{ minWidth: '140px', width: '140px' }}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-lg mx-auto mb-3 flex items-center justify-center overflow-hidden p-2 border border-gray-100">
                    <img 
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain rounded"
                      style={{
                        width: 'auto',
                        height: 'auto',
                        maxWidth: '100%',
                        maxHeight: '100%'
                      }}
                    />
                  </div>
                  <p className="font-medium text-gray-700 text-xs md:text-sm">
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-6 md:mt-8">
            <button
              onClick={toggleScroll}
              className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
            >
              {isScrollPaused ? (
                <>
                  <Play className="h-4 w-4 md:h-5 md:w-5" />
                  <span>Resume Scroll</span>
                </>
              ) : (
                <>
                  <Pause className="h-4 w-4 md:h-5 md:w-5" />
                  <span>Pause Scroll</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeCertificateModal}
        >
          <div 
            className="bg-white rounded-2xl p-4 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeCertificateModal}
              className="absolute top-2 right-2 md:top-4 md:right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 md:p-2 transition-colors duration-200 z-10"
            >
              <X className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
            </button>
            
            <div className="text-center">
              <div className="w-full max-w-2xl h-64 md:h-96 bg-gray-50 rounded-2xl mx-auto mb-4 md:mb-6 flex items-center justify-center overflow-hidden p-4 md:p-6 border-2 border-gray-200">
                <img 
                  src={selectedCertificate.logo}
                  alt={`${selectedCertificate.name} certification`}
                  className="max-w-full max-h-full object-contain rounded-xl"
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '100%',
                    maxHeight: '100%'
                  }}
                />
              </div>
              
              <div className="flex items-center justify-center mb-4">
                <h3 className="text-lg md:text-2xl font-bold text-blue-900 mr-2 md:mr-3">
                  {selectedCertificate.name}
                </h3>
                {selectedCertificate.verified && (
                  <div className="bg-green-500 text-white rounded-full p-1.5 md:p-2">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default AuthorizedBy;