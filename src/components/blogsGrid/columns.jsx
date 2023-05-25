import { Eye } from "lucide-react";
import { BlogActionsDropdown } from "../dropdowns/BlogsActionDropdown";
import { Link, useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formateDate";

export const columns = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const blog = row.original;

      return (
        <div className="flex space-x-2">
          <div>
            <img src={row?.original?.image} className="h-6 w-6" />
          </div>

          <div>{row?.original?.title}</div>

          <div>
            <span
              class={`  text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-yellow-500 text-black`}
            >
              Published
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "publishedOn",
    header: "Published On",
    cell: ({ row }) => {
      return <div>{formatDate(new Date(row.original.publishedOn))}</div>;
    },
  },
  {
    // header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      return (
        <Link
          to={`/blog-details/${row?.original?.id}`}
          onClick={() => {}}
          className="text-[#201242] cursor-pointer  items-center flex max-w-fit space-x-2 font-[Barlow] text-sm bg-[#F6CAA7] px-2 py-2 rounded-sm"
        >
          <span>View</span>
          <Eye size={16} />
        </Link>
      );
    },
  },
  {
    // header: "Dropdonw",
    id: "actions",
    cell: ({ row }) => {
      console.log(row.original);
      return <BlogActionsDropdown id={row.original.id} />;
    },
  },
];
