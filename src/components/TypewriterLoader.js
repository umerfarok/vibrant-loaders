import React from 'react';

const TypewriterLoader = () => {
  const text = "Loading...";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 overflow-hidden">
      <div className="text-4xl text-green-400 font-mono">
        {text.split('').map((char, index) => (
          <span
            key={index}
            style={{
              animation: `typewriter 2s steps(1) infinite`,
              animationDelay: `${index * 0.1}s`,
              opacity: 0,
            }}
          >
            {char}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes typewriter {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default TypewriterLoader;