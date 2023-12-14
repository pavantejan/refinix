import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Circle } from "rc-progress";
import axios from "axios";
import { toast } from "react-toastify";
import closeOutline from "../../assets/close-outline.svg";
import { Modal } from "react-web-modal";

// import PDFJS from 'pdfjs-dist/build/pdf.worker';
// import { getDocument } from 'pdfjs-dist/build/pdf.combined';

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [JobDescription, setJobDescription] = useState("");

  const scrollToResumeReport = useRef(null);
  const scrollToQuestions = useRef(null);

  const [selected, setIsSelected] = useState(false);

  const [click, setClick] = useState(false);

  const [hidden, setHidden] = useState(true); // To hide response data with out any input
  const [color, setColor] = useState(""); // for pie chart color
  const [isLoading, setIsLoading] = useState(false); // Initialize as loading
  const [finalResponse, setFinalResponse] = useState(""); // response from backend for resume
  const [skillsResponse, setSkillsResponse] = useState(""); // response from backend for skills
  const [percent, setPercent] = useState(0); // response from backend

  const [skills, setSkills] = useState([]);
  const [isVisible, setIsVisible] = useState(false); // for modal

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

  // const header = (
  //   <div className="flex flex-row relative w-full items-center justify-center pt-5 pb-0">
  //     <img
  //       onClick={() => setIsVisible(false)}
  //       src={closeOutline}
  //       alt="Close"
  //       className="absolute left-1.5 cursor-pointer transition-transform transform-gpu duration-300 w-8 h-8 hover:rotate-90"
  //     />
  //     <h1 className="text-center text-lg font-bold">All Q/A</h1>
  //   </div>
  // );

  // const [skills, setSkills] = useState([
  //   {
  //     buttonText: "Java",
  //     divId: "t1",
  //     isVisible: false,
  //   },
  //   {
  //     buttonText: "Python",
  //     divId: "t2",
  //     isVisible: false,
  //   },
  //   {
  //     buttonText: "Angular",
  //     divId: "t3",
  //     isVisible: false,
  //   },
  //   {
  //     buttonText: "React",
  //     divId: "t4",
  //     isVisible: false,
  //   },
  //   {
  //     buttonText: "Spring-boot",
  //     divId: "t5",
  //     isVisible: false,
  //   },
  // ]);

  const handleButtonClick = (index) => {
    const updatedSkills = skills.map((skill, i) => ({
      ...skill,
      isVisible: i === index ? !skill.isVisible : false,
    }));
    setSkills(updatedSkills);
    setIsSelected(skills[index].buttonText);
  };

  useEffect(() => {
    console.log(color + " -- color");
    // console.log(finalResponse + " -- response");
    console.log(percent + " -- percent");
    console.log(skills + " -- skills");
  }, [color, finalResponse, percent, skills]);

  const skillsExtract = (response) => {
    let skillsArray;

    if (Array.isArray(response)) {
      // If response is an array, use it directly
      skillsArray = response;
    } else if (typeof response === 'object' && response !== null) {
      // If response is an object, extract values as an array
      skillsArray = Object.values(response);
    } else {
      // If response is neither an array nor an object, handle accordingly
      console.error('Invalid response type:', typeof response);
      return;
    }

    const transformedSkills = skillsArray.reduce((accumulator, skill, index) => {
      const divId = `t${index + 1}`;
      const trimmedSkill = skill.trim();

      // If the skill contains brackets, treat it as a single entry
      if (trimmedSkill.includes("(") && trimmedSkill.includes(")")) {
        return accumulator.concat({
          buttonText: trimmedSkill,
          divId,
          isVisible: false,
        });
      }

      // Split by commas and create separate entries
      const skillsArray = trimmedSkill.split(",").map((individualSkill) => ({
        buttonText: individualSkill.trim(),
        divId,
        isVisible: false,
      }));

      return accumulator.concat(skillsArray);
    }, []);
    setSkills(transformedSkills);
  };

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

  //  to generate questions
  const generateQuestions = async () => {
    const skill = "java";

    try {
      const response = await axios.get(
        `http://localhost:5000/enhanced-ai-interview-assistant/${skill}`
      );

      // setIsLoading(false);
      // setFinalResponse(response.data);
      console.log(response.data);
      // getColorForPercentage(response.data);

      toast.success("Generated Successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
      toast.error("Please try again in sometime!");
    }
  };

  const skillsGenerator = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("job_description", JobDescription);

    try {
      const response = await axios.post(
        `http://localhost:5000/ai-interview-assistant`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSkillsResponse(response.data);
      console.log(response.data);
      skillsExtract(response.data);
      setHidden(false);
      toast.success("Skills Generated Successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong in generating skills data");
      toast.error("Please try again in sometime!");
    }
  };

  const resumeMatcher = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("job_description", JobDescription);

    try {
      console.log("inside the resume matcher");
      const response = await axios.post(
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

  const handleAnalyseResume = async (e) => {

    e.preventDefault();
    scrollToResumeReport.current.scrollIntoView({ behavior: 'smooth' });
    setIsLoading(true);
    await resumeMatcher();
    await skillsGenerator();
  };

  const handleSkills = async (e) => {
    e.preventDefault();
    scrollToQuestions.current.scrollIntoView({ behavior: 'smooth' });
    console.log("inside the handle Skills");
    setIsLoading(true);
    await generateQuestions();

    // await skillsGenerator();
  };

  const skeletonItems = [];
  for (let i = 0; i < 4; i++) {
    skeletonItems.push(<div key={i} className="p-1.5 skeleton skeleton-text"></div>);
  }

  return (
    <>
      <Navbar />

      <div className="mt-2 flex flex-wrap justify-center items-center font-bold text-4xl pb-4">
        Resume Analyser
      </div>

      <div className="flex flex-wrap justify-center font-bold gap-20 ">
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

        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-wrap justify-center items-center font-bold text-4xl p-10 ">
            <button
              type="button"
              onClick={handleAnalyseResume}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-lg px-14 py-4 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Analyse <br />
              resume
            </button>

            <button
              type="button"
              // disabled={true}
              onClick={handleSkills}
              className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-lg px-12 py-4 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
              ${hidden ? "hidden" : "block"}
          `}
            >
              Generate <br />
              questions
            </button>
          </div>

          <div
            className={`
          ${hidden ? "hidden" : "block"}
          `}
          >
            <div className="p-2.5 rounded-lg border border-gray-500">
              <p className="py-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                Select One skill to generate questions
              </p>

              <hr />
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 justify-center items-center">
                {skills.map((skill, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleButtonClick(index)}
                    className={` text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg border text-sm p-2.5 
                  ${skill.isVisible ? "bg-gray-800" : "bg-gray-500"}
                    `}
                  >
                    {skill.buttonText}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isLoading ? 'block':'hidden'}`}>
        <div className="block my-20 mx-10 h-auto p-5 w-auto text-sm bg-gray-100 font-medium text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 relative">
          <div className="flex gap-60">
            <div className="p-5" ref={scrollToResumeReport}>
              <a
                href="#"
                className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Resume report
              </a>
            </div>
            <div className="p-5" ref={scrollToQuestions}>
              <a
                href="#"
                className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Questions
              </a>
            </div>
          </div>
          <hr />

          {/* <div className="flex h-auto">{skillsResponse}</div> */}
          {/* map the skills response questions to questions in questions section */}

          <div className=" pt-5 relative hidden">
            {!isLoading ? (<div>
              <div className="px-16 py-4">{skeletonItems}</div>
              <div className="px-16 py-4">{skeletonItems}</div>
            </div>) : (<div>
              <div className="px-20 h-auto ">
                <div className={`relative w-auto mx-auto py-4 mb-4 `}>
                  <div>
                    <textarea
                      id="message1"
                      rows="18"
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
                </div>
              </div>
              <div className="pt-20">
                <div
                  data-dial-init
                  className="flex flex-col items-end bottom-0 end-24 group absolute z-10"
                >
                  <div
                    id="speed-dial-menu-text-inside-button"
                    className="flex flex-col items-center mb-4 space-y-2"
                  >
                    <button
                      type="button"
                      className="w-[56px] h-[56px] text-gray-500 bg-white rounded-full border border-gray-300 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
                    >
                      <svg
                        className="w-4 h-4 mx-auto mb-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                        <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                      </svg>
                      <span className="block mb-px text-xs font-medium">
                        Save
                      </span>
                    </button>
                    <button
                      type="button"
                      className="w-[56px] h-[56px] text-gray-500 bg-white rounded-full border border-gray-300 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
                    >
                      <svg
                        className="w-4 h-4 mx-auto mb-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 20"
                      >
                        <path d="M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2Z" />
                        <path d="M11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z" />
                      </svg>
                      <span className="block mb-px text-xs font-medium">
                        Copy
                      </span>
                    </button>
                  </div>
                  <button
                    type="button"
                    data-dial-toggle="speed-dial-menu-text-inside-button"
                    aria-controls="speed-dial-menu-text-inside-button"
                    aria-expanded="false"
                    className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-5 h-5 transition-transform group-hover:rotate-45"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                    <span className="sr-only">Open actions menu</span>
                  </button>
                </div>
              </div>
            </div>)}

          </div>

          <div className="flex flex-wrap py-5">
            {toggles.map((toggle, index) => (
              <div className="w-1/2 py-2.5" key={index}>
                <div className="block mx-4 p-2.5 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ResumeUpload;
