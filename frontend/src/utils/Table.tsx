import * as React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { useEffect, useState } from "react";

// import "./index.css";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Person = {
  caseNo: number;
  branch: string;
  reportingMethod: string;
  date: string;
  time: string;
  category: string;
  subCategory: string;
  priority: string;
  nature: string;
  caseManager: string;
  caseReporter: string;
  caseStatus: string;
};

const defaultData: Person[] = [
  {
    caseNo: 123123,
    branch: "Branch 3",
    reportingMethod: "In Person",
    date: "12-02-2021",
    time: "12:35:02",
    category: "Grievance",
    subCategory: "Query",
    priority: "Low",
    nature: "Health",
    caseManager: "Daryl",
    caseReporter: "Tanner",
    caseStatus: "Not prepared",
  },
  {
    caseNo: 123123,
    branch: "Branch 3",
    reportingMethod: "In Person",
    date: "12-02-2021",
    time: "12:35:02",
    category: "Grievance",
    subCategory: "Query",
    priority: "Low",
    nature: "Health",
    caseManager: "Daryl",
    caseReporter: "Tanner",
    caseStatus: "Not prepared",
  },
  {
    caseNo: 123123,
    branch: "Branch 3",
    reportingMethod: "In Person",
    date: "12-02-2021",
    time: "12:35:02",
    category: "Grievance",
    subCategory: "Query",
    priority: "Low",
    nature: "Health",
    caseManager: "Daryl",
    caseReporter: "Tanner",
    caseStatus: "Not prepared",
  },
  {
    caseNo: 123123,
    branch: "Branch 3",
    reportingMethod: "In Person",
    date: "12-02-2021",
    time: "12:35:02",
    category: "Grievance",
    subCategory: "Query",
    priority: "Low",
    nature: "Health",
    caseManager: "Daryl",
    caseReporter: "Tanner",
    caseStatus: "Not prepared",
  },
];

const columnHelper = createColumnHelper<Person>();

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
  // const [data, setData] = React.useState(() => [...defaultData.data]);

  useEffect(() => {
    fetchTitle();
  }, []);

  const fetchTitle = async () => {
    const response = await fetch("http://localhost:3000/api/caseDetails/get");
    const data_response = await response.json();
    setData(data_response["data"]); //Setting the response into state
    console.log(data_response);
  };
  // console.log('once');
  // axios.get("http://localhost:3000/api/caseDetails/get").then((defaultData) => {
  //   //setData(response.data);
  // });
  // const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <div className="mt-2 flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
                <tbody className="bg-white divide-y divide-gray-200">
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="px-6 py-4 whitespace-nowrap"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  {table.getFooterGroups().map((footerGroup) => (
                    <tr key={footerGroup.id}>
                      {footerGroup.headers.map((header) => (
                        <th key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.footer,
                                header.getContext()
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="h-4" />
      {/* <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button> */}
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
