import React from "react";
// import logo from "../assets/logo.png";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center w-full px-[25px] py-3 sticky  shadow-md bg-white">
      <div className=" w-1/2">
        <img src={logo} className=" h-[50px] w-[150px]" />
      </div>
      <div className=" w-1/2">
        <ul className="flex  justify-end items-center font-semibold">
          <li className=" me-5">Crypto Taxes</li>
          <li className=" me-5">Free Tools</li>
          <li className=" me-5">Resource Center</li>
          <li>
            <button className=" bg-[#3d50e0] p-2  rounded-md text-white">
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
