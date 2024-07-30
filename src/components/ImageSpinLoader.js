import React, { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';

const ImageSpinLoader = ({
  imageSrc,
  blurStrength = 5,
  spinDuration = 2,
  backgroundColor = 'rgba(255, 255, 255, 0.8)'
}) => {
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
      return <Loader size={80} className="text-gray-600 animate-spin" />;
    }
    if (imageLoaded) {
      return (
        <img 
          src={imageSrc} 
          alt="Loading" 
          className="w-40 h-40 rounded-full object-cover animate-spin"
        />
      );
    }
    return <div className="w-40 h-40 bg-gray-200 rounded-full animate-pulse" />;
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
      style={{
        backdropFilter: `blur(${blurStrength}px)`,
        backgroundColor,
      }}
    >
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