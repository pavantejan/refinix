// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export const TestScenarioGenLanguage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center items-center font-bold text-xl py-20 ">
        Choose your language or framework
      </div>

      <div className="pl-32 pr-32 pb-32 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 gap-6 justify-center items-center ">
        <Link to={"/commentcomposer/editor"} >
        <div className="flex flex-wrap p-4 justify-center items-center h-28 w-28 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:bg-blue-600 hover:text-white">
          <img
            className="h-12 mr-2"
            src="../src/assets/images/java.png"
            alt="Java Image"
          />

          <div className="font-bold text-lg mb-2 px-8 pb-8">Java</div>
        </div>
        </Link>

        <Link to={"/commentcomposer/editor"} >
        <div className="flex flex-wrap p-4 justify-center items-center h-28 w-28 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:bg-blue-600 hover:text-white">
          <img
            className="h-12 mr-2"
            src="../src/assets/images/Python.png"
            alt="Python Image"
          />
          <div className="font-bold text-lg mb-2 px-8 pb-8">Python</div>
        </div>

        </Link>
        <Link to={"/commentcomposer/editor"} >
        <div className="flex flex-wrap p-8 justify-center items-center h-28 w-28 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:bg-blue-600 hover:text-white">
          <img
            className="h-6 mr-2"
            src="../src/assets/images/GO.png"
            alt="GoLang Image"
          />

          <div className="font-bold text-lg mb-2 px-8 pb-8">GoLang</div>
        </div>
        </Link>
        <Link to={"/commentcomposer/editor"} >
        <div className="flex flex-wrap p-4 justify-center items-center h-28 w-28 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:bg-blue-600 hover:text-white">
          <img
            className="h-12 mr-2"
            src="../src/assets/images/C-hash.png"
            alt="C# Image"
          />

          <div className="font-bold text-lg mb-2 px-8 pb-8">C#</div>
        </div>
        </Link>
        <Link to={"/commentcomposer/editor"} >
        <div className="flex flex-wrap p-4 justify-center items-center h-28 w-28 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:bg-blue-600 hover:text-white">
          <img
            className="h-12 mr-2"
            src="../src/assets/images/TS.png"
            alt="TypeScript Image"
          />

          <div className="font-bold text-lg mb-2 px-8 pb-8">TypeScript</div>
        </div>
        </Link>
        <Link to={"/commentcomposer/editor"} >
        <div className="flex flex-wrap p-4 justify-center items-center h-28 w-28 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:bg-blue-600 hover:text-white">
          <img
            className="h-12 mr-2"
            src="../src/assets/images/C++.png"
            alt="C++ Image"
          />

          <div className="font-bold text-lg mb-2 px-8 pb-8">C++</div>
        </div>

        </Link>
        <Link to={"/commentcomposer/editor"} >
        <div className="flex flex-wrap p-4 justify-center items-center h-28 w-28 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:bg-blue-600 hover:text-white">
          <img
            className="h-12 mr-2"
            src="../src/assets/images/Dart.png"
            alt="Dart Image"
          />

          <div className="font-bold text-lg mb-2 px-8 pb-8">Dart</div>
        </div>
        </Link>
        <Link to={"/commentcomposer/editor"} >
        <div className="flex flex-wrap p-4 justify-center items-center h-28 w-28 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:bg-blue-600 hover:text-white">
          <img
            className="h-12 mr-2"
            src="../src/assets/images/React.png"
            alt="React Image"
          />

          <div className="font-bold text-lg mb-2 px-8 pb-8">React</div>
        </div>
        </Link>
        <Link to={"/commentcomposer/editor"} >
        <div className="flex flex-wrap p-4 justify-center items-center h-28 w-28 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:bg-blue-600 hover:text-white">
          <img
            className="h-12 mr-2"
            src="../src/assets/images/Angular.png"
            alt="Angular Image"
          />

          <div className="font-bold text-lg mb-2 px-8 pb-8">Angular</div>
        </div>
        </Link>
        <Link to={"/commentcomposer/editor"} >
        <div className="flex flex-wrap p-4 justify-center items-center h-28 w-28 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:bg-blue-600 hover:text-white">
          <img
            className="h-12 mr-2"
            src="../src/assets/images/Django.png"
            alt="Django Image"
          />

          <div className="font-bold text-lg mb-2 px-8 pb-8">Django</div>
        </div>
        </Link>
        <Link to={"/commentcomposer/editor"} >
        <div className="flex flex-wrap p-4 justify-center items-center h-28 w-28 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:bg-blue-600 hover:text-white">
          <img
            className="h-12 mr-2"
            src="../src/assets/images/Springboot.png"
            alt="Springboot Image"
          />

          <div className="font-bold text-lg mb-2 px-8 pb-8">SpringBoot</div>
        </div>
        </Link>
        <Link to={"/commentcomposer/editor"} >
        <div className="flex flex-wrap p-4 justify-center items-center h-28 w-28 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:bg-blue-600 hover:text-white">
          <img
            className="h-12 mr-2"
            src="../src/assets/images/NestJS.png"
            alt="NestJS Image"
          />

          <div className="font-bold text-lg mb-2 px-4 pb-8 whitespace-nowrap">
            Nest JS
          </div>
        </div>
        </Link>
        <Link to={"/commentcomposer/editor"} >
        <div className="flex flex-wrap p-4 justify-center items-center h-28 w-28 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:bg-blue-600 hover:text-white">
          <img
            className="h-12 mr-2"
            src="../src/assets/images/VueJS.png"
            alt="VueJS Image"
          />

          <div className="font-bold text-lg mb-2 px-4 pb-8 whitespace-nowrap">
            Vue JS
          </div>
        </div>
        </Link>
        <Link to={"/commentcomposer/editor"} >
        <div className="flex flex-wrap p-4 justify-center items-center h-28 w-28 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:bg-blue-600 hover:text-white">
          <img
            className="h-12 mr-2"
            src="../src/assets/images/ReactNative.png"
            alt="ReactNative Image"
          />

          <div className="font-bold text-lg mb-2 px-4 pb-8 whitespace-nowrap">
            React Native
          </div>
        </div>
        </Link>
        <Link to={"/commentcomposer/editor"} >
        <div className="flex flex-wrap p-4 justify-center items-center h-28 w-28 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:bg-blue-600 hover:text-white">
          <img
            className="h-12 mr-2"
            src="../src/assets/images/JavaScript.png"
            alt="JavaScript Image"
          />

          <div className="font-bold text-lg mb-2 px-8 pb-8">Javascript</div>
        </div>
        </Link>
      </div>
      <Footer />
    </>
  );
};
