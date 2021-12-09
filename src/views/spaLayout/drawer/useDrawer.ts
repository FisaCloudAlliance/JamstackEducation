import { useDispatch, useSelector } from "react-redux";
import { updateDrawer } from "../../../store/drawer/action";

/**
 * drawer.tsx が 外観を定義するものに対して
 * useDrawer.ts は その振る舞いを動作する
 *
 * ルールとして use から始まる関数を返す（※厳密なルールで違反するとビルド時にエラーが出る）
 * @returns
 */
export function useDrawer() {
  // 画面全体に渡ってステートを共有する　Redux のストアから drawer に関する情報を取得
  const drawer = useSelector((state) => state.drawer);
  // Diaptch を 利用して redux の状態が変化したことを画面全体に伝播させる
  const dispatch = useDispatch();
  // 閉じる動作の関数を作成し、関数を値として返す（※パフォーマンスを考慮すると useCallbacl などを実装するが、難しくなるので、今はしない）
  const onCloseDrawer = () => {
    dispatch(updateDrawer(false));
  };

  // オブジェクト指向の次の世界の関数型に置けるオブジェクトの生成
  // mix-in の考え方で、この場で状態(プロパティ)や振る舞い（関数）を生成して相手に渡す
  return { open: drawer.open, onCloseDrawer };
}
