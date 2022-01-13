import { useState } from "react";
import { useWebServiceAsync } from "../../hooks/useWebServiceAsync";

export function useSampleServerAPICall2(){
    const [value, setValue] = useState("");

    // webService を内包したカスタムHooksを利用
    const [loacing, webService] = useWebServiceAsync();
  
    // クリック時の振る舞い関数を定義
    const onClickAsync = async () => {
      const request = { };
      // API を 呼び出して、レスポンスオブジェクトをもらう
      const response = await webService("api/XXXX", request, {
        errorToast: true,
        waitingOverlay: true,
      });
  
      // 戻り値をバインドしている状態にセット
      setValue(`httpStatus: result:`);
    };
  
    return { value, onClickAsync };
}