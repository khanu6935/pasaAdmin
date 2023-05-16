import { Eye } from "lucide-react";
import { BlogActionsDropdown } from "../dropdowns/BlogsActionDropdown";
import { Link, useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formateDate";

export const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  // {
  //   accessorKey: "name",
  //   header: "Name",
  // },
  {
    accessorKey: "email",
    header: "Email",
  },
  // {
  //   accessorKey: "phone",
  //   header: "Phone",
  // },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => {
      return <div>{formatDate(new Date(row.original.createdAt))}</div>;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      return <BlogActionsDropdown />;
    },
  },
];
