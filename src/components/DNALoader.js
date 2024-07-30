import React from 'react';

const DNALoader = ({
  baseColors = ['blue-400', 'green-400', 'yellow-400', 'red-400'],
  backboneColor = 'gray-300',
  backgroundColor = 'gray-100'
}) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-${backgroundColor} overflow-hidden`}>
      <div className="relative w-64 h-128 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute w-full">
            <div 
              className={`w-4 h-4 rounded-full bg-${baseColors[i % 4]} absolute`}
              style={{
                left: `${Math.sin(i / 6 * Math.PI) * 50 + 50}%`,
                top: `${i * 8}%`,
                transform: 'translate(-50%, -50%)',
                animation: `dnaMove 3s ease-in-out ${i * 0.1}s infinite alternate`
              }}
            />
            <div 
              className={`w-4 h-4 rounded-full bg-${baseColors[(i + 2) % 4]} absolute`}
              style={{
                right: `${Math.sin(i / 6 * Math.PI) * 50 + 50}%`,
                top: `${i * 8}%`,
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