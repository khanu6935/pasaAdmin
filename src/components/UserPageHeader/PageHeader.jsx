import React from "react";
import { useState } from "react";
import { BiSearch, BiFilter } from "react-icons/bi";
import { MdOutlineArrowDropDown } from "react-icons/md";

const PageHeader = ({ title, placeholder, dropDown, filter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col sm:flex-row justify-between px-5 py-5">
      <div className="mb-4 sm:mb-0">
        <h4 className="text-textWhite text-xl font-semibold">{title}</h4>
      </div>
      <div className="flex lg:flex-row flex-col gap-3 relative">
        <button className="absolute lg:top-4 top-2 left-2">
          <BiSearch color="white" />
        </button>
        <input
          type="text"
          placeholder={placeholder}
          className="bg-secondry lg:w-96 w-[20rem] lg:p-1 p-2 rounded-2xl text-xs lg:pl-10 pl-8"
        />
        <div className="relative inline-block text-left">
          <button
            className="bg-[#016BE6] text-white font-bold lg:py-2 py-1 lg:px-6 px-0 lg:w-24 w-[12rem] rounded-3xl inline-flex items-center justify-center"
            onClick={toggleMenu}
          >
            <span>{dropDown}</span>
            <span>
              <MdOutlineArrowDropDown size={30} />
            </span>
          </button>
          <div
            className={`${
              isOpen ? "" : "hidden"
            } absolute z-50 right-0 mt-1 py-2 w-48 bg-secondry rounded-md shadow-xl`}
          >
            <a
              href="#"
              className="block px-4 py-2 text-textWhite hover:bg-primary"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-textWhite hover:bg-primary"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-textWhite hover:bg-primary"
            >
              Option 3
            </a>
          </div>
        </div>
        <button className="flex justify-center items-center bg-[#103179] lg:px-7 px-5 lg:w-[6rem] w-[12rem] py-1 rounded-3xl text-xl font-semibold text-textWhite">
          <span>
            <BiFilter color="white" size={30} />
          </span>
          {filter}
        </button>
      </div>
    </div>
  );
};

export { PageHeader };
