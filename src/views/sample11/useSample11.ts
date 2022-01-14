export function useSample11() {
  const hello = () => {
    alert("Hello!!");
  };

  const world = () => {
    alert("world!!!");
  };

  const action3 = () => {
    // 別の関数を呼ぶのも普通に使う
    sampleHelloworld();
  };

  // 関数型プログラミングの基本で、様々な振る舞い(関数)や属性(プロパティ)を、このように関数の戻り値で 合成(mix-in)して返すのが大きな特徴です
  // このような関数型mix-inプログラミングは、オブジェクト指向の次の開発標準として今最も最先端なプログラミング・デザイン・パターンとして注目されています
  return { hello, world, sampleHelloworld: action3 };
}

function sampleHelloworld() {
  alert("helloworld!!!");
}
