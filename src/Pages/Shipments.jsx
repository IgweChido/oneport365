import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../Images/back.svg";
import search from "../Images/search.svg";
import cross from "../Images/cross.svg";
import caret from "../Images/caret.svg";
import profile from "../Images/shipmentprofile.png";
import ShipmentsTable from "../Components/ShipmentsTable";
import { useDispatch, useSelector } from "react-redux";

import UseFetch from "../UseFetch";
import { useState } from "react";
import ShipmentTypeButton from "../Components/ShipmentTypeButton";
import ShipmentDateButton from "../Components/ShipmentDateButton";

function Shipments() {
  const navigate = useNavigate();
  const customerr = useSelector((store) => store.customer);
  const { res, Error, loading } = UseFetch(
    `https://demo3522726.mockable.io/get_single_customer_shipments/123456789`
  );
  console.log(res);
  const [input, setInput] = useState();
  const [type, setType] = useState("");
  const [date, setDate] = useState();
  const [date1, setDate1] = useState();

  return (
    <div>
      <div
        className="cursor-pointer"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img className="mb-5" src={back} alt="" />
      </div>

      <div className="flex flex-col sm:flex-row space-y-5 sm:items-center justify-between bg-[#F9FAFB] py-7 px-[26px] rounded-md border-[1px] border-[#D1D5DB] w-auto md:max-w-[647px] ">
        <div className=" flex flex-col md:flex-row md:space-x-5">
          <img
            className="w-20 h-20 rounded-full"
            src={customerr.cust.avatar}
            alt="profile"
          />
          <div>
            <p className="font-bold text-[18px]">{customerr.cust.name}</p>
            <p className="text-[18px] font-medium">{customerr.cust.email}</p>
            <p className="text-[18px] font-medium">{customerr.cust.phone}</p>
          </div>
        </div>
        <div>
          <button
            className="py-3.5 px-6 text-white bg-[#3AB44A] rounded-md flex items-center text-white outline-none"
            onClick={() => navigate(``)}
          >
            <span className="font-medium text-base">Edit</span>
          </button>
        </div>
      </div>

      <div className=" gap-4 flex flex-col 2xl:flex 2xl:flex-row 2xl:justify-between mt-10 shipment-button w-full">
        <div className=" flex flex-col md:flex-row gap-4 md:flex-nowrap justify-between md:w-auto max-w-[647px] ">
          <button
            className="py-3.5 px-6 text-white bg-[#3AB44A] rounded-md flex items-center text-white outline-none w-[214.93px]"
            onClick={() => navigate(``)}
          >
            <span className="font-medium text-base">Add New Shipment</span>
            <img src={cross} className="ml-2" alt="" />
          </button>

          <ShipmentTypeButton setType={setType} />

          <ShipmentDateButton setDate={setDate} setDate1={setDate1} />
        </div>
        <div className="input_container">
          <input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            className="w-[301px] py-[18px] px-[30px] rounded-md pl-10  border-[#D1D5DB] border-[1px] placeholder:text-sm placeholder:text-[#9CA3AF] focus:outline-0"
            placeholder="search by shipment ID, Destination"
          />
          <img src={search} alt="search" />
        </div>
      </div>

      <ShipmentsTable
        loading={loading}
        error={Error}
        data={res}
        input={input}
        typeButton={type}
        date={date}
        date1={date1}
      />
    </div>
  );
}

export default Shipments;
