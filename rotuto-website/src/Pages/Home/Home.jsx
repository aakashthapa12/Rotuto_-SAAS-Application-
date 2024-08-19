import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import WhatIsRotuto from "../../components/WhatIsRotuto/WhatIsRotuto";
import FlawlessSupport from "../../components/FlawlessSupport/FlawlessSupport";
const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center  text-black lg:mx-auto mx-8 max-w-screen-xl">
        <div className="lg:text-7xl lg:mb-10 lg:mt-16 text-4xl max-sm:text-2xl mb-8 mt-14 fontstyle font-bold">
          <span className="block w-full text-justify">
            Unleash the Power of AI Agents
          </span>
          <span className="whitespace-nowrap block text-center">
            for your Business
          </span>
        </div>
        <div className="lg:text-2xl text-xl max-sm:text-lg lg:max-w-5xl font-semibold text-justify px-4 lg:px-0">
          Empowering businesses with intelligent automation that enhances
          productivity, optimizes workflows, and delivers personalized
          experiences, without compromising the human touch.
        </div>
        <div className="lg:mt-16 lg:mb-12 mt-12 mb-8 flex flex-col items-center lg:items-start">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full">
            Get Started free
          </button>
          <p className="text-xs text-gray-500 mx-3">No credit card required</p>
        </div>
        <div className="lg:mt-16 h-96 lg:mb-12 mt-10 mb-6 rounded-3xl bg-gradient-to-r from-blue-900 to-purple-500 w-4/5"></div>
      </div>
      <WhatIsRotuto />
      <div className="max-w-screen-xl lg:mx-auto mx-6 lg:mt-12 mt-8">
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full lg:mb-12 mb-8">
          <p className="mx-8">Use it for</p>
        </button>
        <ul className="flex flex-col font-medium p-4 max-sm:w-[80%] max-sm:mx-auto md:ml-6 lg:ml-16 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  mb-4">
          <li>
            <NavLink
              to="/"
              className="block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 underline hover:underline"
              activeClassName="text-blue-700 underline"
              aria-current="page"
            >
              Customer Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 underline hover:underline"
              activeClassName="text-blue-700 underline"
            >
              HR Support
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 underline hover:underline"
              activeClassName="text-blue-700 underline"
            >
              Recruiting
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 underline hover:underline"
              activeClassName="text-blue-700 underline"
            >
              Sales
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 underline hover:underline"
              activeClassName="text-blue-700 underline"
            >
              Executive Assistant
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 underline hover:underline"
              activeClassName="text-blue-700 underline"
            >
              Operations
            </NavLink>
          </li>
        </ul>
        <FlawlessSupport />
      </div>
    </>
  );
};

export default Home;
