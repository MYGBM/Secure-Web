import React, { useState } from "react";
import { toast } from "react-hot-toast";

export default function Hash() {
  const [checked, setChecked] = useState(false);
  const [textareaColor, setTextareaColor] = useState("bg-white");
  const [textColor, setTextColor] = useState("text-black");
  const [textareaValue, setTextareaValue] = useState("");

  //Change the background of textarea
 const handleCheckboxChange = () => {
  setChecked(!checked);
  setTextareaColor(checked ? "bg-black" : "bg-white");
  setTextColor(checked ? "text-white" : "text-black");
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

  //To copy texts
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    toast.success("Copied.", {
      duration: 1500,
      position: "top-center",

      style: {
        padding: "16px",
        background: "#1a0338",
        color: "white",
      },
    });
  };

  //To download the hash file
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "textarea-content.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  //Generate a sample text
  const handleGenerateText = () => {
    setText("Atatus - API Performance Monitoring");
  };

  return (
    <div className="px-12 max-w-[1200] h-[100%] py-12">
      <div className="flex flex-col gap-6 text-center py-10 max-w-[800px] mx-auto">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          SHA256 Hash Generator
        </h1>
        <p className="text-2xl">
          Convert plain text into SHA256 hash generator format.
        </p>
      </div>

      <div className="flex justify-center items-center py-8 ">
        <div className="flex justify-center items-center gap-4">
          {" "}
          <button
            onClick={handleGenerateText}
            className="border border-gray-500 px-2 py-1.5 rounded-md transition-all duration-[300ms] ease-out  hover:bg-black hover:text-white"
          >
            Try Sample Data
          </button>
          <div className="w-[1px] border border-gray-600 h-[35px]"></div>
          <input type="file" className="w-[100px]" />
          <div className="w-[1px] border border-gray-600 h-[35px]"></div>
          <span>
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
              className="mr-1"
            />
            <span>Change background color</span>
          </span>
        </div>
      </div>

      <div className="max-w-[900px] border border-black/30"></div>

      {/*Text Fields*/}
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
            <button className="bg-black text-white px-2 py-1.5 rounded-md transition-all duration-[300ms] ease-out ">
              Convert
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
          <h3>Output (SHA256 Generated Hash)</h3>
          <div className="flex">
            <div className=" py-0 px-[10px] bg-gray-300 border border-r-gray-500 text-center select-none">
              {generateLineNumbers()}
            </div>
            <textarea
              className={`p-[10px] outline-none resize-x  w-[500px] h-[250px] transition-all duration-[300ms] ease-out   appearance-none border border-gray-300  py-0 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${textareaColor} ${textColor}`}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={handleCopy}
              className="border border-gray-500 px-2 py-1.5 rounded-md transition-all duration-[300ms] ease-out  hover:bg-black hover:text-white"
            >
              Copy
            </button>
            <button
              onClick={handleDownload}
              className="border border-gray-500 px-2 py-1.5 rounded-md transition-all duration-[300ms] ease-out  hover:bg-black hover:text-white"
            >
              Download
            </button>
            <button className="border border-gray-500 px-2 py-1.5 rounded-md transition-all duration-[300ms] ease-out  hover:bg-black hover:text-white">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
