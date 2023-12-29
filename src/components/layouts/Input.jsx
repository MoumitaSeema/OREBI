import React from "react";

const Input = ({
  className,
  placeholder,
  label,
  type,
  lableClassName,
  inputclassName,
  value,
  onChange,
  name
}) => {
  return (
    <div className={className}>
      <label htmlFor="" className={`block ${lableClassName}`}>
        {label}
      </label>
      <input type={type} placeholder={placeholder} className={inputclassName} value={value} onChange={onChange} name={name}/>
    </div>
  );
};

export default Input;
