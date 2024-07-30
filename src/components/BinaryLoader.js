import React from 'react';

const BinaryLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden">
      <div className="grid grid-cols-10 gap-2">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="w-8 h-8 flex items-center justify-center text-lg font-mono"
            style={{
              animation: `binaryFlash 1s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes binaryFlash {
          0%, 100% { color: #333; }
          50% { color: #0f0; }
        }
      `}</style>
    </div>
  );
};

export default BinaryLoader;