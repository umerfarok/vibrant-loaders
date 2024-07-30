import React from 'react';
import { ShoppingBag, Package, Truck, DollarSign } from 'lucide-react';

const ShoppingLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-200 overflow-hidden">
      <div className="relative w-full max-w-md aspect-square">
        <div className="absolute inset-0 flex items-center justify-center animate-bounce" style={{ animationDuration: '2s' }}>
          <ShoppingBag size={80} className="text-orange-500" />
        </div>
        {[Package, Truck, ShoppingBag].map((Icon, index) => (
          <div
            key={index}
            className={`absolute w-full h-full animate-spin`}
            style={{ animationDuration: `${(index + 2) * 5}s` }}
          >
            <div
              className="absolute bg-white rounded-full p-3 shadow-lg"
              style={{
                top: '50%',
                left: `${15 + index * 30}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Icon size={32} className={`text-orange-${400 + index * 100}`} />
            </div>
          </div>
        ))}
        {[...Array(8)].map((_, index) => (
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
            <div className="bg-orange-100 text-orange-800 text-sm font-bold px-3 py-1 rounded-full shadow-md flex items-center">
              <DollarSign size={16} className="mr-1" />
              {Math.floor(Math.random() * 90 + 10)}
            </div>
          </div>
        ))}
        <div className="absolute inset-0 border-8 border-orange-300 rounded-full animate-ping opacity-30"></div>
        <div className="absolute -bottom-12 left-0 right-0 text-center text-orange-600 text-xl font-bold animate-pulse">
          Loading amazing deals...
        </div>
      </div>
    </div>
  );
};

export default ShoppingLoader;