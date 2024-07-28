import React from 'react';

const MiniFlipLoader = ({ size = 24, frontColor = 'blue-500', backColor = 'blue-300' }) => {
  return (
    <div className={`inline-block w-${size} h-${size}`}>
      <div className="relative w-full h-full"
           style={{ transformStyle: 'preserve-3d', animation: 'miniflip 1.2s infinite' }}>
        <div className={`absolute w-full h-full bg-${frontColor} rounded`} />
        <div className={`absolute w-full h-full bg-${backColor} rounded`}
             style={{ transform: 'rotateY(180deg)' }} />
      </div>
      <style jsx>{`
        @keyframes miniflip {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
        }
      `}</style>
    </div>
  );
};

export default MiniFlipLoader;