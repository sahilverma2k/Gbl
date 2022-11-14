import React from "react";
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";

Modal.setAppElement("#root");

const cStyle = {
  content: {
    width: "15rem",
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
        <div>
          <p>YOYOYOYOY</p>
          <input
            type="checkbox"
            id="branch1"
            name="branch1"
            checked={filters.branch.includes("Branch 1")}
            value="Branch 1"
            onChange={() => {
              if (filters.branch.includes("Branch 1")) {
                const newArr = filters.branch.filter((i) => i !== "Branch 1");
                setFilters({
                  ...filters,
                  branch: newArr,
                });
              } else {
                setFilters({
                  ...filters,
                  branch: [...filters.branch, "Branch 1"],
                });
              }
            }}
          ></input>
          <label for="branch1">Branch 1</label>
        </div>
      </div>
    </Modal>
  );
};

export default FilterModal;
