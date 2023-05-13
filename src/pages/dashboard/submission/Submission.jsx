import React, { useState } from "react";
import {
  Header,
  NavBoxes,
  PageHeader,
  SubmissionRowData,
} from "../../../components";
import { SubmissionTable } from "../../../components/SubmissionGrid/table-data";
import { columns } from "../../../components/SubmissionGrid/columns";

function Submission() {
  return (
    <div className="bg-primary min-h-screen">
      <div className="h-20">
        <Header />
      </div>
      <div className="bg-primary container lg:px-10 px-0 py-10">
        <h3 className="text-textWhite px-3 font-semibold text-[24px] font-[Barlow] ">
          Submission
        </h3>
        <div className="flex gap-4 overflow-x-scroll customClass w-full lg:px-1 px-6">
          <NavBoxes />
          <NavBoxes />
          <NavBoxes />
        </div>
        <div
          className="rounded-md z-0 flex flex-col"
          style={{ border: "2px solid #311A67" }}
        >
          <PageHeader
            title="Contacts"
            placeholder="Search by name"
            dropDown="Player"
            filter="Filter"
          />
        </div>
        <div className="border-t-0 border-x-2 border-b-2 border-[#311A67]">
          <div className="rounded-md overflow-x-auto">
            <SubmissionTable columns={columns} data={SubmissionRowData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Submission };
