import React from "react";

import Header from "../partials/Header";
// import SideBar from "../partials/SideBar";
import HeroHome from "../partials/CardBar";

import Table from "../utils/Table";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Site header */}
      <Header />
      <div className="flex">
        {/* <SideBar /> */}
        <div className="flex flex-col items-center w-full">
          <HeroHome />
          <Table />
        </div>
      </div>
      {/*  Site footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
