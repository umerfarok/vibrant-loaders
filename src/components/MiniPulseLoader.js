import React from 'react';

const MiniPulseLoader = ({ size = 24, color = 'blue-500' }) => {
  return (
    <div className={`inline-flex items-center justify-center w-${size} h-${size}`}>
      <div className={`w-full h-full rounded-full bg-${color} opacity-75`}
           style={{ animation: 'minipulse 1.2s ease-in-out infinite' }}
      />
      <style jsx>{`
        @keyframes minipulse {
          0%, 100% { transform: scale(0); opacity: 0.75; }
          50% { transform: scale(1); opacity: 0.25; }
        }
      `}</style>
    </div>
  );
};

export default MiniPulseLoader;