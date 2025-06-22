import { forwardRef } from "react";
import "./InputBox.css";

const InputBox = forwardRef(({ value, onChange, onKeyDown, onPaste }, ref) => {
  const handleInput = (e) => {
    const val = e.target.value;
    if (val.length <= 1 && /^\d?$/.test(val)) {
      onChange(val);
    }
  };

  return (
    <input
      type="text"
      maxLength={1}
      value={value}
      onChange={handleInput}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      ref={ref}
      inputMode="numeric"
      pattern="\d*"
    />
  );
});

export default InputBox;
