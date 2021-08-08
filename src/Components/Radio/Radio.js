import React from "react";

const Radio = ({ register, name, label, ...rest }) => {
  return (
    <div className="flex">
      <input {...register(name)} {...rest} />
      <label> {label} </label>
    </div>
  );
};

export default Radio;
