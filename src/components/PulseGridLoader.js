import React from 'react';

const PulseGridLoader = ({ size = 200, gridSize = 3 }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-purple-100">
      <div className="grid gap-4" style={{ 
        width: size, 
        height: size, 
        gridTemplateColumns: `repeat(${gridSize}, 1fr)` 
      }}>
        {[...Array(gridSize * gridSize)].map((_, i) => (
          <div key={i} className="relative flex items-center justify-center">
            <div className="w-1/2 h-1/2 bg-purple-500 rounded-full" />
            <div
              className="absolute w-full h-full bg-purple-300 rounded-full opacity-0"
              style={{
                animation: `pulse 1.5s ease-in-out ${i * 0.1}s infinite`,
              }}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.5); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};

export default PulseGridLoader;