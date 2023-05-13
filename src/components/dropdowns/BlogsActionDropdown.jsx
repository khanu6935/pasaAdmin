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

export function BlogActionsDropdown() {
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
    </DropdownMenu>
  );
}
