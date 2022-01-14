import { useState } from "react";

export function useSample21() {
  const [checked, setChecked] = useState(true);

  const onCheckChanged = (newvalue) => {
    setChecked(newvalue);
  };

  return { checked, onCheckChanged };
}
