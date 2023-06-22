import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Hash from "./pages/Hash";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Verfication from "./pages/Verfication";

export default function App() {
  return (
    <>
      {/* <div className="gradient" /> */}

      <Toaster />
      <Navbar />
      <main className="flex flex-col justify-center items-center">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/hashpass" element={<Hash />} />
          <Route exact path="/verify" element={<Verfication />} />
        </Routes>
      </main>

      <footer className="flex h-10 justify-center items-center">
        <Footer />
      </footer>
    </>
  );
}
