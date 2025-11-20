import React from 'react';
import { Helmet } from 'react-helmet';
import Contact from '../components/sections/Contact';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Garv Enterprises - Get Quote for Industrial Products | India</title>
        <meta name="description" content="Contact India's B2B industrial supplier. Get custom quotes for katashi , rolliwolf and industrial products. Fast response guaranteed." />
        <meta name="keywords" content="contact industrial products supplier India, get industrial products quote, industrial products supplier contact, custom industrial products in bhiwadi" />
        <link rel="canonical" href="https://garventerprises.in/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Garv Enterprises - Get Quote for Industrial Products" />
        <meta property="og:description" content="Contact India's leading industrial products supplier for custom quotes and solutions." />
        <meta property="og:url" content="https://garventerprises.in/contact" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Garv Enterprises",
            "description": "Contact India's leading industrial products supplier for custom quotes and solutions.",
            "url": "https://garventerprises.in/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Garv Enterprises",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-77375-25127",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"]
              }
            }
          })}
        </script>
      </Helmet>

      <div className="pt-20">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;