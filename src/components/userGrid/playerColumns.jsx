import { formatDate } from "../../utils/formateDate";
import { BlogActionsDropdown } from "../dropdowns/BlogsActionDropdown";

export const Playercolumns = [
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
    accessorKey: "message",
    header: "Message",
  },
  {
    accessorKey: "unlockMyBonusCheck",
    header: "Phone",
  },
  {
    accessorKey: "unlockMyBonusCheck",
    header: "Check Updates Received ",
    cell: ({ row }) => {
      return (
        <div>{row.original.unlockMyBonusCheck === false ? "No" : "Yes"}</div>
      );
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
