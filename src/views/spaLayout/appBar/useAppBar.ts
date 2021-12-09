import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { waitSite } from "../../../store/overlay/action";
import { useHistory } from "react-router-dom";
import { updateDrawer } from "../../../store/drawer/action";

export function useAppBar() {
  // 画面間で現在の画面タイトルのステートを共有する
  const layout = useSelector((state) => state.title);

  // react における URL 遷移管理
  const history = useHistory();
  const dispatch = useDispatch();

  // ドロワーが開いているか、閉じているかの状態を取得
  const drawer = useSelector((state) => state.drawer);
  // ドロワーの状態を反転させる
  const toggleDrawer = () => {
    dispatch(updateDrawer(!drawer.open));
  };

  // この関数内でステートを管理する
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // loading の状態が変われば、動作する関数
    // くるくるを出す
    dispatch(waitSite(loading));
  }, [loading]);
  // 画面の再読み込み関数の定義
  const reloadAsync = async () => {
    try {
      setLoading(true);
      history.push("/");
    } finally {
      setLoading(false);
    }
  };

  return { reloadAsync, title: layout.title, toggleDrawer };
}
