import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../table/table";
import { Pagination } from "../table/Pagination";
import { Loader } from "../ui/Loading";

export function DataTable({ columns, data, isLoading }) {
  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <div className="rounded-md ">
        <Table className="w-full border-collapse border-none  h-[70vh] text-[1rem] text-white font-[Barlow]">
          <TableHeader className="bg-transparent text-left text-white py-3 px-4 whitespace-nowrap">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="bg-transparent text-left  font-semibold text-white py-3 px-4 whitespace-nowrap"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          {isLoading ? (
            <TableRow className="min-h-[70vh] text-center">
              <TableCell
                colSpan={columns.length}
                className="h-[70vh]   text-center"
              >
                <Loader />
              </TableCell>
            </TableRow>
          ) : (
            <TableBody>
              {table.getRowModel().rows?.length ? (
                <>
                  {table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="h-[75px]">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                  <TableRow></TableRow>
                </>
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          )}
        </Table>
      </div>
      <Pagination table={table} />
    </div>
  );
}
