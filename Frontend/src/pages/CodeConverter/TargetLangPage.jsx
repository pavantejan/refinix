import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link, useNavigate, useLocation } from "react-router-dom";

const TargetLangPage = () => {
  const [sourceLanguageData, setSourceLanguageData] = useState(null);
  const [selectedTargetLanguage, setSelectedTargetLanguage] = useState(null);

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
      {
        sourceLanguageName: "Go Lang",
        imageURL: "../src/assets/images/GO.png",
        targetLanguages: [
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
            targetLanguageName: "Python",
            imageURL: "../src/assets/images/Python.png",
          },
          

        ],
      },
    ],
  };

  // Fetch  Data from previous page states.
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    console.log(data);
    setSourceLanguageData(data.sourceLanguageData);
  }, [data, selectedTargetLanguage]);

  const handleClick = (targetLanguage) => {
    setSelectedTargetLanguage(targetLanguage);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (sourceLanguageData !== null && selectedTargetLanguage !== null) {
      const editorLanguages = {
        selectedSourceLanguage: {
          sourceLanguageName: sourceLanguageData.sourceLanguageName,
          imageURL: sourceLanguageData.imageURL,
        },
        selectedTargetLanguage: {
          targetLanguageName: selectedTargetLanguage.targetLanguageName,
          imageURL: selectedTargetLanguage.imageURL,
        },
      };
      navigate("/codeconverter/editor", { state: editorLanguages });
    }
  }, [navigate, sourceLanguageData, selectedTargetLanguage]);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center items-center font-bold text-xl py-20 ">
        Choose your language or framework
      </div>

      {jsonData.languages.map(
        (sourceLanguage, sourceIndex) =>
          // Check if the sourceLanguage matches the sourceLanguageName from the URL
          sourceLanguage.sourceLanguageName ===
            sourceLanguageData?.sourceLanguageName && (
            <div
              key={sourceIndex}
              className="pl-32  pr-32 pb-64 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 gap-6 justify-center items-center"
            >
              {sourceLanguage.targetLanguages.map(
                (targetLanguage, targetIndex) => (
                  <div
                    key={targetIndex}
                    className="flex flex-col items-center h-28 w-28 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:bg-blue-600 hover:text-white"
                  >
                    <button onClick={() => handleClick(targetLanguage)}>
                      <img
                        className="h-12 my-4" // Added margin top and bottom to center the image
                        src={targetLanguage.imageURL}
                        alt={targetLanguage.targetLanguageName}
                      />
                      <div className="font-bold text-lg pb-4">
                        {targetLanguage.targetLanguageName}
                      </div>
                    </button>
                  </div>
                )
              )}
            </div>
          )
      )}

      <Footer />
    </>
  );
};

export default TargetLangPage;
