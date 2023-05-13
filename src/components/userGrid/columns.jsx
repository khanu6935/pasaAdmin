import { Eye } from "lucide-react";
import { BlogActionsDropdown } from "../dropdowns/BlogsActionDropdown";
import { Link, useNavigate } from "react-router-dom";

export const columns = [
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
    accessorKey: "joinon",
    header: "Join On",
  },
  //   {
  //     header: "Actions",
  //     id: "actions",
  //     cell: ({ row }) => {
  //       return (
  //         <Link
  //           to={`/blog-details/${row?.original?.id}`}
  //           onClick={() => {}}
  //           className="text-[#201242] cursor-pointer  items-center flex max-w-fit space-x-2 font-[Barlow] text-sm bg-[#F6CAA7] px-2 py-2 rounded-sm"
  //         >
  //           <span>View</span>
  //           <Eye size={16} />
  //         </Link>
  //       );
  //     },
  //   },
  {
    id: "actions",
    cell: ({ row }) => {
      console.log(row.original);

      return <BlogActionsDropdown />;
    },
  },
];
