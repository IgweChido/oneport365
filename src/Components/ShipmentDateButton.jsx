import React from "react";
import { useState, useEffect, useRef } from "react";
import caret from "../Images/caret.svg";

function ShipmentDateButton({ setDate, setDate1 }) {
  const [btn, setBtn] = useState(false);
  const ref = useRef();

  // user growth  side outside click handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        btn && setBtn(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [btn]);

  return (
    //   {/* button */}
    <div className="relative" ref={ref}>
      <button
        className=" w-[193px] border border-[#D1D5DB] relative py-3.5 px-6 text-[#374151] bg-[#F3F4F6] rounded-md flex items-center text-white outline-none"
        onClick={() => {
          btn ? setBtn(false) : setBtn(true);
        }}
      >
        <span className="font-medium text-base">Shipment Date</span>
        <img src={caret} className={btn ? "rotate-180 ml-2" : "ml-2"} alt="" />
      </button>

      {/* Hidden */}

      {btn && (
        <div className=" absolute top-[60px] rounded-md border border-[#F6F6F6] w-[193px] md:w-full left-0 bg-white z-30">
          <div className="px-2 py-3">
            <label>Start Date:</label>
            <input
              onKeyUp={(e) => {
                setDate(e.target.value);
              }}
              type="text"
              placeholder="yyyy-mm-dd"
              className="form-input border-b w-3/4 outline-0  mb-6 mt-2.5  font-normal text-sm"
            ></input>
          </div>

          <div className="px-2 py-3">
            <label>End Date:</label>
            <input
              onKeyUp={(e) => {
                setDate1(e.target.value);
              }}
              type="text"
              placeholder="yyyy-mm-dd"
              className="form-input border-b w-3/4 outline-0  mb-6 mt-2.5  font-normal text-sm"
            ></input>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShipmentDateButton;
