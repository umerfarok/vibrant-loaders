import React from 'react';

const MoleculeLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 overflow-hidden">
      <div className="relative w-80 h-80">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-blue-500 rounded-full"
            style={{
              top: `${50 + 40 * Math.sin(i * 2 * Math.PI / 5)}%`,
              left: `${50 + 40 * Math.cos(i * 2 * Math.PI / 5)}%`,
              animation: `orbit ${3 + i}s linear infinite`,
            }}
          >
            <div className="w-full h-full bg-blue-300 rounded-full animate-ping" />
          </div>
        ))}
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full bg-red-300 rounded-full animate-ping" />
        </div>
      </div>
      <style jsx>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(80px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};

export default MoleculeLoader;