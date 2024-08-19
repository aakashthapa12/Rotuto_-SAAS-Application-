import React from "react";
import AboutImage from "../../components/AboutImage/AboutImage";

const AboutUs = () => {
  return (
    <div className=" my-12 lg:mx-auto mx-8 max-w-screen-xl">
      <div className="flex items-center justify-center">
        <h1 className="lg:text-7xl lg:mb-10  text-4xl max-sm:text-2xl mb-8 lg:mt-6 mt-4 font-bold text-blue-900">
          About
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 lg:mb-12 mb-8">
        <AboutImage />
        <AboutImage />
        <AboutImage />
        <AboutImage />
        <AboutImage />
      </div>
      <div className="border border-black rounded-3xl bg-slate-50 p-8 lg:mt-16">
        <div className="mb-6 lg:mb-32">
          <p className="font-semibold lg:text-2xl text-xl max-sm:text-lg">
            Stories of success
          </p>
        </div>
        <button className="bg-white hover:bg-gray-100 text-black py-2 px-4 shadow-lg shadow-black border-black rounded-full">
          <p className="mx-8">View video</p>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
