import React, { useState } from "react";
// import Modal from "../utils/Modal";
import { HiOutlineDocumentAdd, HiOutlineDocumentText } from "react-icons/hi";
import { BiMessageSquareDetail } from "react-icons/bi";
import Card from "../components/Card";

import HeroImage from "../images/hero-image.png";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="w-full z-300 md:bg-opacity-90 ">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 pt-9">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div>
            <Card
              icon={<HiOutlineDocumentAdd size="23" />}
              text={"Case upload"}
              cardStyle={"card-blue"}
            />
          </div>
          <div>
            <Card
              icon={<HiOutlineDocumentText size="23" />}
              text={"Generate Report"}
              cardStyle="card-green"
            />
          </div>
          <div>
            <Card
              icon={<BiMessageSquareDetail size="23" />}
              text={"Broadcast message"}
              cardStyle="card-red"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
