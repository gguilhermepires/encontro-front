import React from "react";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;