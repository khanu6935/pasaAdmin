import React, { useState } from "react";
import {
  Header,
  NavBoxes,
  PageHeader,
  SubmissionRowData,
  DataTable,
  Pagination,
} from "../../../components";

function Submission() {
  const submissionHeader = [
    "ID",
    "First Name",
    "Last Name",
    "Email",
    "Phone",
    "Date",
    "Subject",
    "Message",
    "",
  ];
  const properties = [
    "id",
    "fname",
    "lname",
    "email",
    "phone",
    "date",
    "subject",
    "message",
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = SubmissionRowData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="bg-primary min-h-screen">
      <div className="h-20">
        <Header />
      </div>
      <div className="bg-primary container lg:px-10 px-0 py-10">
        <h3 className="text-textWhite px-6 font-semibold text-xl ">
          Submission
        </h3>
        <div className="flex gap-4 overflow-x-scroll customClass w-full lg:px-4 px-6">
          <NavBoxes />
          <NavBoxes />
          <NavBoxes />
        </div>
        <div
          className="rounded-md flex flex-col"
          style={{ border: "2px solid #311A67" }}
        >
          <PageHeader
            title="Players"
            placeholder="Search User By Name, Id or email"
            dropDown="Player"
            filter="Filter"
          />
        </div>
        <div className="border-t-0 border-x-2 border-b-2 border-[#311A67]">
          <div className="rounded-md overflow-x-auto">
            <DataTable
              bodyData={currentItems}
              tableHeader={submissionHeader}
              properties={properties}
            />
          </div>

          <div className="px-10 py-4 flex justify-between">
            <p className="text-textWhite font-semibold font-[Barlow]">
              Showing {itemsPerPage} out of {SubmissionRowData.length}
            </p>
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={SubmissionRowData.length}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Submission };
