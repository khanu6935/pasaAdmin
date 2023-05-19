import React, { useState } from "react";
import { Header, NavBoxes, PageHeader } from "../../../components";
import { UserTable } from "../../../components/userGrid/data-table";
import { columns } from "../../../components/userGrid/columns";
import { useQuery } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";
import { Playercolumns } from "../../../components/userGrid/playerColumns";

function Users() {
  const [activeApi, setActiveApi] = useState("contact");
  const { data: contact, isLoading } = useQuery(["contact"], async () => {
    try {
      const res = await axios.get("/contact");
      const apidata = res.data;
      const formattedData = apidata.map((item) => ({
        ...item,
        unlockMyBonusCheck: Boolean(item.unlockMyBonusCheck),
      }));

      return formattedData;
    } catch (error) {
      throw new Error(error);
    }
  });

  const { data: users } = useQuery(["users"], async () => {
    try {
      const res = await axios.get("/users");
      const apidata = res.data;
      const formattedData = apidata.map((item) => ({
        ...item,
        unlockMyBonusCheck: Boolean(item.unlockMyBonusCheck),
      }));

      return formattedData;
    } catch (error) {
      throw new Error(error);
    }
  });

  const handleUserTable = (api) => {
    setActiveApi(api);
  };

  console.log("users>>", users);
  console.log("contact>>", contact);

  console.log("activeApi", activeApi);

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
            counts={users?.length}
            ratio="24"
            duration="Overall"
            onClick={() => handleUserTable("contact")}
          />
          <NavBoxes
            title="Total Players"
            counts={users?.length}
            ratio="24"
            duration="Overall"
            onClick={() => handleUserTable("users")}
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
          <div className="rounded-md h-full">
            {activeApi === "users" ? (
              <UserTable columns={columns} data={users ?? []} />
            ) : (
              <UserTable columns={Playercolumns} data={contact ?? []} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Users };
