import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const Stats = ({ text, number, icon }) => {
  return (
    <div className="stats shadow m-4">
      <div className="stat-figure text-black">
        <ChevronRightIcon className="w-8 h-8 mx-2" />
      </div>
      <div className="stat flex flex-row flex-wrap items-center">
        {icon}
        <div>
          <div className="stat-title font-poppins">{text}</div>
          <div className="stat-value">S/ {number}</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
