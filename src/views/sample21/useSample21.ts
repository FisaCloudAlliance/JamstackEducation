import { useState } from "react";

export function useSample21() {
    const [check, setCheck]=useState(false);

    const onCheckChanged=(newValue) => {
        setCheck(newValue);
    };

    return {check, onCheckChanged};
}
