import React from "react";
import DocsNavigation from "./DocsNavigation";
import DocumentBoxs from "./DocumentBoxs";
import upload from "../Images/doc-up.svg";
import { useDispatch } from "react-redux";
import { ShowModal } from "../Reducers/ModalSlice";

function UploadedDocs({ setFixed }) {
  const dispatch = useDispatch();
  return (
    <div>
      <DocsNavigation />

      {/* upload header */}
      <div className="flex-col sm:flex-row sm:flex justify-between items-center mb-7">
        {/* left */}
        <div>
          <p className="text-base font-semibold mb-7 sm:mb-0 text-[#6B7280]">
            Uploaded Documents
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-x-3">
          {/* button 1 */}
          <button className="border border-gray rounded-md p-3.5 font-bold text-base text-[#374151]">
            Request Document
          </button>

          {/* button 2 */}
          <button
            className=" flex items-center rounded-md p-3.5 font-bold text-base text-white bg-main-green gap-x-2 "
            onClick={() => {
              dispatch(ShowModal(true));
              setFixed(true);
            }}
          >
            <p>Upload Document</p>
            <img src={upload} alt=""></img>
          </button>
        </div>
      </div>

      <DocumentBoxs />
      <DocumentBoxs />
    </div>
  );
}

export default UploadedDocs;
