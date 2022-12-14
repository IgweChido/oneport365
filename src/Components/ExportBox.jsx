import React from "react";
import connect from "../Images/connect.svg";
import arrow from "../Images/arrow-angle.svg";
import { useDispatch, useSelector } from "react-redux";

function ExportBox() {
  const customerr = useSelector((store) => store.customer);

  return (
    <div className="overflow-x-auto no-border">
      <div className="mb-12 w-full min-w-[620px]">
        {/* header */}
        <div className=" px-10 flex justify-between rounded-t-xl items-center h-24 bg-main-green ">
          {/* part1 */}
          <div className="flex items-center gap-x-2">
            {customerr.dest.type === "export" ? (
              <img src={arrow} alt=""></img>
            ) : (
              <img src={arrow} className="rotate-180" alt=""></img>
            )}
            <p className="text-white font-semibold text-xl">
              {customerr.dest.type}
            </p>
          </div>

          {/* part2 */}
          <div>
            <p className="text-white text-lg">{customerr.dest.date}</p>
          </div>

          {/* part3 */}
          <div>
            <p className="text-white font-medium text-base opacity-70">
              Shipment ID
            </p>
            <p className="text-white text-lg">{customerr.dest.id}</p>
          </div>
        </div>

        {/* body */}
        <div
          className=" rounded-b-xl px-10 py-8 flex gap-x-10 items-center h-auto laptop:h-40  bg-exp-img bg-cover 
        bg-no-repeat bg-center"
        >
          {/* part1 */}
          {customerr.dest.type === "import" ? (
            <div>
              <p className="font-semibold text-xs mb-6">PORT OF DISCHARGE</p>
              <p className="font-bold  text-2xl mb-2">
                {customerr.dest.originICode}
              </p>
              <p className="font-semibold text-sm">
                {customerr.dest.originICountry}
              </p>
            </div>
          ) : (
            <div>
              <p className="font-semibold text-xs mb-6">PORT OF DISCHARGE</p>
              <p className="font-bold  text-2xl mb-2">
                {customerr.dest.originECode}
              </p>
              <p className="font-semibold text-sm">
                {customerr.dest.originECountry}
              </p>
            </div>
          )}

          {/* image */}
          <div>
            <img src={connect} alt=""></img>
          </div>

          {/* part2 */}
          {customerr.dest.type === "import" ? (
            <div>
              <p className="font-semibold text-xs mb-6">DELIVERY LOCATION</p>
              <p className="font-bold  text-2xl mb-2">
                {customerr.dest.destICode}
              </p>
              <p className="font-semibold text-sm">
                {customerr.dest.destICountry}
              </p>
            </div>
          ) : (
            <div>
              <p className="font-semibold text-xs mb-6">DELIVERY LOCATION</p>
              <p className="font-bold  text-2xl mb-2">
                {customerr.dest.destECode}
              </p>
              <p className="font-semibold text-sm">
                {customerr.dest.destECountry}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExportBox;
