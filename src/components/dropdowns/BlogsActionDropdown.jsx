import * as React from "react";

import {
  ArrowUpFromLineIcon,
  ChevronDown,
  Eye,
  Pencil,
  Trash,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";
import { Images } from "../../assets";
import { CustomModal } from "../customModal/CustomModal";

export const DeleteModal = ({ isModalOpen, handleModalClose }) => {
  return (
    <div>
      <CustomModal openModal={isModalOpen} closeModal={handleModalClose}>
        <div className="w-full">
          <div>
            <h3 className="text-[32px] font-bold text-center  text-textWhite font-[Barlow]">
              ARE YOU SURE YOU WANT TO DELETE THIS USER?
            </h3>
          </div>
          <div className="flex justify-center gap-3 mt-8">
            <button className="px-16 bg-[#26164B] py-4 text-lg font-medium font-[Barlow] rounded-lg">
              Cancel
            </button>
            <button className="px-16 bg-[#A50013] py-4 text-lg font-medium font-[Barlow] rounded-lg">
              Delete
            </button>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export function BlogActionsDropdown() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const months = [
    { label: "Delete", value: "1", icon: <Trash size={16} /> },
    { label: "Publish", value: "2", icon: <ArrowUpFromLineIcon size={16} /> },
    { label: "View", value: "3", icon: <Eye size={16} /> },
    { label: "Edit", value: "4", icon: <Pencil size={16} /> },
  ];

  const [selectedMonth, setSelectedMonth] = useState("1");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <img src={Images.dropdown} className="w-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#016BE6] text-white">
        {months.map((m) => {
          return (
            <DropdownMenuCheckboxItem
              className="border-b-white flex justify-between border-b last:border-0"
              onCheckedChange={() => {
                if (m.label == "Delete") {
                  handleModalOpen();
                }

                setSelectedMonth(m.value);
              }}
              icon="Trash"
            >
              <span>{m.label}</span>
              {m.icon}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
      <DeleteModal
        isModalOpen={isModalOpen}
        handleModalClose={handleModalClose}
      />
    </DropdownMenu>
  );
}
