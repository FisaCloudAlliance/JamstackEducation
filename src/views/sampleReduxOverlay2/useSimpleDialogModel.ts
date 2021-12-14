import { useDescription } from "../../validation/useDescription";
import { useTitle } from "../../validation/useTitle";
import { useValidatedStateArray } from "../../hooks/useValidatedStateArray";

/**
 * カスタム hooks を利用し、バインドしているデータを一つにまとめる
 * @returns
 */
export function useSimpleDialogModel() {
  /** ダイアログのタイトルに関連するバリデーション付きの状態保持オブジェクト */
  const title = useTitle();
  /** ダイアログの本文に関連するバリデーション付きの状態保持オブジェクト */
  const description = useDescription();
  /** 複数の項目を一つのバリデーションとしてまとめるカスタムHooks */
  const allState = useValidatedStateArray(title, description);

  /** 関数型のmix-inの機能によって、この場で状態は振る舞いを一つのクラスの用にまとめて返す */
  return { title, description, allState };
}
