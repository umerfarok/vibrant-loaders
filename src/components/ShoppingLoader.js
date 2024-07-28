import React from 'react';
import { ShoppingBag, Package, Truck } from 'lucide-react';

const ShoppingLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-orange-50 to-orange-200">
      <div className="relative w-64 h-64">
        <div className="absolute inset-0 flex items-center justify-center animate-bounce" style={{ animationDuration: '2s' }}>
          <ShoppingBag size={64} className="text-orange-500" />
        </div>
        {[Package, Truck, ShoppingBag].map((Icon, index) => (
          <div 
            key={index}
            className={`absolute w-full h-full animate-spin`}
            style={{ animationDuration: `${(index + 2) * 5}s` }}
          >
            <div 
              className="absolute bg-white rounded-full p-2 shadow-lg"
              style={{
                top: '50%',
                left: `${10 + index * 25}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Icon size={24} className={`text-orange-${400 + index * 100}`} />
            </div>
          </div>
        ))}
        {[...Array(5)].map((_, index) => (
          <div 
            key={index}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <div className="bg-orange-100 text-orange-800 text-xs font-bold px-2 py-1 rounded-full shadow">
              ${Math.floor(Math.random() * 90 + 10)}
            </div>
          </div>
        ))}
        <div className="absolute inset-0 border-4 border-orange-300 rounded-full animate-ping opacity-30"></div>
        <div className="absolute -bottom-8 left-0 right-0 text-center text-orange-600 font-semibold animate-pulse">
          Loading amazing deals...
        </div>
      </div>
    </div>
  );
};

export default ShoppingLoader;