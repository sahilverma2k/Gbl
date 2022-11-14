import * as React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { BiFilterAlt } from "react-icons/bi";
import { FiArrowDown } from "react-icons/fi";
import { tableHeaders } from "../../data/data";

const priT = {
  low: 0,
  medium: 1,
  high: 2,
};

const Table = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currentSort, setCurrentSort] = useState("");
  const [_data, set_Data] = useState([]);

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

    console.log(_data);
  }, [data]);

  const selectSort = (id) => {
    if (currentSort === id) {
      setCurrentSort("");
    } else {
      setCurrentSort(id);
    }
  };

  const sortByAlpha = (A, B) => {
    if (A > B) {
      return 1;
    }
    if (A < B) {
      return -1;
    }
    return 0;
  };

  const sortPriority = (A, B) => {
    const _A = A.toLowerCase();
    const _B = B.toLowerCase();

    console.log(_A, _B);
    console.log(priT[_A], priT[_B]);

    if (priT[_A] > priT[_B]) {
      return 1;
    }
    if (priT[_A] < priT[_B]) {
      return -1;
    }
    return 0;
  };

  const sortDate = (A, B) => {
    const _A = new Date(A);
    const _B = new Date(B);

    if (_A > _B) return 1;
    if (_A < _B) return -1;
    return 0;
  };

  const sortingFunc = (a, b) => {
    if (currentSort === "") {
      return 0;
    } else {
      switch (currentSort) {
        case "branch":
          return sortByAlpha(a.branch, b.branch);
        case "reportingMethod":
          return sortByAlpha(a.reportingMethod, b.reportingMethod);
        case "category":
          return sortByAlpha(a.category, b.category);
        case "subCategory":
          return sortByAlpha(a.subCategory, b.subCategory);
        case "priority":
          return sortPriority(a.priority, b.priority);
        case "nature":
          return sortByAlpha(a.nature, b.nature);
        case "date":
          return sortDate(a.date, b.date);
        case "caseManager":
          return sortByAlpha(a.caseManager, b.caseManager);
        case "caseReporter":
          return sortByAlpha(a.caseReporter, b.caseReporter);
        case "caseStatus":
          return sortByAlpha(a.caseStatus, b.caseStatus);

        default:
          break;
      }
    }
  };

  return (
    <div className="shadow flex flex-col overflow-auto border-b border-gray-200 sm:rounded-lg">
      <div className="flex items-end justify-end py-3 px-4">
        <button className="flex items-center rounded-sm shadow p-2">
          Filter
          <BiFilterAlt />
        </button>
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
            {_data.sort(sortingFunc).map((row) => (
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
