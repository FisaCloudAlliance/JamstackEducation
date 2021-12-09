import {
    createContext, Dispatch, useContext, useReducer
} from "react";

/** セッション情報を保持する場合は、ココに宣言する */
type sessionValue = {

}

const debug = true;
const encode = (s) => {
    if (debug) return s;

    return btoa(unescape(encodeURIComponent(s ?? "")));
}
const decode = (s) => {
    if (debug) return s;

    return decodeURIComponent(escape(atob(s ?? "")));
}
function getSessionStorage<T>(key, initilValue: T): T {
    const value = window.sessionStorage.getItem(key);
    const json = decode(value);
    if (json) {
        return JSON.parse(json);
    }
    return initilValue;
}
function setSessionStorage<T>(key, value: T) {
    const json = JSON.stringify(value);
    const enc = encode(json);
    window.sessionStorage.setItem(key, enc);
}

/** sessionValue の初期値を設定 */
const initialSession: sessionValue = getSessionStorage("state", {

});
export const SessionContext = createContext<any>({});

export function useSessionContext() {
    return useReducer(sessionReducer, initialSession);
}

export function useSession(): [sessionValue, (value: sessionValue) => void] {
    const { state, dispatch } = useContext<{
        state: sessionValue, dispatch: Dispatch<any>
    }>(SessionContext);

    const updateSession = (value) => {
        setSessionStorage("state", value);
        dispatch({ type: "update", value });
    }
    return [state, updateSession];
}

function sessionReducer(state, action): sessionValue {
    switch (action.type) {
        case "update":
            return { ...state, ...action.value };
        default:
            return state;
    }
}
