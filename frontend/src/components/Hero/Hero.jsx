import React from "react";
import { Link as Scroll } from "react-scroll";

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent ">
      <div className="flex h-screen items-center justify-center p-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Effortless Currency Conversion and Transfer Management
          </h1>
          <h2 className="mt-6 text-lg leading-8 text-gray-600">
            Stay on top of your finances with our real-time conversion rates and
            comprehensive transfer tracking.
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Scroll
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              to="converter"
              spy={true}
              smooth={true}
              duration={500}
            >
              Try Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.293 9.293a1 1 0 011.414 0L10 14.586l5.293-5.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Scroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
