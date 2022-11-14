import * as React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { BiFilterAlt } from "react-icons/bi";
import { FiArrowDown } from "react-icons/fi";
import { tableHeaders } from "../../data/data";
import FilterModal from "./Modal";
import { isEverythingEmpty, sortingFunc } from "./TableUtils";

const Table = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currentSort, setCurrentSort] = useState("");
  const [_data, set_Data] = useState([]);
  const [filters, setFilters] = useState({
    branch: [],
    reportingMethod: [],
    category: [],
    subCategory: [],
    priority: [],
    nature: [],
    caseStatus: [],
  });

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    console.log(filters, isEverythingEmpty(filters));
  };

  const fetchTitle = async () => {
    const response = await fetch("http://localhost:3000/api/caseDetails/");
    const data_response = await response.json();

    setData(data_response["data"]); //Setting the response into state
  };

  useEffect(() => {
    setLoading(true);
    fetchTitle();
    setLoading(false);
  }, []);

  useEffect(() => {
    set_Data(data);
  }, [data]);

  const selectSort = (id) => {
    if (currentSort === id) {
      setCurrentSort("");
    } else {
      setCurrentSort(id);
    }
  };

  return (
    <div className="shadow flex flex-col overflow-auto border-b border-gray-200 sm:rounded-lg">
      <div className="flex items-end justify-end py-3 px-4">
        <button
          onClick={openModal}
          className="flex items-center rounded-sm shadow p-2"
        >
          Filter
          <BiFilterAlt />
        </button>
        <FilterModal
          isModalOpen={modalIsOpen}
          closeModal={closeModal}
          filters={filters}
          setFilters={setFilters}
        />
      </div>
      <table className="divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr className="">
            {tableHeaders.map((header) => (
              <th
                key={header.id}
                onClick={() => selectSort(header.id)}
                className={`
                  text-left text-[0.75rem] font-medium p-4 text-gray-500 uppercase tracking-wider
                  ${currentSort === header.id ? "bg-red-50" : ""}
                `}
              >
                <p className="flex items-center gap-2">
                  {header.title} <FiArrowDown />
                </p>
              </th>
            ))}
          </tr>
        </thead>
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <ClipLoader
              size={40}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <tbody className="bg-white divide-y divide-gray-200">
            {_data
              .sort(function compareFn(a, b) {
                return sortingFunc(a, b, currentSort);
              })
              .map((row) => (
                <tr key={row.id}>
                  {tableHeaders.map((header) => (
                    <td className="whitespace-nowrap px-4 py-3">
                      {row[header.id]}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Table;
