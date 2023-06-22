import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="px-28 p-8 bg-gradient-to-r from-blue-950 to-blue-950 ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          <Link to={"/"}> Secure Web</Link>
        </h1>

        <div className="flex justify-center items-center gap-6">
          {" "}
          <button className="bg-gradient-to-r from-pink-400 to-blue-400  rounded-lg text-[17px] font-semibold text-white  px-2 py-1.5 flex flex-col justify-center items-center">
            <Link to={"/hashpass"}> Converter Page</Link>
          </button>
          <button className="border-2 hover:bg-gradient-to-r from-pink-400 to-blue-400  rounded-lg text-[17px] font-semibold text-white  px-2 py-1.5 flex flex-col justify-center items-center">
            <Link to={"/verify"}> Verfication</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
