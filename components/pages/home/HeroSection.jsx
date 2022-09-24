import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex flex-col lg:flex-row">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Welcome to</span>{" "}
            <span className="block text-blue-500 xl:inline">
              {" "}
              Cuartero NHS - SPA
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            This is the official website of Cuartero National High School
            Special Program in the Arts in Cuartero, Capiz, Philippines,
            purposedly to showcase different outputs of our students taking the
            SPA program and promote the meaningful exchange of ideas to its
            linkages.
          </p>
          <div className="my-5 sm:my-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                href="/"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                href="/"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
        {/* Image */}
        <Image
          layout="intrinsic"
          src="/Saly-16.svg"
          alt="Hero Image"
          width={650}
          height={650}
          className="pt-8"
        />
      </div>
    </>
  );
};

export default HeroSection;
