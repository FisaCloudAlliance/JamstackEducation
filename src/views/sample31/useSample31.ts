import { useState } from "react";
import { useSampleTextValue } from "./useSampleTextValue";

export function useSample31() {
    const state = useSampleTextValue();

    const onClick = () => {
        const valid = state.validate();
        if(valid.hasError){
            alert("えぬじー");
            return;
        }
        alert("おーけー");
    }
    return {state, onClick};
}
