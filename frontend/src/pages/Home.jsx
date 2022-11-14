import React from "react";

import Header from "../partials/Header";
// import SideBar from "../partials/SideBar";
import HeroHome from "../partials/CardBar";

import Table from "../utils/Table";

function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full md:w-[calc(100%-6rem)] p-4 md:p-0 md:pl-24">
        <HeroHome />
        <Table />
      </div>
    </>
  );
}

export default Home;
