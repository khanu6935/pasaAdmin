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
      <table id="customers" className="w-full border-collapse font-[Barlow] ]">
        <thead>
          <tr>
            {tableHeader.map((i) => {
              return (
                <th
                  className="bg-transparent text-left text-white py-3 px-4 whitespace-nowrap"
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
                      <div className="flex space-x-2">
                        {property == "title" && (
                          <div>
                            <img src={Images.pasa} className="h-6 w-6" />
                          </div>
                        )}
                        <div>{item[property]}</div>
                        {property == "title" && (
                          <div>
                            <span
                              class={`  text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-${item["statusColor"]} `}
                            >
                              {item["status"]}
                            </span>
                          </div>
                        )}
                      </div>
                    </td>
                  );
                })}

                <td className="text-white">View</td>
                <td>
                  <img
                    src={Images.dropdown}
                    alt="drop"
                    className="h-4 w-6 object-contain cursor-pointer"
                    onClick={() => handleDropdownClick(index)}
                  />
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
