import React from 'react';
import { Helmet } from 'react-helmet';
import AuthorizedBy from '../components/sections/AuthorizedBy';

const AuthorizedPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Certifications & Authorizations - ISO Certified Industrial Products</title>
        <meta name="description" content="Garv Enterprise is ISO 9001:2015 certified industrial products manufacturer. View our certifications, authorizations, and trusted partnerships with leading companies." />
        <meta name="keywords" content="ISO certified industrial products manufacturer, industrial products certifications, authorized industrial products supplier India, quality certified industrial products company" />
        <link rel="canonical" href="https://garventerprises.in/authorized" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Certifications & Authorizations - Garv Enterprise" />
        <meta property="og:description" content="ISO certified industrial products seller with trusted partnerships across India." />
        <meta property="og:url" content="https://garventerprises.in/authorized" />
      </Helmet>

      <div className="pt-20">
        <AuthorizedBy />
      </div>
    </>
  );
};

export default AuthorizedPage;