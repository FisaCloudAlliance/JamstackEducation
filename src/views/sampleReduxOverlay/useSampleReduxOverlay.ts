import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSleep } from "../../hooks/useSleep";
import { waitSite } from "../../store/overlay/action";

/**
 * sampleReduxOverlay の tsx(外観)に関する振る舞いを実装する
 * react hooks (関数型の振る舞い実装コンポーネント)
 * @returns
 */
export function useSampleReduxOverlay() {
  // sleep 処理をカプセル化した カスタムhooks を利用
  const sleepAsync = useSleep();
  // redux の 更新通知を行う、通知エンジン
  const dispatch = useDispatch();

  // 外観のボタンがクリックされた時の振る舞いをここで定義する
  const onClickAsync = async () => {

    // Redux の 機能を利用して、依存関係がない異なるViewに宣言した
    // 状態に対して、更新通知を投げる
    // ここでは App.tsx で、const overlay = useSelector((x: IRootState) => x.overlay);
    // として redux から サイト全体で共通の状態を持つデータをバインドしているため
    // waitSite(true) を投げると、隠れていた overlay が 表示される
    dispatch(waitSite(true));

    // スリープ処理を内包したカスタムHookを利用し、3秒処理を止める
    await sleepAsync(3 * 1000 /* 3秒スリープする */);

    // くるくる に false を指示し、表示を消す
    dispatch(waitSite(false));
  };

  // このカスタムHooksが返すプロパティや関数をこの場で動的に宣言して返す
  // 関数型プログラミンの mix-in の概念がコレを指す。オブジェクト指向の次の世代のプログラミング手法
  return { onClickAsync };
}
