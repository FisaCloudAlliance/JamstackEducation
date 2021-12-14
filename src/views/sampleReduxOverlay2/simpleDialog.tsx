import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { validateState } from "../../hooks/useValidatedState";
import { useSimpleDialog } from "./useSimpleDialog";

/** この関数型UIコンポーネントへの引数を示す */
type Props = {
  open: boolean;
  close: () => void;
  okAction: () => void;
  title: validateState;
  description: validateState;
};

/**
 * こちらのダイアログのサンプルは
 * https://mui.com/components/dialogs/#main-content
 * をご参照ください
 * また、コンポーネントへの引数の設定は、index.tsx で <SimpleDialog open= 
 * の用に、タグの属性として利用できる。
 * 関数をHTMLのタグの用に使うので、引数も タグの属性のようにして設定する
 * @param props　この関数型UIコンポーネントへの引数を示す
 * @returns
 */
const SimpleDialog: React.FC<Props> = (props) => {
  return (
    <Dialog open={props.open} onClose={() => props.close()}>
      <DialogTitle>アイテムを追加します</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          label="タイトル"
          type="text"
          fullWidth
          variant="standard"
          sx={{ height: "65px" }}
          InputLabelProps={{ shrink: true }}
          value={props.title.state}
          onChange={(e) => props.title.onChange(e.target.value)}
          error={props.title.hasError}
          helperText={props.title.errorMessage}
        />
        <TextField
          margin="dense"
          label="本文"
          type="text"
          fullWidth
          variant="standard"
          multiline
          sx={{ height: "65px" }}
          InputLabelProps={{ shrink: true }}
          value={props.description.state}
          onChange={(e) => props.description.onChange(e.target.value)}
          error={props.description.hasError}
          helperText={props.description.errorMessage}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.close()}>キャンセル</Button>
        <Button onClick={() => props.okAction()}>追加</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SimpleDialog;
