import React from 'react';

const MiniRippleLoader = ({ size = 24, color = 'blue-500' }) => {
  return (
    <div className={`inline-block relative w-${size} h-${size}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`absolute top-0 left-0 w-full h-full rounded-full border border-${color}`}
          style={{ 
            animation: `miniripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) ${i * 0.5}s infinite`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes miniripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(1); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default MiniRippleLoader;