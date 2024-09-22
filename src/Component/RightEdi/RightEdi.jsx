import React from "react";
import Editor from "../Editor/Editor";
import terminal from "../../assets/terminal.svg";
import moon from "../../assets/moon.svg";
const RightEdi = () => {
  return (
    <>
      <div className="w-full h-full py-5 bg-white rounded-t-lg overflow-y-auto scrollbar-thin">
        <div className="ml-4 ">
          <h1 className="text-[.875rem] font-semibold">Whitelist</h1>
          <div className="flex gap-3 items-center mt-6 ">
            <span className="text-gray-500 text-base">Set 1:</span>
            <span className="bg-[#34B27D] text-white font-medium rounded-full px-2">
              exception
            </span>
            <span className="bg-[#34B27D] text-white font-medium rounded-full px-2">
              public:
            </span>
            <span className="bg-[#34B27D] text-white font-medium rounded-full px-4">
              []
            </span>
          </div>
        </div>
        <div className=" mt-10 rounded-t-lg">
          <div className="w-full bg-[#1E2431] text-white py-3 px-4 rounded-t-lg  flex items-center justify-between ">
            <div className="font-semibold text-md">Fill your code here</div>
            <div className="flex gap-4 items-center">
              <h1>C++ (17)</h1>
              <img
                src={moon}
                alt=""
                srcset=""
                className="bg-black rounded-full p-2 w-7 h-7"
              />
              <img src={terminal} alt="" srcset="" />
            </div>
          </div>

          <div>
            <Editor />
          </div>
        </div>

        <div className="my-4 ml-4">
          <div className="flex gap-4">
          <input type="checkbox" name="right" id=""  className="w-5 h-5" />
          <h1>Provide Custom Input</h1>
          </div>
          <div className="my-7">
            <h1 className="text-black font-semibold">Right</h1>
            <p className="bg-[#F5F7FA] text-[#737879] py-2">
            1/3 Sample testcase passed
            </p>
          </div>
          <div className="my-6">
            <h1 className="text-black font-semibold">Compiler Message</h1>
            <p className="bg-[#F5F7FA] text-[#737879] py-2">
            Compilation successful
            </p>
          </div>
          <div className="my-6">
            <h1 className="text-black font-semibold">Sample Testcase
            </h1>
            <p className="bg-[#F5F7FA] text-[#737879] py-2">
       Testcase 1 - Passed
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightEdi;
