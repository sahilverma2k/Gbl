import React, { useState } from "react";
// import Modal from "../utils/Modal";
import { HiOutlineDocumentAdd, HiOutlineDocumentText } from "react-icons/hi";
import { BiMessageSquareDetail } from "react-icons/bi";
import Card from "../components/Card";

import HeroImage from "../images/hero-image.png";

function CardBar() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="flex items-center justify-between h-16 md:h-20">
      <Card
        icon={<HiOutlineDocumentAdd size="23" />}
        text={"Case upload"}
        cardStyle={"card-blue"}
      />
      <Card
        icon={<HiOutlineDocumentText size="23" />}
        text={"Generate Report"}
        cardStyle="card-green"
      />
      <Card
        icon={<BiMessageSquareDetail size="23" />}
        text={"Broadcast message"}
        cardStyle="card-red"
      />
    </div>
  );
}

export default CardBar;
