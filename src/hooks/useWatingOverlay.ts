import { useDispatch } from 'react-redux';
import { waitSite } from '../store/overlay/action';

export function useWatingOverlay() {
    const dispatch = useDispatch();
    return async <T>(func: () => T) => {
        dispatch(waitSite(true));
        try {
            return await func();
        }
        finally {
            dispatch(waitSite(false));
        }
    };
}
