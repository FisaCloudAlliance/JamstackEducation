import { useState, useCallback, useRef } from "react";

export type validation = {
  changed: boolean;
  errorMessage: string;
  hasError: boolean;
};

/**
 * useStateを内包し、バリデーション付きのカスタムHookを返す
 * @param validator
 * @param initialValue
 */
export const useValidatedState = <T>(
  validator,
  initialValue?: T,
  option?: { maxLength?: number }
) => {
  const [state, setState] = useState<T | undefined>(initialValue);

  const _validation = useRef<validation>({
    changed: false,
    errorMessage: "",
    hasError: false,
  });

  const onChange = useCallback(
    (nextValue) => {
      if (
        option?.maxLength &&
        nextValue?.length &&
        option?.maxLength < nextValue?.length
      ) {
        return;
      }
      setState(nextValue);
      const valid = validator(nextValue);
      _validation.current = {
        ..._validation.current,
        changed: true,
        errorMessage: valid,
        hasError: !!valid,
      };
    },
    [_validation]
  );

  const [, updateState] = useState<{}>();
  const trigger = useCallback(() => updateState({}), [_validation]);
  const validate = () => {
    trigger();
    const valid = validator(state);
    _validation.current = {
      ..._validation.current,
      changed: true,
      errorMessage: valid,
      hasError: !!valid,
    };
    return _validation.current;
  };

  const errorReset = (setInitialValue?: boolean) => {
    _validation.current = {
      ..._validation.current,
      changed: true,
      errorMessage: "",
      hasError: false,
    };
    if (setInitialValue) {
      setState(initialValue);
    }
  };

  const validation = _validation.current;
  return { state, onChange, validate, errorReset, ...validation };
};

export type validator = {
  validate: () => validation;
};

export type validateState = validator &
  validation & {
    state: any;
    onChange: (v: any) => void;
    errorReset: (setInitialValue?: boolean) => void;
  };
