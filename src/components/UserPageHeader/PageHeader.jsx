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
        <h4 className="text-textWhite text-xl font-[Barlow] font-semibold">
          {title}
        </h4>
      </div>
      <div className="flex lg:flex-row flex-col gap-3 relative bg-red-500 mx-2">
        <div className="bg-secondry flex items-center w-[23rem]">
          <button className="absolute lg:top-4 top-2 left-2">
            <BiSearch color="white" />
          </button>

          <input
            type="text"
            id="input-group-1"
            class="  border  outline-0 bg-secondry text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5   "
            placeholder="name@flowbite.com"
          />
        </div>
      </div>
    </div>
  );
};

export { PageHeader };
