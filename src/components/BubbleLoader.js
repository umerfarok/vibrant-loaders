import React from 'react';

const BubbleLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-100 overflow-hidden">
      <div className="relative w-80 h-80">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-400 rounded-full opacity-50"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
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
          to { transform: translateY(-20px) scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default BubbleLoader;