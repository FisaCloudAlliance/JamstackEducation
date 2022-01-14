export function useSample11() {
  // この場で、一つ関数を作成し、const で宣言した変数（action1）に格納する
  const action1 = () => {
    alert("1つ目のボタンが押下されました！");
  };

  const action2 = () => {
    alert("2つ目のボタンが押下されました！！");
  };

  const action3 = () => {
    // 別の関数を呼ぶのも普通に使う
    sampleAction();
  };

  return { action1, action2, sampleAction: action3 };
}

// export 属性がないので、このファイルの中に閉じた関数として宣言している
function sampleAction() {
    alert("3つ目のボタンが押下されました！！！");
  }
  