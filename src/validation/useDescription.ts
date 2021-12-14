import { useValidatedState } from "../hooks/useValidatedState";

export function useDescription() {
  const description = useValidatedState(validate, "");
  return description;
}

function validate(newValue: string) {
  if (!newValue) {
    return "本文は必須です";
  }

  if (100 < newValue.length) {
    return "100文字以内で入力してください";
  }

  return "";
}
