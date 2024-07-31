import React from 'react';

const CosmicLoader = ({ size = 200 }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-900 to-purple-900">
      <div className="relative" style={{ width: size, height: size }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/3 h-1/3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-300/50"></div>
        </div>
        {[...Array(3)].map((_, index) => (
          <div 
            key={index}
            className="absolute w-full h-full animate-spin"
            style={{ animationDuration: `${(index + 2) * 5}s` }}
          >
            <div 
              className="absolute w-1/12 h-1/12 bg-gradient-to-br from-orange-300 to-red-500 rounded-full"
              style={{
                top: '50%',
                left: `${10 + index * 25}%`,
                transform: 'translate(-50%, -50%)',
                boxShadow: `0 0 15px 5px rgba(255, 165, 0, 0.${5 + index})`,
              }}
            ></div>
          </div>
        ))}
        {[...Array(50)].map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
        <div className="absolute inset-0 border-4 border-purple-400 rounded-full animate-spin"
             style={{ animationDuration: '20s' }}></div>
        {[...Array(3)].map((_, index) => (
          <div 
            key={index}
            className="absolute inset-0 border-2 border-purple-300 rounded-full animate-ping opacity-0"
            style={{
              animationDelay: `${index * 0.5}s`,
              animationDuration: '3s',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CosmicLoader;