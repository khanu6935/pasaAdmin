import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export function Pagination({ table }) {
  const pageSize = 10;
  const totalRecords = table.getFilteredRowModel().rows.length;
  const currentPageIndex = table.getState().pagination.pageIndex;

  const startRecordIndex = currentPageIndex * pageSize;
  const endRecordIndex = Math.min(startRecordIndex + pageSize, totalRecords);
  const showingRecords = table
    .getFilteredRowModel()
    .rows.slice(startRecordIndex, endRecordIndex);
  const paginationButtons = [];
  for (let i = 0; i < table.getPageCount(); i++) {
    paginationButtons.push(
      <button
        key={i}
        className={` px-3 py-1 rounded  ${
          table.getState().pagination.pageIndex + 1 == i + 1
            ? "bg-[#FFB800] text-white"
            : "bg-secondry"
        }`}
        onClick={() => table.setPageIndex(i)}
      >
        {i + 1}
      </button>
    );
  }

  return (
    <div className="flex items-center text-white justify-between px-4 py-6">
      <div className="flex-1 text-lg  ">
        <p className="text-textWhite font-medium font-[Barlow]">
          Showing {showingRecords.length} out of{" "}
          {table.getFilteredRowModel().rows.length}
        </p>
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          {paginationButtons.map((u) => u)}
        </div>
      </div>
    </div>
  );
}
