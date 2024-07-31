import React from 'react';

const BinaryLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 overflow-hidden">
      <div className="grid grid-cols-10 gap-1">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="w-6 h-6 flex items-center justify-center text-sm font-mono"
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
          0%, 100% { color: #4a5568; }
          50% { color: #48bb78; }
        }
      `}</style>
    </div>
  );
};

export default BinaryLoader;