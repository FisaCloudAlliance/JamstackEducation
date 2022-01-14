import { useState } from "react";

export function useSample20() {
  // useState という react の組み込みの hooks を利用する
  const [checked, setChecked] = useState(false /* 初期値falseをセット */);
  
  const onCheckChanged = (newValue) => {
    setChecked(newValue);
  };

  // value という属性(プリパティ)と、チェック状態が変更する振る舞い（関数）をここで合成したオブジェクト(mix-in)を生成して返す
  return { value: checked, onCheckChanged };
}
