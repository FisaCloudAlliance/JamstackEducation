import { IOverlay, initialOverlay } from "./model";
import { IActionBase } from "../IActionBase";
import { WAITING_OVERLAY_SITE } from "./action";

/**
 * WaitingOverlayを状態監視するReducer
 * @param state
 * @param action
 */
export function overlayReducer(
    state: IOverlay = initialOverlay,
    action: IActionBase): IOverlay {

    switch (action.type) {
        case WAITING_OVERLAY_SITE:
            return {
                ...state,
                openWaitingSite: action.openWaitingSite,
            };
        default:
            return state;
    }
}

