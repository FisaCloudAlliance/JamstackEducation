import { useState } from "react";
import { useWebServiceAsync } from "../../hooks/useWebServiceAsync";

export function useSampleServerAPICall() {
  const [value, setValue] = useState("");

  // webService を内包したカスタムHooksを利用
  const [loacing, webService] = useWebServiceAsync();

  // クリック時の振る舞い関数を定義
  const onClickAsync = async () => {
    const request = { name: "こんにちわ！" };
    // API を 呼び出して、レスポンスオブジェクトをもらう
    const response = await webService("api/helloWorldAPI", request, {
      errorToast: true,
      waitingOverlay: true,
    });

    // response オブジェクトから、中身をJSON形式で復元して取り出す
    const res: { message: string } = await response.json();

    // 戻り値をバインドしている状態にセット
    setValue(`httpStatus:${response.status} result:${res.message}`);
  };

  return { value, onClickAsync };
}
