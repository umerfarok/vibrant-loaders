import React from 'react';

const MoleculeLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 overflow-hidden">
      <div className="relative w-64 h-64">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-teal-500 rounded-full"
            style={{
              top: `${50 + 35 * Math.sin(i * 2 * Math.PI / 5)}%`,
              left: `${50 + 35 * Math.cos(i * 2 * Math.PI / 5)}%`,
              animation: `orbit ${3 + i}s linear infinite`,
            }}
          >
            <div className="w-full h-full bg-teal-300 rounded-full animate-ping" />
          </div>
        ))}
        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-pink-500 rounded-full transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full bg-pink-300 rounded-full animate-ping" />
        </div>
      </div>
      <style jsx>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(64px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(64px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};

export default MoleculeLoader;