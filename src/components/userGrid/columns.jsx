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
    accessorKey: "unlockMyBonusCheck",
    header: "Unlock My Bonus Check",
    cell: ({ row }) => {
      return (
        <div>{row.original.unlockMyBonusCheck === false ? "No" : "Yes"}</div>
      );
    },
  },

  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     console.log(row.original);

  //     return <BlogActionsDropdown />;
  //   },
  // },
];
