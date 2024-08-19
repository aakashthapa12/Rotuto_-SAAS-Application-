import React from "react";

const WhatIsRotuto = () => {
  return (
    <div className="w-full bg-blue-900 text-white">
      <div className="flex flex-col items-center max-w-screen-xl lg:mx-auto mx-8">
        <h1 className="lg:text-5xl font-bold text-2xl max-sm:text-xl lg:mb-10 mb-6 mt-6">
          What is Rotuto?
        </h1>
        <p className="lg:text-xl text-lg max-sm:text-base lg:max-w-4xl font-semibold text-justify px-4 lg:px-0 leading-relaxed lg:mb-10 mb-6">
          Rotuto is an intelligent AI assistant like ChatGPT - with the added
          benefit of being able to train it on your business, your team, your
          processes, and your clients with your own knowledge base. Use Rotuto
          as an employee to support your team, answer questions, help with
          creative work, troubleshoot issues, and brainstorm ideas.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-24 space-y-4 lg:space-y-0 items-center justify-center mx-4 lg:mx-0">
        <div className="bg-blue-700 text-white border border-white rounded-full shadow-lg shadow-black p-3">
          <p className="px-6">No Keyword Searches</p>
        </div>
        <div className="bg-blue-700 text-white border border-white rounded-full shadow-lg shadow-black p-3">
          <p className="px-6">No Regurgitated Answers</p>
        </div>
        <div className="bg-blue-700 text-white border border-white rounded-full shadow-lg shadow-black p-3">
          <p className="px-6">No Need for context every time</p>
        </div>
      </div>
        <div className="lg:h-16 h-12"></div>
    </div>
  );
};

export default WhatIsRotuto;
