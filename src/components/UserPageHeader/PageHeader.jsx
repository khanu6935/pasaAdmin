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
      <div className="flex lg:flex-row flex-col gap-3 relative  mx-2">
        <div className="bg-secondry rounded-2xl flex items-center w-[23rem]">
          <button className="pl-3 ">
            <BiSearch color="white" size={20} />
          </button>

          <input
            type="text"
            id="input-group-1"
            class="     outline-  bg-secondry   text-sm  rounded-2xl  block w-full pl-2 p-2.5   "
            placeholder="Search Blog"
          />
        </div>
      </div>
    </div>
  );
};

export { PageHeader };
