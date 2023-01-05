import React from "react";

const Input = (props) => {
  const { placeholder, type, text } = props;
  return (
    <div className="form-control w-full max-w-xs m-4">
      <label className="label">
        <span className="label-text">{text}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs h-15"
      />
    </div>
  );
};

export default Input;
