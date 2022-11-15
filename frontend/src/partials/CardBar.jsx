import React from "react";
import { HiOutlineDocumentAdd, HiOutlineDocumentText } from "react-icons/hi";
import { BiMessageSquareDetail } from "react-icons/bi";

import Card from "../components/Card";

const CardBar = () => {
  return (
    <div className="flex items-center gap-5 md:gap-20 justify-between">
      <Card
        icon={<HiOutlineDocumentAdd size="30" />}
        text={"Case upload"}
        cardStyle={"card-blue"}
      />
      <Card
        icon={<HiOutlineDocumentText size="30" />}
        text={"Generate Report"}
        cardStyle="card-green"
      />
      <Card
        icon={<BiMessageSquareDetail size="30" />}
        text={"Broadcast message"}
        cardStyle="card-red"
      />
    </div>
  );
};

export default CardBar;
