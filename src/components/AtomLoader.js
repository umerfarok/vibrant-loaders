import React from 'react';

const AtomLoader = ({ 
  size = 16, 
  coreColor = 'orange-500', 
  electronColor = 'orange-300', 
  ringColor = 'orange-400', 
  backgroundColor = 'orange-50' 
}) => {
  return (
    <div className={`vl-atom-loader vl-bg-${backgroundColor}`}>
      <style jsx>{`
        .vl-atom-loader {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        .vl-atom-core {
          width: ${size}px;
          height: ${size}px;
          background-color: var(--vl-core-color);
          border-radius: 50%;
          animation: vl-pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .vl-atom-electron {
          position: absolute;
          width: ${size/4}px;
          height: ${size/4}px;
          background-color: var(--vl-electron-color);
          border-radius: 50%;
          opacity: 0.75;
        }
        .vl-atom-ring {
          position: absolute;
          width: ${size*1.5}px;
          height: ${size*1.5}px;
          border: 4px solid var(--vl-ring-color);
          border-radius: 50%;
          animation: vl-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
          opacity: 0;
        }
        @keyframes vl-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes vl-ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
      <div className="vl-atom-container" style={{
        '--vl-core-color': `var(--vl-${coreColor}, orange)`,
        '--vl-electron-color': `var(--vl-${electronColor}, yellow)`,
        '--vl-ring-color': `var(--vl-${ringColor}, red)`,
      }}>
        <div className="vl-atom-core"></div>
        {[...Array(3)].map((_, index) => (
          <div 
            key={index}
            className="vl-atom-electron"
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${index * 120}deg) translateX(${size/2}px)`,
              animation: `vl-orbit 1s linear infinite`,
              animationDelay: `${index * 0.33}s`,
            }}
          ></div>
        ))}
        {[...Array(3)].map((_, index) => (
          <div 
            key={index}
            className="vl-atom-ring"
            style={{
              animationDelay: `${index * 0.5}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AtomLoader;