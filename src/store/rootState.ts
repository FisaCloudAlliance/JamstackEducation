import { ICards } from "./card/model";
import { IDrawer } from "./drawer/model";
import { ITitle } from "./layout/model";
import { IOverlay } from "./overlay/model";

// サイト全体を通して、状態管理するための宣言
export interface IRootState {
  router: any,
  overlay: IOverlay;
  drawer: IDrawer;
  title: ITitle;
  cards: ICards;
}
