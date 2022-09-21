import React from "react";
import bell from "../Images/notification.svg";
import avatar from "../Images/avatar.png";
import caret from "../Images/caret.svg";
import logo from "../Images/logo-small.svg";
import { useLocation } from "react-router-dom";
import { ShowNav } from "../Reducers/ModalSlice";
import { useDispatch, useSelector } from "react-redux";

function Head({ setFixed }) {
  const location = useLocation();
  const dispatch = useDispatch();
  return (
    <div
      className="px-[16px] sm:px-[40px] lg:px-[50px] 2xl:px-[70px] h-[70px] laptop:h-[130px] border-t-[1px]  border-b-[1px] left-0 laptop:left-[250px] 
    2xl:left-[319px] right-0 laptop:right-[18px] fixed  bg-white z-10 flex justify-between items-center"
    >
      {/* small logo */}
      <div className="block laptop:hidden  h-[50px] w-[58.2px] ">
        <img src={logo} alt=""></img>
      </div>

      <div className="w-[80%] md:w-[60%]  laptop:w-[100%]   flex items-center justify-end md:flex md:justify-between sm:justify-between   max-w-[1280px] laptop:mx-auto">
        <h1 className="sm:block hidden text-[22px] md:text-[28px] font-semibold">
          {location.pathname === "/" ? "Customers" : "Shipments"}
        </h1>
        <div className="flex items-center">
          <img className="sm:block hidden" src={bell} alt="bell" />
          <div className=" flex items-center space-x-1 ml-4 laptop:ml-12">
            <img
              src={avatar}
              alt="avatar"
              className="w-[35px] h-[35px] laptop:w-[56px] laptop:h-[56px]"
            />
            <p className="hidden laptop:block text-[18px] font-semibold text-[#374151]">
              Temoc
            </p>
            <img src={caret} alt="" />
          </div>
          {/* hamburger menu phone */}
          <div
            className="block laptop:hidden ml-8"
            onClick={() => {
              dispatch(ShowNav(true));
              setFixed(true);
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.25 22.5H3.75V20H26.25V22.5ZM26.25 16.25H3.75V13.75H26.25V16.25ZM26.25 10H3.75V7.5H26.25V10Z"
                fill="#3AB44A"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;
