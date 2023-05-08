import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

const NavBoxes = ({ title, counts, ratio, duration }) => {
  return (
    <div
      className="h-28 w-full bg-transparent rounded-md flex my-0 sm:my-6 justify-center pl-3 flex-col"
      style={{ border: "2px solid #311A67" }}
    >
      <p className="text-textWhite text-base font-light">{title}</p>
      <div className="flex items-center gap-3">
        <h2 className="text-textWhite text-2xl font-bold">{counts}</h2>
        <p className="bg-primaryYellow w-12 h-6 flex justify-center items-center rounded-2xl">
          {ratio}
          <RxArrowTopRight />
        </p>
      </div>
      <p className="text-textWhite text-base font-light">{duration}</p>
    </div>
  );
};

export { NavBoxes };
