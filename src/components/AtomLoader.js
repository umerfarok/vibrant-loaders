import React from 'react';

const AtomLoader = ({ 
  size = 16, 
  coreColor = 'orange-500', 
  electronColor = 'orange-300', 
  ringColor = 'orange-400', 
  backgroundColor = 'orange-50' 
}) => {
  return (
    <div className={`flex items-center justify-center h-screen bg-${backgroundColor}`}>
      <div className="relative">
        <div className={`w-${size} h-${size} bg-${coreColor} rounded-full animate-pulse`}></div>
        {[...Array(3)].map((_, index) => (
          <div 
            key={index}
            className={`absolute w-${size/4} h-${size/4} bg-${electronColor} rounded-full animate-orbit${index + 1} opacity-75`}
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          ></div>
        ))}
        {[...Array(3)].map((_, index) => (
          <div 
            key={index}
            className={`absolute w-${size*1.5} h-${size*1.5} border-4 border-${ringColor} rounded-full animate-ping opacity-0`}
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animationDelay: `${index * 0.5}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AtomLoader;