/** react で 完全なステートレスで状態管理するためのライブラリ で reduer  */
import { createStore, applyMiddleware, Store, compose } from "redux";
/**  */
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
/** redux は完全同期型だが、これだとWeb通信できないので、非同期通信を行えるようにするためのミドルウェア */
import thunkMiddleware from "redux-thunk";
/** ActionがDispatchされる前後のstateとDispatchされたActionをロギングするライブラリ */
import { createLogger } from 'redux-logger';
/** サイト全体の状態を宣言する */
import rootReducers from "./rootReducers";


// 永続化の設定(ローカルストレージ)
const persistConfig = {
    key: 'root',
    storage,
}
// 永続化設定されたReducerとして定義
const persistedReducer = persistReducer(persistConfig, rootReducers)

/** logger初期化 */
const logger = createLogger({
    diff: true,
    collapsed: true,
})

/** 状態管理を構築 */
const store: Store = createStore(persistedReducer, applyMiddleware(
    thunkMiddleware,    // Dispatch に非同期をサポートさせる
    logger              // 非同期ロギング
));
store.subscribe(async () => {

});
export const persistor = persistStore(store);
export default store;