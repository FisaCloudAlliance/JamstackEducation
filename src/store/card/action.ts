import { ICards } from "./model";
import { IActionBase } from "../IActionBase";

interface ICardsType extends ICards, IActionBase {}
export const UPDATE_CARDS = "UPDATE_CARDS";
export function updateCards(state: ICards): ICardsType {
  return {
    type: UPDATE_CARDS,
    ...state,
  };
}

export const REMOVE_CARDS = "REMOVE_CARDS";
export function remoceCardsAll(): ICardsType {
  return {
    type: REMOVE_CARDS,
    cards: [],
  };
}

