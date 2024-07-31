import React, { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';

const ImageSpinLoader = ({ imageSrc, size = 40, spinDuration = 1.5 }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (imageSrc) {
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageError(true);
      img.src = imageSrc;
    }
  }, [imageSrc]);

  const renderSpinner = () => {
    if (!imageSrc || imageError) {
      return <Loader size={size} className="text-blue-600 animate-spin" />;
    }
    if (imageLoaded) {
      return (
        <img 
          src={imageSrc} 
          alt="Loading" 
          className="rounded-full object-cover"
          style={{ width: size, height: size }}
        />
      );
    }
    return <div className="bg-gray-200 rounded-full animate-pulse" style={{ width: size, height: size }} />;
  };

  return (
    <div className="inline-flex items-center justify-center">
      <div 
        className="relative"
        style={{
          animation: `spin ${spinDuration}s linear infinite`,
        }}
      >
        {renderSpinner()}
      </div>
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ImageSpinLoader;