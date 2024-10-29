import { useState } from "react";

export function useToogle() {
  const [valueState, setValue] = useState(null);
  const handleValue = (value) => {
    if (valueState === null) {
      setValue(true);
      return;
    }
    if (typeof value === "undefined") {
      setValue((prev) => !prev);
      return;
    }
    setValue(value);
  };
  return [valueState, handleValue];
}
