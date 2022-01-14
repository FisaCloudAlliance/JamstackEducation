import { useState } from "react";

export function useSample21() {
  
  const [value, setValue] = useState(false /* 初期値falseをセット */);

  const onCheckChanged = (newValue) => {
    setValue(newValue);
  };

  return { value, onCheckChanged };

}
