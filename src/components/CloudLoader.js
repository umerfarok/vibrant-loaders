import React from 'react';
import { Cloud, ArrowUp, ArrowDown } from 'lucide-react';

const CloudLoader = ({ type = 'upload', progress = 0 }) => {
  const isUpload = type === 'upload';

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-200">
      <div className="relative flex flex-col items-center">
        <div className="relative">
          <Cloud size={80} className="text-indigo-500" />
          {isUpload ? (
            <ArrowUp size={40} className="text-green-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce" />
          ) : (
            <ArrowDown size={40} className="text-green-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce" />
          )}
        </div>
        <div className="mt-4 w-56 h-2 bg-indigo-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 text-indigo-600 text-base font-semibold">
          {isUpload ? 'Uploading' : 'Downloading'}: {progress}%
        </div>
      </div>
    </div>
  );
};

export default CloudLoader;