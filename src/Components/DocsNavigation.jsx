import React from "react";
import "../App.css";

function DocsNavigation() {
  return (
    <div className="overflow-x-auto no-border">
      {/* navigation */}
      <div className="border-b flex items-center  mb-6 w-full min-w-[620px] ">
        {/* documents */}
        <div className="py-2 px-6 border-b-2 border-main-green">
          <p className="font-semibold text-base">Documents</p>
        </div>

        {/* Cargo details */}
        <div className="py-2 px-6">
          <p className="font-semibold text-base text-[#6B7280]">
            Cargo Details
          </p>
        </div>

        {/* Additional Services */}
        <div className="py-2 px-6">
          <p className="font-semibold text-base text-[#6B7280]">
            Additional Services
          </p>
        </div>

        {/* Rates */}
        <div className="py-2 px-6">
          <p className="font-semibold text-base text-[#6B7280]">Rates</p>
        </div>
      </div>
    </div>
  );
}

export default DocsNavigation;
