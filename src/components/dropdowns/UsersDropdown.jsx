import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";

export function DropdownUsers({ onSelectedOption, selectedOption }) {
  const months = [
    { label: "Player", value: "players" },
    { label: "Distributer", value: "distributer" },
    { label: "Subscribers", value: "subscribers" },
  ];

  const [selectedMonth, setSelectedMonth] = useState("playerGraph");
  const selectedOptionLabel = months.find(
    (m) => m.value === selectedMonth
  )?.label;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="text-white items-center bg-skyBlue justify-between rounded-3xl px-4 py-2 flex">
          <div className="px-2 font-semibold">{selectedOption}</div>
          <ChevronDown size={20} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-secondry text-white">
        {months.map((m) => {
          return (
            <DropdownMenuCheckboxItem
              key={m.value}
              className="border-b-white  border-b last:border-0"
              checked={m.value === selectedMonth}
              onCheckedChange={() => onSelectedOption(m.value)}
            >
              {m.label}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
