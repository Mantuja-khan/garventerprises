import React from 'react';
import { Helmet } from 'react-helmet';
import Gallery from '../components/sections/Gallery';

const GalleryPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Gallery - Our Gallery | Garv Enterprise</title>
        <meta name="description" content="Explore Garv Enterprise's state-of-the-art industrial tolls  facility, product range, and quality control processes through our comprehensive gallery." />
        <meta name="keywords" content=", industrial materials gallery, industrial tools photos, packaging supplier images India" />
        <link rel="canonical" href="https://garventerprises.in/gallery" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Gallery - Our Gallery | Garv Enterprise" />
        <meta property="og:description" content= "Explore our state-of-the-art industrial tool ." />
        <meta property="og:url" content="https://garventerprises.in/gallery" />
      </Helmet>

      <div className="pt-20">
        <Gallery />
      </div>
    </>
  );
};
export default GalleryPage;