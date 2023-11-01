import React from "react";
// import { ShimmerText } from "react-shimmer-effects";

export default function Shimmer() {
    return (
        <>
            <div class="flex flex-wrap p-4 justify-center items-center h-28 w-28 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg hover:bg-blue-600 hover:text-white">
                <a href="#">
                    <img class="h-12 mr-2" src="src/assets/java.png" alt="Java Image" />
                </a>
                <div class="font-bold text-lg mb-2 px-8 pb-8">Java</div>
            </div>
            ;
        </>
    );
}