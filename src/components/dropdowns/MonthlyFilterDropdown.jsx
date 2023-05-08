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

export function DropdownMonths() {
  const months = [
    { label: "12 Month", value: "1" },
    { label: "6 Month", value: "2" },
    { label: "3 Month", value: "3" },
  ];

  const [selectedMonth, setSelectedMonth] = useState("1");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="text-white items-center justify-between bg-navyBlue rounded-3xl px-4 py-2 flex">
          <div className="px-2 font-semibold w-full">
            {months.find((i) => i.value == selectedMonth).label}
          </div>
          <ChevronDown size={20} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-navyBlue text-white">
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
