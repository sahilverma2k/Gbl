import * as React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("caseNo", {
    cell: (info) => info.getValue(),
    header: () => <span>Case Number</span>,
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("branch", {
    id: "Branch",
    cell: (info) => info.getValue(),
    header: () => <span>Branch</span>,
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("reportingMethod", {
    header: () => "Reporting Method",
    cell: (info) => info.renderValue(),
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("date", {
    header: () => <span>Date</span>,
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("time", {
    header: "Time",
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("category", {
    header: "Category",
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("subCategory", {
    header: "Sub Category",
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("priority", {
    header: "Priority",
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("nature", {
    header: "Nature",
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("caseManager", {
    header: "Case Manager",
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("caseReporter", {
    header: "Case Reporter",
    // footer: (info) => info.column.id,
  }),
  columnHelper.accessor("caseStatus", {
    header: "Case Status",
    // footer: (info) => info.column.id,
  }),
];

function Table() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  // const [data, setData] = React.useState(() => [...defaultData.data]);

  useEffect(() => {
    setLoading(true);
    fetchTitle();
    setLoading(false);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 5000);
  }, []);

  const fetchTitle = async () => {
    const response = await fetch("http://localhost:3000/api/caseDetails/");
    const data_response = await response.json();
    setData(data_response["data"]); //Setting the response into state
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="shadow overflow-auto border-b border-gray-200 sm:rounded-lg">
      <table className="divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="text-left text-xs font-medium p-4 text-gray-500 uppercase tracking-wider"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {loading ? (
          <div className=" flex items-center justify-center h-screen">
            <ClipLoader
              size={40}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="whitespace-nowrap px-4 py-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
  // console.log("hqh");
  // axios
  //   .get("http://localhost:3000/api/caseDetails/get")
  //   .then((res) => newTable(res.data));
  // axios.get("http://localhost:3000/api/caseDetails/get").then((response) => {
  //   newTable(response.data);
  // });

  // const caseData = await axios.get("http://localhost:3000/api/caseDetails/get");
  // console.log("retriving data");
  // console.log(caseData);
}

export default Table;
