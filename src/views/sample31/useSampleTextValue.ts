import { useValidatedState } from "../../hooks/useValidatedState";

export function useSampleTextValue() {
    // validation 付きのカスタムHooksを利用する　※この実装はhooksフォルダにある機能で内容は難しいが、ソースは自由に使ってよいです
  const state = useValidatedState(
    validateSampleText,
    "" /* 初期値空文字 */,
    { maxLength: 10 } /* 最大入力値を10文字 */
  );

  return state;
}

function validateSampleText(newValue: string) {
    if (!newValue) {
        return "値は必須入力です";
    }

    // StringはChar配列なので、先頭文字を要素0で取得することも可能
    // if (newValue[0] == "7") {
    //     return "値は7から始まる値を入力してください";
    // }

    // validation に問題がなければ、空文字を返す
    return "";
}
