import React from 'react';

const GalaxyLoader = ({ size = 200 }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative animate-spin-slow" style={{ width: size, height: size }}>
        {[...Array(4)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-full h-full bg-purple-500 opacity-20"
            style={{
              transform: `rotate(${i * 45}deg)`,
              borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%',
            }}
          />
        ))}
        <div className="absolute top-1/2 left-1/2 w-1/4 h-1/4 bg-yellow-300 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: ['white', 'blue-200', 'yellow-200'][i % 3],
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite alternate`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          100% { opacity: 1; }
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default GalaxyLoader;