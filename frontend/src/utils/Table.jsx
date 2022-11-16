import React, {useCallback, useMemo} from "react";
import { useEffect, useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { FiArrowDown } from "react-icons/fi";
import { tableHeaders } from "../../data/data";
import FilterModal from "./Modal";
import { sortingFunc } from "./TableUtils";
import LoadingSpinner from "../components/LoadingSpinner";

const Table = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // A shadow data object, to make sure that the actual data untouched
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  const [currentSort, setCurrentSort] = useState("");
  const [filters, setFilters] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  // IIFE
  useEffect(() => {
    setLoading(true);
    (async () => {
        const response = await fetch("http://localhost:3000/api/caseDetails/");
        const data_response = await response.json();
        setData(data_response["data"]); //Setting the response into state
    })()
    setLoading(false);
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  // Toggles sort on or off, depending on the context
  const selectSort = (id) => {
    if (currentSort === id) {
      setCurrentSort("");
    } else {
      setCurrentSort(id);
    }
  };

  // The filter function, it checks for each tag that is selected by the user, is present in the object or not.
  const filterFunction = useCallback(
      (val) => {
        let retval = true;

        if (filters.length === 0) {
          retval = true;
        } else {
          filters.forEach((filter) => {
            if (!Object.values(val).includes(filter)) {
              retval = false;
            }
          });
        }
        return retval;
      },
      [],
  );


  if (loading) {
    return  <LoadingSpinner />
  }

  return (
    <div className="shadow flex flex-col overflow-auto border-b border-gray-200 sm:rounded-lg">
      <div className="flex items-end justify-end py-3 px-4">
        <button
          onClick={toggleModal}
          className="flex items-center rounded-sm shadow p-2"
        >
          Filter
          <BiFilterAlt />
        </button>
        <FilterModal
          isModalOpen={modalIsOpen}
          closeModal={toggleModal}
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
                  ${currentSort === header.id ? "bg-slate-300" : ""}
                `}
              >
                <p className="flex items-center gap-2">
                  {header.title} <FiArrowDown />
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Here the data is sorted and then filtered in the frontend iteslf */}
          {filteredData
            .sort(function compareFn(a, b) {
              return sortingFunc(a, b, currentSort);
            })
            .filter(filterFunction)
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
      </table>
    </div>
  );
};

export default Table;