import { useValidatedState } from "../hooks/useValidatedState";

export function useId() {
  return useValidatedState(validate, "", { maxLength: 10 });
}

function validate(newValue) {
    if (String.IsNullOrWhiteSpace( newValue)){
        return "会員番号は必須です。";
    }

    return "";
}
