import { useState } from "react";

export function useSample21() {
  const [value, setValue] = useState(false);

  const onCheckChanged = (newValue) => {
      setValue(newValue);
  };

  return { c: value, onChanged: onCheckChanged };
}
