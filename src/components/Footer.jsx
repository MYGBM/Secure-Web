import React from "react";

export default function Footer() {
  return (
    <footer className="footer footer-center p-8 mt-24  bg-gradient-to-r from-blue-950 to-blue-950  w-full  text-white">
      <div className="flex justify-between items-center">
        <p className="text-[20px]">@2023 SecureWeb Tecnologies Ltd </p>

        <div>
          <p className="text-[20px]">✉️ success@Secureweb.com</p>
          <p className="flex items-center gap-1">
            <img
              width={20}
              src="https://www.shutterstock.com/image-vector/ethiopia-flag-600w-251552062.jpg"
              alt=""
            />
            <span className="text-[20px]"> +251901345678</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
