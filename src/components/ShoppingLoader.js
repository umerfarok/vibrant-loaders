import React from 'react';
import { ShoppingBag, Package, Truck, DollarSign } from 'lucide-react';

const ShoppingLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 overflow-hidden">
      <div className="relative w-64 h-64">
        <div className="absolute inset-0 flex items-center justify-center animate-bounce" style={{ animationDuration: '2s' }}>
          <ShoppingBag size={64} className="text-blue-600" />
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
                left: `${20 + index * 25}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Icon size={24} className={`text-blue-${500 + index * 100}`} />
            </div>
          </div>
        ))}
        {[...Array(6)].map((_, index) => (
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
            <div className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full shadow-md flex items-center">
              <DollarSign size={12} className="mr-1" />
              {Math.floor(Math.random() * 90 + 10)}
            </div>
          </div>
        ))}
        <div className="absolute inset-0 border-4 border-blue-300 rounded-full animate-ping opacity-30"></div>
        <div className="absolute -bottom-8 left-0 right-0 text-center text-blue-600 text-lg font-bold animate-pulse">
          Loading amazing dealss...
        </div>
      </div>
    </div>
  );
};

export default ShoppingLoader;