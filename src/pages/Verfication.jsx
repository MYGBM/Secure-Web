import React, { useState } from "react";
import { toast } from "react-hot-toast";

export default function VerfyPage() {
  const [checked, setChecked] = useState(false);
  const [textareaColor, setTextareaColor] = useState("bg-white");
  const [textColor, setTextColor] = useState("text-black");

  //Change the background of textarea
  const handleCheckboxChange = () => {
    setChecked(!checked);
    setTextareaColor(checked ? "bg-white" : "bg-blue-950/80");
    setTextColor(checked ? "text-black" : "text-white");
  };

  //State to textarea
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  // Helper function to generate line numbers
  const generateLineNumbers = () => {
    const lines = text.split("\n");
    return lines.map((_, index) => <div key={index + 1}>{index + 1}</div>);
  };

  //Notification for Verify hash
  const notify = () =>
    toast.success("Verify your data.", {
      duration: 1500,
      position: "top-center",

      style: {
        padding: "16px",
        background: "#1a0338",
        color: "white",
      },
    });

  return (
    <div className="px-12 max-w-[1200] h-[100%] py-12">
      <div className="flex flex-col gap-6 text-center py-10 max-w-[800px] mx-auto">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          SHA256 Hash Verfication
        </h1>
        <p className="text-2xl">Verify that your data's intengnty</p>
      </div>

      <div className="flex justify-center gap-4 items-center py-8 ">
        <input type="file" className="w-[100px]" />
        <div className="w-[1px] border border-gray-600 h-[35px]"></div>

        <span>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <span>Change background color</span>
        </span>
      </div>

      <div className="max-w-[900px] border border-black/30"></div>

      <div className="max-w-[900px] py-6 flex flex-col  sm:flex-row sm:gap-6 gap-12 justify-center sm:items-center mx-auto">
        <div className="flex flex-col gap-2">
          <h3>Text</h3>
          <div className="flex">
            <div className=" py-0 px-[10px] bg-gray-300 border border-r-gray-500 text-center select-none">
              {generateLineNumbers()}
            </div>
            <textarea
              value={text}
              className={`p-[10px] outline-none resize-x  w-[500px] h-[250px] transition-all duration-[300ms] ease-out   appearance-none border border-gray-300  py-0 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${textareaColor} ${textColor}`}
              onChange={(event) => setText(event.target.value)}
              placeholder="Paste your text here..."
            />
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={notify}
              className="bg-black text-white px-2 py-1.5 rounded-md transition-all duration-[300ms] ease-out "
            >
              Verify
            </button>
            <button
              onClick={() => setText("")}
              className="border border-gray-500 px-2 py-1.5 rounded-md transition-all duration-[300ms] ease-out  hover:bg-black hover:text-white"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3>Verfication Status</h3>
          <div className="flex">
            <div className=" py-0 px-[10px] bg-gray-300 border border-r-gray-500 text-center select-none">
              {generateLineNumbers()}
            </div>
            <textarea
              className={`p-[10px] outline-none resize-x  w-[500px] h-[250px] transition-all duration-[300ms] ease-out   appearance-none border border-gray-300  py-0 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${textareaColor} ${textColor}`}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-3 justify-center mt-9"></div>
        </div>
      </div>
    </div>
  );
}
