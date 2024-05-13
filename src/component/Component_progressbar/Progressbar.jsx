import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isInProgress, setIsInProgress] = useState(false);


  useEffect(() => {
    if (progress === 100) {
      alert('Process is completed!');
    }
  }, [progress]);

  useEffect(() => {
    if (isInProgress) {
      const interval = setInterval(() => {
        setProgress(prevProgress => {
          const newProgress = prevProgress + 1;
          if (newProgress >= 100) {
            clearInterval(interval);
            setIsInProgress(false);
            return 100;
          }
          return newProgress;
        });
      }, 90); // Adjust interval as needed
      return () => clearInterval(interval);
    }
  }, [isInProgress]);

  const startProgress = () => {
    setIsInProgress(true);
    setProgress(0);
  };

  return (
    <div className="w-full p-4">
      <button
        onClick={startProgress}
        disabled={isInProgress}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        title="Hit me to  start progress"
      >
        Start Progress
      </button>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
              Progress
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-blue-600">
              {progress}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-blue-200">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
