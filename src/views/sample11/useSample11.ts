import { useToast } from "../../core/snackbarExtension";

export function useSample11() {
  const toast = useToast();

  const action1 = () => {
    alert("ボタン1が押下されました");
  };

  const action2 = () => {
    toast.Success("ボタン2が押下されました");
  };

  const action3 = () => {
    sampleAction();
  };

  return { action1, action2, sampleAction: action3 };
}

function sampleAction() {
  alert("ボタン3が押下されました");
}
