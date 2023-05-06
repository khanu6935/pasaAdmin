import React from "react";
import { Images } from "../../assets";
import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { FaBan } from "react-icons/fa";

function DataTable({ bodyData, tableHeader, properties }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(-1);

  const handleDropdownClick = (index) => {
    setIsDropdownOpen(!isDropdownOpen);
    setSelected(index);
  };

  const dropDownStyle =
    "flex justify-around items-center  w-full px-4 py-2  text-textWhite hover:bg-primary";

  return (
    <>
      <table id="customers" className="w-full border-collapse">
        <thead>
          <tr>
            {tableHeader.map((i) => {
              return (
                <th
                  className="bg-transparent text-white py-3 px-4 whitespace-nowrap"
                  key={i}
                >
                  {i}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {bodyData.map((item, index) => {
            return (
              <tr key={index}>
                {properties.map((property) => {
                  return (
                    <td
                      className="py-3 px-4 text-textWhite text-center whitespace-nowrap"
                      key={property}
                    >
                      {item[property]}
                    </td>
                  );
                })}
                <td>
                  <img
                    src={Images.dropdown}
                    alt="drop"
                    className="h-4 w-6 object-contain cursor-pointer"
                    onClick={() => handleDropdownClick(index)}
                  />
                  {selected === index && (
                    <div
                      className={`${
                        isDropdownOpen ? "" : "hidden"
                      } absolute z-50 right-12 mt-1 py-2 w-40 bg-[#016BE6] rounded-md shadow-xl`}
                    >
                      <button href="#" className={dropDownStyle}>
                        <p>Delete</p>
                        <span>
                          <MdOutlineDelete />
                        </span>
                      </button>
                      <button href="#" className={dropDownStyle}>
                        <p>Ban User</p>
                        <span>
                          <FaBan />
                        </span>
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export { DataTable };
