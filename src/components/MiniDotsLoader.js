import React from 'react';

const MiniDotsLoader = ({ size = 24, color = 'blue-500' }) => {
  return (
    <div className={`inline-flex space-x-1 w-${size}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`w-${size/4} h-${size/4} rounded-full bg-${color}`}
          style={{ animation: `minidotbounce 0.6s ease-in-out ${i * 0.1}s infinite alternate` }}
        />
      ))}
      <style jsx>{`
        @keyframes minidotbounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-${size/4}px); }
        }
      `}</style>
    </div>
  );
};

export default MiniDotsLoader;