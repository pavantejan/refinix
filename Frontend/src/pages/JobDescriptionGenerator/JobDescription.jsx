// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Multiselect from "multiselect-react-dropdown";
import axios from "axios";
import { toast } from "react-toastify";


export const JobDescription = () => {

  // const currentSelectedRequirements;

  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [company, setCompany] = useState("");
  const [reportTo, setReportTo] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [moreRequirements, setMoreRequirements] = useState("");

  const [finalResponse, setFinalResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Initialize as loading

  const [selectedDuties, setSelectedDuties] = useState([]);
  const [selectedQualification, setSelectedQualification] = useState([]);
  const [selectedRequirement, setSelectedRequirement] = useState([]);
  const [selectedBenefits, setSelectedBenefits] = useState([]);

  const [inputEnabled, setInputEnabled] = useState(false);

  const payLoad = {
    title: title,
    department: department,
    about_company: company,
    report: reportTo,
    duties: selectedDuties,
    responsibilites: responsibilities,
    qualification: selectedQualification,
    requirements: [...selectedRequirement, moreRequirements],
    benefits: selectedBenefits,
  };

  const handleClickAdd = () => {
    if (inputEnabled) {
      setInputEnabled(false);
    } else {
      setInputEnabled(true);
    }
  };

  const handleSelect1 = (option) => {
    setSelectedDuties([option]);
  };

  const handleSelect2 = (option) => {
    setSelectedQualification([option]);
  };

  const handleSelect3 = (option) => {
    setSelectedRequirement([option]);
  };

  const handleSelect4 = (option) => {
    setSelectedBenefits([option]);
  };

  useEffect(() => {
    console.log(selectedDuties + " -- duties");
    console.log(selectedQualification + " -- qualities");
    console.log(selectedRequirement + " -- requirement");
    console.log(inputEnabled + "-- input enabled");
    console.log(selectedBenefits + "-- benefits");
  }, [
    selectedDuties,
    selectedQualification,
    selectedRequirement,
    inputEnabled,
    selectedBenefits,
  ]);

  const generateJobDescription = async (payLoad) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/jobdescription`,
        payLoad
      );
      setIsLoading(false);
      setFinalResponse(response.data);

      toast.success("Generated Successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
      toast.error("Please try again in sometime!");
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(payLoad);
    await generateJobDescription(payLoad);
  };

  const skeletonItems = [];
  for (let i = 0; i < 4; i++) {
    skeletonItems.push(<div key={i} className="skeleton skeleton-text"></div>);
  }

  return (
    <>
      <Navbar />
      <div className="mt-10 flex flex-wrap justify-center items-center font-bold text-4xl p-10">
        AI Job Description Generator
      </div>

      <div className="flex flex-wrap justify-center font-bold gap-24 ">
        <div className="w-full max-w-lg px-4 py-4 mb-4 relative ">
          <div className="inline-flex gap-10">
            <div className="relative pb-3">
              <input
                type="text"
                id="floating_title"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <label
                htmlFor="floating_title"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Title
              </label>
            </div>

            <div className="relative pb-3">
              <input
                type="text"
                id="floating_department"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
              />
              <label
                htmlFor="floating_department"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Department
              </label>
            </div>
          </div>

          <div className="inline-flex gap-10">
            <div className="relative pb-3">
              <input
                type="text"
                id="floating_about_company"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
              <label
                htmlFor="floating_about_company"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                About Company
              </label>
            </div>
            <div className="relative pb-3">
              <input
                type="text"
                id="floating_report_to"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => {
                  setReportTo(e.target.value);
                }}
              />
              <label
                htmlFor="floating_report_to"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Report to
              </label>
            </div>
          </div>

          <div className="relative pb-3">
            <input
              type="text"
              id="floating_responsibility"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => {
                setResponsibilities(e.target.value);
              }}
            />
            <label
              htmlFor="floating_responsibility"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Responsibilities
            </label>
          </div>

          <div className="py-3">
            <Multiselect
              onSelect={handleSelect1}
              onRemove={handleSelect1}
              className="bg-gray-50 border-0 border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              isObject={false}
              onKeyPressFn={function noRefCheck() {}}
              onSearch={function noRefCheck() {}}
              options={[
                "Design",
                "Development",
                "Test software applications",
                "Work with other engineers to implement new features and improve existing functionality",
              ]}
              placeholder="Choose Duties"
              style={{
                searchBox: {
                  border: "none",
                  "border-bottom": "1px solid gray",
                  "border-radius": "1px",
                },
              }}
            />
          </div>

          <div className="py-3">
            <Multiselect
              onSelect={handleSelect2}
              onRemove={handleSelect2}
              className="bg-gray-50 border-0 border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              isObject={false}
              onKeyPressFn={function noRefCheck() {}}
              onSearch={function noRefCheck() {}}
              options={[
                "3+ years of experience in software development",
                "Object-oriented programming languages (e.g., Java, C++, Python)",
                "Relational databases(e.g., MySQL, PostgreSQL)",
                "Cloud computing platforms (e.g., AWS, Azure, GCP)",
              ]}
              placeholder="Choose Qualifications"
              style={{
                searchBox: {
                  border: "none",
                  "border-bottom": "1px solid gray",
                  "border-radius": "1px",
                },
              }}
            />
          </div>

          <div className="py-3 gap-10 inline-flex z-10">
            <Multiselect
              onSelect={handleSelect3}
              onRemove={handleSelect3}
              className="bg-gray-50 border-0 border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              isObject={false}
              onKeyPressFn={function noRefCheck() {}}
              onSearch={function noRefCheck() {}}
              options={[
                "Excellent problem-solving and analytical skills",
                "Strong communication and teamwork skills",
                "Ability to work independently and as a part of a team",
                "Ability to meet deadlines and work under pressure",
              ]}
              placeholder="Choose Requirements"
              style={{
                searchBox: {
                  border: "none",
                  "border-bottom": "1px solid gray",
                  "border-radius": "1px",
                },
              }}
            />

            <button
              className="gap-1 text-gray-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick={handleClickAdd}
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z" />
              </svg>
              <span>Add</span>
            </button>
          </div>

          <div className="relative pb-3 z-0" hidden={!inputEnabled}>
            <input
              type="text"
              id="floating_about_company"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => {
                setMoreRequirements(e.target.value);
              }}
            />
            <label
              htmlFor="floating_about_company"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Add more requirements
            </label>
          </div>

          <div className="py-3">
            <Multiselect
              onSelect={handleSelect4}
              onRemove={handleSelect4}
              className="bg-gray-50 border-0 border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              isObject={false}
              onKeyPressFn={function noRefCheck() {}}
              onSearch={function noRefCheck() {}}
              options={[
                "Health insurance",
                "Remote Work Facility",
                "Paid Time Off",
                "Paternity Leaves",
                "Internet Allowance",
                "Food Coupons"
              ]}
              placeholder="Choose Benefits"
              style={{
                searchBox: {
                  border: "none",
                  "border-bottom": "1px solid gray",
                  "border-radius": "1px",
                },
              }}
            />
          </div>

          {/* <div className="pb-5 text-gray-600 font-bold">
            Availability
            <div className="font-normal py-3 text-gray-700 dark:text-gray-400">
              Select date range
            </div>


            <div date-rangepicker className="flex items-center">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input name="start" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
              </div>
              <span className="mx-4 text-gray-500">to</span>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input name="end" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
              </div>
            </div>


          </div> */}

          {/* <div className="gap-72 pt-3 text-center inline-flex text-gray-600 font-bold">
            Available ASAP
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="text-sm font-normal pt-2 pb-3 text-gray-700 dark:text-gray-400">
            Available with in next one week
          </div>

          <div>
            <label htmlFor="underline_select" className="sr-only">
              Expertise
            </label>
            <select
              id="underline_select"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option value="">Choose required Expertise</option>
              <option value="">S</option>
              <option value="">C</option>
              <option value="">F</option>
              <option value="">G</option>
            </select>

            <label htmlFor="underline_select" className="sr-only">
              Discipline
            </label>
            <select
              id="underline_select"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option value="">Choose required Discipline</option>
              <option value="">S</option>
              <option value="">C</option>
              <option value="">F</option>
              <option value="">G</option>
            </select>

            <label htmlFor="underline_select" className="sr-only">
              Industry
            </label>
            <select
              id="underline_select"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option value="">Choose required Industry</option>
              <option value="">S</option>
              <option value="">C</option>
              <option value="">F</option>
              <option value="">G</option>
            </select>
          </div> */}
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
                    {skeletonItems}
                  </div>
                  <div className="py-3.5">{skeletonItems}</div>
                  <div className="py-3.5">{skeletonItems}</div>
                  <div className="py-3.5">{skeletonItems}</div>
                  <div className="py-3.5">{skeletonItems}</div>
                  <div className="py-3.5">{skeletonItems}</div>
                </div>
              </div>
            ) : (
              <textarea
                id="message1"
                rows="24"
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
          onClick={handleClick}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-xl text-xl px-10 py-4 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Generate
        </button>
      </div>

      <div className="p-20">
        <div className="font-bold text-2xl">Explore our other services</div>
        <p>
          Enhance your Hr Productivity: Document, Test, Extend, or Seek Clarifications
          with Ease
        </p>
      </div>

      <div className="grid grid-cols-2 justify-center gap-20 py-10 px-20">
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

export default JobDescription;
