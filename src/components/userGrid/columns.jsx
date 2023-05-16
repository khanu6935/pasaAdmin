import { formatDate } from "../../utils/formateDate";
import { BlogActionsDropdown } from "../dropdowns/BlogsActionDropdown";

export const columns = [
  {
    accessorKey: "name",
    header: "Name",
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
    accessorKey: "createdAt",
    header: "Join On",
    cell: ({ row }) => {
      return <div>{formatDate(new Date(row.original.createdAt))}</div>;
    },
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
