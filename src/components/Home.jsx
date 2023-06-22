import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="px-12 max-w-[1200]">
      <div className="gradient" />
      <div className="flex flex-col py-20 gap-8 justify max-w-[800px] ">
        <h1 className="text-5xl font-bold text-center">Did You Know?</h1>
        <p className="text-2xl text-center flex flex-col gap-8">
          Over 4.1 billion records were exposed in data breaches in the first
          half of 2021 alone? And so far almost 340 million people have been
          affected by publicly-reported data breaches or leaks in 2023.
          <br />
          <span className="font-semibold text-blue-900">
            It’s more important now more than ever to keep your data Secure!
          </span>
        </p>

        {/* <button className="bg-gradient-to-r from-pink-500 to-blue-500 w-[200px] p-4 rounded-full text-[20px] font-semibold text-white mx-auto">
          <Link to={"/hashpass"}> Get Started</Link>
        </button> */}
      </div>

      <div className="bg-gray-200  flex flex-col justify-center items-center py-10 max-w-[900px] rounded-xl">
        <div>
          <h1 className="text-2xl font-semibold">
            Online SHA-256 Hash Generator Tool
          </h1>
        </div>

        <div className="flex flex-col md:flex-row py-6 max-w-[700px] gap-4">
          <div className="max-w-[300px] bg-white p-3 mx-auto flex flex-col gap-3 rounded-lg">
            <h3 className="text-[20px] font-semibold">User-friendly</h3>
            <p>
              SHA-256 is virtually unbreakable, making it the ideal choice for
              anyone who wants to keep their data secure.
            </p>
          </div>

          <div className="max-w-[300px] bg-white p-3 mx-auto flex flex-col gap-3 rounded-lg">
            <h3 className="text-[20px] font-semibold">Secure Algorithm</h3>
            <p>
              The user interface of the software is intuitive and easy to use,
              making it simple for even inexperienced users to perform complex
              tasks.
            </p>
          </div>

          <div className="max-w-[300px] bg-white p-3 mx-auto flex flex-col gap-3 rounded-lg">
            <h3 className="text-[20px] font-semibold">Data Verification</h3>
            <p>
              With a single click of a button, users can quickly and easily
              verify that their data has not been tampered with thanks to our
              clear verification status message.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-2xl font-bold text-gray-600">
            Why Wait? <span>Protect your data today!</span>
          </p>

          <button className="bg-gradient-to-r from-pink-500 to-blue-500  p-4 rounded-full text-[20px] font-semibold text-white mx-auto">
            <Link to={"/hashpass"}> Secure Your Data In seconds ➡️</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
