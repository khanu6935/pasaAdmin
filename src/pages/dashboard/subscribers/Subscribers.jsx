import React, { useState } from "react";
import {
  Header,
  NavBoxes,
  PageHeader,
  SubscriberRowData,
} from "../../../components";
import { SubscribersTable } from "../../../components/subscribersGrid/table-data";
import { columns } from "../../../components/subscribersGrid/columns";

function Subscribers() {
  return (
    <div className="bg-primary min-h-screen">
      <div className="h-20">
        <Header />
      </div>
      <div className="bg-primary  lg:px-10 px-0 py-10">
        <h3 className="text-textWhite lg:px-3 px-6 lg:pb-1 pb-6 font-semibold text-[24px] font-[Barlow] ">
          Subscribers
        </h3>
        <div className="flex flex-wrap md:flex-nowrap  gap-4  lg:px-0 px-5 lg:pb-1 pb-6  w-full">
          <NavBoxes
            title="Total Subscribers"
            counts="1000"
            ratio="24"
            duration="Overall"
          />
        </div>
        <div
          className="rounded-md flex flex-col"
          style={{ border: "2px solid #311A67" }}
        >
          <PageHeader
            title="Subscribers Info"
            placeholder="Search by name"
            dropDown="Player"
            filter="Filter"
          />
        </div>
        <div className="border-t-0 border-x-2 border-b-2 border-[#311A67]">
          <div className="rounded-md overflow-x-auto">
            <SubscribersTable columns={columns} data={SubscriberRowData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Subscribers };
