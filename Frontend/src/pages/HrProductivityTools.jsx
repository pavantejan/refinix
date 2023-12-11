import React from "react";
import Navbar from "../components/Navbar";

import { Link, NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const HrProductivityTools = () => {
  return (
    <>
      <Navbar />

      <section className="bg-white py-8 pt-24">
        <h2 className="text-3xl font-bold font-[poppins] text-black ml-24">
          Hr Productivity Tools
        </h2>
        <h4 className="text-lg font-[poppins] text-black ml-24 mb-8">
          Boosting Productivity with Cutting-edge GEN-AI Tools
        </h4>

        <div className="grid grid-cols-3 justify-center gap-20 py-24 px-20">
          <Link to="/jobdescription/generator">
            <div className="group max-w-lg rounded overflow-hidden shadow-lg  hover:bg-brandColor hover:cursor-pointer">
              <div className="px-20 py-14">
                {/* <div className="font-bold text-center text-xl group-hover:text-white">Refini<span className="group-hover:text-white font-bold text-brandColor">X</span></div> */}
                <p className="text-lg text-center text-gray-600 font-bold group-hover:text-white">
                  AI Job Description Generator
                </p>
              </div>
            </div>
          </Link>

          {/* <Link to="/interviewassistant/generator"> */}
          <Link to="/interviewassistant/resumeupload">
            <div className="group max-w-lg rounded overflow-hidden shadow-lg  hover:bg-brandColor hover:cursor-pointer">
              <div className="px-20 py-14">
                {/* <div className="font-bold text-center text-xl group-hover:text-white">Refini<span className="group-hover:text-white font-bold text-brandColor">X</span></div> */}
                <p className="text-lg text-center text-gray-600 font-bold group-hover:text-white">
                  Enhanced Interview Assistant
                </p>
              </div>
            </div>
          </Link>

          <div className="group  rounded overflow-hidden shadow-lg  hover:bg-brandColor">
            <div className=" py-14">
              {/* <div className="font-bold text-center text-xl group-hover:text-white">Refini<span className="group-hover:text-white font-bold text-brandColor">X</span></div> */}
              <p className="text-lg text-center text-gray-600 font-bold group-hover:text-white">
                Enhanced Project Management Assistant
              </p>
              <p className="text-sm text-center  bg-blue-700   text-white font-bold group-hover:bg-yellow-300 group-hover:text-white">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HrProductivityTools;
