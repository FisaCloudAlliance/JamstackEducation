import { ITitle, initialTitle } from "./model";
import { IActionBase } from "../IActionBase";
import { UPDATE_TITLE } from "./action";

export function titleReducer(
    state: ITitle = initialTitle,
    action: IActionBase): ITitle {

    switch (action.type) {
        case UPDATE_TITLE:
            return {
                ...state,
                title: action.title,
            };
        default:
            return state;
    }
}
