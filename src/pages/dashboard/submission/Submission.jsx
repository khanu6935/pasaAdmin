import React, { useState } from "react";
import {
  Header,
  NavBoxes,
  PageHeader,
  SubmissionRowData,
} from "../../../components";
import { SubmissionTable } from "../../../components/SubmissionGrid/table-data";
import { columns } from "../../../components/SubmissionGrid/columns";
import { useQuery } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";
import { LoaderSpiner } from "../../../components/loader/LoaderSpiner";
import useDebounce from "../../../Hooks/useDebounce";

function Submission() {
  const [search, setSearch] = useState("");
  const searchParam = useDebounce(search, 500);
  const { data: submissions, isLoading } = useQuery(
    ["submissions", searchParam],
    async () => {
      try {
        const res = await axios.get(`/contact?keyword=${searchParam}`);
        const filterData = res.data.filter(
          (item) => item.purpose === "message"
        );
        return filterData;
      } catch (error) {
        throw new Error(error);
      }
    },
    {
      refetchOnMount: true,
      refetchInterval: 5000,
    }
  );

  return (
    <div className="bg-primary min-h-screen">
      <div className="h-20">
        <Header />
      </div>
      <div className="bg-primary lg:px-10 px-0 py-10">
        <h3 className="text-textWhite lg:px-3 px-6 lg:pb-1 pb-6 font-semibold text-[24px] font-[Barlow] ">
          Submission
        </h3>
        <div className="flex flex-wrap md:flex-nowrap  gap-4  lg:px-0 px-5 lg:pb-1 pb-6  w-full">
          <NavBoxes
            title="Contacts"
            counts={isLoading ? <LoaderSpiner /> : submissions?.length}
            showIcon={false}
          />
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
            value={search}
            setValue={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="border-t-0 border-x-2 border-b-2 border-[#311A67]">
          <div className="rounded-md overflow-x-auto">
            <SubmissionTable
              columns={columns}
              data={submissions ?? []}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Submission };
