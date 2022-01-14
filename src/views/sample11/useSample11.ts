export function useSample11() {

    const action1 = () => {
        alert("1");
    };

    const action2 = () => {
        alert("2");
    };

    const action3 = () => {
        privateFunction()
    };

    return { action1, action2, action3 };
}

function privateFunction() {
    alert("3(private)");
}
