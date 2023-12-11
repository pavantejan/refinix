// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "react-web-modal";
import closeOutline from "../../assets/close-outline.svg";

export const InterviewAssistant = () => {
  const [file, setFile] = useState(null);

  const [InterviewType, setInterviewType] = useState("");
  const [InterviewStage, setInterviewStage] = useState("");
  const [Interviewer, setInterviewer] = useState("");
  const [InterviewLanguage, setInterviewLanguage] = useState("");
  const [JobDescription, setJobDescription] = useState("");

  const [value, setValue] = useState(0); // no of questions

  // const [isLoading, setIsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // Initialize as loading

  const [isVisible, setIsVisible] = useState(false); // for modal

  const [hidden, setHidden] = useState(false); // To hide the questions colm

  // data feteched from backend need to be mapped into this format for QnA
  const [toggles, setToggles] = useState([
    {
      question: "Question 1",
      buttonText: "Toggle 1",
      divId: "toggle1",
      isVisible: false,
    },
    {
      question: "Question 2",
      buttonText: "Toggle 2",
      divId: "toggle2",
      isVisible: false,
    },
    {
      question: "Question 3",
      buttonText: "Toggle 3",
      divId: "toggle3",
      isVisible: false,
    },
    {
      question: "Question 1",
      buttonText: "Toggle 1",
      divId: "toggle4",
      isVisible: false,
    },
    {
      question: "Question 1",
      buttonText: "Toggle 1",
      divId: "toggle5",
      isVisible: false,
    },
    {
      question: "Question 1",
      buttonText: "Toggle 1",
      divId: "toggle6",
      isVisible: false,
    },
  ]);

  const payLoad = {
    interviewType: InterviewType,
    interviewStage: InterviewStage,
    interviewer: Interviewer,
    interviewLanguage: InterviewLanguage,
    noOfQuestions: value,
    jobDescription: JobDescription,
  };

  const handleToggle = (index) => {
    const updatedToggles = [...toggles];
    updatedToggles[index].isVisible = !updatedToggles[index].isVisible;
    setToggles(updatedToggles);
  };

  const handleSelect1 = (option) => {
    setInterviewType(option);
  };

  const handleSelect2 = (option) => {
    setInterviewStage(option);
  };

  const handleSelect3 = (option) => {
    setInterviewer(option);
  };

  const handleSelect4 = (option) => {
    setInterviewLanguage(option);
  };

  useEffect(() => {
    console.log(InterviewType + " -- type");
    console.log(InterviewStage + " -- stage");
    console.log(Interviewer + " -- interviewer");
    console.log(InterviewLanguage + "-- lang");
    console.log(JobDescription + "-- desc");
    console.log(value + "-- val");
  }, [
    InterviewType,
    InterviewStage,
    InterviewLanguage,
    Interviewer,
    value,
    JobDescription,
  ]);

  const generateInterviewQnA = async (payLoad) => {
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
      // setFinalResponse(response.data);
      console.log(response.data);

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
    // setIsLoading(false);
    setIsLoading(true);

    console.log(payLoad);
    await generateInterviewQnA(payLoad);
    // await new Promise(resolve => setTimeout(resolve, 10000));
    // setIsLoading(false);
  };

  const header = (
    <div className="flex flex-row relative w-full items-center justify-center pt-5 pb-0">
      <img
        onClick={() => setIsVisible(false)}
        src={closeOutline}
        alt="Close"
        className="absolute left-1.5 cursor-pointer transition-transform transform-gpu duration-300 w-8 h-8 hover:rotate-90"
      />
      <h1 className="text-center text-lg font-bold">All Q/A</h1>
    </div>
  );

  const skeletonItems = [];
  for (let i = 0; i < 4; i++) {
    skeletonItems.push(<div key={i} className="skeleton skeleton-text"></div>);
  }

  return (
    <>
      <Navbar />
      <div className="mt-10 flex flex-wrap justify-center items-center font-bold text-4xl p-10">
        AI Interview Assistant
      </div>

      <div className="flex flex-wrap justify-center font-bold gap-20 ">
        <div className="w-full max-w-lg px-4 py-4 mb-4 relative ">
          <div className="relative pb-3 z-10">
            <Multiselect
              id="interviewType"
              onSelect={handleSelect1}
              onRemove={handleSelect1}
              className="bg-gray-50 border-0 border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              isObject={false}
              onKeyPressFn={function noRefCheck() {}}
              onSearch={function noRefCheck() {}}
              options={[
                "Behavioural Interview",
                "Case Interview",
                "Stress Interview",
                "Competency Based Interview",
                "Panel Interview",
                "Group Interview",
                "Informal Interview",
              ]}
              selectionLimit={1}
              placeholder="Pick and interview type"
              style={{
                searchBox: {
                  border: "none",
                  borderBottom: "1px solid gray",
                  borderRadius: "1px",
                },
              }}
            />
          </div>

          <div className="py-3 z-10">
            <Multiselect
              id="interviewStage"
              onSelect={handleSelect2}
              onRemove={handleSelect2}
              className=" bg-gray-50 border-0 border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              isObject={false}
              onKeyPressFn={function noRefCheck() {}}
              onSearch={function noRefCheck() {}}
              options={[
                "Application Review - Initial screening of resumes",
                "Phone Screening- To assess basic qualifications, communication skills",
                "First-Round Interview - HR representative, to assess general fit",
                "First-Round Interview - Technical",
                "Second-Round Interview - Technical",
                "Technical/Functional Interview - For roles requiring specific technical skills",
                "Panel Interview - to assess a candidate's suitability from various perspectives",
              ]}
              selectionLimit={1}
              placeholder="Pick an interview stage"
              style={{
                searchBox: {
                  border: "none",
                  borderBottom: "1px solid gray",
                  borderRadius: "1px",
                },
              }}
            />
          </div>

          <div className="py-3">
            <label
              htmlFor="uploadBtn"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute bottom-5 right-0 -translate-x-1/2 -translate-y-1/2"
            >
              Add File
            </label>
            <input
              type="file"
              id="uploadBtn"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <div className="py-3">
            <Multiselect
              id="interviewer"
              onSelect={handleSelect3}
              onRemove={handleSelect3}
              className="bg-gray-50 border-0 border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              isObject={false}
              onKeyPressFn={function noRefCheck() {}}
              onSearch={function noRefCheck() {}}
              options={[
                "Hiring Manager",
                "HR Representative",
                "Team Lead",
                "Cross-Functional Panel",
                "Department Head",
                "Executives",
                "External Consultant",
              ]}
              selectionLimit={1}
              placeholder="Interviewer"
              style={{
                searchBox: {
                  border: "none",
                  borderBottom: "1px solid gray",
                  borderRadius: "1px",
                },
              }}
            />
          </div>

          <div className="py-3 grid grid-cols-2 justify-center items-center gap-3">
            <Multiselect
              id="interviewLanguage"
              onSelect={handleSelect4}
              onRemove={handleSelect4}
              className="bg-gray-50 border-0 border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              isObject={false}
              onKeyPressFn={function noRefCheck() {}}
              onSearch={function noRefCheck() {}}
              options={["English", "French", "Hindi", "German"]}
              selectionLimit={1}
              placeholder="Interview Language"
              style={{
                searchBox: {
                  border: "none",
                  borderBottom: "1px solid gray",
                  borderRadius: "1px",
                },
              }}
            />

            <div className="flex items-center justify-center gap-2 z-0">
              <div className="relative">
                <input
                  type="text"
                  value={value}
                  id="floating_about_company"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-b border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={() => {
                    setValue(value);
                  }}
                />
                <label
                  htmlFor="floating_about_company"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  No. Of Questions Required
                </label>
              </div>

              <div className="grid grid-rows-2">
                <button
                  onClick={() => {
                    value < 20 ? setValue(value + 1) : value;
                  }}
                >
                  <svg
                    className="w-4 h-4 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 10"
                  >
                    <path d="M9.207 1A2 2 0 0 0 6.38 1L.793 6.586A2 2 0 0 0 2.207 10H13.38a2 2 0 0 0 1.414-3.414L9.207 1Z" />
                  </svg>
                </button>

                <button
                  onClick={() => {
                    value > 0 ? setValue(value - 1) : value;
                  }}
                >
                  <svg
                    className="w-4 h-4 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 10"
                  >
                    <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="py-3">
            {/* <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Paste the job description below
            </label> */}
            <textarea
              id="message"
              rows="4"
              onChange={(e) => {
                setJobDescription(e.target.value);
              }}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Paste your description here..."
            ></textarea>
          </div>
        </div>
        <div
          className={`relative w-full max-w-lg px-4 py-4 mb-4 ${
            hidden ? "block" : "hidden"
          }`}
        >
          <div className="relative">
            {isLoading ? (
              <div>
                {toggles.slice(0, 3).map((toggle, index) => (
                  <div className="py-2.5" key={index}>
                    <div className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <div className="pt-1 pb-2.5 flex justify-center items-center gap-5">
                        Q{index + 1}.{" "}
                        <div className="skeleton skeleton-text"></div>
                      </div>
                      <hr />
                      <div className="pl-2.5 pt-4">{skeletonItems}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                {toggles.slice(0, 3).map((toggle, index) => (
                  <div className="py-2.5" key={index}>
                    <div className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <div className="pt-1 pb-2.5">
                        Q{index + 1}. {toggle.question}
                      </div>
                      <hr />
                      <div className="pl-2.5 pt-4">
                        <button
                          className="px-3 py-2.5 text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          onClick={() => handleToggle(index)}
                        >
                          Answer
                        </button>
                      </div>
                      {toggle.isVisible && (
                        <div id={toggle.divId} className="px-6">
                          <div className="block p-2.5 w-full text-sm text-gray-600 bg-gray-100 rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {toggle.buttonText}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div className="p-5 flex justify-center items-center">
                  <button
                    type="button"
                    onClick={() => setIsVisible(true)}
                    className="px-2.5 pb-2.5 pt-4 rounded-full bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 text-sm mb-2"
                  >
                    <span className="py-2.5">
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white animate-bounce"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 1v12m0 0 4-4m-4 4L1 9"
                        />
                      </svg>
                    </span>
                  </button>

                  <Modal
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                    header={header}
                    maxWidth="600px"
                    maxHeight="80vh"
                    lockScroll
                    // onOpen={() => console.log("Modal is open!")}
                    // onClose={() => console.log("Modal is closed!")}
                    closeOnBgClick
                    closeOnEscape
                    animationDuration={400}
                    background={"rgba(0,0,0,0.6)"}
                    modalBackground={"white"}
                  >
                    <div className="pr-5">
                      <div className="w-full items-center justify-center p-5 overflow-x-hidden">
                        {toggles.map((toggle, index) => (
                          <div className="py-2.5" key={index}>
                            <div className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <div className="pt-1 pb-2.5">
                                Q{index + 1}. {toggle.question}
                              </div>
                              <hr />
                              <div className="pl-2.5 pt-4">
                                <button
                                  // className="px-3 py-2.5 text-purple-700 bg-purple-300 hover:bg-purple-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-xl text-sm text-center mb-2"
                                  className="px-3 py-2.5 text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                  onClick={() => handleToggle(index)}
                                >
                                  Answer
                                </button>
                              </div>
                              {toggle.isVisible && (
                                <div id={toggle.divId} className="px-6">
                                  <div className="block p-2.5 w-full text-sm text-gray-600 bg-gray-100 rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    {toggle.buttonText}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center font-bold text-4xl pb-5">
        <button
          type="button"
          onClick={handleClickGenerate}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-xl text-xl px-10 py-4 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Generate
        </button>
      </div>

      <div className="p-20">
        <div className="font-bold text-2xl">Explore our other services</div>
        <p>
          Enhance your Hr Productivity: Document, Test, Extend, or Seek
          Clarifications with Ease
        </p>
      </div>

      <div className="grid grid-cols-2 justify-center gap-20 py-10 px-20">
        <Link to="/jobdescription/generator">
          <div className="group max-w-lg rounded overflow-hidden shadow-lg  hover:bg-brandColor ">
            <div className=" py-20">
              {/* <div className="font-bold text-center text-xl group-hover:text-white">Refini<span className="group-hover:text-white font-bold text-brandColor">X</span></div> */}
              <p className="text-lg text-center text-gray-600 font-bold group-hover:text-white">
                Job Description Generator
              </p>
            </div>
          </div>
        </Link>

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
      </div>

      <div className="flex flex-wrap justify-center items-center font-bold text-4xl p-10"></div>

      <div className="flex flex-wrap justify-center items-center font-bold text-4xl p-10"></div>
      <Footer />
    </>
  );
};

export default InterviewAssistant;
