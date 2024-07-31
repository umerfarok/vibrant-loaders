import React from 'react';

const DNALoader = ({ size = 40 }) => {
  const baseColors = ['blue-400', 'green-400', 'yellow-400', 'red-400'];
  const backboneColor = 'gray-300';

  return (
    <div className="inline-flex items-center justify-center">
      <div className="relative" style={{ width: size, height: size * 1.5, overflow: 'hidden' }}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className="absolute w-full">
            <div 
              className={`w-2 h-2 rounded-full bg-${baseColors[i % 4]} absolute`}
              style={{
                left: `${Math.sin(i / 5 * Math.PI) * 40 + 50}%`,
                top: `${i * 10}%`,
                transform: 'translate(-50%, -50%)',
                animation: `dnaMove 3s ease-in-out ${i * 0.1}s infinite alternate`
              }}
            />
            <div 
              className={`w-2 h-2 rounded-full bg-${baseColors[(i + 2) % 4]} absolute`}
              style={{
                right: `${Math.sin(i / 5 * Math.PI) * 40 + 50}%`,
                top: `${i * 10}%`,
                transform: 'translate(50%, -50%)',
                animation: `dnaMove 3s ease-in-out ${i * 0.1}s infinite alternate-reverse`
              }}
            />
          </div>
        ))}
        <div className={`absolute left-1/2 top-0 w-0.5 h-full bg-${backboneColor} transform -translate-x-1/2`} />
        <div className={`absolute right-1/2 top-0 w-0.5 h-full bg-${backboneColor} transform translate-x-1/2`} />
      </div>
      <style jsx>{`
        @keyframes dnaMove {
          0% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default DNALoader;