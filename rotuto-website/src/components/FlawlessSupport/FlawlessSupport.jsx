import React from "react";
import flawless from "../../assets/flawless.png";

const FlawlessSupport = () => {
  return (
    <div className="rounded-3xl bg-slate-200 lg:mx-auto mx-8 max-w-screen-xl lg:mb-12 mb-8">
      <div className="lg:h-14 h-8"></div>
      <div className="lg:ml-20 max-sm:ml-8 md:ml-20 lg:mb-16 mb-8 lg:w-[40%]">
        <h1 className="lg:text-4xl text-2xl max-sm:text-xl font-bold mb-8 lg:mb-10">
          Flawless support - instantly and 24 / 7
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center text-black">
        <div className="lg:w-[50%] lg:ml-20 ml-8 lg:-mt-10">
          <p className="lg:text-xl font-semibold text-lg max-sm:text-base lg:w-[50%] lg:mb-12 mb-6">
            Give it your knowledge base Define escalation rules
          </p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full lg:mb-12 mb-8">
            <p className="md:mx-8 mx-4">Sign-Up for Free</p>
          </button>
        </div>
        <div className="w-full lg:w-[50%] lg:pr-4 lg:pb-4 mt-8 lg:mt-0 lg:flex lg:justify-end">
          <img
            src={flawless}
            alt="AI Employee"
            className="w-full rounded-3xl lg:w-[90%] "
          />
        </div>
      </div>
    </div>
  );
};

export default FlawlessSupport;
