import { useRef, useState, useEffect } from "react";
import InputBox from "./InputBox";

const OtpComponent = ({ otpLength = 4, onOtpComplete }) => {
  const [otpValues, setOtpValues] = useState(Array(otpLength).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d$/.test(value)) return;

    const newOtp = [...otpValues];
    newOtp[index] = value;
    setOtpValues(newOtp);

    // Move to next input
    if (index < otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    const key = e.key;

    if (key === "Backspace" || key === "Delete") {
      if (otpValues[index] === "") {
        if (index > 0) {
          const prevInput = inputRefs.current[index - 1];
          prevInput?.focus();

          // Optional: Clear the previous box
          setOtpValues((prev) => {
            const updated = [...prev];
            updated[index - 1] = "";
            return updated;
          });
        }
      } else {
        // Clear current box
        setOtpValues((prev) => {
          const updated = [...prev];
          updated[index] = "";
          return updated;
        });
      }
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("Text").replace(/\D/g, "");
    if (!pasteData) return;

    const newOtp = [...otpValues];
    for (let i = 0; i < otpLength; i++) {
      newOtp[i] = pasteData[i] || "";
    }
    setOtpValues(newOtp);

    const nextIndex = Math.min(pasteData.length, otpLength - 1);
    inputRefs.current[nextIndex]?.focus();
    e.preventDefault();
  };

  useEffect(() => {
    const isComplete = otpValues.every((val) => val !== "");
    if (isComplete && typeof onOtpComplete === "function") {
      onOtpComplete(otpValues.join(""));
    }
  }, [otpValues, onOtpComplete]);

  return (
    <div className="parentDiv">
      {Array.from({ length: otpLength }, (_, index) => (
        <InputBox
          key={index}
          value={otpValues[index]}
          onChange={(val) => handleChange(val, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default OtpComponent;
