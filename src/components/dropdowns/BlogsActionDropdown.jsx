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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "../../lib/axios";
import { useNavigate } from "react-router-dom";

export const DeleteModal = ({ isModalOpen, handleModalClose }) => {
  const queryClient = useQueryClient();

  const deleteBlog = useMutation(
    async (id) => {
      const response = await axios.delete(`/blog/${id}`);

      if (!response.ok) {
        throw new Error("Error creating blog post");
      }

      return response.json();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["blogs"]);
        // Replace 'blogs' with the name of the query that should be invalidated
        // when the mutation is successful
      },
    }
  );

  return (
    <div>
      <CustomModal openModal={!!isModalOpen} closeModal={handleModalClose}>
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
            <button
              className="px-16 bg-[#A50013] py-4 text-lg font-medium font-[Barlow] rounded-lg"
              onClick={() => {
                deleteBlog.mutate(isModalOpen);
                handleModalClose();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export function BlogActionsDropdown({ id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleModalOpen = () => {
    setIsModalOpen(id);
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
                  handleModalOpen(id);
                }

                if (m.value == "4") return navigate(`/create-blog/${id}`);

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
