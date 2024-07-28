import React from 'react';

const RotatingSquaresLoader = ({
  size = 80,
  squareColors = ['red-500', 'blue-500', 'green-500', 'yellow-500'],
  backgroundColor = 'gray-100'
}) => {
  return (
    <div className={`flex items-center justify-center h-screen bg-${backgroundColor}`}>
      <div className={`relative w-${size} h-${size}`}>
        {squareColors.map((color, i) => (
          <div
            key={i}
            className={`absolute w-1/2 h-1/2 bg-${color}`}
            style={{
              top: i < 2 ? '0' : '50%',
              left: i % 2 === 0 ? '0' : '50%',
              transformOrigin: i === 0 ? '100% 100%' : i === 1 ? '0% 100%' : i === 2 ? '100% 0%' : '0% 0%',
              animation: `rotate-${['tl', 'tr', 'bl', 'br'][i]} 2s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes rotate-tl {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(90deg); }
        }
        @keyframes rotate-tr {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-90deg); }
        }
        @keyframes rotate-bl {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-90deg); }
        }
        @keyframes rotate-br {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(90deg); }
        }
      `}</style>
    </div>
  );
};

export default RotatingSquaresLoader;