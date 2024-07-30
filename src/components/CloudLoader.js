import React from 'react';
import { Cloud, ArrowUp, ArrowDown } from 'lucide-react';

const CloudLoader = ({ type = 'upload', progress = 0 }) => {
  const isUpload = type === 'upload';

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
      <div className="relative flex flex-col items-center">
        <div className="relative">
          <Cloud size={100} className="text-blue-500" />
          {isUpload ? (
            <ArrowUp size={48} className="text-green-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce" />
          ) : (
            <ArrowDown size={48} className="text-green-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce" />
          )}
        </div>
        <div className="mt-4 w-64 h-3 bg-blue-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 text-blue-600 text-lg font-semibold">
          {isUpload ? 'Uploading' : 'Downloading'}: {progress}%
        </div>
      </div>
    </div>
  );
};

export default CloudLoader;