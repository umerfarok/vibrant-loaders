import React from 'react';

const PulseGridLoader = ({
  gridSize = 3,
  dotColor = 'purple-500',
  pulseColor = 'purple-300',
  backgroundColor = 'purple-100'
}) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-${backgroundColor} overflow-hidden`}>
      <div className={`grid grid-cols-${gridSize} gap-6 w-80 h-80`}>
        {[...Array(gridSize * gridSize)].map((_, i) => (
          <div key={i} className="relative flex items-center justify-center">
            <div className={`w-6 h-6 bg-${dotColor} rounded-full`} />
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
          0%, 100% { transform: scale(0.5);
          opacity: 0; }
          50% { transform: scale(1.5); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};

export default PulseGridLoader;