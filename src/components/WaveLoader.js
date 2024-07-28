import React from 'react';

const WaveLoader = ({
  size = 80,
  waveColor = 'blue-400',
  particleColor = 'white',
  backgroundColor = 'blue-100'
}) => {
  return (
    <div className={`flex items-center justify-center h-screen bg-${backgroundColor}`}>
      <div className={`relative w-${size} h-${size/2} overflow-hidden`}>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-full h-full bg-${waveColor} opacity-20`}
            style={{
              animation: `wave ${3 + i * 0.5}s ease-in-out ${i * 0.2}s infinite alternate`,
              borderRadius: '40% 60% 60% 40% / 60% 60% 40% 40%',
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-${particleColor}`}
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `float ${Math.random() * 3 + 2}s infinite alternate`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes wave {
          0% { transform: translateY(5%) rotate(0deg); }
          100% { transform: translateY(-5%) rotate(360deg); }
        }
        @keyframes float {
          0% { transform: translateY(0); }
          100% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default WaveLoader;