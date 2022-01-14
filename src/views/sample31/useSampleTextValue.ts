import { useValidatedState } from "../../hooks/useValidatedState";

export function useSampleTextValue(){
    const state = useValidatedState(
        validateSampleText,
        "",
        {maxLength: 10}
    );
    return state;
}

function validateSampleText(newValue: string){
    if(!newValue){
        return "必須";
    }
    return "";
}