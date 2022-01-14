export function useSample11() {
    const action1 = () => {
        alert("1つ目のボタンが押下されました！");
    };

    const action2 = () => {
        alert("2つ目のボタンが押下されました！！")
    };

    const action3 = () => {
        sampleAction();
    };

    return{action1, action2, sampleAction: action3};

}

function sampleAction() {
    alert("3つ目のボタンが押下されました！！！")
}
