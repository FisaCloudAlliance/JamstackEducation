export interface ICard {
  title?: string;
  description?: string;
}
export interface ICards {
  cards: ICard[];
}
export const initialCards: ICards = {
  cards: [],
};
