import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 z-[1000]">
      <div className="flex space-x-2 justify-center items-center">
        <span className="sr-only">Loading...</span>
        <div
          className="h-8 w-8 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "-0.3s" }}
        ></div>
        <div
          className="h-8 w-8 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "-0.15s" }}
        ></div>
        <div className="h-8 w-8 bg-white rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
