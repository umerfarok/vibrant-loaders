import React from 'react';

const BouncingDotsLoader = ({
  size = 80,
  dotSize = 16,
  dotColors = ['red-500', 'blue-500', 'green-500'],
  backgroundColor = 'gray-100'
}) => {
  return (
    <div className={`flex items-center justify-center h-screen bg-${backgroundColor}`}>
      <div className={`flex space-x-4 w-${size}`}>
        {dotColors.map((color, i) => (
          <div
            key={i}
            className={`w-${dotSize} h-${dotSize} bg-${color} rounded-full`}
            style={{
              animation: `bounce 0.6s ease-in-out ${i * 0.1}s infinite alternate`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default BouncingDotsLoader;