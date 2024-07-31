import React from 'react';

const AtomLoader = ({ size = 100 }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative" style={{ width: size, height: size }}>
        <div className="w-full h-full bg-blue-500 rounded-full animate-pulse"></div>
        {[...Array(3)].map((_, index) => (
          <div 
            key={index}
            className="absolute w-1/4 h-1/4 bg-blue-300 rounded-full animate-orbit opacity-75"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animationDuration: `${(index + 1) * 2}s`,
            }}
          ></div>
        ))}
        {[...Array(3)].map((_, index) => (
          <div 
            key={index}
            className="absolute w-full h-full border-4 border-blue-400 rounded-full animate-ping opacity-0"
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