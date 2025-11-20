import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../components/sections/About';
import about from "../assets/about.png"

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Garv Enterprise - Leading Industrial Products Manufacturer Since 2010</title>
        <meta name="description" content="Learn about Garv Enterprises' journey as India's Industrial products. Our vision, mission, and 14+ years of excellence in Industrial Products solutions." />
        <meta name="keywords" content="about Garv Enterprises, industrial products manufacturer history, trusted industrial products supplier India, ISO certified industrial products company" />
        <link rel="canonical" href="https://garventerprises.in/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Garv Enterprises - Leading Industrial Products Manufacturer" />
        <meta property="og:description" content="Learn about Garv Enterprises' journey as India's trusted industrial products manufacturer since 2010." />
        <meta property="og:url" content="https://garventerprises.in/about" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Garv Enterprises",
            "description": "Learn about Garv Enterprises' journey as India's trusted Industrial products manufacturer since 2010.",
            "url": "https://garventerprises.in/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Garv Enterprises",
              "foundingDate": "2010",
              "description": "Garv enterprise is a brand value saller of industrial products."
            }
          })}
        </script>
      </Helmet>

      <div className="pt-20">
        <About />
      </div>
    </>
  );
};

export default AboutPage;