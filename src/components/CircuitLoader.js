import React from 'react';

const CircuitLoader = ({ size = 60, color = 'green' }) => {
  return (
    <div className="inline-flex items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg 
          viewBox="0 0 100 100" 
          className={`w-full h-full text-${color}-500`}
        >
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M50 5 L50 15 M50 85 L50 95 M5 50 L15 50 M85 50 L95 50" 
                stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="15" r="4" fill="currentColor" className="animate-pulse" />
          <circle cx="85" cy="50" r="4" fill="currentColor" className="animate-pulse" 
                  style={{ animationDelay: '0.25s' }} />
          <circle cx="50" cy="85" r="4" fill="currentColor" className="animate-pulse"
                  style={{ animationDelay: '0.5s' }} />
          <circle cx="15" cy="50" r="4" fill="currentColor" className="animate-pulse"
                  style={{ animationDelay: '0.75s' }} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-3 h-3 bg-${color}-500 rounded-full animate-ping`} />
        </div>
      </div>
    </div>
  );
};

export default CircuitLoader;