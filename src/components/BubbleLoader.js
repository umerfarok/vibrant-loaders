import React from 'react';

const BubbleLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-purple-100 overflow-hidden">
      <div className="relative w-64 h-64">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-purple-400 rounded-full opacity-70"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes float {
          from { transform: translateY(0) scale(1); }
          to { transform: translateY(-15px) scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default BubbleLoader;