import { Eye } from "lucide-react";
import { BlogActionsDropdown } from "../dropdowns/BlogsActionDropdown";
import { Link, useNavigate } from "react-router-dom";
import { CustomModal } from "../customModal/CustomModal";
import { useState } from "react";

export const ViewMessageModal = () => {
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
          <p className="text-lg font-normal font-[Barlow] text-textWhite text-justify py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            efficitur, risus non molestie faucibus, arcu quam efficitur nulla,
            quis pretium leo turpis id quam. Sed ultricies est sit amet
            imperdiet pulvinar. Maecenas a tortor vestibulum, posuere nunc sit
            amet, dictum sapien. Sed tristique neque eros, quis mollis libero
            consequat sit amet. Vestibulum cursus tortor non odio vestibulum,
            viverra tristique augue auctor. In mollis risus lectus, quis luctus
            odio finibus at.
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
    accessorKey: "fname",
    header: "First Name",
  },
  {
    accessorKey: "lname",
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
  },
  {
    accessorKey: "subject",
    header: "Subject",
  },

  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      return <ViewMessageModal data={row.original} />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      console.log(row.original);

      return <BlogActionsDropdown />;
    },
  },
];
