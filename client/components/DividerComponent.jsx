import React from "react";

const DividerComponent = ({ children }) => {
  return (
    <div className="grid flex-grow h-30 card place-items-center">
      {children}
    </div>
  );
};

export default DividerComponent;
