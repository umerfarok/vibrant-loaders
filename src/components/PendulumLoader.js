import React from 'react';

const PendulumLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200 overflow-hidden">
      <div className="relative w-64 h-64">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 left-1/2 w-0.5 bg-gray-400"
            style={{
              height: '45%',
              transformOrigin: 'top',
              animation: `swing 1.5s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-indigo-500 rounded-full transform -translate-x-1/2" />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes swing {
          0%, 100% { transform: rotate(40deg); }
          50% { transform: rotate(-40deg); }
        }
      `}</style>
    </div>
  );
};

export default PendulumLoader;