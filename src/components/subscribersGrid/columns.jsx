import { Eye } from "lucide-react";
import { BlogActionsDropdown } from "../dropdowns/BlogsActionDropdown";
import { Link, useNavigate } from "react-router-dom";

export const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
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
    accessorKey: "date",
    header: "Date",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      console.log(row.original);

      return <BlogActionsDropdown />;
    },
  },
];
