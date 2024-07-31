import React from 'react';
import { ShoppingCart, Package, CreditCard, Check } from 'lucide-react';

const ShoppingLoader = ({ size = 80, color = 'blue' }) => {
  return (
    <div className="inline-flex items-center justify-center">
      <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ width: size, height: size }}>
        <div className="absolute inset-0 flex items-center">
          <div className="animate-cartMove" style={{ animationDuration: '3s' }}>
            <ShoppingCart 
              size={size * 0.4} 
              className={`text-${color}-600`}
            />
          </div>
        </div>
        {[Package, CreditCard, Check].map((Icon, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              top: `${25 + index * 25}%`,
              right: '10%',
              animation: `fadeInOut 9s ease-in-out ${index * 3}s infinite`,
              opacity: 0,
            }}
          >
            <Icon size={size * 0.25} className={`text-${color}-${400 + index * 100}`} />
          </div>
        ))}
        <div className="absolute inset-0 border-4 border-dashed rounded-lg animate-spin opacity-20"
             style={{ borderColor: `var(--tw-text-opacity-${color}-400)`, animationDuration: '12s' }} />
      </div>
      <style jsx>{`
        @keyframes cartMove {
          0%, 100% { transform: translateX(-70%); }
          50% { transform: translateX(70%); }
        }
        @keyframes fadeInOut {
          0%, 33%, 100% { opacity: 0; transform: scale(0.8); }
          16%, 17% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ShoppingLoader;