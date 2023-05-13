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
      <div className="bg-primary container lg:px-10 px-0 py-10">
        <h3 className="text-textWhite px-3 font-semibold text-[24px] font-[Barlow]">
          Subscribers
        </h3>
        <div className="flex gap-4 overflow-x-scroll customClass w-full lg:px-1 px-6">
          <NavBoxes />
          <NavBoxes />
          <NavBoxes />
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
