import { useValidatedState } from "../hooks/useValidatedState";

export function useTitle() {
  const title = useValidatedState(validate, "");
  return title;
}

function validate(newValue: string) {
  if (!newValue) {
    return "タイトルは必須です";
  }

  if (20 < newValue.length) {
    return "20文字以内で入力してください";
  }

  return "";
}
