import React from 'react';

const AtomLoader = ({ 
  coreColor = 'orange-500', 
  electronColor = 'orange-300', 
  ringColor = 'orange-400', 
  backgroundColor = 'orange-50' 
}) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-${backgroundColor} overflow-hidden`}>
      <div className="relative w-64 h-64">
        <div className={`w-16 h-16 bg-${coreColor} rounded-full animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
        {[...Array(3)].map((_, index) => (
          <div 
            key={index}
            className={`absolute w-full h-full animate-spin`}
            style={{ animationDuration: `${(index + 1) * 4}s` }}
          >
            <div className={`absolute w-4 h-4 bg-${electronColor} rounded-full top-0 left-1/2 transform -translate-x-1/2`}></div>
          </div>
        ))}
        {[...Array(3)].map((_, index) => (
          <div 
            key={index}
            className={`absolute w-full h-full border-4 border-${ringColor} rounded-full animate-ping opacity-0`}
            style={{
              animationDelay: `${index * 0.5}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AtomLoader;