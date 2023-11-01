import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      {/* Banner section */}

      <section className="text-white flex items-center mt-12">
        <div className="w-1/2 ml-40">
          <h1 className="text-4xl font-semibold font-[poppins] text-black">
            We craft software solutions,
          </h1>
          <h2 className="text-4xl font-semibold font-[poppins] text-black">
            so you can focus on crafting success
          </h2>
          <p className="text-lg pt-4 font-[poppins] text-black">
            Enhancing productivity for developers and beyond, across all domains
          </p>
          <button className="mt-6 px-6 py-3 bg-[#4712DD] text-white rounded hover:bg-blue-600 font-semibold">
            <a href="/developertool">Try for free</a>
          </button>
        </div>
        <div className="w-1/2">
          <img
            src="src/assets/images/Banner1.png"
            alt="banner 1"
            className="w-auto h-auto"
          />
        </div>
      </section>

      {/* Card section */}

      <section className="bg-white py-8 text-center">
        <h2 className="text-3xl font-bold font-[poppins] text-black mb-12">
          Productivity and Collaboration Tools for
          <br /> All the Ways That We Work
        </h2>
        <div className="flex justify-center gap-40">
          <div className="max-w-lg rounded overflow-hidden shadow-lg p-8">
            <div className="px-6 py-4 ">
              <div className="font-bold text-xl">
                Refini<span className="font-bold text-[#4712DD]">X</span>
              </div>
              <p className="text-gray-700 text-lg font-bold">
                Developer Productivity Tools
              </p>
            </div>
            <div className="px-6 py-4 text-center">
              <NavLink to={"/developertools"}>
                <button className="bg-[#4712DD] hover:bg-blue-600 text-white font-bold py-3 px-6">
                  Explore Now
                </button>
              </NavLink>
            </div>
          </div>
          <div className="max-w-lg rounded overflow-hidden shadow-lg p-8">
            <div className="px-6 py-4">
              <div className="font-bold text-xl">
                Refini<span className="font-bold text-[#4712DD]">X</span>
              </div>
              <p className="text-gray-700 text-lg font-bold">
                HR Productivity Tools
              </p>
            </div>
            <div className="px-6 text-center">
              <NavLink to={"/hrproductivitytools"}>
                <button className="bg-[#4712DD] hover:bg-blue-600 text-white font-bold py-3 px-6">
                  Explore Now
                </button>
              </NavLink>
            </div>
          </div>
          <div className="max-w-lg rounded overflow-hidden shadow-lg p-8">
            <div className="px-6 py-4">
              <div className="font-bold text-xl">
                Refini<span className="font-bold text-[#4712DD]">X</span>
              </div>
              <p className="text-gray-700 text-lg font-bold">
                Project Management Tools{" "}
              </p>
            </div>
            <div className="px-6 text-center">
              <button className="bg-[#4712DD] hover:bg-blue-600 text-white text-sm py-1 px-2">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Banner section 2 */}

      <section className="text-white flex items-center mt-12">
        <div className="w-1/2">
          <img
            src="src/assets/images/Banner2.png"
            alt="banner 2"
            className="w-auto h-auto"
          />
        </div>
        <div className="w-1/2 ml-40">
          <h1 className="text-4xl font-semibold font-[poppins] text-black">
            Ready to modernize your tech?
            <br /> Try Cognizant RefiniX for FREE
            <br /> today and stay ahead in the <br /> game!
          </h1>
          <button className="mt-6 px-6 py-3 bg-[#4712DD] text-white rounded hover:bg-blue-600 font-semibold">
            Try for free
          </button>
        </div>
      </section>

      {/* Heading with blue background Section */}

      <section className="bg-[#4A0BFF] p-12 text-center">
        <p className=" text-2xl font-[poppins] text-white">
          {" "}
          Unlock the limitless possibilities with Cognizant RefiniX - Where
          innovation meets transformation. <br />
          Get ready to redefine your journey in a rapidly evolving landscape.
        </p>
      </section>

      {/* FAQ Section */}
      {/* <section className="relative h-[74.68%] w-[45%] bg-ghostwhite rounded-2xl shadow-[0px_0px_4px_1px_rgba(0,_0,_0,_0.15)] p-6">
        <div className="absolute h-[74.68%] w-[45%] top-[17.72%] right-[8.33%] bottom-[7.59%] left-[46.67%] rounded-2xl bg-ghostwhite shadow-[0px_0px_4px_1px_rgba(0,_0,_0,_0.15)]">
          <div className="absolute top-[40px] left-[144px] flex flex-col items-start justify-start gap-[40px]">
            <b className="relative leading-[28px] inline-block w-[472px]">
              How can I use Cognizant RefiniX to streamline my software
              development process?
            </b>
            <div className="relative text-base leading-[24px] text-black inline-block w-[472px] h-[322px] shrink-20">
              Simply sign up, choose the right tools, integrate them into your
              workflow, and leverage AI-driven optimization to enhance
              productivity and stay ahead in software development.
            </div>
          </div>
        </div>
        <div className="absolute top-[144px] left-[120px] flex flex-col items-start justify-start text-base text-black">
          <div className="bg-white shadow-[0px_0px_1px_1px_rgba(0,_0,_0,_0.15)] flex flex-col py-6 px-4 items-start justify-start">
            <div className="flex flex-row items-center justify-center gap-[24px]">
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <div className="relative rounded-[50%] bg-iris-60 w-6 h-6" />
                <div className="relative leading-[24px] inline-block w-[520px] shrink-0">
                  How can I use Cognizant RefiniX to streamline my software
                  development process?
                </div>
              </div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/undefined4.png"
              />
            </div>
          </div>
          <div className="bg-ghostwhite shadow-[0px_0px_1px_1px_rgba(0,_0,_0,_0.15)] flex flex-col py-6 px-4 items-start justify-start">
            <div className="flex flex-row items-center justify-center gap-[24px]">
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <div className="relative rounded-[50%] bg-iris-100 w-6 h-6" />
                <div className="relative leading-[24px] inline-block w-[520px] shrink-0">
                  What are the key features of the Code Converter tool in
                  Cognizant RefiniX?
                </div>
              </div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/undefined5.png"
              />
            </div>
          </div>
          <div className="bg-white shadow-[0px_0px_1px_1px_rgba(0,_0,_0,_0.15)] flex flex-col py-6 px-4 items-start justify-start">
            <div className="flex flex-row items-center justify-center gap-[24px]">
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <div className="relative rounded-[50%] bg-iris-60 w-6 h-6" />
                <div className="relative leading-[24px] inline-block w-[520px] shrink-0">
                  Is Code Beautifier compatible with multiple programming
                  languages in Cognizant RefiniX?
                </div>
              </div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/undefined6.png"
              />
            </div>
          </div>
          <div className="bg-white shadow-[0px_0px_1px_1px_rgba(0,_0,_0,_0.15)] flex flex-col py-6 px-4 items-start justify-start">
            <div className="flex flex-row items-center justify-center gap-[24px]">
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <div className="relative rounded-[50%] bg-iris-60 w-6 h-6" />
                <div className="relative leading-[24px] inline-block w-[520px] shrink-0">
                  How does Cognizant RefiniX's Code Remediation tool improve
                  code quality?
                </div>
              </div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/undefined7.png"
              />
            </div>
          </div>
          <div className="bg-white shadow-[0px_0px_1px_1px_rgba(0,_0,_0,_0.15)] flex flex-col py-6 px-4 items-start justify-start">
            <div className="flex flex-row items-center justify-center gap-[24px]">
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <div className="relative rounded-[50%] bg-iris-60 w-6 h-6" />
                <div className="relative leading-[24px] inline-block w-[520px] shrink-0">
                  Can I integrate User Stories and Sprint Planning with
                  Cognizant RefiniX for agile development?
                </div>
              </div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/undefined8.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[120px] overflow-hidden flex flex-col items-start justify-start text-29xl">
          <div className="relative leading-[64px] font-extrabold">
            Frequently Asked Questions
          </div>
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default LandingPage;
