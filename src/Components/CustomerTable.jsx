import React from "react";
import { Link } from "react-router-dom";
import profile from "../Images/profile.png";
import load from "../Images/loading.webp";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCurrentCust,
  AddCurrentDest,
  AddIdCust,
} from "../Reducers/CustomerSlice";
import CustomerTableHeaders from "./CustomerTableHeaders";

function CustomerTable({ customer, loading, error }) {
  const customerr = useSelector((store) => store.customer);
  const dispatch = useDispatch();

  return (
    <div className=" mt-10 relative ">
      <div className="overflow-x-auto t-overflow">
        <table className="w-full  border-separate border-spacing-0 min-w-[1100px]">
          <thead className="mb-[11px]">
            <tr>
              <CustomerTableHeaders text={"FIRST NAME"} />
              <CustomerTableHeaders text={"LAST NAME"} />
              <CustomerTableHeaders text={"EMAIL ADDRESS"} />
              <CustomerTableHeaders text={"PHONE NUMBER"} />
              <CustomerTableHeaders text={"LAST LOGIN"} />
            </tr>
          </thead>
          <tbody>
            {error && <p className="text-[red]">Something went wrong</p>}
            {loading && (
              <div className=" absolute  w-[250px] h-[250px] top-[150px] left-[50%] ml-[-125px]">
                <img src={load} alt=""></img>
              </div>
            )}
            {customer &&
              customer.map((cust) => (
                <tr key={cust.id}>
                  <td>
                    <div className="name flex items-center space-x-3 py-[20px]">
                      <img
                        className="ml-[26px] rounded-full"
                        src={cust.Avatar}
                        alt="profile"
                      />
                      <p className="font-semibold text-[16px] 2xl:text-[18px]">
                        {cust.first_name}
                      </p>
                    </div>
                  </td>
                  <td className="font-semibold text-[16px] 2xl:text-[18px]">
                    {cust.last_name}
                  </td>
                  <td className="font-semibold text-[16px] 2xl:text-[18px]">
                    {cust.email}
                  </td>
                  <td className="font-semibold text-[16px] 2xl:text-[18px]">
                    {cust.phone}
                  </td>
                  <td className="font-semibold text-[16px] 2xl:text-[18px]">
                    {cust.ip_address}
                  </td>
                  <td>
                    <div className="flex flex-1 justify-end items-center">
                      <Link
                        to={`/shipment/${cust.id}`}
                        onClick={() => {
                          dispatch(
                            AddIdCust({
                              id: cust.id,
                            })
                          );
                          dispatch(
                            AddCurrentCust({
                              avatar: cust.Avatar,
                              name: `${cust.first_name} ${cust.last_name} `,
                              email: cust.email,
                              phone: cust.phone,
                            })
                          );
                        }}
                        className="py-3.5 px-5 text-sm font-medium rounded-md border-[1px] border-lighterGrey bg-white"
                      >
                        Shipments
                      </Link>
                      <Link
                        to="/"
                        className="py-3.5 px-5 text-sm font-medium rounded-md bg-main-green ml-[19px] mr-[18px] text-white"
                      >
                        Edit
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerTable;
