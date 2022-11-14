import React from "react";

import Header from "../partials/Header";
// import SideBar from "../partials/SideBar";
import HeroHome from "../partials/CardBar";

import Table from "../utils/Table";

function Home() {
  return (
    <>
      {/* <Header /> */}
      <div className="flex min-h-screen flex-col gap-12 w-full md:w-[calc(100%-6rem)] p-4 md:pl-24 pt-12">
        <HeroHome />
        <Table />
      </div>
    </>
  );
}

export default Home;
