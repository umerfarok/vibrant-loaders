import React from 'react';

const PulseGridLoader = ({
  size = 80,
  gridSize = 3,
  dotColor = 'purple-500',
  pulseColor = 'purple-300',
  backgroundColor = 'purple-100'
}) => {
  return (
    <div className={`flex items-center justify-center h-screen bg-${backgroundColor}`}>
      <div className={`grid grid-cols-${gridSize} gap-4 w-${size} h-${size}`}>
        {[...Array(gridSize * gridSize)].map((_, i) => (
          <div key={i} className="relative flex items-center justify-center">
            <div className={`w-4 h-4 bg-${dotColor} rounded-full`} />
            <div
              className={`absolute w-full h-full bg-${pulseColor} rounded-full opacity-0`}
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