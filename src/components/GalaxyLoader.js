import React from 'react';

const GalaxyLoader = ({
  size = 80,
  armColor = 'purple-500',
  coreColor = 'yellow-300',
  starColors = ['white', 'blue-200', 'yellow-200'],
  backgroundColor = 'gray-900'
}) => {
  return (
    <div className={`flex items-center justify-center h-screen bg-${backgroundColor}`}>
      <div className={`relative w-${size} h-${size} animate-spin-slow`}>
        {[...Array(4)].map((_, i) => (
          <div 
            key={i}
            className={`absolute w-full h-full bg-${armColor} opacity-20`}
            style={{
              transform: `rotate(${i * 45}deg)`,
              borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%',
            }}
          />
        ))}
        <div className={`absolute top-1/2 left-1/2 w-${size/4} h-${size/4} bg-${coreColor} rounded-full transform -translate-x-1/2 -translate-y-1/2`} />
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-${starColors[i % 3]}`}
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
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