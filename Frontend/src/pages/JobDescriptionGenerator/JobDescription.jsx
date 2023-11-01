// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { DownloadWithSVG } from "../../helpers/DownloadWithSVG";
import CopyToClipboard from "react-copy-to-clipboard";

export const JobDescription = () => {
  const [fileData, setFileData] = useState("");
  const [sourceLanguageData, setSourceLanguageData] = useState(null);
  const [finalResponse, setFinalResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Initialize as loading
  // const sourceLanguageDataRef = useRef(null);

  // const payLoad = {
  //   source_language: sourceLanguageData?.sourceLanguageName,
  //   code: fileData,
  // };

  // let fileReader;

  // Fetch  Data from previous page states.
  // const location = useLocation();
  // const data = location.state;

  // useEffect(() => {
  //   setSourceLanguageData(data.SourceLanguage);
  // }, [sourceLanguageData, data]);

  /*
   * Convert Code by calling backend API of code converter...
   */

  // const convertCode = async (payLoad) => {
  //   try {
  //     const response = await axios.post(
  //       `http://localhost:5000/codeoptimizer`,
  //       payLoad
  //     );
  //     setIsLoading(false);
  //     setFinalResponse(response.data);

  //     toast.success("Generated Successfully!");
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something Went Wrong");
  //     toast.error("Please try again in sometime!");
  //   }
  // };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   await convertCode(payLoad);
  // };

  // /*
  //  * Extract Data From File using these methods...
  //  */
  // const handleFileRead = () => {
  //   const content = fileReader.result;
  //   setFileData(content);
  // };

  // const handleFileChosen = (file) => {
  //   fileReader = new FileReader();
  //   fileReader.onloadend = handleFileRead;
  //   fileReader.readAsText(file);
  // };

  // const skeletonItems = [];
  // for (let i = 0; i < 4; i++) {
  //   skeletonItems.push(<div key={i} className="skeleton skeleton-text"></div>);
  // }

  return (
    <>
      <Navbar />
      <div className="mt-10 flex flex-wrap justify-center items-center font-bold text-4xl p-10">
        AI Job Description Generator
      </div>

      <div className="flex flex-wrap justify-center font-bold gap-24 ">
        <div className="w-full max-w-lg px-4 py-4 mb-4 relative ">
          <div className="">
            <div className="gap-10 pt-3 text-center inline-flex text-gray-600 font-bold">
              Available ASAP
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="font-normal pb-3 text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              dolore cum alias rerum vero, accusamus hic. A delectus incidunt
              numquam aliquid adipisci commodi dicta fugiat, aperiam doloribus
              quas sint? Ut?
            </div>

            {/* <span class="ml-4 text-sm font-medium text-gray-900 dark:text-gray-300">
              Toggle me
            </span> */}

            <div className="pt-3 text-gray-600 font-bold">
              Availability
              <div className="font-normal py-3 text-gray-700 dark:text-gray-400">
                Select date range
              </div>
              <div date-rangepicker class="flex items-center">
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    name="start"
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date start"
                  />
                </div>
                <span class="mx-4 text-gray-500">to</span>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    name="end"
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date end"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-lg px-4 py-4 mb-4">
          <div className="relative">
            {isLoading ? (
              <div className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <div className="p-4 justify-center item-center">
                  <div className="py-3.5 mb-4 flex items-center gap-5">
                    <div className="loader">
                      <div className="loader-inner"></div>
                    </div>
                    {/* {skeletonItems} */}
                  </div>
                  {/* <div className="py-3.5">{skeletonItems}</div> */}
                  {/* <div className="py-3.5">{skeletonItems}</div> */}
                  {/* <div className="py-3.5">{skeletonItems}</div> */}
                </div>
              </div>
            ) : (
              <textarea
                id="message1"
                rows="16"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                value={isLoading ? "" : finalResponse}
                readOnly
              ></textarea>
            )}

            <div className="text-white  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center absolute bottom-5 right-5">
              <div className="flex justify-content-center">
                {/* <CopyToClipboard text={value}>
                  <button>
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
                  </button>
                </CopyToClipboard> */}

                <div className="flex items-center">
                  {/* <DownloadWithSVG
                    filename="output.txt"
                    exportFile={exportFileData}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center font-bold text-4xl p-10">
        <button
          type="button"
          // onClick={handleClick}
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

          <div className="font-normal text-gray-700 dark:text-gray-400">
            This free comments composer lets you Automatically generate
            comprehensive + customizable comments for your source code in a
            click of a button. To use this comments commposer, take the
            following steps -
            <ol className="list-decimal ml-6">
              <li className="leading-relaxed">
                Type,paste or upload your JavaScript or any code in the input
                box.
              </li>
              <li className="leading-relaxed">Click the generate button.</li>
              <li className="leading-relaxed">
                The resulting Optimized code from the conversion will be
                displayed in the output box.
              </li>
            </ol>
          </div>
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
        {/* <Link to="/commentcomposer/chooselanguage"> */}
        <div className="group max-w-lg rounded overflow-hidden shadow-lg  hover:bg-brandColor ">
          <div className=" py-14">
            {/* <div className="font-bold text-center text-xl group-hover:text-white">Refini<span className="group-hover:text-white font-bold text-brandColor">X</span></div> */}
            <p className="text-lg text-center text-gray-600 font-bold group-hover:text-white">
              Enhanced Interview Assistant
            </p>
            <p className="text-sm text-center bg-blue-700 text-white font-bold group-hover:bg-yellow-300 group-hover:text-white">
              Coming Soon
            </p>
          </div>
        </div>
        {/* </Link> */}

        {/* <Link to="/codeexplainer/chooselanguage"> */}
        <div className="group max-w-lg rounded overflow-hidden shadow-lg  hover:bg-brandColor ">
          <div className=" py-14">
            {/* <div className="font-bold text-center text-xl group-hover:text-white">Refini<span className="group-hover:text-white font-bold text-brandColor">X</span></div> */}
            <p className="text-lg text-center text-gray-600 font-bold group-hover:text-white">
              Enhanced Project Management Assistant
            </p>
            <p className="text-sm text-center bg-blue-700 text-white font-bold group-hover:bg-yellow-300 group-hover:text-white">
              Coming Soon
            </p>
          </div>
        </div>
        {/* </Link> */}
      </div>

      <div className="flex flex-wrap justify-center items-center font-bold text-4xl p-10"></div>
      <div className="flex flex-wrap justify-center items-center font-bold text-4xl p-10"></div>
      <Footer />
    </>
  );
};

export default JobDescription;
