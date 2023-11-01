import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SourceLangPage = () => {
  const [selectedSourceLanguage, setSelectedSourceLanguage] = useState(null);

  

  useEffect(() => {
    console.log(selectedSourceLanguage);
  }, [selectedSourceLanguage]);

  // JSON Data For Language Converter
  const jsonData = {
    languages: [
      {
        sourceLanguageName: "Javascript",
        imageURL: "../src/assets/images/JavaScript.png",
        targetLanguages: [
          {
            targetLanguageName: "Python",
            imageURL: "../src/assets/images/Python.png",
          },
          {
            targetLanguageName: "GoLang",
            imageURL: "../src/assets/images/GO.png",
          },

          {
            targetLanguageName: "TypeScript",
            imageURL: "../src/assets/images/TS.png",
          },
          {
            targetLanguageName: "C#",
            imageURL: "../src/assets/images/C-hash.png",
          },
          {
            targetLanguageName: "Dart",
            imageURL: "../src/assets/images/Dart.png",
          },
          {
            targetLanguageName: "Java",
            imageURL: "../src/assets/images/java.png",
          },
          {
            targetLanguageName: "React",
            imageURL: "../src/assets/images/React.png",
          },
          {
            targetLanguageName: "Angular",
            imageURL: "../src/assets/images/Angular.png",
          },
          {
            targetLanguageName: "Vue Js",
            imageURL: "../src/assets/images/VueJS.png",
          },
          {
            targetLanguageName: "React Native",
            imageURL: "../src/assets/images/ReactNative.png",
          },
        ],
      },
      {
        sourceLanguageName: "Java",
        imageURL: "../src/assets/images/java.png",
        targetLanguages: [
          {
            targetLanguageName: "Python",
            imageURL: "../src/assets/images/Python.png",
          },
          {
            targetLanguageName: "GoLang",
            imageURL: "../src/assets/images/GO.png",
          },
          {
            targetLanguageName: "JavaScript",
            imageURL: "../src/assets/images/JavaScript.png",
          },
          {
            targetLanguageName: "TypeScript",
            imageURL: "../src/assets/images/TS.png",
          },
          {
            targetLanguageName: "C#",
            imageURL: "../src/assets/images/C-hash.png",
          },
          {
            targetLanguageName: "C++",
            imageURL: "../src/assets/images/C++.png",
          },
          {
            targetLanguageName: "Dart",
            imageURL: "../src/assets/images/Dart.png",
          },
        ],
      },
      {
        sourceLanguageName: "Python",
        imageURL: "../src/assets/images/Python.png",
        targetLanguages: [
          
          {
            targetLanguageName: "GoLang",
            imageURL: "../src/assets/images/GO.png",
          },
          {
            targetLanguageName: "JavaScript",
            imageURL: "../src/assets/images/JavaScript.png",
          },
          {
            targetLanguageName: "TypeScript",
            imageURL: "../src/assets/images/TS.png",
          },
          {
            targetLanguageName: "C#",
            imageURL: "../src/assets/images/C-hash.png",
          },
          {
            targetLanguageName: "C++",
            imageURL: "../src/assets/images/C++.png",
          },
          {
            targetLanguageName: "Dart",
            imageURL: "../src/assets/images/Dart.png",
          },
          {
            targetLanguageName: "Java",
            imageURL: "../src/assets/images/java.png",
          },
          {
            targetLanguageName: "React",
            imageURL: "../src/assets/images/React.png",
          },
          {
            targetLanguageName: "Angular",
            imageURL: "../src/assets/images/Angular.png",
          },
          {
            targetLanguageName: "Vue Js",
            imageURL: "../src/assets/images/VueJS.png",
          },
          {
            targetLanguageName: "React Native",
            imageURL: "../src/assets/images/ReactNative.png",
          },
          {
            targetLanguageName: "Django",
            imageURL: "../src/assets/images/Django.png",
          },
          {
            targetLanguageName: "Spring Boot",
            imageURL: "../src/assets/images/Springboot.png",
          },
          {
            targetLanguageName: "Nest JS",
            imageURL: "../src/assets/images/NestJS.png",
          },
          
        ],
      },
      {
        sourceLanguageName: "C#",
        imageURL: "../src/assets/images/C-hash.png",
        targetLanguages: [
          {
            targetLanguageName: "Python",
            imageURL: "../src/assets/images/Python.png",
          },
          {
            targetLanguageName: "JavaScript",
            imageURL: "../src/assets/images/JavaScript.png",
          },
          {
            targetLanguageName: "TypeScript",
            imageURL: "../src/assets/images/TS.png",
          },
          {
            targetLanguageName: "C++",
            imageURL: "../src/assets/images/C++.png",
          },
          {
            targetLanguageName: "Dart",
            imageURL: "../src/assets/images/Dart.png",
          },
          {
            targetLanguageName: "Java",
            imageURL: "../src/assets/images/java.png",
          },
          
        ],
      },
      {
        sourceLanguageName: "C++",
        imageURL: "../src/assets/images/C++.png",
        targetLanguages: [
          {
            targetLanguageName: "GoLang",
            imageURL: "../src/assets/images/GO.png",
          },
          {
            targetLanguageName: "Python",
            imageURL: "../src/assets/images/Python.png",
          },
          {
            targetLanguageName: "C#",
            imageURL: "../src/assets/images/C-hash.png",
          },
          {
            targetLanguageName: "Dart",
            imageURL: "../src/assets/images/Dart.png",
          },
          {
            targetLanguageName: "Java",
            imageURL: "../src/assets/images/java.png",
          },
        ],
      },
   
    ],
  };

  const navigate = useNavigate();
  const data = {
    sourceData: selectedSourceLanguage,
  };

  const handleClick = (language) => {
    setSelectedSourceLanguage(language);
    console.log("Selected Source Language:", language);
    // navigate("/codeconverter/targetLanguage", { state: data });
  };

  useEffect(() => {
    if (selectedSourceLanguage !== null) {
      const data = {
        sourceLanguageData: selectedSourceLanguage,
      };
      navigate("/codeconverter/targetLanguage", { state: data });
    }
  }, [navigate, selectedSourceLanguage]);
  

  return (
    <>
      <Navbar />
      {/* Hero Section of Source Language Page */}
      <div className="flex flex-col flex-wrap justify-start items-start py-20 mx-8 ">
        <h1 className="text-2xl font-medium font-sans">
          Choose your language or framework
        </h1>
        <p className="text-sm font-normal">
          Try our ready to use converts from the options below
        </p>
      </div>

      {/* Source Language Main Section */}
      <div className="pl-16 mb-60 grid grid-cols-3 gap-10">
        {jsonData.languages.map((language, index) => (
          <div key={index}>
            <button onClick={(e) => handleClick(language)}>
              {/* <Link to={"/codeconverter/targetlanguage"}> */}
              <div className="flex flex-row w-80 h-auto bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:bg-blue-600 hover:text-white">
                <img
                  src={language.imageURL}
                  alt={language.sourceLanguageName}
                  className="h-12 my-2 mx-2 justify-center items-center mr-2"
                />
                <div className="font-bold text-xl my-4 ">
                  Convert from {language.sourceLanguageName}
                </div>
              </div>
              {/* </Link> */}
            </button>
          </div>
        ))}

        <Link to={"/codeconverter/targetlanguage"}>
          <div className="flex flex-row w-80 h-auto bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:bg-blue-600 hover:text-white">
            <img
              className=" h-auto my-4 mx-4 justify-center items-center mr-2"
              src="../src/assets/images/GO.png"
              alt="GoLang Image"
            />

            <div className="font-bold text-xl my-4 ">Convert from GoLang</div>
          </div>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default SourceLangPage;
