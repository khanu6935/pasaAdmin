import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";

export function PlayersDropdown() {
  const months = [
    { label: "Player 1", value: "1" },
    { label: "Player 2", value: "2" },
    { label: "Player 3", value: "3" },
  ];

  const [selectedMonth, setSelectedMonth] = useState("1");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="text-white items-center justify-between bg-skyBlue rounded-3xl px-4 cursor-pointer  flex">
          <div className="px-2 font-semibold w-full">Players</div>
          <ChevronDown size={20} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-skyBlue text-white">
        {months.map((m) => {
          return (
            <DropdownMenuCheckboxItem
              className="border-b-white  border-b last:border-0"
              checked={m.value == selectedMonth}
              onCheckedChange={() => {
                setSelectedMonth(m.value);
              }}
            >
              {m.label}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
