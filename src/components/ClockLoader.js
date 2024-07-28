import exp from 'constants';
import React from 'react';

const ClockLoader = ({
  size = 80,
  faceColor = 'gray-200',
  hourColor = 'black',
  minuteColor = 'gray-600',
  secondColor = 'red-500',
  markColor = 'gray-400',
  backgroundColor = 'white'
}) => {
  return (
    <div className={`flex items-center justify-center h-screen bg-${backgroundColor}`}>
      <div className={`relative w-${size} h-${size} rounded-full bg-${faceColor} shadow-lg`}>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-3 bg-${markColor}`}
            style={{
              top: '10%',
              left: '50%',
              transform: `rotate(${i * 30}deg) translateX(-50%)`,
              transformOrigin: '50% 450%',
            }}
          />
        ))}
        <div className={`absolute top-1/2 left-1/2 w-1 h-${size/3} bg-${hourColor} rounded-full`} style={{
          transform: 'translate(-50%, -100%)',
          transformOrigin: '50% 100%',
          animation: 'rotate 43200s linear infinite',
        }} />
        <div className={`absolute top-1/2 left-1/2 w-0.5 h-${size/2.5} bg-${minuteColor} rounded-full`} style={{
          transform: 'translate(-50%, -100%)',
          transformOrigin: '50% 100%',
          animation: 'rotate 3600s linear infinite',
        }} />
        <div className={`absolute top-1/2 left-1/2 w-0.5 h-${size/2} bg-${secondColor} rounded-full`} style={{
          transform: 'translate(-50%, -100%)',
          transformOrigin: '50% 100%',
          animation: 'rotate 60s linear infinite',
        }} />
        <div className={`absolute top-1/2 left-1/2 w-2 h-2 bg-${secondColor} rounded-full transform -translate-x-1/2 -translate-y-1/2`} />
      </div>
      <style jsx>{`
        @keyframes rotate {
          from { transform: translate(-50%, -100%) rotate(0deg); }
          to { transform: translate(-50%, -100%) rotate(360deg); }
        }
      `}</style>
    </div>
    );
}

export default ClockLoader;