import React, { useState } from "react";
import {
  Header,
  NavBoxes,
  PageHeader,
  UserRowData,
  DataTable,
  Pagination,
} from "../../../components";
import { UserTable } from "../../../components/userGrid/data-table";
import { columns } from "../../../components/userGrid/columns";

function Users() {
  return (
    <div className="bg-primary min-h-screen">
      <div>
        <Header />
      </div>
      <div className="bg-primary container lg:px-10 px-0 py-10">
        <h3 className="text-textWhite mt-16  px-3 font-semibold text-[24px] font-[Barlow]">
          Users
        </h3>
        <div className="flex gap-4 overflow-x-scroll customClass w-full lg:px-1 px-6">
          <NavBoxes
            title="Total Distributors"
            counts="500"
            ratio="24"
            duration="Overall"
          />
          <NavBoxes
            title="Total Players"
            counts="500"
            ratio="24"
            duration="Overall"
          />
        </div>
        <div
          className="rounded-md flex flex-col"
          style={{ border: "2px solid #311A67" }}
        >
          <PageHeader
            title="Players"
            placeholder="Search User By Name , Id or email"
            dropDown="Player"
            filter="Filter"
          />
        </div>
        <div className="border-t-0 border-x-2 border-b-2   border-[#311A67]">
          <div className="rounded-md overflow-x-auto">
            <UserTable columns={columns} data={UserRowData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Users };
