import React from 'react';

const MiniSpinnerLoader = ({ size = 24, color = 'blue-500', thickness = 2 }) => {
  return (
    <div className={`inline-block w-${size} h-${size}`}>
      <div 
        className={`w-full h-full rounded-full border-${thickness} border-${color} border-t-transparent`}
        style={{ animation: 'minispin 0.8s linear infinite' }}
      />
      <style jsx>{`
        @keyframes minispin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default MiniSpinnerLoader;