import { useToast } from "../core/snackbarExtension";
import { validator } from "./useValidatedState";

export function useValidatedStateArray(...array: validator[]) {
  const toast = useToast();

  const validate = () => {
    const errors = new Array<string>();
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      const v = element.validate();
      if (v.hasError) {
        errors.push(v.errorMessage);
      }
    }
    return {
      hasError: errors.length !== 0,
      errorMessage: errors.join("\n"),
    };
  };

  const validateToast = () => {
    const errors = new Array<string>();
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      const v = element.validate();
      if (v.hasError) {
        errors.push(v.errorMessage);
      }
    }

    if (errors.length !== 0) {
      toast.Error(errors.join("\n"));
      return false;
    }
    return true;
  };

  /**
   * エラー状態をクリアする
   * @param setInitialValue ステータスを初期値に戻す場合は true 
   */
  const clear = (setInitialValue?: boolean) => {
    for (let index = 0; index < array.length; index++) {
        const element : any = array[index];
        element.errorReset(setInitialValue);
      }
  };

  return { validate, validateToast, clear };
}
