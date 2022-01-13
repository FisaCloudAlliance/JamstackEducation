import { useState } from "react";
import { useSampleTextValue } from "./useSampleTextValue";

export function useSample30() {
    // オリジナルなカスタムHooksを　画面専用のカスタムHooks で利用する
    // このように、関数型UIでは、振る舞いも全て関数で小分けし、それらをmix-inを利用して合成して利用する
    const state = useSampleTextValue();

    const onClick = () => {
        const valid = state.validate();
        if (valid.hasError) {
            alert("NG!!")
            return;
        }

        alert("OK!!")
    }

    // validation 機能付きのstate属性(プロパティ)と、ボタンクリック時の振る舞い（関数）をmix-inして返す
    return { state , onClick};
}
