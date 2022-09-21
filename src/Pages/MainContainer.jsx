import React from "react";
import SideNav from "../Components/SideNav";
import MainPage from "./MainPage";

function MainContainer({ setFixed }) {
  return (
    <div className="flex font-inter min-h-screen h-screen w-full relative ">
      <SideNav />
      <MainPage setFixed={setFixed} />
    </div>
  );
}

export default MainContainer;
