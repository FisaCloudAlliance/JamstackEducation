export interface IOverlay {
    /** サイト全体にwaiting overlayをかける */
    openWaitingSite: boolean;
}


export const initialOverlay: IOverlay = {
    openWaitingSite: false,
};
