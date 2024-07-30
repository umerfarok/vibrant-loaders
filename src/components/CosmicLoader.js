import React from 'react';

const CosmicLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-300 overflow-hidden">
      <div className="relative w-80 h-80">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-300"></div>
        </div>
        {[...Array(3)].map((_, index) => (
          <div 
            key={index}
            className={`absolute w-full h-full animate-spin`}
            style={{ animationDuration: `${(index + 2) * 5}s` }}
          >
            <div 
              className={`absolute w-8 h-8 bg-gradient-to-br from-orange-${300 + index * 100} to-red-${400 + index * 100} rounded-full`}
              style={{
                top: '50%',
                left: `${10 + index * 15}%`,
                transform: 'translate(-50%, -50%)',
                boxShadow: `0 0 15px 3px rgba(255, 165, 0, 0.${5 + index})`,
              }}
            ></div>
          </div>
        ))}
        {[...Array(30)].map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.7 + 0.3})`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
        <div className="absolute inset-0 border-4 border-orange-400 rounded-full animate-spin"
             style={{ animationDuration: '20s' }}></div>
        {[...Array(3)].map((_, index) => (
          <div 
            key={index}
            className="absolute inset-0 border-2 border-orange-300 rounded-full animate-ping opacity-0"
            style={{
              animationDelay: `${index * 0.5}s`,
              animationDuration: '3s',
            }}
          ></div>
        ))}
      </div>
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default CosmicLoader;