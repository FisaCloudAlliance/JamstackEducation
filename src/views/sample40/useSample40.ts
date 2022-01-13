import { useToast } from "../../core/snackbarExtension";
import { useValidatedStateArray } from "../../hooks/useValidatedStateArray";
import { useId } from "../../validation/useId";
import { useName } from "../../validation/useName";

export function useSample40() {
  // 会員IDのバリデーション付きカスタムHooks
  const id = useId();
  // 会員名のバリデーション付きカスタムHooks
  const name = useName();

  // 複数の入力項目の検証を一気にやるカスタムHooks
  const allValidation = useValidatedStateArray(id, name);

  // トースト通知を行うカスタムHooks
  const toast = useToast();
  const onClick = () => {
    // 一気にバリデーションを実行し、エラーがあればトーストで通知する
    if (!allValidation.validateToast()) return;

    allValidation.clear(true);

    toast.Success("OK!");
  };

  return { name, id, onClick };
}
