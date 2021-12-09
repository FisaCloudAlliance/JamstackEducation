import { IDrawer } from "./model";
import { IActionBase } from "../IActionBase";

export const UPDATE_DRAWER = "UPDATE_DRAWER";

interface IDrawerType extends IDrawer, IActionBase { }
export function updateDrawer(open: boolean): IDrawerType {
    return {
        type: UPDATE_DRAWER,
        open: open,
    };
}

