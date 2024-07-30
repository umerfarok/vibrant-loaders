import React from 'react';

const PendulumLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200 overflow-hidden">
      <div className="relative w-80 h-80">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 left-1/2 w-1 bg-gray-400"
            style={{
              height: '50%',
              transformOrigin: 'top',
              animation: `swing 1.5s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            <div className="absolute bottom-0 left-1/2 w-6 h-6 bg-blue-500 rounded-full transform -translate-x-1/2" />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes swing {
          0%, 100% { transform: rotate(45deg); }
          50% { transform: rotate(-45deg); }
        }
      `}</style>
    </div>
  );
};

export default PendulumLoader;