import { Eye } from "lucide-react";
import { BlogActionsDropdown } from "../dropdowns/BlogsActionDropdown";
import { Link, useNavigate } from "react-router-dom";
import { CustomModal } from "../customModal/CustomModal";
import { useState } from "react";
import { formatDate } from "../../utils/formateDate";

export const ViewMessageModal = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button
        className="text-[#201242] cursor-pointer  items-center flex max-w-fit space-x-2 font-[Barlow] text-sm bg-[#F6CAA7] px-2 py-2 rounded-sm"
        onClick={() => handleModalOpen()}
      >
        <span>View</span>
        <Eye size={16} />
      </button>
      <CustomModal openModal={isModalOpen} closeModal={handleModalClose}>
        <div className="w-full">
          <h3 className="text-[32px] text-textWhite font-bold font-[Barlow] text-center">
            MESSAGE
          </h3>
          <p className="text-lg font-normal font-[Barlow] text-center text-textWhite  py-4">
            {data.message}
          </p>
        </div>
      </CustomModal>
    </div>
  );
};

export const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      return <div>{formatDate(new Date(row.original.createdAt))}</div>;
    },
  },
  {
    accessorKey: "message",
    header: "Message",
  },

  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      return <ViewMessageModal data={row.original} />;
    },
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     return <BlogActionsDropdown />;
  //   },
  // },
];
