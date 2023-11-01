// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";


export const TestScenarioGenEditor = () => {
  return (
    <>
      <Navbar />
      <div className="mt-10 flex flex-wrap justify-center items-center font-bold text-4xl p-10">
        Comments Composer
      </div>

      <div className="flex flex-wrap justify-center items-center font-bold text-4xl p-10">
        <a href="#">
          <img
            className="h-12 mr-2 rounded-full"
            src="../src/assets/images/JavaScript.png"
            alt="JavaScript Image"
          />
        </a>
        <div className="font-bold text-2xl mb-2 pt-2 pr-4">Javascript</div>

        <div className="p-4">
          <a href="#">
            <img
              className="h-10 w-32 mr-2"
              src="../src/assets/images/arrow.png"
              alt="JavaScript Image"
            />
          </a>
        </div>

        <a href="#">
          <img
            className="h-10 mr-2 rounded-full"
            src="../src/assets/images/docCode.png"
            // alt="JavaScript Image"
          />
        </a>
        <div className="font-bold text-2xl mb-2 pt-2 pr-4">Enhanced Code</div>
      </div>

      <div className="flex flex-wrap justify-center font-bold gap-24 ">
        <div className="w-full max-w-lg px-4 py-4 mb-4 relative ">
          <textarea
            id="message1"
            rows="16"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Paste your code here or Add from a file!"
          ></textarea>

          <label
            htmlFor="uploadBtn"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute bottom-5 right-0 -translate-x-1/2 -translate-y-1/2"
          >
            Add File
          </label>
          <input type="file" id="uploadBtn" className="hidden" />
        </div>

        <div className="relative w-full max-w-lg px-4 py-4 mb-4">
          <div className="relative">
            <textarea
              id="message1"
              rows="16"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            ></textarea>

            <div className="text-white  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center absolute bottom-5 right-5">
              <div className="flex justify-content-center">
                <svg
                  className="h-8 w-8 text-blue-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x="8" y="8" width="12" height="12" rx="2" />
                  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                </svg>
                <svg
                  className="h-8 w-8 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center font-bold text-4xl p-10">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-xl text-xl px-10 py-4 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Generate
        </button>
      </div>

      <div className="px-20">
        <div className="block w-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Steps to use this tool:
          </h5>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            This free comments composer lets you Automatically generate
            comprehensive + customizable comments for your source code in a
            click of a button. To use this comments commposer, take the
            following steps -
            <ol className="list-decimal ml-6">
              <li className="leading-relaxed">
                Type,paste or upload your JavaScript code in the input box.
              </li>
              <li className="leading-relaxed">Click the convert button.</li>
              <li className="leading-relaxed">
                The resulting Java code from the conversion will be displayed in
                the output box.
              </li>
            </ol>
          </p>
        </div>
      </div>

      <div className="p-20">
        <div className="font-bold text-2xl">Explore our other services</div>
        <p>
          Enhance your Codebase: Document, Test, Extend, or Seek Clarifications
          with Ease
        </p>
      </div>
      <div className="grid grid-cols-2 justify-center gap-20 py-10 px-20">
        <Link to="/codeconverterpage">
          <div className="group max-w-lg rounded overflow-hidden shadow-lg  hover:bg-brandColor hover:cursor-pointer">
            <div className="px-20 py-14">
              {/* <div className="font-bold text-center text-xl group-hover:text-white">Refini<span className="group-hover:text-white font-bold text-brandColor">X</span></div> */}
              <p className="text-lg text-center text-gray-600 font-bold group-hover:text-white">
                Code Converter
              </p>
            </div>
          </div>
        </Link>
       
        <Link to="/codeconverterpage">
          <div className="group max-w-lg rounded overflow-hidden shadow-lg  hover:bg-brandColor hover:cursor-pointer">
            <div className="px-20 py-14">
              {/* <div className="font-bold text-center text-xl group-hover:text-white">Refini<span className="group-hover:text-white font-bold text-brandColor">X</span></div> */}
              <p className="text-lg text-center text-gray-600 font-bold group-hover:text-white">
                Code Explainer
              </p>
            </div>
          </div>
        </Link>
        <Link to="/codeconverterpage">
          <div className="group max-w-lg rounded overflow-hidden shadow-lg  hover:bg-brandColor hover:cursor-pointer">
            <div className="px-20 py-14">
              {/* <div className="font-bold text-center text-xl group-hover:text-white">Refini<span className="group-hover:text-white font-bold text-brandColor">X</span></div> */}
              <p className="text-lg text-center text-gray-600 font-bold group-hover:text-white">
                Test Scenario <br /> Generator
              </p>
            </div>
          </div>
        </Link>

        <div className="group max-w-lg rounded overflow-hidden shadow-lg  hover:bg-brandColor">
          <div className=" py-14">
            {/* <div className="font-bold text-center text-xl group-hover:text-white">Refini<span className="group-hover:text-white font-bold text-brandColor">X</span></div> */}
            <p className="text-lg text-center text-gray-600 font-bold group-hover:text-white">
              Code Optimizer
            </p>

            <p className="text-sm text-center bg-blue-700 text-white font-bold group-hover:bg-yellow-300 group-hover:text-white">
              Coming Soon
            </p>
          </div>
        </div>

      
      </div>

      <div className="flex flex-wrap justify-center items-center font-bold text-4xl p-10"></div>
      <div className="flex flex-wrap justify-center items-center font-bold text-4xl p-10"></div>
      <Footer />
    </>
  );
};
