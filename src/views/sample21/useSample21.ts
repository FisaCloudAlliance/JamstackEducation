import { useState } from "react";

export function useSample21() {
  const [checked, setChecked] = useState(false);

  const onCheckChanged = (newValue) => {
    setChecked(newValue);
  };

  return { value: checked, onCheckChanged };
}
