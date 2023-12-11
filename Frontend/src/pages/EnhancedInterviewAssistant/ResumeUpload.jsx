import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Circle } from "rc-progress";
import axios from "axios";
import { toast } from "react-toastify";

// import PDFJS from 'pdfjs-dist/build/pdf.worker';
// import { getDocument } from 'pdfjs-dist/build/pdf.combined';

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [JobDescription, setJobDescription] = useState("");

  const [hidden, setHidden] = useState(false); // To hide response data with out any input
  const [color, setColor] = useState(""); // for pie chart color
  const [isLoading, setIsLoading] = useState(false); // Initialize as loading
  const [finalResponse, setFinalResponse] = useState(""); // response from backend
  const [percent, setPercent] = useState(0); // response from backend

  useEffect(() => {
    console.log(color + " -- color");
    console.log(finalResponse + " -- response");
    console.log(percent + " -- percent");
  }, [color, finalResponse, percent]);

  const getColorForPercentage = (response) => {
    const match = response.match(/(\d+%)/);
    const percentt = match ? parseInt(match[0], 10) : null;

    if (percentt > 75) {
      setColor("green");
    } else if (percentt > 50) {
      setColor("orange");
    } else {
      setColor("red");
    }
    setPercent(percentt);
  };

  const resumeMatcher = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("job_description", JobDescription);

    try {
      const response = await axios.post(
        // `http://localhost:5000/interviewAssistant`,
        `http://localhost:5000/resume-score-checker`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setIsLoading(false);
      setFinalResponse(response.data);
      console.log(response.data);
      getColorForPercentage(response.data);

      toast.success("Generated Successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
      toast.error("Please try again in sometime!");
    }
  };

  const handleClickGenerate = async (e) => {
    e.preventDefault();
    setHidden(true);
    setIsLoading(true);
    // console.log(payLoad);
    await resumeMatcher();
    // await new Promise(resolve => setTimeout(resolve, 10000));
    // setIsLoading(false);
  };

  const skeletonItems = [];
  for (let i = 0; i < 4; i++) {
    skeletonItems.push(<div key={i} className="skeleton skeleton-text"></div>);
  }

  return (
    <>
      <Navbar />

      <div className="mt-10 flex flex-wrap justify-center items-center font-bold text-4xl p-14">
        Resume Analyser
      </div>

      <div className="flex flex-wrap justify-center font-bold gap-40">
        <div className="w-full max-w-2xl px-4 py-4 mb-4 relative ">
          <textarea
            id="message1"
            rows="12"
            className=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Paste your Job Description here"
            onChange={(e) => {
              setJobDescription(e.target.value);
            }}
          ></textarea>

          <div className="flex items-center justify-center w-full pt-4">
            <label
              htmlFor="uploadBtn"
              className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">
                    {" "}
                    Resume- Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  ( PNG )
                </p>
              </div>
              <input
                type="file"
                id="uploadBtn"
                accept=".pdf"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>

          <div className="text-sm pt-4">
            {file ? file.name : "No file choosen"}
          </div>
        </div>

        <div className="grid grid-row">
          <div className="flex flex-wrap justify-center items-center font-bold text-4xl pt-10">
            <button
              type="button"
              // onClick={handleClickGenerate}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-lg px-14 py-4 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Analyse <br />
              resume
            </button>
          </div>
          <div className="flex flex-wrap justify-center items-center font-bold text-4xl pb-10">
            <button
              type="button"
              // onClick={handleClickGenerate}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-lg px-12 py-4 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Generate <br />
              questions
            </button>
          </div>
        </div>
        <div
          className={`relative w-full max-w-lg px-4 py-4 mb-4 
          ${hidden ? "block" : "hidden"}
          `}
        >
          <div className="relative">
            {isLoading ? (
              <div>
                <div className="block py-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <div className="p-4 justify-center item-center">
                    <div className="py-3.5 mb-4 flex items-center gap-5">
                      <div className="loader">
                        <div className="loader-inner"></div>
                      </div>
                      {skeletonItems}
                    </div>
                    <div className="py-3.5">{skeletonItems}</div>
                  </div>
                </div>
                <div className="p-10">
                  <div className="mb-4 flex items-center gap-5">
                    {skeletonItems}
                  </div>
                  <div className=" mb-4 flex items-center gap-5">
                    {skeletonItems}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <textarea
                  id="message1"
                  rows="10"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  value={finalResponse}
                  readOnly
                ></textarea>

                <div className="flex justify-left items-center gap-10 pt-10 h-28">
                  <div>Profile matching to Job Description :</div>
                  <div className="grid grid-row-2 w-14">
                    <Circle
                      percent={percent}
                      strokeWidth={20}
                      steps={{
                        count: 10,
                        space: 4,
                      }}
                      strokeColor={color}
                    />

                    <div className="flex justify-center">{percent}%</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="block mx-4 h-auto p-4 w-auto text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <div className="flex items-center gap-5 bg-gray-500">
          <div>Resume report</div>
          <div>Questions</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ResumeUpload;
