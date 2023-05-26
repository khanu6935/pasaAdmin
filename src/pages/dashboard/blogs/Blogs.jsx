import React, { useState } from "react";
import {
  Header,
  NavBoxes,
  PageHeader,
  BlogsData,
  Pagination,
} from "../../../components";
import { GoPlus } from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";
import { DataTable } from "../../../components/blogsGrid/data-table";
import { columns } from "../../../components/blogsGrid/columns";
import { ToastContainer, toast } from "react-toastify";

function Blogs() {
  function getCurrentItem(currentItems) {
    while (currentItems.length < 7) {
      currentItems.push({});
    }

    return currentItems;
  }

  const { data, isLoading } = useQuery(
    ["blogs"],
    async () => {
      try {
        const res = await axios.get("blogs");
        return res.data;
      } catch (error) {
        throw error(error);
      }
    },
    {
      refetchOnMount: true,
    }
  );

  return (
    <div className="bg-primary min-h-screen flex flex-col">
      <div className="h-20">
        <Header />
      </div>
      <div className="bg-primary lg:px-10 px-0 py-10">
        <h3 className="text-textWhite lg:px-3 px-6 lg:pb-1 pb-6 font-semibold text-[24px] font-[Barlow]">
          Blogs
        </h3>
        <div className="flex flex-wrap md:flex-nowrap  gap-4  lg:px-0 px-5 lg:pb-1 pb-6  w-full">
          <NavBoxes
            title="Total Blogs"
            counts={data?.length ?? 0}
            ratio="24"
            duration="Overall"
          />
          <NavBoxes
            title="Blogs"
            counts={data?.length ?? 0}
            ratio="24"
            duration="Overall"
          />
          <NavBoxes createTitle="Create Blog" createBlog={true} />
        </div>
        <div
          className="rounded-t-md flex flex-col"
          style={{ border: "2px solid #311A67" }}
        >
          <PageHeader
            title="Blogs"
            placeholder="Search Blog"
            dropDown="Player"
            filter="Filter"
          />
        </div>
        <div className="border-t-0 flex-grow border-x-2 border-b-2 border-[#311A67]">
          <div className="rounded-md overflow-x-auto flex-grow">
            <DataTable
              columns={columns}
              data={data ?? []}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Blogs };
