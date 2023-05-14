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
      <div className="bg-primary lg:px-10 px-0 lg:py-0 py-10 flex-grow flex flex-col">
        <h3 className="text-textWhite px-5 lg:mt-9 mt-20 pb-5 sm:pb-0 lg:px-0  font-semibold text-2xl  font-[Barlow]">
          Users
        </h3>
        <div className="flex flex-wrap md:flex-nowrap  gap-4  lg:px-0 px-5 lg:pb-1 pb-6  w-full">
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
