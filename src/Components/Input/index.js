import React from "react";

const Input = ({ register, name, label, validations, errors, ...rest }) => {
  const errosStyle = { color: "red", fontSize: "14px" };
  return (
    <div className="flex-column">
      <label> {label} </label>
      <input {...register(name, validations)} {...rest} />
      {errors[name] && errors[name].type && (
        <span role="alert" style={errosStyle}>
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export default Input;
