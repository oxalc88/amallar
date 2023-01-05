import React from "react";

const Description = (props) => {
  const { number } = props;
  return (
    <div className="px-4 py-5 sm:px-6 shadow w-full max-w-xs rounded-xl">
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Tu Balance neto del mes es de
      </p>
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        S/ {number}
      </h3>
    </div>
  );
};

export default Description;
