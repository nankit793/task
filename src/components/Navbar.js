import React from "react";

function Navbar() {
  return (
    <>
      <div className="bg-white text-[black] flex justify-between items-center rounded-xl p-2 font-inter font-semibold">
        <div className="flex justify-start">
          <p className="">LOGO</p>
          <p className="ml-3">J. Carter</p>
        </div>
        <div className="flex flex-between">
          <p className="px-1">Works</p>
          <p className="px-1">Testimonials</p>
          <p className="px-1">FAQ</p>
          <p className="px-1">Contact</p>
          <p className="px-1">More</p>
        </div>
        <div>
          <p className="bg-[orange] text-[white] px-2 p-1 rounded-2xl">
            Buy Template
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
