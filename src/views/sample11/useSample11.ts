export function useSample11() {

    const action1 = () => {
        alert ("１つ目のボタンが押下されました！");
    };

    const action2 = () => {
        alert("２つ目のボタンが押下されました！！");
    };

    const action3 = () => {
        sampleAction(); 
    };
    return {action1, action2, sampleAction: action3};
}

function sampleAction() {
    alert("３つ目のボタンが押下されました！！！");
}

