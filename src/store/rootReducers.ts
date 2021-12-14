import { combineReducers, Reducer } from "redux";
import { connectRouter } from "connected-react-router";
import history from "../history";
import { drawerReducer } from "./drawer/reducer";
import { titleReducer } from "./layout/reducer";
import { overlayReducer } from "./overlay/reducer";
import { IRootState } from "./rootState";
import { cardReducer } from "./card/reducer";

/** 全てのReducer(※仮想DOMにバインドを登録する。メディエーターのようなもの) */
const rootReducers: Reducer<IRootState> = combineReducers({
  router: connectRouter(history),
  overlay: overlayReducer,
  title: titleReducer,
  drawer: drawerReducer,
  cards: cardReducer,
});
export default rootReducers;
