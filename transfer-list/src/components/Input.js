import { forwardRef, useState } from "react";

const Input = forwardRef(({ addItem }, ref) => {
  const [value, setValue] = useState("");

  const onBlurAndEnterHandler = (e) => {
    e.preventDefault();
    addItem(value);
    setValue("");
  };

  return (
    <input
      type="text"
      placeholder="Enter item name"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={(e) => onBlurAndEnterHandler(e)}
      // onKeyDown={(e) => {
      //   if (e.code === "Enter") onBlurAndEnterHandler(e);
      // }}
      className="input-box"
      ref={ref}
    />
  );
});

export default Input;
