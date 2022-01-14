import { useState } from "react";

export function useSample21() {
  const [setVal, setChecked] = useState(false)
  const onCheckChanged = (newValue) => {
  setChecked(newValue)
  }
  return { val: setVal, onCheckChanged}

}
