import React from "react";
import { Images } from "../../assets";
import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { FaBan } from "react-icons/fa";
import { CustomModal } from "../customModal/CustomModal";

function DataTable({ bodyData, tableHeader, properties }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserDelete, setIisUserDelete] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleUserDelete = () => {
    setIisUserDelete(true);
  };
  const handleUserDeleteClose = () => {
    setIisUserDelete(false);
  };

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
          {console.log(bodyData, properties)}
          {bodyData.map((item, index) => {
            return (
              <tr key={index}>
                {properties.map((property) => {
                  return (
                    <td
                      className="py-3 px-4 text-textWhite text-left whitespace-nowrap"
                      key={property}
                      onClick={
                        properties === "message" ? handleModalOpen() : ""
                      }
                    >
                      <div className="flex space-x-2">
                        {Object.keys(item).length > 0 &&
                          property == "title" && (
                            <div>
                              <img src={item["image"]} className="h-6 w-6" />
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
                        <p onClick={() => setIisUserDelete(true)}>Delete</p>
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

      <div>
        <CustomModal
          openModal={isUserDelete}
          closeModal={handleUserDeleteClose}
        >
          <div className="w-full">
            <div>
              <h3 className="text-[32px] font-bold text-center  text-textWhite font-[Barlow]">
                ARE YOU SURE YOU WANT TO DELETE?
              </h3>
            </div>
            <div className="flex justify-center gap-3 mt-8">
              <button className="px-16 bg-[#26164B] py-4 text-lg font-medium font-[Barlow] rounded-lg">
                Cancel
              </button>
              <button className="px-16 bg-red-600 py-4 text-lg font-medium font-[Barlow] rounded-lg">
                Delete
              </button>
            </div>
          </div>
        </CustomModal>
      </div>
    </>
  );
}

export { DataTable };
