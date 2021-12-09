import { IRootState } from './store/rootState';

/** タイトルバーの高さ */
export const appbarHeight = 60;
/** Copylightの高さ */
export const copylight = 40;
/** サイドバーが開いた際のサイズ */
export const drawerWidth = 280;
/** サイドバーが閉じた際のサイズ */
export const drawerMinWidth = 56;

declare module 'react-redux' {
    interface DefaultRootState extends IRootState { }
}

