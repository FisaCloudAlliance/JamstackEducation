export function useSample11() {

    const action1 = () => {
        alert("HELLOボタンが押下されました！");
      };


    const action2 = () => {
        alert("WORLDボタンが押下されました！");
      };


    const action3 = () => {
        alert("HELLO WORLDボタンが押下されました！");
      };

    return { action1, action2,  action3 };
}
