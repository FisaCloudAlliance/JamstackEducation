import { useToast } from "../../core/snackbarExtension";
import { useValidatedStateArray } from "../../hooks/useValidatedStateArray";
import { useId } from "../../validation/useId";
import { useName } from "../../validation/useName";

export function useSample41(){
    const id = useId();
    const name = useName();

    const allValidation = useValidatedStateArray(id, name);

    const toast = useToast();
    const onClick = () => {
        if(!allValidation.validateToast()) return;

        allValidation.clear(true);
        toast.Success("OK!!");
    };
    return {name, id, onClick};
}