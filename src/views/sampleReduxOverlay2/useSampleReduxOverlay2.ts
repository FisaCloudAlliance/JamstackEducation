import { useSelector } from "react-redux";
import { useSimpleDialog } from "./useSimpleDialog";

/**
 * sampleReduxOverlay2.tsx の 振る舞いを宣言する
 * @returns
 */
export function useSampleReduxOverlay2() {
  /** ダイアログの振る舞いをカプセル化したカスタムHooks */
  const dialoContext = useSimpleDialog();

  /** redux の 機能を利用し、永続化出来た上にサイト全体で状態が共有できる store を取得 */
  const store = useSelector((x) => x.cards);

  /** 関数型における mix-in として、このカスタムhooksの戻り値を返す */
  return { dialoContext, cards: store.cards };
}
