export function useSample11() {

  // この場で、一つ関数を作成し、const で宣言した変数（action1）に格納する
  const action1 = () => {
    alert("1つ目のボタンが押下されました！★");
  };

  const action2 = () => {
    alert("2つ目のボタンが押下されました！！");
  };

  const action3 = () => {
    // 別の関数を呼ぶのも普通に使う
    sampleAction();
  };

  // 関数型プログラミングの基本で、様々な振る舞い(関数)や属性(プロパティ)を、このように関数の戻り値で 合成(mix-in)して返すのが大きな特徴です
  // このような関数型mix-inプログラミングは、オブジェクト指向の次の開発標準として今最も最先端なプログラミング・デザイン・パターンとして注目されています
  return { action1, action2, sampleAction: action3 };
}


// export 属性がないので、このファイルの中に閉じた関数として宣言している
function sampleAction() {
  alert("3つ目のボタンが押下されました！！！");
}

