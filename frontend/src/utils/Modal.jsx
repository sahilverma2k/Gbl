import React from "react";
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";
import { isEverythingEmpty } from "./TableUtils";
import { anotherTableMap, categories } from "../../data/data";

Modal.setAppElement("#root");

const cStyle = {
  content: {
    paddingTop: "10px",
    paddingRight: "10px",
    width: "25rem",
    overflowX: "hidden",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const FilterModal = ({ isModalOpen, closeModal, filters, setFilters }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Filters"
      style={cStyle}
    >
      <div className="flex flex-col">
        <div className="flex justify-end">
          <button onClick={closeModal}>
            <AiFillCloseCircle size={20} color={"black"} />
          </button>
        </div>
        <h3 className="font-bold text-lg">Please Select Filters</h3>
        <div>
          {Object.keys(categories).map((category) => {
            return (
              <div className="flex flex-col pt-4">
                <h4 className="font-semibold text-base">
                  {anotherTableMap[category]}
                </h4>
                <div className="flex flex-row flex-wrap gap-4 items-center justify-start ">
                  {categories[category].map((neko) => {
                    return (
                      <div className="flex gap-2 items-center justify-start min-w-[6rem]">
                        <input
                          type="checkbox"
                          id={neko}
                          name={neko}
                          checked={filters.includes(neko)}
                          value={neko}
                          onChange={() => {
                            if (filters.includes(neko)) {
                              const newArr = filters.filter((i) => i !== neko);
                              setFilters(newArr);
                            } else {
                              setFilters([...filters, neko]);
                            }
                          }}
                        ></input>
                        <label className="font-light text-sm" htmlFor={neko}>
                          {neko}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default FilterModal;
