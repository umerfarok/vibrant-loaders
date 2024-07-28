import React from 'react';

const MiniHourglassLoader = ({ size = 24, color = 'blue-500' }) => {
  return (
    <div className={`inline-block w-${size} h-${size}`}>
      <div className={`w-full h-full bg-${color}`}
           style={{ 
             clipPath: 'polygon(0% 0%, 100% 0%, 50% 50%, 100% 100%, 0% 100%, 50% 50%)',
             animation: 'minihourglass 1s ease-in-out infinite'
           }}
      />
      <style jsx>{`
        @keyframes minihourglass {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default MiniHourglassLoader;