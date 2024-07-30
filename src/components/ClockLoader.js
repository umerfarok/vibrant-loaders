import React from 'react';

const ClockLoader = ({
  faceColor = 'gray-200',
  hourColor = 'black',
  minuteColor = 'gray-600',
  secondColor = 'red-500',
  markColor = 'gray-400',
  backgroundColor = 'white'
}) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-${backgroundColor} overflow-hidden`}>
      <div className={`relative w-80 h-80 rounded-full bg-${faceColor} shadow-xl`}>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-4 bg-${markColor}`}
            style={{
              top: '8%',
              left: '50%',
              transform: `rotate(${i * 30}deg) translateX(-50%)`,
              transformOrigin: '50% 460%',
            }}
          />
        ))}
        <div className={`absolute top-1/2 left-1/2 w-1.5 h-24 bg-${hourColor} rounded-full`} style={{
          transform: 'translate(-50%, -100%)',
          transformOrigin: '50% 100%',
          animation: 'rotate 43200s linear infinite',
        }} />
        <div className={`absolute top-1/2 left-1/2 w-1 h-32 bg-${minuteColor} rounded-full`} style={{
          transform: 'translate(-50%, -100%)',
          transformOrigin: '50% 100%',
          animation: 'rotate 3600s linear infinite',
        }} />
        <div className={`absolute top-1/2 left-1/2 w-0.5 h-36 bg-${secondColor} rounded-full`} style={{
          transform: 'translate(-50%, -100%)',
          transformOrigin: '50% 100%',
          animation: 'rotate 60s linear infinite',
        }} />
        <div className={`absolute top-1/2 left-1/2 w-4 h-4 bg-${secondColor} rounded-full transform -translate-x-1/2 -translate-y-1/2`} />
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