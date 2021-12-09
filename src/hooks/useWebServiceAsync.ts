import { useState } from "react";
import { useDispatch } from "react-redux";
import { useToast } from "../core/snackbarExtension";
import { waitSite } from "../store/overlay/action";
type Init = RequestInit & {
    errorToast?: boolean;
    waitingOverlay?: boolean;
};

export function useWebServiceAsync(): [
    boolean,
    (uri: string, request?: any, init?: Init) => Promise<Response>] {

    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const dispatch = useDispatch();
    const webServiceAsync = async <T>(
        uri: string,
        request?: any,
        init?: Init) => {

        setLoading(true);
        let option: RequestInit = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            },
            credentials: 'include',
        };
        if (!Object.IsNullOrUndefined(request)) {
            option = { ...option, body: JSON.stringify(request) };
        }
        if (init) {
            option = { ...option, ...init };
        }

        if (init?.waitingOverlay) {
            dispatch(waitSite(true));
        }
        try {
            const ret = await fetch(uri, option);
            if (300 <= ret.status) {
                if (init?.errorToast) {
                    if (!String.IsNullOrWhiteSpace(ret.statusText)) {
                        toast.Error(ret.statusText);
                    } else {
                        const text = await ret.text();
                        if (!String.IsNullOrWhiteSpace(text)) {
                            toast.Error(text);
                        }
                    }
                }
            }
            return ret;
        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            setLoading(false);
            if (init?.waitingOverlay) {
                dispatch(waitSite(false));
            }
        }
    };

    return [loading, webServiceAsync];
}