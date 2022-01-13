import { useValidatedState } from "../hooks/useValidatedState";

export function useName() {
  return useValidatedState(validate, "", { maxLength: 30 });
}

function validate(newValue) {
    if (String.IsNullOrWhiteSpace( newValue)){
        return "会員名は必須です。";
    }

    return "";
}
