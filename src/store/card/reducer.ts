import { ICards, initialCards } from "./model";
import { IActionBase } from "../IActionBase";
import { UPDATE_CARDS, REMOVE_CARDS } from "./action";

export function cardReducer(
  state: ICards = initialCards,
  action: IActionBase
): ICards {
  switch (action.type) {
    case UPDATE_CARDS:
      return { ...state, ...action };
    case REMOVE_CARDS:
      return { cards: [] };
    default:
      return state;
  }
}
