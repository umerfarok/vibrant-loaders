import React from 'react';

const ClockLoader = ({ size = 200 }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative rounded-full bg-white shadow-xl" style={{ width: size, height: size }}>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-3 bg-gray-400"
            style={{
              top: '10%',
              left: '50%',
              transform: `rotate(${i * 30}deg) translateX(-50%)`,
              transformOrigin: '50% 450%',
            }}
          />
        ))}
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1/3 bg-black rounded-full" style={{
          transform: 'translate(-50%, -100%)',
          transformOrigin: '50% 100%',
          animation: 'rotate 43200s linear infinite',
        }} />
        <div className="absolute top-1/2 left-1/2 w-1 h-2/5 bg-gray-600 rounded-full" style={{
          transform: 'translate(-50%, -100%)',
          transformOrigin: '50% 100%',
          animation: 'rotate 3600s linear infinite',
        }} />
        <div className="absolute top-1/2 left-1/2 w-0.5 h-1/2 bg-red-500 rounded-full" style={{
          transform: 'translate(-50%, -100%)',
          transformOrigin: '50% 100%',
          animation: 'rotate 60s linear infinite',
        }} />
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <style jsx>{`
        @keyframes rotate {
          from { transform: translate(-50%, -100%) rotate(0deg); }
          to { transform: translate(-50%, -100%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ClockLoader;