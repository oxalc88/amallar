import React from "react";

const Card = (props) => {
  const { saldo, type, icon } = props;
  return (
    <div className="flex justify-center">
      <div className="m-1 p-10 shadow w-40 h-40 max-w-sm items-center rounded-xl space-y-3">
        <div className="flex justify-center ">{icon}</div>
        <p className="font-poppins text-base mb-2 text-center">{type}</p>
        <h5 className="text-xl leading-tight font-semibold mb-2 text-center">
          {saldo}
        </h5>
      </div>
    </div>
  );
};

export default Card;
